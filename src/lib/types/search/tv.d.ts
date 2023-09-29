interface TVSearch {
	page: number;
	results: TVResult[];
	total_pages: number;
	total_results: number;
}

interface TVResult {
	backdrop_path: null | string;
	first_air_date?: Date;
	genre_ids: number[];
	id: number;
	name: string;
	origin_country: OriginCountry[];
	original_language: OriginalLanguage;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
}
