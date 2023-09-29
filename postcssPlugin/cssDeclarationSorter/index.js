import { LRUCache } from 'lru-cache';
import { ccp as concentricCssOrder } from './orders/index.js';
import { shorthandData } from './shorthand-data.js';
import { quickSort } from './sorter.js';
const cache = new LRUCache({ max: 1024 })

/** @type {import('postcss').PluginCreator<import('./lib.js').CSSDeclarationSorterDef>} */
export const cssDeclarationSorter = ({ order = 'concentric-css', keepOverrides = false } = {}) => ({
  postcssPlugin: 'css-declaration-sorter',
  OnceExit(css) {
    let withKeepOverrides = (comparator) => comparator;
    if (keepOverrides) {
      withKeepOverrides = withOverridesComparator(shorthandData);
    }

    if (typeof order === 'function') {
      return processCss({ css, comparator: withKeepOverrides(order) });
    }

    processCss({ css, comparator: withKeepOverrides(orderComparator(concentricCssOrder)) });
  }
});

cssDeclarationSorter.postcss = true;

// Kept for backward compatibility
export default cssDeclarationSorter;

function processCss({ css, comparator }) {
  const changes = [];
  const rulesToSort = [];

  css.walk((node) => {
    const nodes = node.nodes;
    const type = node.type;

    if (type === 'comment') {
      const isNewlineNode = node.raws.before && node.raws.before.includes('\n');
      const lastNewlineNode = isNewlineNode && !node.next();
      const onlyNode = !node.prev() && !node.next() || !node.parent;

      if (lastNewlineNode || onlyNode || node.parent.type === 'root') {
        return;
      }

      if (isNewlineNode) {
        const pairedNode = node.next() || node.prev();
        if (pairedNode) {
          changes.push({
            action: 'remove',
            node: node,
          });
        }
      } else {
        const pairedNode = node.prev() || node.next();
        if (pairedNode) {
          changes.push({
            action: 'add',
            commentNode: node,
            pairedNode: pairedNode,
            insertPosition: 'After',
          });
        }
      }
      return;
    }

    const isRule = (type === 'rule' || type === 'atrule') && nodes && nodes.length > 1;
    if (isRule) {
      const isRuleWithDecls = nodes.some(n => n.type === 'decl')
      if (isRuleWithDecls) {
        rulesToSort.push(nodes);
      }
    }
  });

  // Apply the accumulated changes

  for (const change of changes) {
    if (change.action === 'remove') {
      change.node.remove();
    }
  }

  // Perform a sort once all comment nodes are removed
  rulesToSort.forEach(nodes => {
    sortCssDeclarations({ nodes, comparator });
  });

  // Add comments back to the nodes they are paired with
  for (const change of changes) {
    if (change.action === 'add') {
      change.pairedNode.parent && change.pairedNode.parent['insert' + change.insertPosition](change.pairedNode, change.commentNode);
    }
  }
}



function sortCssDeclarations({ nodes, comparator }) {
  quickSort(nodes, (a, b) => {
    if (a.type === 'decl' && b.type === 'decl') {
      return comparator(a.prop, b.prop);
    } else {
      return compareDifferentType(a, b);
    }
  });
}

function withOverridesComparator(shorthandData) {
  return function (comparator) {
    return function (a, b) {
      const aClean = getCachedResult(a);
      const bClean = getCachedResult(b);

      const aHasShorthandData = shorthandData[aClean];
      const bHasShorthandData = shorthandData[bClean];

      if (aHasShorthandData && aHasShorthandData.includes(bClean)) return 0;
      if (bHasShorthandData && bHasShorthandData.includes(aClean)) return 0;

      return comparator(aClean, bClean);
    };
  };
}

function getCachedResult(input) {
  if (cache.has(input)) {
    return cache.get(input);
  }
  const result = removeVendorPrefix(input);
  cache.set(input, result);
  return result;
}


function orderComparator(order) {
  return function (a, b) {
    const indexOfA = order.indexOf(a);
    const indexOfB = order.indexOf(b);
    return indexOfA - indexOfB;
  };
}

/**
 * @param {{ type: string; }} a
 * @param {{ type: string; }} b
 */
function compareDifferentType(a, b) {
  if (b.type === 'atrule' || a.type === 'atrule') {
    return 0;
  }

  return a.type === 'decl' ? -1 : b.type === 'decl' ? 1 : 0;
}

/**
 * @param {string} property
 */
function removeVendorPrefix(property) {
  return property.replace(/^-\w+-/, '');
}