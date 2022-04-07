<script lang="ts">
	import type { UpcomingData } from '$lib/types';

	export let upcomingData: UpcomingData;
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<div class="carousel">
			{#each upcomingData.results as updata (updata.id)}
				<div class="carousel-item" id={updata.id}>
					<img
						src={'https://image.tmdb.org/t/p/w500' + updata.poster_path}
						alt={updata.title}
						class="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 class="text-5xl font-bold">Box Office News!</h1>
						<p class="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
							exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button class="btn btn-primary">Get Started</button>
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
