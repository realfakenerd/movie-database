import type { MovieDef, Reviews } from '$lib/types';
import { TMDB_URL, load } from '$lib/utils';

export async function get(req) {
	const API_KEY = import.meta.env.VITE_TMDB_KEY;
	const id = req.params.id;
	const url = `${TMDB_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=reviews`;
	try {
		const data = await load<MovieDef>(url);

		const reviews = data.reviews.results.map((val) => {
			const a_d = val.author_details;
			const ret = {
				id: val.id,
				author: val.author,
				content: val.content,
				author_details: {
					avatar_path: a_d.avatar_path,
					rating: a_d.rating
				}
			};
			return ret;
		});

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
			original_title: data.original_title
		};
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
