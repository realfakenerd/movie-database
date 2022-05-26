/* Defining the interface for the BaseDef. */
export interface BaseDef {
	/* Saying that the id can be a number or a string. */
	id: number | string;
	adult: boolean;
	poster_path: string | null;
	backdrop_path: string | null;
	vote_average: number;
	release_date: string;
	vote_count: number;
	overview: string;
	media_type: 'movie' | 'tv';
	homepage: string | null;
	tagline: string;
	title: string;
}

/* Defining the interface for the Season. */
export interface Season {
	id: number;
	air_date: string;
	episode_count: number;
	name: string;
	original_name: string;
	overview: string;
	poster_path: string;
	season_number: 1;
}

export interface Newtwork {
	id: number;
	logo_path: string;
	name: string;
}

/* Defining the interface for the TvShow. */
export interface TvShow extends BaseDef {
	name: string;
	original_name: string;
	first_air_date: string;
	episode_run_time: number[];
	type: string;
	status: string;
	networks: Newtwork[];
	seasons: Season[];
	reviews: { results: Reviews[] };
}

export interface Person {
	name: string;
	known_for_department: string;
	profile_path: string | null;
	known_for: MovieDef[];
}

export interface MovieDef extends BaseDef {
	title: string;
	reviews: { results: Reviews[] };
	budget: number;
	original_title: string;
	status: Status;
	revenue: number;
	runtime: string;
}

export interface PopDef {
	results: MovieDef[];
}

export interface UpcomingMoviesDate {
	minimum: string;
	maximum: string;
}
export interface UpcomingMoviesRes extends BaseDef {}

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

export interface PopularMovies {
	fanarts: FanartMovie;
	title: string;
	year: number;
	ids: IDS;
}

export interface Fanart {
	movieposter: { url: string }[];
	moviebackground: { url: string }[];
}

export interface FanartMovie {
	movieposter: string;
	moviebackground: string;
}

interface IDS {
	trakt: number;
	slug: string;
	tmdb: number;
}

export type MovieApiNames = 'upcoming' | 'popular' | 'trending';

/* Defining the interface for the Cast. */
interface Cast {
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	cast_id: number;
	credit_id: string;
}

/* Extending the interface Cast. */
export interface Actor extends Cast {
	character: string;
}

/* Extending the interface Cast. */
export interface CrewMember extends Cast {
	job: string;
	department: string;
}

/* Defining the interface for the Credits. */
export interface Credits {
	cast: Cast[];
	crew: CrewMember[];
}
