<script lang="ts">
	import Nav from '$lib/components/navigation/Nav.svelte';
	import '../tail.css';
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/700.css';
	import { fetchPopular, fetchUpcoming } from '$lib/stores/popularStore';

	fetchPopular();
	fetchUpcoming();
</script>

<header>
	<Nav />
</header>

<svelte:head>
	<title>Pop Korn</title>
</svelte:head>

<main>
	<slot />
</main>

<footer class="footer footer-center bg-base-300 p-4 text-base-content">
	<div>
		<p>Copyright © 2022 - All right reserved by Auri corp.</p>
	</div>
</footer>
