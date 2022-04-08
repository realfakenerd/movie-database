<script lang="ts">
	import AvatarButton from './AvatarButton.svelte';
	import Searchbar from './Searchbar.svelte';

	const darkMode = () => {
		let currentTheme = document.documentElement.getAttribute('data-theme');

		// Switch between `dark` and `light`
		const switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';

		// Set our currenet theme to the new one
		document.documentElement.setAttribute('data-theme', switchToTheme);
	};
</script>

<nav class="navbar p-5 flex-col space-y-3 md:space-y-0 md:flex-row">
	<div class="flex-1 items-end space-x-3">
		<a sveltekit:prefetch href="/">
			<img src="popcorn512.png" width="64" height="64" class="w-16" alt="Pop Korn Logo" />
		</a>
		<h3 class="text-3xl uppercase font-bold">Pop Korn</h3>
	</div>
	<div class="flex-none flex-col md:flex-row">
		<div class="inline-flex items-center justify-center">
			<AvatarButton />
			<div class="mx-5">
				<label class="swap swap-rotate">
					<!-- this hidden checkbox controls the state -->
					<input on:click={darkMode} type="checkbox" />
					<span class="swap-on material-icons-round"> light_mode </span>
					<span class="swap-off material-icons-round"> dark_mode </span>
				</label>
			</div>
		</div>

		<Searchbar />
	</div>
</nav>
