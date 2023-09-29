import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch }) => {
	const upcomingRes = await fetch('/api/movies/upcoming');
	const upcomingData = await upcomingRes.json();
	
	return {
		upcoming: upcomingData as MovieListWithDate,
		streamed: {
			popular: fetch('/api/movies/popular').then((res) => res.json() as Promise<MovieList>),
			nowPlaying: fetch('/api/movies/now_playing').then((res) => res.json() as Promise<MovieList>),
			topRated: fetch('/api/movies/top_rated').then((res) => res.json() as Promise<MovieList>),
		}
	};
};
