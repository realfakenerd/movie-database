interface MovieSearch {
	page: number;
	results: MovieResult[];
	total_pages: number;
	total_results: number;
}

interface MovieResult {
	adult: boolean;
	backdrop_path: null | string;
	id: number;
	title: string;
	original_language: OriginalLanguage;
	genre_ids: number[];
	overview: string;
	poster_path: string;
	original_title: string;
	popularity: number;
	release_date: Date;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
