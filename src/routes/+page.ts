import type { Popular, Upcoming } from '$lib/types/movies';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch }) => {
	const popRes = await fetch('/api/movies/popular');
	const upcomingRes = await fetch('/api/movies/upcoming');
	const upcomingData = await upcomingRes.json();
	const popData = await popRes.json();
	return {
		popular: popData as Popular,
		upcoming: upcomingData as Upcoming
	};
};
