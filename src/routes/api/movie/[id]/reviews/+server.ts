import { TMDB_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, params, setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`,
	});
	const url = `https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=${TMDB_KEY}&language=en-US&page=1`;
	const res = await fetch(url);
	const data = await res.json();
	return json(data);
};
