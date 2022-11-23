<script lang="ts">
	import Nav from '$lib/components/navigation/Nav.svelte';
	import '../tail.css';
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/700.css';
	import type { LayoutData } from './$types';
	import { fly } from 'svelte/transition';

	export let data: LayoutData;
</script>

<header class="fixed z-10 w-full py-5 px-10">
	<Nav />
</header>

<svelte:head>
	<title>Pop Korn</title>
</svelte:head>

{#key data.currentRoute}
	<main in:fly={{ y: -5, duration: 250, delay: 250 }} out:fly={{ y: 5, duration: 250 }}>
		<slot />
	</main>
{/key}

<footer class="bg-gradient-to-r from-primary to-secondary text-base-content">
	<div class="mx-auto max-w-screen-xl px-4 pt-6 pb-6 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<p class="text-2xl font-extrabold">Made with ❤ and Svelte</p>
		</div>
	</div>
</footer>
