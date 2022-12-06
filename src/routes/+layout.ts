import type { Config } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, url }) => {
	const res = await fetch('/api/config');
	const resUser = await fetch('/api/user');
	const userData = await resUser.json();
	const data = await res.json();
	return {
		user: userData as UserDetails,
		config: data as Config,
		currentRoute: url.pathname
	};
};
