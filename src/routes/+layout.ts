import type { Config, UserDetails } from '$lib/types';
import type { LayoutLoad } from './$types';
import { fetchAll } from '$lib/utils';
export const load: LayoutLoad = async ({ fetch, url }) => {
	const [res, resUser] = await fetchAll(fetch('/api/config'), fetch('/api/user'));
	const userData = await resUser.json();
	const data = await res.json();
	return {
		user: userData as UserDetails,
		config: data as Config,
		currentRoute: url.pathname
	};
};

