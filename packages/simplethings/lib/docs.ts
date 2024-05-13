import fs from 'fs'
import path from 'path'
import json2md from 'json2md'
import { lowerCase } from 'lodash'

import { ComponentConfig, createComponentName } from '@simplethings/anthropocene'

export function generateDocs(components: any[]) {
  const outputDir = path.join(__dirname, '..', '..', '..', 'apps', 'docs', 'src', 'content', 'docs', 'components')

  if (!fs.existsSync(outputDir)) {
    fs.mkdir(outputDir, (err) => {
      if (err) {
        console.error(err)
      }

      console.log('Docs: Output directory created')
    })
  }

  const componentFile = path.join(__dirname, '..', '..', '..', 'apps', 'docs', 'components.ts')
  const sideBarNav = []
  if (!fs.existsSync(componentFile)) {
    fs.writeFile(path.join(__dirname, '..', '..', '..', 'apps', 'docs') + '/components.ts', '', (err) => {
      if (err) {
        console.error(err)
      }
    })
  } else {
    fs.truncate(path.join(__dirname, '..', '..', '..', 'apps', 'docs') + '/components.ts', 0, (err) => {
      if (err) {
        console.error(err)
      }

      console.log('Docs: Components file cleared')
    })
  }

  for (const component of components) {
    const heading = `---
title: ${createComponentName(component.name)}
description: ${component.config.description}
---
`

    const result = heading + generateJsonDocs(component.config)

    fs.writeFile(outputDir + `/${component.name}.mdx`, result, (err) => {
      if (err) {
        console.error(err)
      }

      console.log(`Docs: Component ${component.name} created`)
    })

    sideBarNav.push(component.name)
  }

  fs.appendFile(
    path.join(__dirname, '..', '..', '..', 'apps', 'docs') + '/components.ts',
    `export const components = [
  ${sideBarNav.map((component) => {
    return `{ label: '${createComponentName(component)}', link: '/components/${lowerCase(component)}' }`
  })
}
]`,
    (err) => {
      if (err) {
        console.error(err)
      }

      console.log('Docs: Components file updated')
    },
  )
}

export function generateJsonDocs(config: ComponentConfig) {
  const content: any[] = [{ h1: createComponentName(config.name) }]

  if (config.description) {
    content.push({ p: config.description })
  }

  if (config.props) {
    content.push({ h2: 'Props' })

    content.push({
      table: {
        headers: ['Name', 'Type', 'Default', 'Options'],
        rows: config.props?.map((prop) => {
          return [prop.name, prop.type, prop.defaultValue, prop.options?.join(', ') || '']
        }),
      },
    })
  }

  if (config.cvaSchema) {
    content.push({ h2: 'Compound Variant API' })

    for (const [key, value] of Object.entries(config.cvaSchema.variants)) {
      content.push({ h3: key })

      Object.entries(value).forEach(([variantKey, value]) => {
        content.push({ h4: variantKey })

        content.push({
          code: {
            language: 'jsx live',
            content: [
              `import { ${createComponentName(config.name)} } from '@simplethings/react'`,
              ``,
              `export default () => {`,
              `  return <${createComponentName(config.name)} label="Badge" ${key}={${variantKey === 'true' || variantKey === 'false' ? variantKey : `'${variantKey}'`}} />`,
              `}`,
              ``,
            ],
          },
        })
      })
    }
  }

  return json2md(content)
}
