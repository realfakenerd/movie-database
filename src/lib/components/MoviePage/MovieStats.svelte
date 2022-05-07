<script lang="ts">
	import type { MovieDef } from '$lib/types';
	import { formatDate, formatNumberToMoney } from '$lib/utils';

	export let releaseDate: string;
	export let budget: number;
	export let movieDetails: MovieDef;
</script>

<section class="text-center">
	<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
		<ul class="grid grid-cols-2 gap-4 rounded-xl border-2 border-primary lg:grid-cols-4">
			<li class="p-8">
				<p class="text-2xl font-extrabold text-secondary">{formatDate(releaseDate)}</p>
				<p class="mt-1 text-lg font-medium">Release Date</p>
			</li>

			<li class="p-8">
				<p class="text-2xl font-extrabold text-secondary">
					{formatNumberToMoney(budget)}
				</p>
				<p class="mt-1 text-lg font-medium">Budget</p>
			</li>

			<li class="p-8">
				<p class="text-2xl font-extrabold text-secondary">
					{formatNumberToMoney(movieDetails.revenue)}
				</p>
				<p class="mt-1 text-lg font-medium">Revenue</p>
			</li>

			<li class="p-8">
				<p class="text-2xl font-extrabold text-secondary">{movieDetails.runtime}</p>
				<p class="mt-1 text-lg font-medium">Runtime</p>
			</li>
		</ul>
	</div>
</section>
