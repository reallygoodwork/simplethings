import { ComponentConfig } from '@configTypes/component/component'
import { ElementSchema } from '@configTypes/element/element'
import { createClassName } from '@utils/createClassName'
import { createComponentName } from '@utils/createComponentName'

export const generateSanityType = (configFile: ElementSchema) => {
  const componentName = createComponentName(configFile.name)
  const className = createClassName(configFile.name)

  const sanityTypes = `import {defineField} from 'sanity';

// Don't edit this file. This is a generated file. Edit the component file instead.
export const ${componentName} = defineField({
  name: '${className}',
  title: '${componentName}',
  type: 'object',
  fields: [
    ${configFile.componentProps
      ?.map((prop) => {
        return `defineField({
    name: '${prop.name}',
    title: '${prop.name}',
    type: '${prop.tsType}',
    ${prop.defaultValue ? `initialValue: '${prop.defaultValue}',` : ``}
    ${prop.options ? `options: { list: [${prop.options.map((option: string) => `'${option}'`)}] }` : ``}
  })`
      })
      .join(',\n')}
  ]
})\n
  `

  return sanityTypes
}
