import { TMDB_KEY } from '$env/static/private';
import type { MovieSearch } from '$lib/types';
import { TMDB_URL } from '$lib/utils';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, params }) => {
	const query = url.searchParams;
	const searchQuery = query.get('q');
	const page = query.get('page') ?? 1;
	const res = await fetch(
		`${TMDB_URL}/search/${params.type}?api_key=${TMDB_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
	);
	const data = await res.json();
	return json(data);
};
