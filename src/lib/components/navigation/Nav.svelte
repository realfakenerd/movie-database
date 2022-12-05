<script lang="ts">
	import { onMount } from 'svelte';
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import Searchbar from './Searchbar.svelte';

	
	let init = false;
	let navbar: HTMLDivElement;
	onMount(() => {
		init = true;
		const observed = document.getElementById('mainContainer');
		const heroPage = document.getElementById('mainHeroContainer');
		const observer = new IntersectionObserver(
			(entry) => {
				if (entry[0].isIntersecting) {
					navbar.classList.replace('bg-transparent', 'bg-base-100/60');
					navbar.classList.add('backdrop-blur-md');
				}
			},
			{
				threshold: 0.1
			}
		);

		if (observed) observer.observe(observed);
		if (heroPage) observer.observe(heroPage)
	});

	const urls = [
		{ title: 'Home', path: '/' },
		{ title: 'Movies', path: '/movies' },
		{ title: 'Tv Shows', path: '/tvshows' }
	];
</script>

<div bind:this={navbar} class="navbar bg-transparent transition-colors duration-500 rounded-box">
	<nav class="hidden flex-1 md:flex">
		{#if init}
			{#each urls as url, index (index)}
				<a
					in:fly={{ delay: 200 * index, y: -20, easing: backOut }}
					class="btn btn-ghost"
					href={url.path}
				>
					{url.title}
				</a>
			{/each}
		{/if}
	</nav>

	<div class="hidden flex-none lg:flex text-white space-x-3">
		<Searchbar />
		<a class="btn btn-ghost hover:bg-secondary border-secondary" href="/login">Log in</a>
	</div>

	<div class="lg:hidden">
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost m-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</label>

			<ul tabindex="0" class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow">
				<li>asd</li>
			</ul>
		</div>
	</div>
</div>
