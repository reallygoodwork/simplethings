import { color } from "console-log-colors"
import fs from "fs"
import { createComponentName } from "@utils/createComponentName"
import { generateReactComponent } from "./generateReactComponent"
import { transformStylesToString } from "@utils/transformStylesToString"
import path from "path"
import { ElementSchema } from "@configTypes/element/element"

export async function generateReactLibrary(components: ElementSchema[], outputDir: string) {

  if (!fs.existsSync(outputDir + '/components')) {
    fs.mkdir(outputDir + '/components', (err) => {
      if (err) {
        console.error(err)
      }

      console.log(color.bold.bgCyanBright('React: Output directory created'))
    })


  }

  fs.writeFile(outputDir + '/components/index.ts', '', (err) => {
    if (err) {
      console.error(err)
    }

    console.log(color.bold.bgCyanBright('React: Index directory created'))
  })



  for (const component of components) {
    const result = await generateReactComponent(component)
    const styles = await transformStylesToString(component.styles || {})

    const componentStyles = path.join(outputDir, 'components', 'styles.css')
    if (!fs.existsSync(componentStyles)) {

      // Generate styles file
      fs.writeFile(
        outputDir + '/components/styles.css',
        '',
        (err) => {
          if (err) {
            console.error(err)
          }

          console.log(color.bold.bgCyanBright('React: Styles file created'))
        },
      )
    } else {
      fs.truncate(
        outputDir + '/components/styles.css',
        0,
        (err) => {
          if (err) {
            console.error(err)
          }

          console.log(color.bold.bgCyanBright('React: Styles file cleared'))
        },
      )
    }

    fs.appendFile(
      outputDir + '/components/index.ts',
      `export { ${createComponentName(component.name)} } from './${component.name?.toLowerCase()}';\n`,
      (err) => {
        if (err) {
          console.error(err)
        }

        console.log(color.bgCyanBright.bold(`React: Exported ${component.componentName}`))
      },
    )

    fs.appendFile(
      componentStyles,
      `@tailwind base;
@tailwind components;
@tailwind utilities;
`,
      (err) => {
        if (err) {
          console.error(err)
        }
        console.log(color.bgCyanBright.bold('React: Base Component styles added'))
      },
    )

    fs.appendFile(componentStyles, styles, (err) => {
      if (err) {
        console.error(err)
      }
      console.log(color.bgCyanBright.bold('React: Component styles added'))
    })

    fs.writeFile(outputDir + `/components/${component.name}.tsx`, result, (err) => {
      if (err) {
        console.error(err)
      }

      console.log(color.bgCyanBright.bold(`React: Component ${component.name} created`))
    })


  }
}