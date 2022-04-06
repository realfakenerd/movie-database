<script lang="ts">
	import type { MovieDef } from '$lib/types';
	import { formatDate } from '$lib/utils';

	const starDPath =
		'M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z';

	export let movie: MovieDef;
</script>

<div class="card bg-base-100 image-full">
	<figure>
		<img
			class="object-cover w-full rounded-2xl"
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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				enable-background="new 0 0 24 24"
				height="24px"
				viewBox="0 0 24 24"
				width="24px"
				fill="#FFFFFF"
				><g><path d="M0,0h24v24H0V0z" fill="none" /><path d="M0,0h24v24H0V0z" fill="none" /></g><g
					><path d={starDPath} /></g
				></svg
			>
		</div>
		<div class="card-actions">
			<a sveltekit:prefetch class="btn btn-primary" href={'/movie/' + movie.id}>see more</a>
		</div>
	</div>
</div>
