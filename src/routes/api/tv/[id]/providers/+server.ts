import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { TMDB_KEY } from '$env/static/private';

export const GET = (async ({ fetch, params }) => {
	const url = `https://api.themoviedb.org/3/tv/${params.id}/watch/providers?api_key=${TMDB_KEY}`;
	const res = await fetch(url);
	const data = await res.json();
	if (data.results.US) return json(data.results['US'] as Provider);
	throw error(404, {message: 'No Provider Found!'});
}) satisfies RequestHandler;
