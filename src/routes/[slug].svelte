<script context="module">
	import {findPage} from '../pages'

	export function preload({ params }) {
		const page = findPage(params.slug)
		return { page }
	}
</script>

<script>
	export let page;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	:global(h1) {
		font-size: 3rem;
		font-weight: 700;
		margin: 1.2em 0;
		padding: 0;
		color: var(--highlight);
	}
	:global(h2) {
		font-size: 2.4rem;
		font-weight: 700;
		margin: 1.2em 0 .8em;
		padding: 0;
	}
	:global(a) {
		color: var(--important);
		text-decoration: none;
	}
	:global(ul) {
		margin: 0 0 0 2em;
		padding: 0;
	}
</style>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

{@html page.html}
