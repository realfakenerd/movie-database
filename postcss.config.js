import { cssDeclarationSorter } from './postcssPlugin/cssDeclarationSorter/index.js';
import tailwindcss from 'tailwindcss';
import tailwindcssNested from 'tailwindcss/nesting/index.js';



export default {
	plugins: [
		tailwindcssNested,
		tailwindcss,
		cssDeclarationSorter(),
	]
} 