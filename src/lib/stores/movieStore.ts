import type { MovieDef, Reviews, TvShow } from '$lib/types';
import { load } from '$lib/utils';
import { writable } from 'svelte/store';

export const popularMovies = writable<MovieDef[]>([]);

export const fetchPopular = async () => {
	try {
		const res = await fetch('/api/movies/popular');
		const data = await res.json();
		return data.result;
	} catch (error) {}
};

export async function fetchDetails(
	type: string,
	id: string
): Promise<{ details: MovieDef | TvShow; comments: Reviews }> {
	try {
		const data = await load(`/api/${type}/${id}`);
		return {
			details: type === 'tv' ? data.tv : data.movie,
			comments: data.reviews
		};
	} catch (error) {
		throw new Error('FETCH DETAILS' + error);
	}
}
