import { promises as fsPromises } from 'node:fs';
import { rimraf } from 'rimraf'
import { createComponentName } from '@utils/createComponentName'

import { generateSanityPage } from './generateSanityPage'
import { generateSanityType } from './generateSanityType'
import { color } from 'console-log-colors'
import { ElementSchema } from '@configTypes/element/element';

export async function generateSanitySchema(components: ElementSchema[], outputDir: string) {

  await rimraf(outputDir)

  try {
    await fsPromises.mkdir(outputDir)
    console.log(color.bold.bgRedBright('Sanity: Output directory created'))
  } catch (err) {
    console.error(err)
  }

  try {
    await fsPromises.writeFile(outputDir + '/index.ts', '')
    console.log(color.bold.bgRedBright('Sanity: Index file created'))
  } catch (err) {
    console.error(err)
  }

  const sanityComponents: any[] = []

  for (const component of components) {
    const result = await generateSanityType(component)
    const componentName = createComponentName(component.name)

    try {
      await fsPromises.writeFile(outputDir + `/${component.name}.ts`, result)
      console.log(color.bold.bgRedBright(`Sanity: Component ${component.name} created`))
    } catch (err) {
      console.error(err)
    }

    try {
      await fsPromises.appendFile(outputDir + `/index.ts`, `import { ${componentName} } from './${component.name}';\n`)
      console.log(color.bold.bgRedBright(`Sanity: Exported ${component.name}`))
    } catch (err) {
      console.error(err)
    }

    sanityComponents.push(componentName)
  }


  sanityComponents.push('Page')


  const sanityPageType = await generateSanityPage(sanityComponents)

  try {
    await fsPromises.writeFile(outputDir + '/page.ts', sanityPageType)
    console.log(color.bold.bgRedBright('Sanity: Page created'))
  } catch (err) {
    console.error(err)
  }

  try {
    await fsPromises.appendFile(outputDir + '/index.ts', `import { Page } from './page'

export const sanityComponents = [${sanityComponents.join(', ')}]`,)
  } catch (err) {
    console.error(err)
  }
}
