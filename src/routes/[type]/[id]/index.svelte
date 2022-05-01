<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit/types/internal';
	export async function load({ fetch, params }: LoadInput) {
		try {
			const res = await fetch('/api/' + params.type + '/' + params.id);
			const data = await res.json();

			console.log(data);

			const details = params.type === 'tv' ? data.tv : data.movie;
			const comments = data.reviews;
			if (res.ok) {
				return {
					props: {
						details,
						comments
					}
				};
			}
		} catch (error) {
			console.log('ERROR', error);
		}
	}
</script>

<script lang="ts">
	import type { Reviews } from '$lib/types';
	import { page } from '$app/stores';
	import TvHero from '$lib/components/TvShow/TvHero.svelte';
	import MovieHero from '$lib/components/MoviePage/MovieHero.svelte';
	export let details;
	export let comments: Reviews[];

	console.log(details);
	console.log(comments);
</script>

{#if $page.params.type === 'tv'}
	<TvHero {details} />
{:else if $page.params.type === 'movie'}
	<MovieHero {details} />
{/if}
