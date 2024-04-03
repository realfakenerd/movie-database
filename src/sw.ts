import { version } from '$service-worker';
import { cacheNames, setCacheNameDetails } from 'workbox-core';
import { pageCache, staticResourceCache } from 'workbox-recipes';
self.__WB_DISABLE_DEV_LOGS = true;

const {prefix,suffix} = cacheNames

setCacheNameDetails({
	prefix: 'popkorn',
	suffix: `v${version}`,
})

pageCache({
	cacheName: `${prefix}-page-${suffix}`,
});

staticResourceCache({
	cacheName: `${prefix}-static-${suffix}`,
});
