import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import viteCompression from 'vite-plugin-compression';
import removeConsole from 'vite-plugin-remove-console';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: vercel(),
		version: {
			name: Math.ceil(Math.random() * Date.now())
				.toString()
				.slice(0, 3)
		},
		vite: {
			build: {
				reportCompressedSize: false,
				target: 'esnext',
				minify: 'esbuild'
			},
			plugins: [
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
		}
	}
};

export default config;
