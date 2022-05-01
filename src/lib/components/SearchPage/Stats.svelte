<script lang="ts">
	import { searchVal } from '$lib/stores/statsStore';
</script>

<ul class="menu rounded-box space-y-3 bg-base-200 p-2">
	<li class="bg-primary">
		<h3 class="text-xl">Search Results</h3>
	</li>
	<li>
		<a sveltekit:prefetch href={'/search/movie/' + $searchVal} class="flex justify-between">
			<span>Movie</span>
		</a>
	</li>
	<li>
		<a sveltekit:prefetch href={'/search/tv/' + $searchVal} class="flex justify-between">
			<span>Tv Shows</span>
		</a>
	</li>
	<li>
		<a sveltekit:prefetch href={'/search/person/' + $searchVal} class="flex justify-between">
			<span>People</span>
		</a>
	</li>
</ul>
