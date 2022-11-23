import type { OriginalLanguage } from '.';

export interface Popular {
	page: number;
	results: PopularResult[];
	total_pages: number;
	total_results: number;
}

export interface PopularResult {
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
