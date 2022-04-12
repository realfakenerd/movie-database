import { clientsClaim, cacheNames, setCacheNameDetails } from 'workbox-core';
import { pageCache, imageCache, googleFontsCache, staticResourceCache } from 'workbox-recipes';
import { version, build, files } from '$service-worker';

clientsClaim();

pageCache({
	cacheName: cacheNames.prefix + 'pages' + cacheNames.suffix
});

setCacheNameDetails({
	prefix: 'popkorn-',
	suffix: `-v${version}`,
	googleFontsCache: 'ga'
});

imageCache({
	cacheName: cacheNames.prefix + 'images' + cacheNames.suffix,
	warmCache: files
});

pageCache({
	cacheName: cacheNames.prefix + 'pages' + cacheNames.suffix
});

googleFontsCache({
	cachePrefix: cacheNames.googleAnalytics
});

staticResourceCache({
	cacheName: cacheNames.prefix + 'assets' + cacheNames.suffix,
	warmCache: build
});
