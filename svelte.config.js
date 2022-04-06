import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import viteCompression from 'vite-plugin-compression';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			build: {
				reportCompressedSize: false,
				target: "esnext",
				minify: "terser",
			},
			plugins: [
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
