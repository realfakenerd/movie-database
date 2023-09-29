import { load } from '$lib/utils';
import { writable } from 'svelte/store';

export const popular = writable<MovieDef[]>([]);

let loaded = false;

/**
 * It fetches the popular movies from the API and sets the popular movies state
 * @returns the data from the fetch request.
 */
export const fetchPopular = async () => {
	if (loaded) return;
	try {
		const res = await fetch('/api/movies/popular');
		const data = await res.json();
		loaded = true;
		popular.set(data);
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

export async function fetchCredits(type: string, id: string): Promise<{ data: Credits }> {
	try {
		const data = await load(`/api/${type}/${id}/credits`);
		console.log(data);

		return {
			data
		};
	} catch (err) {}
}
