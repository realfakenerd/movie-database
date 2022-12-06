import { TMDB_KEY } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');

	if (!session) {
		return await resolve(event);
	}

	const res = await event.fetch(
		`https://api.themoviedb.org/3/account?api_key=${TMDB_KEY}&session_id=${session}`
	);
	const user = await res.json();
	

    event.locals.user = user

	return await resolve(event);
};
