import autoprefixer from 'autoprefixer';
import cssDeclarationSorter from 'css-declaration-sorter';
import tailwindcss from 'tailwindcss';
import tailwindcssNested from 'tailwindcss/nesting/index.js';
export default {
	plugins: [
		tailwindcssNested,
		tailwindcss,
		autoprefixer,
		cssDeclarationSorter({
			order: 'concentric-css'
		})
	]
} 