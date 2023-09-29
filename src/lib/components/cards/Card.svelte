<script lang="ts">
	export let href = '/';
	export let isLink = false;
	export let isRoute = true;

	const tag = isLink ? 'a' : 'section';

	const a = {
		href,
		rel: 'noreferrer',
		target: isRoute ? '_self' : '_blank'
	};
</script>

<svelte:element
	this={tag}
	{...isLink ? a : {}}
	class="card relative bg-surface/70 text-on-surface hover:bg-surface-hover {$$props.class ?? ''}"
>
	<slot />
</svelte:element>
