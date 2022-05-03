<script lang="ts">
	let text: string;
	let type: 'a' | 'btn';
	let href: string;

	let additionalClass: string;

	const klass = `transition-colors duration-500 inline-block px-12 py-3 text-sm font-medium border rounded focus:outline-none focus:ring`;

	export { text, type, href, additionalClass };
</script>

{#if type === 'btn'}
	<button class="{klass} {additionalClass}">
		{text}
	</button>
{:else if type === 'a'}
	<a {href} sveltekit:prefetch class="{klass} {additionalClass}">{text}</a>
{/if}
