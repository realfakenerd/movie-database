<script lang="ts">
	import type { PageData } from './$types';
	import Movie from '../../../lib/components/cards/Movie.svelte';
	import TV from '$lib/components/cards/TV.svelte';
	import Person from '$lib/components/cards/PersonCard.svelte';

	import { page } from '$app/stores';
	export let data: PageData;
	const { movie, tv, person, config } = data;
</script>

<ul class="grid place-items-center grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 lg:gap-3 lg:grid-cols-3">
	{#if $page.params.type === 'movie'}
		{#each movie.results as data (data.id)}
			<Movie movie={data} images={config.images} />
		{/each}
	{/if}
	{#if $page.params.type === 'tv'}
		{#each tv.results as data (data.id)}
			<TV tv={data} images={config.images} />
		{/each}
	{/if}
	{#if $page.params.type === 'person'}
		{#each person.results as data (data.id)}
			<Person person={data} images={config.images} />
		{/each}
	{/if}
</ul>
