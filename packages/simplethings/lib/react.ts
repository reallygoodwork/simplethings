import fs from "fs";
import path from "path";
import { generateReactComponent } from "@simplethings/anthropocene";
import {kebabCase} from 'lodash';

export const generateStyles = (styles: any) => {
  let styleString = '';

  styles.forEach((style) => {
    const key = Object.keys(style);

    console.log(style[key])

    styleString += `\n.${key[0]} {\n`;

    Object.keys(style[key]).forEach((prop) => {
      styleString += `  ${kebabCase(prop)}: ${style[key][prop]};\n`;
    })


    styleString += '}\n';
  })

  return styleString;
}

export function generateReactLibrary(components: any[]) {
  const outputDir = path.join(__dirname, '..', '..', 'ui-react', 'src', 'components');

  if (!fs.existsSync(outputDir + '/output')) {
    fs.mkdir(outputDir + '/output', (err) => {
      if (err) {
        console.error(err);
      }

      console.log('Output directory created');
    });
  }

  fs.writeFile(outputDir + '/output/index.ts', '', (err) => {
    if (err) {
      console.error(err);
    }

    console.log('Index file created');
  })


  for (const component of components) {
    const result = generateReactComponent(component.config);
    const styles = generateStyles(component.config.style);

    const componentStyles = path.join(__dirname, '..', '..', 'ui-react', 'src', 'components', 'output', 'styles.css')
  if (!fs.existsSync(componentStyles)) {
    fs.writeFile(path.join(__dirname, '..', '..', 'ui-react', 'src', 'components', 'output') + '/styles.css', '', (err) => {
      if (err) {
        console.error(err)
      }
    })
  } else {
    fs.truncate(path.join(__dirname, '..', '..', 'ui-react', 'src', 'components', 'output') + '/styles.css', 0, (err) => {
      if (err) {
        console.error(err)
      }

      console.log('Docs: Components Styles cleared')
    })
  }

    fs.appendFile(componentStyles, `@tailwind base;
@tailwind components;
@tailwind utilities;
`, (err) => {
      if (err) {
        console.error(err);
      }

      console.log('React: Base Component styles added');
    })

    fs.appendFile(componentStyles, styles, (err) => {
      if (err) {
        console.error(err);
      }

      console.log('React: Component styles added');
    });

    fs.writeFile(outputDir + `/output/${component.name}.tsx`, result, (err) => {
      if (err) {
        console.error(err);
      }

      console.log(`Component ${component.name} created`);
    });

    fs.writeFile(outputDir + `/output/${component.path}`, result, (err) => {
      if (err) {
        console.error(err);
      }

      console.log(`Component ${component.componentName} created`);
    });

    fs.appendFile(outputDir + '/output/index.ts', `export { ${component.componentName} } from './${component.name}';\n`, (err) => {
      if (err) {
        console.error(err);
      }

      console.log(`Exported ${component.componentName}`);
    });
  }
}