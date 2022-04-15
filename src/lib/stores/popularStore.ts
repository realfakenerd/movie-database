import type { BaseMovieDef, Reviews, MovieDef, PopDef, UpcomingData } from '$lib/types';
import { writable } from 'svelte/store';

const API_KEY = import.meta.env.VITE_API_KEY;
const indexUrl = 'https://api.themoviedb.org/3';

const upcomingUrl = `${indexUrl}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
const popularUrl = `${indexUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const movie = writable<MovieDef>();
export const popular = writable<BaseMovieDef[]>([]);
export const upcoming = writable<UpcomingData[]>([]);
export const reviews = writable<Reviews[]>([]);

let loaded = false;

async function load<T>(url: string): Promise<Awaited<T>> {
	const res = await fetch(url);
	return await res.json();
}

export const fetchPopular = async () => {
	if (loaded) return;
	const data = await load<PopDef>(popularUrl);
	const loadedData = data.results.map((val) => {
		const ret = `{
      "id": "${val.id}",
      "title": "${val.title}",
      "poster_path": "${val.poster_path}",
      "release_date": "${val.release_date}",
      "vote_average": "${val.vote_average}"
    }`;
		return JSON.parse(ret) as BaseMovieDef;
	});
	popular.set(loadedData);
	loaded = true;
};

export const fetchUpcoming = async () => {
	if (loaded) return;
	const data = await load<UpcomingData>(upcomingUrl);
	const loadedData = data.results.map((val) => {
		const ret = `{
      "id": "${val.id}",
      "title": "${val.title}",
      "poster_path": "${val.poster_path}",
      "release_date": "${val.release_date}",
      "backdrop_path": "${val.backdrop_path}"
    }`;
		return JSON.parse(ret) as UpcomingData;
	});
	upcoming.set(loadedData);
	loaded = true;
};

export const fetchMovie = async (id: number) => {
	if (loaded) return;
	const data = await load<MovieDef>(
		`${indexUrl}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=reviews`
	);

	const review = data.reviews.results.map((val) => {
		const a_d = val.author_details;
		const ret = `{
        "id": "${val.id}",
        "author": "${val.author}",
        "content": ${JSON.stringify(val.content)},
        "author_details": {
          "avatar_path": "${a_d.avatar_path}",
          "rating": "${a_d.rating}"
        }
      }`;
		return JSON.parse(ret) as Reviews;
	});

	const mv = `{
      "id": "${data.id}",
      "title": "${data.title}",
      "poster_path": "${data.poster_path}",
      "release_date": "${data.release_date}",
      "backdrop_path": "${data.backdrop_path}",
      "release_date": "${data.release_date}",
      "status": "${data.status}",
      "overview": "${data.overview}",
      "homepage": "${data.homepage}",
      "tagline": "${data.tagline}",
      "budget": "${data.budget}",
      "revenue": "${data.revenue}",
      "vote_average": "${data.vote_average}",
      "runtime": "${data.runtime}",
      "original_title": "${data.original_title}"
    }`;

	console.log(mv);

	movie.set(JSON.parse(mv) as MovieDef);
	reviews.set(review);
	loaded = true;
};
