import type { LoadInput } from '@sveltejs/kit';

export async function load({ fetch, params }: LoadInput) {
	const urlMovie = '/api/search/movie/' + params.id;
	const urlTv = '/api/search/tv/' + params.id;
	const urlPerson = '/api/search/person/' + params.id;

	const resMovie = await fetch(urlMovie);
	const resTv = await fetch(urlTv);
	const resPerson = await fetch(urlPerson);

	const dataMovie = await resMovie.json();
	const dataTv = await resTv.json();
	const dataPerson = await resPerson.json();

	console.log(params);

	if (resMovie.ok) {
		throw new Error(
			'@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)'
		);
		return {
			props: {
				searchLength: [dataMovie.results.length, dataTv.results.length, dataPerson.results.length]
			},
			stuff: { dataMovie, dataTv, dataPerson }
		};
	}
}
