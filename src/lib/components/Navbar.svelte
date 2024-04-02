<script lang="ts">
	import routes from '$lib/routes';
	import Icon from '@iconify/svelte';
</script>

<header class="bg-background inline-flex justify-center w-full text-title-medium min-h-16">
	<section class="inline-flex items-center gap-7">
		<a href="/">
			<Icon class="text-primary" height="30px" width="62px" icon="la:imdb" />
		</a>
		<nav class="inline-flex items-center">
			{#each routes as { title, path }, i (i)}
				<a class="px-4 py-2" href={path}>{title}</a>
			{/each}
		</nav>
		<div class="rounded-xl bg-surface-variant min-w-96 inline-flex items-center px-6">
			<div
				class="inline-flex gap-2 items-center hover:text-on-surface transition-colors py-2"
			>
				<span>All </span>
				<Icon width="24px" icon="mdi:chevron-down" />
			</div>
			<input placeholder="Search Popkorn" type="text" class="appearance-none outline-none bg-surface-variant w-full placeholder:text-on-surface-variant" />
			<Icon width="24px" icon="mdi:search" />
		</div>
		<div class="inline-flex items-center gap-4">
			<div class="inline-flex gap-2">
				<Icon width="24px" icon="mdi:account-circle" />
				<span>User</span>
			</div>
			<div class="inline-flex gap-2">
				<span>EN</span>
				<Icon width="24px" icon="mdi:chevron-down" />
			</div>
			<div>
				<Icon width="24px" icon="mdi:lightbulb" />
			</div>
		</div>
	</section>
</header>

<style>
	nav {
		view-transition-name: nav;
	}
</style>
