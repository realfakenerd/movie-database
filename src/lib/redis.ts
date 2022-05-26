import Redis from 'ioredis';

const url =
	'rediss://:d312c9d9023f4e459cdc2156abae8454@eu1-magical-kangaroo-37050.upstash.io:37050';
export const MOVIE_IDS_KEY = 'movie_ids';

/** Return the key used to store movie details for a given ID in Redis */
export function getMovieKey(id): string {
	return `movie:${id}`;
}

export default url ? new Redis(url) : new Redis();
