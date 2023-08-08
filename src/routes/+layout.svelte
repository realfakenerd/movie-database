<script lang="ts">
	import Icon from '$lib/components/utils/Icon.svelte';
	import { fly } from 'svelte/transition';
	import '../app.css';
	import '@fontsource/metropolis';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const routes = [
		{
			title: 'Home',
			path: '/',
			d: `M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z`
		},
		{
			title: 'Movies',
			path: '/movies',
			d: `M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z`
		},
		{
			title: 'Tv Shows',
			path: '/tvshows',
			d: `M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z`
		},
		{
			title: 'Search',
			path: 'search',
			d: `M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z`
		}
	];
</script>

<header class="fixed bottom-0 z-50 w-full md:bottom-full md:top-0">
	<nav class="hidden flex-1 md:flex">
		{#each routes as url, index (index)}
			<a class="btn" href={url.path}>
				{url.title}
			</a>
		{/each}
	</nav>

	<nav
		class="flex h-20 flex-none flex-grow-0 flex-row items-start gap-2 bg-surface-variant py-0 px-2 md:hidden"
	>
		{#each routes as url}
			<a
				href={url.path}
				class="flex h-20 flex-none flex-grow flex-col items-center justify-center gap-1 px-0 pt-3 pb-4"
			>
				<div
					class="group-hover:bg-secondary flex h-8 w-16 flex-col items-center justify-center rounded-2xl p-0 transition-all duration-300"
				>
					<span
						class="fill-on-background group-hover:fill-on-secondary flex h-8 w-16 flex-col items-center justify-center rounded-2xl p-0"
					>
						<Icon d={url.d} />
					</span>
					<h3 class="order-1 h-4 flex-none flex-grow-0 self-stretch text-center text-label-small">
						{url.title}
					</h3>
				</div>
			</a>
		{/each}
	</nav>
</header>

{#key data.currentRoute}
	<main in:fly={{ y: -5, duration: 250, delay: 250 }} out:fly={{ y: 5, duration: 250 }}>
		<slot />
	</main>
{/key}

<footer class="footer bg-base-300 p-10 text-base-content">
	<div>
		<svg class="w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 449"
			><path d="M137 47h206v130H137z" fill="#FDDB87" /><circle
				cx="251.5"
				cy="29.5"
				r="26.5"
				fill="#EFBA5B"
			/><circle cx="294.5" cy="33.5" r="26.5" fill="#FDDB87" /><circle
				cx="351.5"
				cy="75.5"
				r="26.5"
				fill="#FDDB87"
			/><circle cx="355.5" cy="123.5" r="26.5" fill="#FDDB87" /><circle
				cx="167.5"
				cy="26.5"
				r="26.5"
				fill="#EFBA5B"
			/><circle cx="210.5" cy="33.5" r="26.5" fill="#FDDB87" /><circle
				cx="136.5"
				cy="63.5"
				r="26.5"
				fill="#EFBA5B"
			/><circle cx="122.5" cy="109.5" r="26.5" fill="#EFBA5B" /><circle
				cx="149.5"
				cy="109.5"
				r="26.5"
				fill="#FDDB87"
			/><circle cx="167.5" cy="56.5" r="26.5" fill="#EFBA5B" /><circle
				cx="305.5"
				cy="109.5"
				r="26.5"
				fill="#FDDB87"
			/><circle cx="258.5" cy="63.5" r="26.5" fill="#FDDB87" /><circle
				cx="220.5"
				cy="82.5"
				r="26.5"
				fill="#FDDB87"
			/><circle cx="326.5" cy="44.5" r="26.5" fill="#FDDB87" /><circle
				cx="287.5"
				cy="92.5"
				r="17.5"
				fill="#EFBA5B"
			/><circle cx="182.5" cy="81.5" r="17.5" fill="#EFBA5B" /><circle
				cx="305.5"
				cy="79.5"
				r="17.5"
				fill="#EFBA5B"
			/><circle cx="207.5" cy="60.5" r="17.5" fill="#EFBA5B" /><circle
				cx="288.5"
				cy="71.5"
				r="17.5"
				fill="#EFBA5B"
			/><circle cx="189.5" cy="68.5" r="17.5" fill="#EFBA5B" /><path
				d="M328 129c20 1 25 19 25 27h-51c2-21 18-27 26-27Zm-103 0c20 1 25 19 25 27h-51c2-21 18-27 26-27Z"
				fill="#DDDBC7"
			/><path d="M124 127c20 1 25 19 24 27H97c2-21 19-27 27-27z" fill="#CEC9A7" /><path
				d="M123 425 98 169l-1-15h153v295H147c-19 0-24-16-24-24zM378 425l25-256v-15H250v295h103c19 0 24-16 25-24Z"
				fill="#DDDBC7"
			/><path
				d="m246 370-23-241c-17 1-23 17-23 24-3-20-19-24-27-23-17 0-23 13-24 20-6-18-20-21-26-20-19 0-25 14-25 21v23l24 248c1 20 16 27 24 27h208c10 0 13-3 14-4l7-14-7-41h-96c-19 2-25-13-26-20Z"
				fill="#CEC9A7"
			/><path d="M276 130c-20 2-26 17-26 24v295h35l17-295c-4-20-19-25-26-24z" fill="#ED3124" /><path
				d="m149 154 18 295h42l-10-295c-3-20-18-25-25-25-18 1-25 18-25 25Z"
				fill="#E00E0E"
			/><path
				d="M379 130c-21 0-26 19-26 28l-18 291h19c19 0 26-14 27-20l23-269c1-25-17-31-25-30Z"
				fill="#ED3124"
			/><path
				d="M442 226v47l-1 44c-1 14-9 17-13 17H269c-4 1-6-3-6-5l-4-10c-2-7-7-11-9-12v-89c3 0 7-3 8-4 3-4 6-5 8-5h150c21-3 26 10 26 17Z"
				fill="#DDD"
			/><rect x="279" y="234.5" width="133" height="75" rx="11" fill="#E00E0E" /><path
				d="M326 249h-47v50c0 7 7 11 11 10h106c-3-52-48-60-70-60Z"
				fill="#ED3124"
			/><path
				d="M58 226v47l1 44c1 14 10 17 14 17h159c3 1 5-3 6-5l3-10c2-7 7-11 9-12v-89c-3 0-7-3-8-4-3-4-6-5-7-5H84c-21-3-26 10-26 17Z"
				fill="#CCCBC6"
			/><rect x="88" y="234.5" width="133" height="75" rx="11" fill="#00818E" /><path
				d="M135 249H88v50c0 7 7 11 11 10h106c-3-52-48-60-70-60Z"
				fill="#128CA0"
			/><circle cx="350" cy="411" r="23" fill="#EFBA5B" /><circle
				cx="366"
				cy="400"
				r="23"
				fill="#EFBA5B"
			/><circle cx="381" cy="424" r="23" fill="#FDDB87" /><circle
				cx="24"
				cy="418"
				r="24"
				fill="#EFBA5B"
			/><circle cx="54" cy="406" r="24" fill="#EFBA5B" /><circle
				cx="50"
				cy="424"
				r="24"
				fill="#FDDB87"
			/><circle cx="462" cy="407" r="24" fill="#EFBA5B" /><circle
				cx="459"
				cy="423"
				r="24"
				fill="#EFBA5B"
			/><circle cx="488" cy="412" r="24" fill="#FDDB87" /></svg
		>
		<p>Popkorn Industries Ltd.<br />Providing reliable entertainment since 2021</p>
	</div>
	<div class="flex">
		<a href="/" class="link-hover link">Home</a>
		<a href="/movies" class="link-hover link">Movies</a>
		<a href="/tvshows" class="link-hover link">Tv Shows</a>
	</div>
</footer>
