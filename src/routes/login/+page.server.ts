import { TMDB_KEY } from '$env/static/private';
import type { RequestToken } from '$lib/types';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const resToken = await fetch(
		`https://api.themoviedb.org/3/authentication/token/new?api_key=${TMDB_KEY}`
	);
	const token = (await resToken.json()) as RequestToken;

	if (token.success) {
		throw redirect(
			307,
			`https://www.themoviedb.org/authenticate/${token.request_token}?redirect_to=https://popkorn.vercel.app//approved`
		);
	}
};
