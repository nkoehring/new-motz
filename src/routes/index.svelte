<script>
	import { pages } from '../pages'
</script>

<h1>pages for debugging</h1>

{#each pages as page}
	<article>
		<a href={`/${page.slug}`}>
			<h2>{page.title}</h2>
		</a>
	</article>
{/each}
