import { writable } from 'svelte-local-storage-store';

/* Creating a writable store. */
export const searchVal = writable('searchVal', '');
