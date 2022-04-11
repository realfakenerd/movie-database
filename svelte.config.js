import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import viteCompression from 'vite-plugin-compression';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		version: {
			name: Date.now().toString().slice(0, 3)
		},
		vite: {
			build: {
				reportCompressedSize: false,
				target: "esnext",
				minify: "terser",
			},
			plugins: [
				ViteWebfontDownload([
					'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'
				]),
				viteCompression({
					algorithm: "brotliCompress",
					threshold: 512,
					compressionOptions: {
						level: 3,
					},
				})
			]
		}
	}
};

export default config;
