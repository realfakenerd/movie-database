import type { Config } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, url }) => {
	const res = await fetch('/api/config');
	const data = await res.json();
	return {
		config: data as Config,
		currentRoute: url.pathname
	};
};
