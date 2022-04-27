import { load, TMDB_URL } from '$lib/utils';

export async function get(req) {
	const API_KEY = import.meta.env.VITE_TMDB_KEY;
	const type = req.params.type;
	const q = req.params.query;
	const url = ` ${TMDB_URL}/search/${type}?api_key=${API_KEY}&language=en-US&query=${q}&page=1&include_adult=false`;
	try {
		const data = await load(url);
		console.log(data);
	} catch (error) {
		throw new Error(error);
	}

	return {
		body: {
			param: req
		}
	};
}
