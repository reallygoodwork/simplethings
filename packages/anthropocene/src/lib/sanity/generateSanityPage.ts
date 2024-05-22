import { createClassName } from '@utils/createClassName'
import { createComponentName } from '@utils/createComponentName'

export const generateSanityPage = (components: any[] = []) => {
  return new Promise<string>(async (resolve) => {
    const componentsList = components.filter((component) => component !== 'Page')
    const imports = await Promise.all(componentsList
      .map(async (component) => {
        return `import { ${component} } from './${component}'`
      })).then((imports) => imports.join('\n'))


    const ofTypes = await Promise.all(componentsList
      .map(async (component) => {
        const name = createComponentName(component)
        return `{type: ${name}.name}`
      })).then((types) => types.join(', '))

    const sanityPage = `import {defineField} from 'sanity';
${imports}

// Don't edit this file. This is a generated file. Edit the component file instead.
export const Page = defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      group: 'seo'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [${ofTypes}],
      group: 'content'
    }),
    defineField({
      name: 'seoTitle', title: 'SEO Title', type: 'string', group: 'seo'
    }),
    defineField({
      name: 'seoKeywords', title: 'SEO Keywords', type: 'string', group: 'seo'
    }),
    defineField({
      name: 'seoDescription', title: 'SEO Description', type: 'string', group: 'seo'
    }),
    defineField({
      name: 'seoImage', title: 'SEO Image', type: 'image', group: 'seo'
    })
  ]
})
  `

    resolve(sanityPage)
  })
}
