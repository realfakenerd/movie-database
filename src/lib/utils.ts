import type { BaseMovieDef, MovieApiNames, PopDef } from './types';

export const TMDB_URL = 'https://api.themoviedb.org/3';

export function formatDate(dateStr: string) {
	const d = dateStr.split('-');
	if (!d.includes('')) {
		const date = new Date(Date.UTC(parseInt(d[0]), parseInt(d[1]), parseInt(d[2]) + 1));
		const dateFormated = new Intl.DateTimeFormat('en-Us').format(date);
		return dateFormated;
	} else return 'no release date yet';
}
export const formatNumberToMoney = (num: number) =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(num);

export function random(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function load<T>(url: string): Promise<Awaited<T>> {
	const res = await fetch(url);
	return await res.json();
}

export function switchAPI(api: MovieApiNames, apiData: PopDef) {
	switch (api) {
		case 'popular':
			return apiData.results.map((val) => {
				const ret = {
					id: val.id,
					title: val.title,
					poster_path: val.poster_path,
					release_date: val.release_date,
					vote_average: val.vote_average
				};
				return ret;
			});
		case 'upcoming':
			return apiData.results.map((val) => {
				const ret = {
					id: val.id,
					title: val.title,
					poster_path: val.poster_path,
					release_date: val.release_date,
					backdrop_path: val.backdrop_path
				};
				return ret;
			});
	}
}
