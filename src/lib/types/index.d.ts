interface RequestToken {
	success: boolean;
	expires_at: string;
	request_token: string;
}

interface Collection {
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	backdrop_path: string;
	parts: Part[];
}

interface Part {
	adult: boolean;
	backdrop_path: null | string;
	id: number;
	title: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: string;
	genre_ids: number[];
	popularity: number;
	release_date: Date;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

interface Config {
	images: Images;
	change_keys: [
		'adult',
		'air_date',
		'also_known_as',
		'alternative_titles',
		'biography',
		'birthday',
		'budget',
		'cast',
		'certifications',
		'character_names',
		'created_by',
		'crew',
		'deathday',
		'episode',
		'episode_number',
		'episode_run_time',
		'freebase_id',
		'freebase_mid',
		'general',
		'genres',
		'guest_stars',
		'homepage',
		'images',
		'imdb_id',
		'languages',
		'name',
		'network',
		'origin_country',
		'original_name',
		'original_title',
		'overview',
		'parts',
		'place_of_birth',
		'plot_keywords',
		'production_code',
		'production_companies',
		'production_countries',
		'releases',
		'revenue',
		'runtime',
		'season',
		'season_number',
		'season_regular',
		'spoken_languages',
		'status',
		'tagline',
		'title',
		'translations',
		'tvdb_id',
		'tvrage_id',
		'type',
		'video',
		'videos'
	];
}

interface Images {
	base_url: string;
	secure_base_url: string;
	backdrop_sizes: ['w300', 'w780', 'w1280', 'original'];
	logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'];
	poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'];
	profile_sizes: ['w45', 'w185', 'h632', 'original'];
	still_sizes: ['w92', 'w185', 'w300', 'original'];
}

interface UserDetails {
	avatar: Avatar;
	id: number;
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	include_adult: boolean;
	username: string;
}

interface Avatar {
	gravatar: Gravatar;
	tmdb: Tmdb;
}

interface Gravatar {
	hash: string;
}

interface Tmdb {
	avatar_path: null;
}

declare enum OriginalLanguage {
	En = 'en',
	Ja = 'ja',
	Ko = 'ko',
	Vi = 'vi'
}

interface Provider {
	link: string;
	buy?: ProviderData[];
	ads?: ProviderData[];
	flatrate?: ProviderData[];
	rent?: ProviderData[];
}

interface ProviderData {
	logo_path: string;
	provider_id: number;
	provider_name: string;
	display_priority: number;
}
