import fs, { promises as fsPromises } from 'node:fs'
import path from 'path'
import { ElementSchema } from '@configTypes/element'
import { createComponentName } from '@utils/createComponentName'
import { color } from 'console-log-colors'

import { generateJsonDocs } from './generateJSONDocs'

export const generateDocs = async (components: ElementSchema[], outputDir: string) => {
  const componentFile = path.join(outputDir, 'components.ts')
  const sideBarNav = []

  if (!fs.existsSync(outputDir)) {
    try {
      await fsPromises.mkdir(outputDir)
      console.log(color.bold.bgYellowBright('Docs: Output directory created'))
    } catch (err) {
      console.error(err)
    }
  }

  if (!fs.existsSync(componentFile)) {
    try {
      await fsPromises.writeFile(componentFile, '')
      console.log(color.bold.bgYellowBright('Docs: Components file created'))
    } catch (err) {
      console.error(err)
    }
  } else {
    try {
      await fsPromises.truncate(componentFile, 0)
      console.log(color.bold.bgYellowBright('Docs: Components file cleared'))
    } catch (err) {
      console.error(err)
    }
  }

  for (const component of components) {
    const componentName = createComponentName(component.name)
    const jsonDocString = await generateJsonDocs(component)
    const docsPath = path.join(outputDir, 'src', 'content', 'docs', 'components', `${component.name}.mdx`)

    const heading = `---
title: ${componentName}
description: ${component.description}
---
`
    const result = heading + jsonDocString

    try {
      await fsPromises.writeFile(docsPath, result)
      console.log(color.bold.bgGreenBright(`Docs: Component ${component.name} created`))
    } catch (err) {
      console.error(err)
    }

    sideBarNav.push({ label: componentName, link: `/components/${component.name}` })
  }

  try {
    await fsPromises.appendFile(
      componentFile,
      `export const components = [${sideBarNav.map((component) => JSON.stringify(component, null, 2).replace(/"([^"]+)":/g, '$1:')).join(', ')}]`,
    )
    console.log(color.bold.bgGreenBright('Docs: Components file updated'))
  } catch (err) {
    console.error(err)
  }
}
