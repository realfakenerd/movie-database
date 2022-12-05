<script lang="ts">
	import type { PageData } from './$types';
	// import Movie from '$lib/components/MoviePage/Movie.svelte';
	// import TvShowCard from '$lib/components/TvShow/TvShowCard.svelte';
	// import PersonCard from '$lib/components/PersonPage/PersonCard.svelte';

	import { page } from '$app/stores';
	export let data: PageData;
	const { movie} = data;
	
</script>

<ul class=" grid grid-cols-3 gap-5">
	{#if $page.params.type === 'movie'}
		{#each movie as data (data.id)}
			<div class="card">
				<div class="card-body">
					<div class="card-title">{data.title}</div>
				</div>
			</div>
		{/each}
	{/if}
	
</ul>
