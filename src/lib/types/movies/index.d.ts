interface MovieListWithDate {
	dates: Dates;
	page: number;
	results: MovieListResults[];
	total_pages: number;
	total_results: number;
}

interface Dates {
	maximum: Date;
	minimum: Date;
}

interface MovieList {
	page: number;
	results: MovieListResults[];
	total_pages: number;
	total_results: number;
}

interface MovieListResults {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: OriginalLanguage;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}