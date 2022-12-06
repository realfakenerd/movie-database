/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	interface Locals {
		user: UserDetails;
	}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
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
