import type { LoadInput } from '@sveltejs/kit';

throw new Error(
	'@migration task: Migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)'
);
export async function load({ stuff }: LoadInput) {
	// @ts-expect-error
	const { dataMovie, dataTv, dataPerson } = stuff;

	return {
		dataMovie,
		dataTv,
		dataPerson
	};
}
