<script context="module">
	import { findPage } from '../pages'

	export function preload({ params }) {
		const page = findPage(params.slug)
		return { page }
	}
</script>

<script>
	export let page;
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

{@html page.html}
