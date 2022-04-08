import { build } from '$service-worker';

self.addEventListener('install', (event) => {
	event.waitUntil(caches.open('pop_korn_cache').then((cache) => cache.addAll(build)));
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			if (response) {
				//we found an entry in the cache!
				return response;
			}
			return fetch(event.request);
		})
	);
});
