import { TMDB_KEY } from '$env/static/private';
import { load } from '$lib/utils';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${TMDB_KEY}&language=en-US&append_to_response=reviews,credits,videos`;
	const data = await load(url);
	return json(data);
};
