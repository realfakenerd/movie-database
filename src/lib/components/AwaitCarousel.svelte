<script lang="ts">
	type T = $$Generic;

	interface $$Slots {
		default: { data: Awaited<T> };
		loading: {};
	}

	export let arrayData: Promise<T>;
</script>

<div id="SCROL_WRAP" class="w-full rounded-md bg-surface p-2">
	{#await arrayData}
		<slot name="loading" />
	{:then value}
		<slot data={value} />
	{:catch}
		<div class="interactive-bg-error p-4 max-w-sm rounded-xl">
			<h1 class="text-on-error text-title-medium">No cast found</h1>
		</div>
	{/await}
</div>
