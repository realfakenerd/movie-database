export interface BaseMovieDef {
	id: number;
	title: string;
	poster_path: string | null;
	backdrop_path: string | null;
	vote_average: number;
	release_date: string;
	vote_count: number;
	overview: string;
	original_title: string;
}

export interface MovieDef extends BaseMovieDef {
	reviews: { results: Reviews[] };
	budget: number;
	original_title: string;
	status: Status;
	homepage: string | null;
	tagline: string;
	revenue: number;
	runtime: string;
}

export interface PopDef {
	results: BaseMovieDef[];
}

export interface UpcomingMoviesDate {
	minimum: string;
	maximum: string;
}
export interface UpcomingMoviesRes extends BaseMovieDef {}

export type UpcomingData = {
	dates: UpcomingMoviesDate;
	results: UpcomingMoviesRes[];
};

type Status = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';

export interface MovieVideo {
	name: string;
	key: string;
	site: string;
	type: string;
}

export interface Reviews {
	author: string;
	author_details: AuthorDetails;
	content: string;
	created_at: string;
	url: string;
	id: number;
}

interface AuthorDetails {
	name: string;
	username: string;
	avatar_path: string | null;
	rating: number | null;
}
