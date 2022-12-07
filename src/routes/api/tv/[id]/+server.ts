import { TMDB_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, params }) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/tv/${params.id}?api_key=${TMDB_KEY}&language=en-US&append_to_response=reviews,credits,videos`
	);
	const data = await res.json();

	return json(data);
};
