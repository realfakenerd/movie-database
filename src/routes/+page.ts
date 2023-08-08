import type { Popular, Upcoming } from '$lib/types/movies';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch }) => {
	const upcomingRes = await fetch('/api/movies/popular');
	const upcomingData = await upcomingRes.json();
	return {
		upcoming: upcomingData as Upcoming,
		streamed: {
			popular: fetch('/api/movies/popular').then((res) => res.json() as Promise<Popular>)
		}
	};
};
