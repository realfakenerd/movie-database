<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import '../tail.css';
</script>

<header>
	<Nav />
</header>

<svelte:head>
	<title>Movie Database</title>
</svelte:head>

<main class="px-5 w-full">
	<slot />
</main>

<footer class="footer footer-center p-4 bg-base-300 text-base-content">
	<div>
		<p>Copyright © 2022 - All right reserved by Auri corp.</p>
	</div>
</footer>
