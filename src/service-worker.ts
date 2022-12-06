import { clientsClaim, cacheNames, setCacheNameDetails } from 'workbox-core';
import { pageCache, googleFontsCache, staticResourceCache } from 'workbox-recipes';
import { version, build } from '$service-worker';

clientsClaim();

pageCache({
	cacheName: cacheNames.prefix + 'pages' + cacheNames.suffix
});

setCacheNameDetails({
	prefix: 'popkorn-',
	suffix: `-v${version}`,
	googleFontsCache: 'ga'
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
