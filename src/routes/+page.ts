import type { Popular, Upcoming } from '$lib/types/movies';
import { fetchAll } from '$lib/utils';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch }) => {
	const [popRes, upcomingRes] = await fetchAll(fetch('/api/movies/popular'),fetch('/api/movies/upcoming'))
	const upcomingData = await upcomingRes.json();
	const popData = await popRes.json();
	return {
		popular: popData as Popular,
		upcoming: upcomingData as Upcoming
	};
};
