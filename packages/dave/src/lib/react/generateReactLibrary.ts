import fs from 'node:fs';
import { promises as fsPromises } from 'node:fs';
import { rimraf } from 'rimraf'
import path from 'path'
import { ElementSchema } from '@configTypes/element/element'
import { createComponentName } from '@utils/createComponentName'
import { transformStylesToString } from '@utils/transformStylesToString'
import { color } from 'console-log-colors'
import { camelCase, lowerCase } from "lodash";

import { generateReactComponent } from './generateReactComponent'

export async function generateReactLibrary(components: ElementSchema[], outputDir: string, typography?: string) {
  // await rimraf(outputDir + '/components')

  if (!fs.existsSync(outputDir  + '/components')) {
    try {
      await fsPromises.mkdir(outputDir + '/components')
      console.log(color.bold.bgCyanBright('React: Index directory created'))
    } catch (err) {
      console.error(err)
    }
  }

  if (!fs.existsSync(outputDir + '/components/index.ts')) {
    try {
      await fsPromises.writeFile(outputDir + '/components/index.ts', '')
      console.log(color.bold.bgCyanBright('React: Index directory created'))
    } catch (err) {
      console.error(err)
    }
  } else {
    try {
      fs.truncateSync(outputDir + '/components/index.ts', 0)
      console.log(color.bold.bgCyanBright('React: Index directory cleared'))
    } catch (err) {
      console.error(err)
    }
  }

  const componentStyles = path.join(outputDir, 'components', 'styles.css')
    if (!fs.existsSync(componentStyles)) {
      // Generate styles file
      try {
        await fsPromises.writeFile(componentStyles, `html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        ${typography ? typography : ''}`)
        console.log(color.bold.bgCyanBright('React: Styles file created'))
      } catch (err) {
        console.error(err)
      }
    } else {
      try {
        fs.truncateSync(componentStyles, 0)
        console.log(color.bold.bgCyanBright('React: Styles file cleared'))
      } catch (err) {
        console.error(err)
      }
    }

    try {
      await fsPromises.appendFile(componentStyles, `html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
${typography ? typography : ''}`)
      console.log(color.bgCyanBright.bold('React: Base Component styles added'))
    } catch (err) {
      console.error(err)
    }

  for (const component of components) {
    const result = await generateReactComponent(component)
    const styles = await transformStylesToString(component)



    try {
      await fsPromises.appendFile(outputDir + '/components/index.ts', `export { ${createComponentName(component.name)}, type ${createComponentName(component.name)}Props } from './${camelCase(lowerCase(component.name))}';\n`)
      console.log(color.bgCyanBright.bold(`React: Exported ${component.componentName}`))
    } catch (err) {
      console.error(err)
    }

//     try {
//       await fsPromises.appendFile(componentStyles, `
// @layer simplethings, theme, layout, utilities;
// `)
//       console.log(color.bgCyanBright.bold('React: Base Component styles added'))
//     } catch (err) {
//       console.error(err)
//     }

    // try {
    //   await fsPromises.appendFile(componentStyles, styles)
    //   console.log(color.bgCyanBright.bold('React: Component styles added'))
    // } catch (err) {
    //   console.error(err)
    // }

    try {
      await fsPromises.writeFile(outputDir + `/components/${camelCase(lowerCase(component.name))}.tsx`, result)
      console.log(color.bgCyanBright.bold(`React: Component ${camelCase(lowerCase(component.name))} created`))
    } catch (err) {
      console.error(err)
    }
  }
}
