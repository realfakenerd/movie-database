import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { searchData } = await parent();

	return {
		movie: searchData.movie,
		tv: searchData.tv,
		person: searchData.person
	};
};
