import { ACCESS_TOKEN_AUTH, TMDB_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, params, setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
	const res = await fetch(url, {
		headers: {
			Authorization:
				`Bearer ${ACCESS_TOKEN_AUTH}`
		}
	});
	const data = await res.json();
	return json(data);
};
