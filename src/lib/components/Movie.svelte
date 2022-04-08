<script lang="ts">
	import type { MovieDef } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let movie: MovieDef;

	const pop = (movie.popularity / 100).toFixed(0);
</script>

<div class="indicator">
	<div class="indicator-item z-50">
		<div class="radial-progress text-secondary text-sm" style="--value:{pop}; --size:2.5rem;">
			{pop}%
		</div>
	</div>
	<div class="card bg-base-100 image-full">
		<figure>
			<img
				class="object-cover"
				width="236"
				height="354"
				src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
				alt={movie.title}
				loading="lazy"
			/>
		</figure>
		<div class="card-body">
			<h2 class="card-title">{movie.title}</h2>
			<p>{formatDate(movie.release_date)}</p>
			<div class="badge badge-secondary">
				<span class="pr-2">
					{movie.vote_average}
				</span>
				<span class="material-icons-round"> star </span>
			</div>
			<div class="card-actions">
				<a sveltekit:prefetch class="btn btn-primary" href={'/movie/' + movie.id}>see more</a>
			</div>
		</div>
	</div>
</div>
