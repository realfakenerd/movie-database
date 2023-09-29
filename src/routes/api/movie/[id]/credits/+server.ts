import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { ACCESS_TOKEN_AUTH } from '$env/static/private';

export const GET: RequestHandler = async ({ fetch, params, setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	const url = `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US`;
	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`
		}
	});
	const data = await res.json();
	return json(data);
};
