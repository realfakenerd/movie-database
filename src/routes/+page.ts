import type { LoadInput } from '@sveltejs/kit';
export async function load({ fetch }: LoadInput) {
	try {
		const popRes = await fetch('/api/movies/popular');
		const upcomingRes = await fetch('/api/movies/upcoming');
		const upcomingData = await upcomingRes.json();
		const popData = await popRes.json();
		if (upcomingRes.ok) {
			return {
				popular: popData,
				upcoming: upcomingData
			};
		}
	} catch (error) {
		throw new Error(error);
	}
}
