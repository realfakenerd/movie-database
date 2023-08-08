import type { MovieSearch, PersonSearch, TVSearch } from '$lib/types/search';
import type { LayoutLoad } from './$types';
import { fetchAll } from '$lib/utils';
export const load: LayoutLoad = async ({ url, fetch }) => {
	const query = url.searchParams;
	const searchQuery = query.get('q');
	const resultPage = query.get('page') ?? 1;
	const [movieRes, tvRes, personRes] = await fetchAll(
		fetch(`/api/search/movie?q=${searchQuery}&page=${resultPage}`),
		fetch(`/api/search/tv?q=${searchQuery}&page=${resultPage}`),
		fetch(`/api/search/person?q=${searchQuery}&page=${resultPage}`)
	);

	return {
		searchData: {
			movie: (await movieRes.json()) as MovieSearch,
			tv: (await tvRes.json()) as TVSearch,
			person: (await personRes.json()) as PersonSearch
		},
		query: searchQuery
	};
};
