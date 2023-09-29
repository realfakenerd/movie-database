<script lang="ts">
	import { getImagePath } from '$lib/utils';

	export let imgPath = '';
	export let config: Config;
	export let size = 2;
</script>

<section
	style="background-image: url({getImagePath('backdrop_sizes', size, imgPath, config)})"
	class="relative min-h-screen bg-cover bg-center bg-no-repeat"
>
	<div class="absolute inset-0 bg-background/90 backdrop-blur-sm" />

	<div class="relative flex min-h-screen flex-col items-center gap-3 p-4 md:flex-row">
		<slot />
	</div>
</section>
