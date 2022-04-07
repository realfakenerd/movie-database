export interface MovieDef {
	tagline: string;
	backdrop_path: string | null;
	id: number;
	budget: number;
	revenue: number;
	runtime: string;
	title: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	video: boolean;
	vote_count: number;
	release_date: 'string';
	homepage: string | null;
	status: Status;
}

export interface UpcomingMoviesDate {
	minimum: string;
	maximum: string;
}
export interface UpcomingMoviesRes {
	poster_path: string | null;
	overview: string;
	release_date: string;
	id: string;
	original_title: string;
	title: string;
	backdrop_path: string | null;
	popularity: number;
	vote_count: number;
	vote_average: number;
}

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
