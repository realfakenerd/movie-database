<script lang="ts">
	import type { UpcomingMoviesRes } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import { onMount } from 'svelte';
	export let upcomingData: UpcomingMoviesRes[];

	let currentImg = 0;
	function handleImgChange(direction) {
		if (direction == 'forward') {
			currentImg = (currentImg + 1) % upcomingData.length;
		} else {
			currentImg = (currentImg - 1 + upcomingData.length) % upcomingData.length;
		}
	}

	const srcsetURL = 'https://image.tmdb.org/t/p/';
	const sizes = ['w342', 'w500', 'w780'];
	let sliderIndex = 0;
	function carousel() {
		let i = 0;
		const x = document.getElementsByClassName('fade') as HTMLCollectionOf<HTMLDivElement>;
		const dot = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLDivElement>;
		for (i; i < x.length; i++) {
			x[i].style.display = 'none';
			dot[i].classList.remove('ring-2', 'ring-4');
		}
		sliderIndex++;
		if (sliderIndex > x.length) {
			sliderIndex = 1;
		}
		x[sliderIndex - 1].style.display = 'block';
		dot[sliderIndex - 1].classList.add('ring-2');
		setTimeout(() => {
			carousel();
			handleImgChange('forward');
		}, 6000);
	}

	function currentDiv(n: number) {
		showDivs((sliderIndex = n));
	}
	function showDivs(num: number) {
		let i = 0;
		const x = document.getElementsByClassName('fade') as HTMLCollectionOf<HTMLDivElement>;
		const dot = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLDivElement>;
		if (num > x.length) {
			sliderIndex = 1;
		}
		if (num < 1) {
			sliderIndex = x.length;
		}
		for (i; i < x.length; i++) {
			x[i].style.display = 'none';
			dot[i].classList.remove('ring-4', 'ring-2');
		}
		x[sliderIndex - 1].style.display = 'block';
		dot[sliderIndex - 1].classList.add('ring-4');
	}
	onMount(carousel);
</script>

<div class="container p-4">
	{#each upcomingData as upd, i (upd.id)}
		<section style="display: none;" id={String(i)} class="fade relative rounded-t-2xl bg-white">
			<img
				class="absolute inset-0 h-full w-full rounded-xl object-cover object-[75%] opacity-25 sm:object-[25%] sm:opacity-100"
				src={upd.backdrop_path === null ? '' : srcsetURL + 'w1280' + upd.backdrop_path}
				alt="Movie backdrop poster"
			/>

			<div
				class="hidden sm:absolute sm:inset-0 sm:block sm:bg-gradient-to-t sm:from-base-100 sm:to-base-200/50"
			/>

			<div class="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
				<div class="max-w-xl text-center sm:text-left">
					<h1 class="text-3xl font-extrabold sm:text-5xl">
						<strong class="font-extrabold text-secondary sm:block"> {upd.title} </strong>
					</h1>

					<p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
						Release date: {formatDate(upd.release_date)}
					</p>
				</div>
			</div>
		</section>
	{/each}
</div>
<div class="relative bottom-64 flex justify-center gap-2">
	{#each upcomingData as d, index (d.id)}
		<a sveltekit:prefetch href={'/movie/' + d.id}>
			<img
				on:mouseenter={() => currentDiv(index + 1)}
				class="dot rounded-lg bg-base-100 shadow-2xl"
				width="150"
				height="225"
				srcset={`${srcsetURL}${sizes[1]}${d.poster_path} 500w,
							${srcsetURL}${sizes[2]}${d.poster_path} 780w`}
				src={srcsetURL + sizes[1] + d.poster_path}
				decoding="async"
				loading="lazy"
				alt="Movie poster"
			/>
		</a>
	{/each}
</div>

<style>
	.fade {
		animation: fading 700ms normal;
	}
	@keyframes fading {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
