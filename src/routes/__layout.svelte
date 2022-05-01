<script lang="ts">
	import Nav from '$lib/components/navigation/Nav.svelte';
	import '../tail.css';
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/700.css';
</script>

<header
	class="fixed z-50 w-full bg-base-100/20 shadow-sm backdrop-blur-md transition-colors duration-1000"
>
	<Nav />
</header>

<svelte:head>
	<title>Pop Korn</title>
</svelte:head>

<main>
	<slot />
</main>

<footer class="bg-gradient-to-r from-primary to-secondary text-white">
	<div class="mx-auto max-w-screen-xl px-4 pt-6 pb-6 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<p class="text-2xl font-extrabold">Made with ❤ and Svelte</p>
		</div>
	</div>
</footer>
