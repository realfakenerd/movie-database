import { TMDB_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, params }) => {
	const query = url.searchParams;
	const searchQuery = query.get('q');
	const page = query.get('page') ?? 1;
	const res = await fetch(
		`https://api.themoviedb.org/3/search/${params.type}?api_key=${TMDB_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
	);
	const data = await res.json();
	return json(data);
};
