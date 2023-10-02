<script lang="ts">
	import { easeEmphasizedAccel, easeEmphasizedDecel } from '$lib/easing';
	import { enterExit } from '$lib/transition';
	import Icon from '@iconify/svelte';
	let hidden = true;
	let value = '';

	
</script>

<section class="{$$props.class??''}">
	<form method="post" action="/search?q={value}">
		<label class="sr-only" for="searchBar"> Search </label>
		{#if !hidden}
			<input
				in:enterExit={{ start: 'left', easing: easeEmphasizedDecel, duration: 500 }}
				out:enterExit={{ start: 'left', easing: easeEmphasizedAccel, duration: 250 }}
				id="searchBar"
				name="q"
				type="search"
				bind:value
				placeholder="Search movies, tv or people..."
			/>
		{/if}
	</form>
	<button class:value={!hidden} class="btn icon-full" on:click={() => (hidden = !hidden)}>
		<Icon icon="mdi:search" />
	</button>
</section>

<style>
	section {
		@apply inline-flex gap-2;
	}

	input {
		@apply ring-1 ring-primary will-change-transform w-72 rounded-full border-none bg-surface shadow-md px-4 py-2 transition-all outline-none shadow-surface/30;
	}

	input::placeholder {
		@apply text-on-surface;
	}

	input:focus {
		@apply bg-surface-focus ring-2 ring-primary-focus;
	}

	input:hover {
		@apply bg-surface-hover ring-primary-hover;
	}

	input:is(:focus, :hover) {
		@apply shadow-lg shadow-primary/10;
	}

	button {
		@apply ring-1 ring-primary text-primary;
	}

	@media (hover: hover) {
		button:is(:hover) {
			@apply bg-primary-hover text-on-primary;
		}
	}

	button:is(.value, :focus-within) {
		@apply bg-primary-focus text-on-primary;
	}
</style>
