import { TMDB_KEY } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch, cookies }) => {
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
        const session = await res.json();
        if(session.success) {
            cookies.set('session', session.session_id, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 30
            })

            throw redirect(307, '/profile')
        }
	}

	
	
};
