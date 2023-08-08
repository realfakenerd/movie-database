import { TMDB_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
export const GET: RequestHandler = async ({ fetch, setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	})
	const res = await fetch('https://api.themoviedb.org/3/configuration?api_key=' + TMDB_KEY);
	return json(await res.json());
};
