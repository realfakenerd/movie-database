import { TMDB_KEY } from '$env/static/private';
import { load, TMDB_URL } from '$lib/utils';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const url = `${TMDB_URL}/movie/${params.id}?api_key=${TMDB_KEY}&language=en-US&append_to_response=reviews,credits,videos`;
	const data = await load(url);
	return json(data);
};
