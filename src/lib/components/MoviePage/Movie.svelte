<script lang="ts">
	import type { MovieDef } from '$lib/types';
	import { formatDate } from '$lib/utils';

	const srcsetURL = 'https://image.tmdb.org/t/p/';
	const sizes = ['w342', 'w500', 'w780'];
	export let movie: MovieDef;
</script>

<div class="card image-full max-w-fit bg-base-100">
	<figure>
		<img
			width="221"
			height="332"
			class="bg-center object-cover"
			srcset={`${srcsetURL}${sizes[0]}${movie.poster_path} 342w,
			${srcsetURL}${sizes[1]}${movie.poster_path} 500w,
			${srcsetURL}${sizes[2]}${movie.poster_path} 780w`}
			src={srcsetURL + sizes[0] + movie.poster_path}
			alt={movie.title}
			decoding="async"
			loading="lazy"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title max-w-fit">{movie.title}</h2>
		<p>{formatDate(movie.release_date)}</p>
		<div class="badge badge-secondary">
			<span class="pr-2">
				{movie.vote_average}
			</span>
			<span class="material-icons-rounded"> star </span>
		</div>
		<div class="card-actions">
			<a sveltekit:prefetch class="btn btn-primary" href={'/movie/' + movie.id}>see more</a>
		</div>
	</div>
</div>
