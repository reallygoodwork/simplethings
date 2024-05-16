import fs from 'fs'
import path from 'path'

import { ElementSchema } from '@configTypes/element'
import { color } from 'console-log-colors'
import { generateJsonDocs } from './generateJSONDocs'
import { createComponentName } from '@utils/createComponentName'

export const generateDocs = async (components: ElementSchema[], outputDir: string) => {
  const componentFile = path.join(outputDir, 'components.ts')
  const sideBarNav = []

  if (!fs.existsSync(outputDir)) {
    fs.mkdir(outputDir, (err) => {
      if (err) {
        console.error(err)
      }

      console.log(color.bold.bgYellowBright('Docs`: Output directory created'))
    })
  }

  if (!fs.existsSync(componentFile)) {
    fs.writeFile(componentFile, '', (err) => {
      if (err) {
        console.error(err)
      }
    })
  } else {
    fs.truncate(componentFile, 0, (err) => {
      if (err) {
        console.error(err)
      }

      console.log(color.bold.bgYellowBright('Docs: Components file cleared'))
    })
  }

  for (const component of components) {
    const componentName = createComponentName(component.name)
    const heading = `---
title: ${componentName}
description: ${component.description}
---
`

    const jsonDocString = await generateJsonDocs(component)
    const result = heading + jsonDocString

    fs.writeFile(path.join(outputDir, `${component.name}.mdx`), result, (err) => {
      if (err) {
        console.error(err)
      }

      console.log(color.bold.bgGreenBright(`Docs: Component ${component.name} created`))
    })

    sideBarNav.push(component.name)
  }

  fs.appendFile(outputDir + '/components.ts', `export const components = [${sideBarNav.map((component) => `'${component}'`).join(', ')}]`, (err) => {
    if (err) {
      console.error(err)
    }

    console.log(color.bold.bgGreenBright('Docs: Components file updated'))
  })
}