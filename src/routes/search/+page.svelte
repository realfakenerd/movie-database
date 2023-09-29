<script lang="ts">
	import { SearchCard } from '$lib/components/cards';
	import Icon from '@iconify/svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	const { config, streamed } = data;

	// console.log(form.data.results);
</script>

<svelte:head>
	<title>Results - {form.query}</title>
</svelte:head>

<section class="flex flex-col gap-3 px-4 py-5 md:py-24">
	<div class="flex flex-col">
		<h1 class="text-headline-large">
			Search results for <span class="text-primary">{form.query}</span>
		</h1>
		<ul class="inline-flex gap-2">
			<li>
				<div class="chips items-center">
					<div class="chips-content text-label-large">
						<span>movies</span>

						{#await streamed.movie}
							<Icon icon="line-md:loading-twotone-loop" />
						{:then value}
							{value.total_results}
						{/await}
					</div>
				</div>
			</li>
			<li>
				<div class="chips items-center">
					<div class="chips-content text-label-large">
						<span>tv shows</span>
						{#await streamed.tv}
							<Icon icon="line-md:loading-twotone-loop" />
						{:then value}
							{value.total_results}
						{/await}
					</div>
				</div>
			</li>
			<li>
				<div class="chips items-center">
					<div class="chips-content text-label-large">
						<span>people</span>
						{#await streamed.person}
							<Icon icon="line-md:loading-twotone-loop" />
						{:then value}
							{value.total_results}
						{/await}
					</div>
				</div>
			</li>
		</ul>
	</div>
	<ul class="grid gap-2">
		{#each form.data.results as result}
			{#if result.overview}
				<li>
					<SearchCard
						href={`/${result.media_type}/${result.id}`}
						{config}
						poster_path={result.poster_path}
						release_date={result.release_date || result.first_air_date}
						title={result.title || result.name}
						vote_average={result.vote_average}
						overview={result.overview}
						media_type={result.media_type}
					/>
				</li>
			{/if}
		{/each}
	</ul>
</section>

<style>
	ul.grid {
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	}
</style>
