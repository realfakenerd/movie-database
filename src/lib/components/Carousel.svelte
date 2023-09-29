<script lang="ts">
	type T = $$Generic;

	export let arrayData: T[] = [];

	const id = crypto.randomUUID();
</script>

<div {id} class="w-full rounded-md bg-surface-2">
	<ul
		class="flex snap-x flex-row gap-2 overflow-y-hidden overflow-x-scroll scroll-auto rounded-2xl"
	>
		{#each arrayData as data}
			<slot {data} />
		{/each}
	</ul>
</div>

<style lang="postcss">
	ul::-webkit-scrollbar {
		@apply hidden;
	}
</style>
