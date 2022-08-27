import type { PopDef } from '$lib/types';
import { load, switchAPI, TMDB_URL } from '$lib/utils';

/**
 * It takes a request object, gets the type of movie from the request, makes a request to the TMDB API,
 * and returns the result
 * @param req - The request object.
 * @returns an object with a body property.
 */
export async function get(req) {
	const API_KEY = import.meta.env.VITE_TMDB_KEY;
	const type = req.params.type;
	const url = `${TMDB_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`;
	try {
		const data = await load<PopDef>(url);
		const result = switchAPI(type, data);
		return {
			body: result
		};
	} catch (error) {
		throw new Error(error);
	}
}
