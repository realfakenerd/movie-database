<script lang="ts">
	import type { PageData } from './$types';

	import { page } from '$app/stores';
	import Card from '$lib/components/Card.svelte';
	import { formatDate, getImagePath } from '$lib/utils';
	export let data: PageData;
	const { movie, tv, person, config } = data;

	console.log('tv', tv);
	console.log('movie', movie);
	console.log('person', person);
</script>

<ul class="grid place-items-center gap-2">
	{#if $page.params.type === 'movie'}
		{#each movie.results.sort((a, b) => b.popularity - a.popularity) as data (data.id)}
			<Card
				class="relative bg-surface-variant/70 text-on-surface-variant hover:bg-surface-variant-hover"
				href={'/movie/' + data.id}
			>
				<figure class="absolute inset-0 -z-10">
					<img
						width="224"
						height="336"
						class="w-full h-full object-center object-cover"
						src={data.poster_path
							? getImagePath('poster', 4, data.poster_path, config)
							: 'https://fakeimg.pl/224x336/?retina=1&text=No+Photo&font=noto'}
						alt="movie"
					/>
				</figure>

				<div class="flex w-full flex-col items-start">
					<h1 class="text-title-large">{data.title}</h1>
					<h2 class="text-label-medium">Release Date: {formatDate(data.release_date)}</h2>
				</div>
			</Card>
		{/each}
	{/if}
	{#if $page.params.type === 'tv'}
		{#each tv.results.sort((a, b) => b.popularity - a.popularity) as data (data.id)}
			<Card
				class="relative bg-surface-variant/70 text-on-surface-variant hover:bg-surface-variant-hover"
				href={'/tv/' + data.id}
			>
				<figure class="absolute inset-0 -z-10">
					<img
						width="224"
						height="336"
						class="w-full h-full object-center object-cover"
						src={data.poster_path
							? getImagePath('poster', 4, data.poster_path, config)
							: 'https://fakeimg.pl/224x336/?retina=1&text=No+Photo&font=noto'}
						alt="movie"
					/>
				</figure>

				<div class="flex w-full flex-col items-start px-2">
					<h1 class="text-title-medium">{data.name}</h1>
					<h2 class="text-label-medium">Release Date: {data.first_air_date}</h2>
				</div>
			</Card>
		{/each}
	{/if}
	{#if $page.params.type === 'person'}
		{#each person.results.sort((a, b) => b.popularity - a.popularity) as data (data.id)}
			<Card klass="self-start" href={'/person/' + data.id}>
				<div slot="person">
					<figure>
						<img
							width="224"
							height="336"
							class="max-h-[336px] w-56 rounded-xl bg-background object-cover object-center"
							src={data.profile_path
								? getImagePath('profile', 2, data.profile_path, config)
								: 'https://fakeimg.pl/224x336/?retina=1&text=No+Photo&font=noto'}
							alt="movie"
						/>
					</figure>
					<div class="flex w-56 flex-col items-start gap-2 px-2">
						<div>
							<h1 class="text-title-medium">{data.name}</h1>
							<h2 class="text-label-medium">Known for: {data.known_for_department}</h2>
						</div>
						{#if data.known_for.length > 0}
							<div class="w-full rounded-md bg-surface-2 p-2">
								<ul
									class="flex snap-x flex-row gap-2 overflow-y-hidden overflow-x-scroll scroll-auto rounded-2xl"
								>
									{#each data.known_for as known_for}
										<li class="rounded-lg bg-background px-1 py-0.5 text-on-background">
											<p class="whitespace-nowrap text-label-small">
												{known_for.name ? known_for.name : known_for.title}
											</p>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				</div>
			</Card>
		{/each}
	{/if}
</ul>

<style lang="postcss">
	ul::-webkit-scrollbar {
		@apply hidden;
	}

	ul.grid {
		grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
	}
</style>
