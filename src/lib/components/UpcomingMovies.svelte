<script lang="ts">
	import type { UpcomingData } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let upcomingData: UpcomingData;
</script>

<h2 class="text-2xl my-3">Upcoming Movies:</h2>
<div class="hero bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<div class="carousel p-4 space-x-4">
			{#each upcomingData.results as updata (updata.id)}
				<div class="carousel-item" id={updata.id}>
					<div class="card card-compact lg:card-side">
						<figure>
							<img
								src={'https://image.tmdb.org/t/p/w500' + updata.poster_path}
								alt={updata.title}
								class="w-1/2 rounded-lg shadow-2xl"
							/>
						</figure>
						<div class="card-body">
							<h1 class="text-5xl font-bold">{updata.title}</h1>
							<p class="max-w-md">Release date: {formatDate(updata.release_date)}</p>
							<div class="card-actions">
								<button class="btn btn-primary">Get Started</button>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<!-- <div class="flex justify-center w-full py-2 gap-2">
			{#each upcomingData.results as updata, index (updata.id)}
				<a href={'#' + updata.id} class="btn btn-xs">{index}</a>
			{/each}
		</div> -->
	</div>
</div>
