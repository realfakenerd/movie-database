<script lang="ts">
	import type { MovieDef } from '$lib/types';
	import { formatDate, formatNumberToMoney } from '$lib/utils';

	export let releaseDate: string;
	export let budget: number;
	export let movieDetails: MovieDef;
</script>

<section class="stats stats-vertical lg:stats-horizontal shadow">
	<div class="stat">
		<span class="stat-title">Release Date </span>
		<div class="stat-value">
			{formatDate(releaseDate)}
		</div>
	</div>
	{#if budget > 0 || movieDetails.revenue > 0}
		<div class="stat">
			<span class="stat-title">Budget</span>
			<div class="stat-value">
				{formatNumberToMoney(budget)}
			</div>
		</div>
		<div class="stat">
			<span class="stat-title">Revenue</span>
			<div class="stat-value">
				{formatNumberToMoney(movieDetails.revenue)}
			</div>
		</div>
	{/if}
	<div class="stat">
		<span class="stat-title">Rating </span>
		<div class="stat-value">
			{movieDetails.vote_average}
		</div>
	</div>
	<div class="stat">
		<span class="stat-title">Runtime</span>
		<div class="stat-value">
			{movieDetails.runtime}min
		</div>
	</div>
</section>
