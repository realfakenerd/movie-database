<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit';

	export async function load({ stuff }: LoadInput) {
		// @ts-expect-error
		const { dataMovie, dataTv, dataPerson } = stuff;

		return {
			props: {
				dataMovie,
				dataTv,
				dataPerson
			}
		};
	}
</script>

<script lang="ts">
	import Movie from '$lib/components/MoviePage/Movie.svelte';
	import { onMount } from 'svelte';

	import { page } from '$app/stores';
	import TvShowCard from '$lib/components/TvShow/TvShowCard.svelte';
	import PersonCard from '$lib/components/PersonPage/PersonCard.svelte';

	export let dataMovie, dataTv, dataPerson;

	onMount(() => {
		document.title = 'Pop Korn ' + $page.params.id;
	});
</script>

<div
	class="col-span-3 grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
>
	{#if $page.params.type === 'movie'}
		{#each dataMovie.results as data (data.id)}
			<Movie movie={data} />
		{/each}
	{/if}
	{#if $page.params.type === 'tv'}
		{#each dataTv.results as data (data.id)}
			<TvShowCard tv={data} />
		{/each}
	{/if}
	{#if $page.params.type === 'person'}
		{#each dataPerson.results as data (data.id)}
			<PersonCard person={data} />
		{/each}
	{/if}
</div>
