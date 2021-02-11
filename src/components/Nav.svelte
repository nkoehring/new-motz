<script>
	export let segment
	export let pages

  let menuItems = [...pages]
	menuItems.sort((pageA, pageB) => pageA.menuPosition - pageB.menuPosition)

	$: currentPage = segment === undefined ? 'index' : segment
</script>

<style>
	nav {
		flex: 1 1 auto;
		background: var(--highlight);
		color: var(--bg);
	}

	ol {
		list-style: none;
		margin: 0;
		padding: 0;
		border-top: 3rem solid var(--highlight);
		border-bottom: 3rem solid var(--highlight);
	}

	li {
	  display: block;
		padding-top: .5rem;
	}

	a {
		display: block;
		padding: .2em .2em .2em .3em;
		text-decoration: none;
		color: var(--bg);
		border-bottom: 1px solid var(--fg);
	}

	[aria-current] {
		background: var(--fg);
		background: linear-gradient(90deg, var(--highlight) 0%, white 1%,  white 99%, var(--highlight) 100%);
		border-bottom: none;
	}

	[aria-current] > a {
		padding: .5em;
		color: var(--highlight);
	}

	@media (prefers-color-scheme: dark) {
		nav {
			background: var(--bg);
			color: var(--fg);
			border-right: 2px solid var(--highlight);
		}
		ol {
			border-top-color: var(--bg);
			border-bottom-color: var(--bg);
		}
		a {
			color: var(--highlight);
			padding: .5em;
			border-bottom: 2px solid var(--highlight);
		}
		[aria-current] {
			background: none;
			border-bottom: 2px solid var(--highlight);
		}
		[aria-current] > a {
			color: var(--fg);
		}
		[aria-current] > a::before {
			content: ">";
			display: inline-block;
			margin: 0 .5em 0 -1em;
			color: var(--highlight);
			font-weight: 600;
		}
	}
</style>

<nav>
	<ol>
		{#each menuItems as page}
		<li aria-current="{ currentPage === page.slug ? 'page' : undefined }">
			<a rel=prefetch href="{`/${page.slug !== 'index' ? page.slug : ''}`}">{page.link}</a>
		</li>
		{/each}
	</ol>
</nav>
