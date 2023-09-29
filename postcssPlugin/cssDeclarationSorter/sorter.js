export function bubbleSort(list, comparator) {
  let upperIndex = list.length - 1;

  while (upperIndex > 0) {
    let swapIndex = 0;
    let swapped = false; // Introduce a flag to track if any swaps are made in this pass

    for (let i = 0; i < upperIndex; i += 1) {
      if (comparator(list[i], list[i + 1]) > 0) {
        const temp = list[i + 1];
        list[i + 1] = list[i];
        list[i] = temp;
        swapIndex = i;
        swapped = true;
      }
    }

    if (!swapped) {
      break; // If no swaps were made, the list is already sorted
    }

    upperIndex = swapIndex;
  }

  return list;
}

export function quickSort(list, comparator) {
  if (list.length <= 1) {
    return list; // Base case: already sorted or empty list
  }

  const pivotIndex = Math.floor(list.length / 2);
  const pivot = list[pivotIndex];

  const less = [];
  const greater = [];
  const equal = [];

  for (const element of list) {
    const comparison = comparator(element, pivot);

    if (comparison < 0) {
      less.push(element);
    } else if (comparison > 0) {
      greater.push(element);
    } else {
      equal.push(element);
    }
  }

  return [...quickSort(less, comparator), ...equal, ...quickSort(greater, comparator)];
}
