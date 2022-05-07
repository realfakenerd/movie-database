import { load, TMDB_URL } from '$lib/utils';

export async function get(req) {
	const API_KEY = import.meta.env.VITE_TMDB_KEY;
	const id = req.params.id;
	const data = await load(`${TMDB_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
	return {
		body: data
	};
}
