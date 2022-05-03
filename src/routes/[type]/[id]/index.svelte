<script lang="ts">
	import type { MovieDef, Reviews, TvShow } from '$lib/types';
	import { page } from '$app/stores';
	import TvHero from '$lib/components/TvShow/TvHero.svelte';
	import MovieHero from '$lib/components/MoviePage/MovieHero.svelte';
	import { fetchDetails } from '$lib/stores/movieStore';
	import IndexSkeleton from '$lib/components/IndexSkeleton.svelte';
	import MovieStats from '$lib/components/MoviePage/MovieStats.svelte';
	import Comments from '$lib/components/MoviePage/Comments.svelte';
</script>

{#await fetchDetails($page.params.type, $page.params.id)}
	<IndexSkeleton />
{:then { details, comments }}
	{#if $page.params.type === 'tv'}
		<TvHero {details} />
	{:else if $page.params.type === 'movie'}
		<MovieHero {details} />
		<MovieStats budget={details.budget} releaseDate={details.release_date} movieDetails={details} />
		<Comments
			movieComents={comments}
			totalRating={details.vote_count}
			movieRating={details.vote_average}
		/>
	{/if}
{/await}
