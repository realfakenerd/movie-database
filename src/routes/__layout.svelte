<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import '../tail.css';
	import "@fontsource/material-icons-rounded";
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/700.css';
</script>

<header>
	<Nav />
</header>

<svelte:head>
	<title>Pop Korn</title>
</svelte:head>

<main class="container mx-auto px-4">
	<slot />
</main>

<footer class="footer footer-center p-4 bg-base-300 text-base-content">
	<div>
		<p>Copyright © 2022 - All right reserved by Auri corp.</p>
	</div>
</footer>
