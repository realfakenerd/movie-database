export interface MovieDef {
    backdrop_path: string | null;
    id: number;
    budget: number;
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
}

export interface MovieVideo {
    name: string;
    key: string;
    site: string;
    type: string;
}