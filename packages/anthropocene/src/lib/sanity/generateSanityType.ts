import { ElementSchema } from '@configTypes/element/element'
import { createClassName } from '@utils/createClassName'
import { createComponentName } from '@utils/createComponentName'
import handlebars from 'handlebars'

export const generateSanityType = (configFile: ElementSchema) => {
  return new Promise<string>((resolve) => {
    const template = handlebars.compile(templateSource)
    handlebars.registerHelper('loud', function (aString) {
      if (typeof aString === 'boolean') return aString
      if (typeof aString === 'string') return `"` + aString + `"`
    })

    handlebars.registerHelper('isAny', function (aString) {
      return aString === 'any' ? 'string' : aString
    })

    const context = {
      name: createComponentName(configFile.name),
      baseClassname: createClassName(configFile.name),
      elementType: configFile.elementType,
      dependencies: configFile.dependencies,
      componentProps: configFile.componentProps,
      variants: configFile.variants,
      children: configFile.children,
    }

    resolve(template(context))
  })
}

const templateSource = `import { defineField } from 'sanity';

export const {{name}} = defineField({
  name: '{{baseClassname}}',
  title: '{{name}}',
  type: 'object',
  fields: [
    {{#if componentProps}}
    {{#each componentProps}}
    defineField({
      name: '{{name}}',
      title: '{{name}}',
      type: '{{isAny this.tsType}}',
      {{#if defaultValue}}
      initialValue: {{{loud this.defaultValue}}},
      {{/if}}
      {{#if options}}
      options: { list: [{{#each options}}'{{this}}'{{#unless @last}}, {{/unless}}{{/each}}] }
      {{/if}}
    }),
    {{/each}}
    {{else}}
    defineField({
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
    }),
    {{/if}}
    {{#if variants}}
    {{/if}}
  ]
})
`
