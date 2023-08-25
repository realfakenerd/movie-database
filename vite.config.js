import { sveltekit } from '@sveltejs/kit/vite';
import removeConsole from 'vite-plugin-remove-console';
import viteCompression from 'vite-plugin-compression';
import lightningcss from 'vite-plugin-lightningcss';
/** @type {import('vite').UserConfig} */
const config = {
	define: {
		'process.env': {}
	},
	build: {
		reportCompressedSize: false,
		target: 'esnext',
		minify: 'esbuild'
	},
	plugins: [
		sveltekit(),
		lightningcss({
			browserslist: '>= 1%',
		}),
		removeConsole(),
		viteCompression({
			algorithm: 'brotliCompress',
			verbose: false,
			threshold: 512,
			compressionOptions: {
				level: 3
			}
		})
	]
};

export default config;
