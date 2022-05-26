<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';
	export async function load({ params, fetch }: LoadInput) {
		try {
			const res = await fetch(`/api/${params.type}/${params.id}`);
			const data = await res.json();

			const dataType = params.type === 'movie' ? data.movie : data.tv;
			console.log(dataType);

			return {
				props: {
					data: dataType
				}
			};
		} catch (e) {
			throw new Error(e);
		}
	}
</script>

<script lang="ts">
	import PagesHeroe from '$lib/components/Pages/PagesHeroe.svelte';
	export let data;
</script>

<PagesHeroe details={data} />
<!-- {#if $page.params.type === 'movie'}
	<MovieStats budget={data.budget} releaseDate={data.release_date} movieDetails={data} />
{/if} -->
