import { TMDB_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch }) => {
	const data = url.searchParams;
	const request_token = data.get('request_token');
	const approved = Boolean(data.get('approved'));
	if (approved) {
		const res = await fetch(
			`https://api.themoviedb.org/3/authentication/session/new?api_key=${TMDB_KEY}`,
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					request_token: request_token
				})
			}
		);

		console.log('token', await res.json());
	}
};
