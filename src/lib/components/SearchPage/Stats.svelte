<script lang="ts">
	import { searchVal } from '$lib/stores/statsStore';

	export let searchLength: readonly [number, number, number];
</script>

<ul class="menu rounded-box space-y-3 bg-base-200 p-2">
	<li class="bg-primary">
		<h3 class="text-xl">Search Results</h3>
	</li>
	<li>
		<a href={'/search/movie/' + $searchVal} class="flex justify-between">
			<span>Movie</span>
			<div class="badge">{searchLength[0]}</div>
		</a>
	</li>
	<li>
		<a href={'/search/tv/' + $searchVal} class="flex justify-between">
			<span>Tv Shows</span>
			<div class="badge">{searchLength[1]}</div>
		</a>
	</li>
	<li>
		<a href={'/search/person/' + $searchVal} class="flex justify-between">
			<span>People</span>
			<div class="badge">{searchLength[2]}</div>
		</a>
	</li>
</ul>
