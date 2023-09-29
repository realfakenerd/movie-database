<script lang="ts">
	type T = $$Generic;

	interface $$Slots {
		default: { data: Awaited<T> };
		loading: {};
	}

	export let arrayData: Promise<T>;

	const id = crypto.randomUUID();
</script>

<div {id} class="w-full rounded-md bg-surface p-2">
	{#await arrayData}
		<slot name="loading">
			<ul
				class="flex snap-x flex-row gap-2 overflow-y-hidden overflow-x-scroll scroll-auto rounded-2xl"
			>
				<li
					class="flex h-[292px] max-w-[160px] animate-pulse flex-col items-center
                    gap-2 rounded-xl bg-background"
				>
					<div class="h-[240px] w-[160px] rounded-lg bg-secondary" />
				</li>
				<li
					class="flex h-[292px] max-w-[160px] animate-pulse flex-col items-center
                    gap-2 rounded-xl bg-background"
				>
					<div class="h-[240px] w-[160px] rounded-lg bg-secondary" />
				</li>
				<li
					class="flex h-[292px] max-w-[160px] animate-pulse flex-col items-center
                    gap-2 rounded-xl bg-background"
				>
					<div class="h-[240px] w-[160px] rounded-lg bg-secondary" />
				</li>
			</ul>
		</slot>
	{:then value}
		<ul
			class="flex snap-x flex-row gap-2 overflow-y-hidden overflow-x-scroll scroll-auto rounded-2xl"
		>
			<slot data={value} />
		</ul>
	{:catch}
		<div class="interactive-bg-error p-4 max-w-sm rounded-xl">
			<h1 class="text-on-error text-title-medium">No data found</h1>
		</div>
	{/await}
</div>

<style lang="postcss">
	ul::-webkit-scrollbar {
		@apply hidden;
	}
</style>
