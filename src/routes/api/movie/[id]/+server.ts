import type { MovieDef } from '$lib/types';
import { TMDB_URL, load, parseMd } from '$lib/utils';

/**
 * We're getting the movie data from the TMDB API and returning it to the frontend
 * @param req - The request object.
 * @returns The movie and reviews data.
 */
export async function GET(req) {
	const API_KEY = import.meta.env.VITE_TMDB_KEY;
	const id = req.params.id;
	const url = `${TMDB_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=reviews`;
	try {
		/* Using the `load` function to get the data from the url. */
		const data = await load<MovieDef>(url);

		/* Mapping the reviews to a new array. */
		const reviews = data.reviews.results.map((val) => {
			const a_d = val.author_details;
			const ret = {
				id: val.id,
				author: val.author,
				content: parseMd(val.content),
				author_details: {
					avatar_path: a_d.avatar_path,
					rating: a_d.rating
				}
			};
			return ret;
		});

		/* Creating a new object with the same properties as the `MovieDef` type. */
		const movie: Partial<MovieDef> = {
			id: data.id,
			title: data.title,
			poster_path: data.poster_path,
			release_date: data.release_date,
			backdrop_path: data.backdrop_path,
			status: data.status,
			overview: data.overview,
			homepage: data.homepage,
			tagline: data.tagline,
			budget: data.budget,
			revenue: data.revenue,
			vote_average: data.vote_average,
			runtime: data.runtime,
			original_title: data.original_title,
			vote_count: data.vote_count
		};

		/* Returning the movie and reviews data to the frontend. */
		return {
			body: {
				movie,
				reviews
			}
		};
	} catch (error) {
		throw new Error(error);
	}
}
