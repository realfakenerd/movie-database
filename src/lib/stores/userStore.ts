import { writable } from 'svelte-local-storage-store';

/* Defining the structure of the data that will be stored in the userInfo variable. */
interface User {
	isLogged: boolean;
	email: string;
	name: string;
	age: number;
	id: string;
}

/* Creating a writable store that will be stored in the local storage of the browser. */
export const userInfo = writable<User>('userinfo', null);
