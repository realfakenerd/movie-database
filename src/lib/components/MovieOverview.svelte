<script lang="ts">
	import type { Collection, Config, Movie } from '$lib/types';
	import { getImagePath } from '$lib/utils';
	export let src: Movie;
	export let config: Config;
	export let collection: Promise<Collection>;

	console.log(collection);
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

	{#await collection}
		<div class="h-48 bg-surface-variant rounded-xl" />
	{:then coll}
		<div
			class="relative rounded-xl p-4 flex flex-col gap-3 h-48 max-h-60 bg-cover bg-center bg-no-repeat"
			style="background-image: url({getImagePath('backdrop', 2, coll.backdrop_path, config)});"
		>
			<div class="absolute rounded-xl bg-background/50 inset-0 backdrop-blur-sm" />
			<div class="relative">
				<h1 class="text-title-large">{coll.name}</h1>
				<ul class="partslist py-2 flex flex-wrap gap-2 text-title-medium">
					<li>
						<h2>Include movies like {coll.parts[0].title},</h2>
					</li>
					{#each coll.parts.slice(1, 3) as parts}
						<li>
							<h2>{parts.title}<span>,</span></h2>
						</li>
					{/each}
				</ul>
				<a class="text-label-large underline" href={'/movie/' + coll.id}>Show Collection</a>
			</div>
		</div>
	{:catch}
		<div class="bg-error p-4 max-w-sm rounded-xl">
			<h1 class="text-on-error text-title-medium">No collection found</h1>
		</div>
	{/await}
</section>

<style>
	.partslist > li:last-child span {
		opacity: 0;
	}
</style>
