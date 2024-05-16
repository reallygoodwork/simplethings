import fs from 'fs'
import { createComponentName } from '@utils/createComponentName'

import { generateSanityPage } from './generateSanityPage'
import { generateSanityType } from './generateSanityType'
import { color } from 'console-log-colors'

const generateSanityOutputDir = (outputDir: string) => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdir(outputDir, (err) => {
      if (err) {
        console.error(err)
      }
      console.log(color.bold.bgRedBright('Sanity: Output directory created'))
    })
  }

  fs.writeFile(outputDir + '/index.ts', '', (err) => {
    if (err) {
      console.error(err)
    }

    console.log(color.bold.bgRedBright('Sanity: Index file created'))
  })
}

export async function generateSanitySchema(components: any[], outputDir: string) {
  return new Promise<void>(async (resolve) => {
    generateSanityOutputDir(outputDir)

    const sanityComponents: any[] = []

    for await (const component of components) {
      const result = generateSanityType(component)
      const componentName = createComponentName(component.name)

      fs.writeFile(outputDir + `/${component.name}.ts`, result, (err) => {
        if (err) {
          console.error(err)
        }
        console.log(color.bold.bgRedBright(`Sanity: Component ${component.name} created`))
      })

      fs.appendFile(outputDir + '/index.ts', `import { ${componentName} } from './${component.name}';\n`, (err) => {
        if (err) {
          console.error(err)
        }
        console.log(color.bold.bgRedBright(`Sanity: Exported ${component.name}`))
      })

      sanityComponents.push('Page')
      sanityComponents.push(componentName)
    }

    fs.appendFile(
      outputDir + '/index.ts',
      `import { Page } from './page'

  export const sanityComponents = [${sanityComponents.join(', ')}]`,
      (err) => {
        if (err) {
          console.error(err)
        }
        console.log(color.bold.bgRedBright(`Sanity: Created Schema Exports`))
      },
    )

    const sanityPageType = await generateSanityPage(sanityComponents)
    fs.writeFile(outputDir + '/page.ts', sanityPageType, (err) => {})
    resolve()
  })
}
