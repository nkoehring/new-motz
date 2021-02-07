<script>
	export let segment
	export let pages

  let menuItems = [...pages]
	menuItems.sort((pageA, pageB) => pageA.menuPosition - pageB.menuPosition)
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

	a {
		display: block;
		padding: .2em .2em .2em .3em;
		text-decoration: none;
		color: var(--fg);
		border-bottom: 1px solid var(--fg);
	}
	[aria-current] {
		padding: .5em;
		color: var(--highlight);
		background: var(--fg);
		background: linear-gradient(90deg, var(--highlight) 0%, white 1%,  white 99%, var(--highlight) 100%);
		border-bottom: none;
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
			color: var(--fg);
			background: none;
			border-bottom: 2px solid var(--highlight);
		}
		[aria-current]::before {
			content: ">";
			display: inline-block;
			margin: 0 .5em 0 -1em;
			color: var(--highlight);
		}
	}
</style>

<nav>
	<ol>
		{#each menuItems as page}
		<li>
			<a rel=prefetch data-slug="{page.slug}" data-segment="{segment}" aria-current="{segment === page.slug ? 'page' : undefined}" href="{`/${page.slug}`}">{page.link}</a>
		</li>
		{/each}
	</ol>
</nav>
