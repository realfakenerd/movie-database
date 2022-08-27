<script lang="ts" context="module">
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
			return {
				props: {
					searchLength: [dataMovie.results.length, dataTv.results.length, dataPerson.results.length]
				},
				stuff: { dataMovie, dataTv, dataPerson }
			};
		}
	}
</script>

<script lang="ts">
	import Stats from '$lib/components/SearchPage/Stats.svelte';
	export let searchLength: readonly [number, number, number];
</script>

<section class="px-10 py-20">
	<section class="grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-8">
		<div class="col-span-1">
			<Stats {searchLength} />
		</div>
		<slot />
	</section>
</section>
