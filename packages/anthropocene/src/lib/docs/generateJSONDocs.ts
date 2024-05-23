import { ElementSchema } from '@configTypes/element'
import { createComponentName } from '@utils/createComponentName'
import { createClassName } from '@utils/createClassName'
import json2md from 'json2md'

export function generateJsonDocs(config: ElementSchema) {
  return new Promise<string>(async (resolve, reject) => {
    const componentName = createComponentName(config.name)
    const content: any[] = []

    if (config.description) {
      content.push({ p: config.description })
    }

    if (config.componentProps) {
      content.push({ h2: 'Props' })

      content.push({
        table: {
          headers: ['Name', 'Type', 'Default', 'Options'],
          rows: config.componentProps?.map((prop) => {
            return [prop.name, prop.tsType, prop.defaultValue, prop.options?.join(', ') || '']
          }),
        },
      })
    }

    if (config.variants) {
      content.push({ h2: 'Compound Variant API' })

      for (const entry of config.variants) {
        content.push({ h3: `${entry.name} : ${entry.value}` })
        console.log(entry)
        content.push({
          code: {
            language: 'jsx live',
            content: [
              `import { ${componentName} } from '@simplethings/react'`,
              ``,
              `export default () => {`,
              `  return <${componentName} ${entry.props?.map((entry) => `${createClassName(entry.name)}={'${entry.value}'}`).join(' ')}  />`,
              `}`,
              ``,
            ],
          },
        })
      }

      // for (const [key, value] of Object.entries(config.variants)) {
      //   content.push({ h3: value.name })

      //   Object.keys(value).forEach((variantKey) => {
      //     // content.push({ h4: variantKey })

      //     // content.push({
      //     //   code: {
      //     //     language: 'jsx live',
      //     //     content: [
      //     //       `import { ${componentName} } from '@simplethings/react'`,
      //     //       ``,
      //     //       `export default () => {`,
      //     //       `  return <${componentName} label="Badge" ${key}={${variantKey === 'true' || variantKey === 'false' ? variantKey : `'${variantKey}'`}} />`,
      //     //       `}`,
      //     //       ``,
      //     //     ],
      //     //   },
      //     // })
      //   })
      // }
    }

    const json = json2md(content)

    resolve(json)
  })
}
