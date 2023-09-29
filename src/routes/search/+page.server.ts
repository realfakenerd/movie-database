import { capitalize } from '$lib/utils';
import type { Actions, PageServerLoad } from './$types';

export const actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();
		const query = formData.get('q');
		const res = await fetch(`/api/search/multi?q=${query}`);
		const data = (await res.json()) as Search.Multi;

		return {
			query: capitalize(query as string),
			data
		};
	}
} satisfies Actions;

export const load = (async ({ url, fetch }) => {
	const query = url.searchParams.get('q');

	return {
		streamed: {
			movie: fetch(`/api/search/movie?q=${query}`).then((r) => r.json() as Promise<Search.Multi>),
			tv: fetch(`/api/search/tv?q=${query}`).then((r) => r.json() as Promise<Search.Multi>),
			person: fetch(`/api/search/person?q=${query}`).then((r) => r.json() as Promise<Search.Multi>)
		}
	};
}) satisfies PageServerLoad;
