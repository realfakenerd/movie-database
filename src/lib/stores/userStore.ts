import { writable } from 'svelte-local-storage-store';

interface User {
	isLogged: boolean;
	email: string;
	name: string;
	age: number;
	id: string;
}

export const userInfo = writable('userinfo', null);
