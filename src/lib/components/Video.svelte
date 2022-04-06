<script lang="ts">
	import type { MovieVideo } from '$lib/types';

	export let video: MovieVideo;
</script>

<div id={video.key} class="carousel-item">
	<iframe
		class="rounded-2xl bg-base-100"
		width="560"
		height="315"
		src={'https://www.youtube.com/embed/' + video.key}
		title={video.name}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
</div>
