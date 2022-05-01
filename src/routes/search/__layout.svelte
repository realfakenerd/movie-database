<script>
	import Stats from '$lib/components/SearchPage/Stats.svelte';
</script>

<section class="px-10 py-20">
	<section class="grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-8">
		<div class="col-span-1">
			<Stats />
		</div>
		<slot />
	</section>
</section>
