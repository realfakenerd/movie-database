<script lang="ts">
	import MediaQuery from '../MediaQuery.svelte';
	import { animate } from 'motion';
	import { onMount } from 'svelte';
	import Searchbar from './Searchbar.svelte';
	import { page } from '$app/stores';

	onMount(() => {
		animate('nav', { opacity: 1 }, { duration: 1, delay: 0.6 });
	});

	const urls = [
		{ title: 'Home', path: '/' },
		{ title: 'Movies', path: '/movies' },
		{ title: 'Tv Shows', path: '/tvshows' }
	];
</script>

<div class="mx-auto max-w-screen-xl p-2">
	<div class="flex items-center justify-between space-x-4 lg:space-x-10">
		<div class="flex lg:w-0 lg:flex-1">
			<Searchbar />
		</div>

		<nav class="hidden space-x-8 text-sm font-medium md:flex">
			{#each urls as url}
				<a
					class:text-primary={$page.url.pathname === url.path}
					class="btn btn-link text-gray-500"
					href={url.path}>{url.title}</a
				>
			{/each}
		</nav>

		<div class="hidden flex-1 items-center justify-end space-x-4 lg:flex">
			<a class="btn btn-ghost rounded-lg bg-white text-secondary-content" href="/login"> Log in </a>

			<a class="btn btn-secondary rounded-lg  text-white" href="/login"> Sign up </a>
		</div>

		<div class="lg:hidden">
			<div class="dropdown dropdown-end">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn m-1">
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
					<MediaQuery query="(max-width: 768px)" let:matches>
						{#if matches}
							<li class="hover-bordered">
								<a class="btn btn-link" href="/">Home</a>
							</li>
							<li class="hover-bordered">
								<a class="btn btn-link" href="/movies">Movies</a>
							</li>
							<li class="hover-bordered">
								<a class="btn btn-link" href="/tvshows">Tv Shows</a>
							</li>
						{:else}
							<li class="hover-bordered">
								<a class="btn btn-link" href="/login">log in</a>
							</li>
							<li class="hover-bordered">
								<a class="btn btn-link" href="/login">sign in</a>
							</li>
						{/if}
					</MediaQuery>
				</ul>
			</div>
		</div>
	</div>
</div>
