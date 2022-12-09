<script lang="ts">
	export let d: string;
    export let extraClass: string = 'text-white';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class="w-6 h-6 {extraClass}"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		{d}
	/>
</svg>