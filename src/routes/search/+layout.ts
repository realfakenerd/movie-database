import type { MovieSearch, PersonSearch, TVSearch } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url, fetch }) => {
	const query = url.searchParams;
	const searchQuery = query.get('q');
	const resultPage = query.get('page') ?? 1;
	const [movieRes, tvRes, personRes] = await Promise.all([
		await fetch(`/api/search/movie?q=${searchQuery}&page=${resultPage}`),
		await fetch(`/api/search/tv?q=${searchQuery}&page=${resultPage}`),
		await fetch(`/api/search/person?q=${searchQuery}&page=${resultPage}`)
	]);

	return {
		searchData: {
			movie: (await movieRes.json()) as MovieSearch,
			tv: (await tvRes.json()) as TVSearch,
			person: (await personRes.json()) as PersonSearch
		}
	};
};
