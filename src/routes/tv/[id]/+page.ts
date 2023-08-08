import type { Credits, Reviews, Tv } from '$lib/types/tv';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ params, fetch, setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=${60 * 60}, s-maxage=${60 * 60 * 24}`
	});
	const res = await fetch(`/api/tv/${params.id}`);
	const data = (await res.json()) as Tv;
	return {
		tv: data,
		streamed: {
			credits: fetch(`/api/tv/${params.id}/credits`).then((r) => r.json() as Promise<Credits>),
			reviews: fetch(`/api/tv/${params.id}/reviews`).then((r) => r.json() as Promise<Reviews>)
		}
	};
};
