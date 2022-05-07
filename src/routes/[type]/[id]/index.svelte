<script lang="ts">
	import type { MovieDef, Reviews, TvShow } from '$lib/types';
	import { page } from '$app/stores';
	import TvHero from '$lib/components/TvShow/TvHero.svelte';
	import MovieHero from '$lib/components/MoviePage/MovieHero.svelte';
	import { fetchCredits, fetchDetails } from '$lib/stores/movieStore';
	import IndexSkeleton from '$lib/components/IndexSkeleton.svelte';
	import MovieStats from '$lib/components/MoviePage/MovieStats.svelte';
	import Comments from '$lib/components/MoviePage/Comments.svelte';
	import Credits from '$lib/components/utils/Credits.svelte';
</script>

{#await fetchDetails($page.params.type, $page.params.id)}
	<IndexSkeleton />
{:then { details, comments }}
	<MovieHero {details} />
	{#if $page.params.type === 'movie'}
		<MovieStats budget={details.budget} releaseDate={details.release_date} movieDetails={details} />
		{#await fetchCredits($page.params.type, $page.params.id)}
			<div class="">asdasd</div>
		{:then { data }}
			<Credits cast={data.cast} crew={data.crew} />
		{/await}
		<Comments
			movieComents={comments}
			totalRating={details.vote_count}
			movieRating={details.vote_average}
		/>
	{/if}
{:catch err}
	<div class="grid place-items-center">
		<div>
			<h2>Ooops... something is wrong</h2>
			<p>{err}</p>
		</div>
	</div>
{/await}
