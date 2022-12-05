import type { OriginalLanguage } from ".";

export interface PersonSearch {
    page:          number;
    results:       PersonResult[];
    total_pages:   number;
    total_results: number;
}

export interface PersonResult {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for:            KnownFor[];
    known_for_department: string;
    name:                 string;
    popularity:           number;
    profile_path:         null | string;
}

export interface KnownFor {
    adult?:            boolean;
    backdrop_path?:    string;
    genre_ids:         number[];
    id:                number;
    media_type:        MediaType;
    original_language: OriginalLanguage;
    original_title?:   string;
    overview:          string;
    poster_path?:      string;
    release_date?:     string;
    title?:            string;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    first_air_date?:   Date;
    name?:             string;
    origin_country?:   string[];
    original_name?:    string;
}

export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

