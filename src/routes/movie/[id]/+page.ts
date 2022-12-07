import type { Movie } from '$lib/types';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch(`/api/movie/${params.id}`);
	const data = await res.json();
	return {
		movie: data as Movie
	};
};
