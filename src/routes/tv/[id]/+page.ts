import type { Tv } from '$lib/types/tv';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch(`/api/tv/${params.id}`);
	const data = await res.json();
	return {
		tv: data as Tv
	};
};
