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

<nav
	class="navbar fixed z-50 w-full bg-base-100/20 px-5 backdrop-blur-md transition-colors duration-1000 md:space-y-0"
>
	<div class="navbar-start">
		<Searchbar />
	</div>
	<div class="navbar-center items-end space-x-0 md:space-x-3">
		<div class="btn btn-ghost">Movie</div>
		<div class="btn btn-ghost">
			<a sveltekit:prefetch href="/">Home</a>
		</div>
		<div class="btn btn-ghost">Tv</div>
	</div>
	<div class="navbar-end flex-col md:flex-row">
		<div class="inline-flex items-center justify-center">
			<div class="mx-5">
				<label class="swap swap-rotate">
					<!-- this hidden checkbox controls the state -->
					<input on:click={darkMode} type="checkbox" />
					<span class="material-icons-rounded swap-on"> light_mode </span>
					<span class="material-icons-rounded swap-off"> dark_mode </span>
				</label>
			</div>
			<AvatarButton />
		</div>
	</div>
</nav>
