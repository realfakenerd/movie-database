<script lang="ts">
	import type { Collection, Config, Movie } from '$lib/types';
	import { getImagePath } from '$lib/utils';
	export let src: Movie;
	export let config: Config;
	export let collection: Promise<Collection>;
</script>

<section class="flex w-full flex-col gap-4">
	<div class="max-w-xl space-y-2">
		<div>
			<h1 class="text-title-large text-on-primary-container">
				{src.title} ({src.release_date.split('-')[0]})
			</h1>
			<h2 class="text-headline-medium">{src.tagline}</h2>

			<div class="flex flex-row flex-wrap items-center gap-2 text-label-medium">
				<ul class="flex flex-row gap-x-2">
					{#each src.genres as { name, id } (id)}
						<li class="rounded-lg bg-surface-variant p-1 text-on-surface-variant">
							<p>{name}</p>
						</li>
					{/each}
				</ul>

				<span class="rounded-lg bg-surface-variant p-1 text-on-surface-variant">
					{src.runtime || 90}m
				</span>
			</div>
		</div>
	</div>
	<div class="max-w-xl">
		<h1 class="text-title-medium">Overview</h1>
		<p class="text-body-medium">{src.overview}</p>
		<a class="text-label-large underline" href={src.homepage}>Homepage</a>
	</div>
</section>

<style>
	.partslist > li:last-child span {
		opacity: 0;
	}
</style>
