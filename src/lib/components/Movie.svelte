<script lang="ts">
	import type { MovieDef } from '$lib/types';

	export let movie: MovieDef;
</script>

<div class="card bg-base-100 image-full">
	<figure>
		<img
			class="object-cover w-full rounded-2xl"
			width="254"
			height="381"
			src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
			alt={movie.title}
			loading="lazy"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">{movie.title}</h2>
		<p>{movie.release_date}</p>
		<div class="card-actions">
			<a sveltekit:prefetch class="btn btn-primary" href={'/movie/' + movie.id}>see more</a>
		</div>
	</div>
</div>
