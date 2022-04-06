<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import '../tail.css';
</script>

<svelte:head>
	<title>Movie DB</title>
	<link
		rel="stylesheet"
		crossorigin="anonymous"
		href="https://cdn.jsdelivr.net/npm/modern-normalize@1.1.0/modern-normalize.min.css"
	/>
</svelte:head>

<header>
	<Nav />
</header>

<main class="px-5 w-full">
	<slot />
</main>
