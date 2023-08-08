import { TMDB_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, params, setHeaders }) => {
	console.log(params.id, `https://api.themoviedb.org/3/collection/${params.id}?api_key=${TMDB_KEY}&language=en-US`)
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`,
	});
	const res = await fetch(
		`https://api.themoviedb.org/3/collection/${params.id}?api_key=${TMDB_KEY}&language=en-US`
	);
	const data = await res.json();

	return json(data);
};
