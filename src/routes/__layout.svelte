<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import '../tail.css';
</script>

<header>
	<Nav />
</header>

<svelte:head>
	<title>Pop Korn</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
</svelte:head>

<main class="container mx-auto">
	<slot />
</main>

<footer class="footer footer-center p-4 bg-base-300 text-base-content">
	<div>
		<p>Copyright © 2022 - All right reserved by Auri corp.</p>
	</div>
</footer>
