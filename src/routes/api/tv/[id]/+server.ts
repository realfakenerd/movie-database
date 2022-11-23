import type { MovieDef, TvShow } from '$lib/types';
import { load, parseMd, TMDB_URL } from '$lib/utils';

export async function GET(req) {
	const API_KEY = import.meta.env.VITE_TMDB_KEY;
	const id = req.params.id;
	const url = `${TMDB_URL}/tv/${id}?api_key=${API_KEY}&language=en-US&append_to_response=reviews`;

	try {
		const data = await load<TvShow>(url);

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

		const tv: Partial<TvShow> = {
			id: data.id,
			name: data.name,
			type: data.type,
			status: data.status,
			seasons: data.seasons,
			tagline: data.tagline,
			overview: data.overview,
			homepage: data.homepage,
			networks: data.networks,
			vote_count: data.vote_count,
			poster_path: data.poster_path,
			vote_average: data.vote_average,
			release_date: data.release_date,
			backdrop_path: data.backdrop_path,
			original_name: data.original_name,
			first_air_date: data.first_air_date,
			episode_run_time: data.episode_run_time
		};

		return {
			body: {
				reviews,
				tv
			}
		};
	} catch (error) {}
}
