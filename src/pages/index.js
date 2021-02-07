import sluggify from 'slug'
import pageData from './*.md'

export const pages = pageData
	.map(({ metadata, filename, html }) => {
		const slug = sluggify(filename.replace(/\.md$/, ''))
		metadata.date = new Date(metadata.date)
		return { ...metadata, filename, html, slug }
	})
	.sort((pageA, pageB) => {
		return pageA.date - pageB.date
	})

const indexPage = pages.find(page => page.slug === 'index')

export const findPage = slug => {
  return pages.find(page => page.slug === slug) || indexPage
}
