<script lang="ts">
	import type { UpcomingData } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let upcomingData: UpcomingData;
	let currentIndex = 5;
</script>

<div class="carousel w-full">
	{#each upcomingData.results.slice(0, currentIndex) as upd (upd.id)}
		<div class="carousel-item w-full" id={upd.id}>
			<div
				class="hero"
				style="background-image: url({upd.backdrop_path === null
					? ''
					: 'https://image.tmdb.org/t/p/original' + upd.backdrop_path});"
			>
				<div class="hero-overlay bg-opacity-60" />
				<div
					class="hero-content flex-col md:flex-row space-x-0 md:space-x-40 text-center text-neutral-content"
				>
					<img
						class="w-[300px] bg-base-100 rounded-lg shadow-2xl"
						width="384"
						src={'https://image.tmdb.org/t/p/w500' + upd.poster_path}
						alt="Movie poster"
					/>
					<div class="space-y-4">
						<h1 class="text-xl md:text-3xl font-bold">{upd.title}</h1>
						<p>Release date: {formatDate(upd.release_date)}</p>
						<a sveltekit:prefetch class="btn btn-primary" href={'/movie/' + upd.id}>see more</a>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
<div class="flex justify-center w-full py-2 gap-2">
	{#each upcomingData.results.slice(0, currentIndex) as d, index}
		<a href={'#' + d.id} class="btn btn-xs">{index + 1}</a>
	{/each}
	{#if upcomingData.results.length > currentIndex}
		<button class="btn btn-xs" on:click={() => (currentIndex += 5)}>...</button>
	{/if}
</div>
<!-- <div class="hero bg-base-200">
	<div class="hero-content">
		<div class="carousel w- p-4 space-x-4">
			{#each upcomingData.results as updata (updata.id)}
				<div class="carousel-item max-w-xl" id={updata.id}>
					<div class="card lg:card-side">
						<figure>
							<img
								src={'https://image.tmdb.org/t/p/w500' + updata.poster_path}
								alt={'post of ' + updata.title}
								class="rounded-xl w-40 md:w-[300px] bg-base-300 object-cover shadow-2xl"
								width="300"
								height="450"
							/>
						</figure>
						<div class="card-body">
							<h1 class="text-xl md:text-3xl font-bold">{updata.title}</h1>
							<p class="max-w-md">Release date: {formatDate(updata.release_date)}</p>
							<div class="card-actions">
								<a href={'/movie/' + updata.id} class="btn btn-sm md:btn-md btn-primary"
									>Get Started</a
								>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div> -->
