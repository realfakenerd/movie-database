import { load, TMDB_URL } from '$lib/utils';

interface Req {
	params: {
		type: string;
		query: string;
	};
}

export async function get({ params }: Req) {
	const API_KEY = import.meta.env.VITE_TMDB_KEY;
	const type = params.type;
	const q = params.query.replace(' ', '%20');
	const url = ` ${TMDB_URL}/search/${type}?api_key=${API_KEY}&language=en-US&query=${q}&page=1&include_adult=false`;
	try {
		const data: any = await load(url);
		return {
			body: data
		};
	} catch (error) {
		throw new Error(error);
	}
}
