<script lang="ts">
	import type { MovieVideo } from '$lib/types';
	import Video from './Video.svelte';
	export let videos: MovieVideo[];
	let currentItems = 5;
</script>

<section class="carousel carousel-center rounded-box w-full space-x-4 bg-neutral p-4">
	{#each videos.slice(0, currentItems) as video (video.key)}
		<Video {video} />
	{/each}
</section>
<div class="flex w-full justify-center gap-2 py-2">
	{#each videos.slice(0, currentItems) as video, index (video.key)}
		<a href={'#' + video.key} class="btn btn-xs">{index + 1}</a>
	{/each}
	{#if videos.length >= currentItems}
		<button class="btn btn-xs" on:click={() => (currentItems += 5)}> ... </button>
	{/if}
</div>
