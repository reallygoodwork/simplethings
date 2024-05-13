import { ComponentConfig, createComponentName } from "@simplethings/anthropocene";
import fs from "fs";
import path from "path";
import {lowerCase, camelCase} from 'lodash';

export async function generateSanityTypes(components: any[]) {
  const outputDir = path.join(__dirname, '..', '..', '..', 'apps', 'site', 'src', 'sanity');

  if (!fs.existsSync(outputDir)) {
    fs.mkdir(outputDir, (err) => {
      if (err) {
        console.error(err);
      }
      console.log('Sanity: Output directory created');
    });
  }

  fs.writeFile(outputDir + '/index.ts', '', (err) => {
    if (err) {
      console.error(err);
    }

    console.log('Sanity: Index file created');
  })

  const sanityComponents: any[] = []

  for await (const component of components) {

    const result = generateSanityType(component.config);

    fs.writeFile(outputDir + `/${component.name}.ts`, result, (err) => {
      if (err) {
        console.error(err);
      }
      console.log(`Sanity: Component ${component.name} created`);
    });

    fs.appendFile(outputDir + '/index.ts', `import { ${createComponentName(component.name)} } from './${component.name}';\n`, (err) => {
      if (err) {
        console.error(err);
      }
      console.log(`Sanity: Exported ${component.name}`);
    });


    sanityComponents.push('Page')
    sanityComponents.push(createComponentName(component.name))
  }

  fs.appendFile(outputDir + '/index.ts', `import { Page } from './page'

export const sanityComponents = [${sanityComponents.join(', ')}]`, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`Sanity: Created Schema Exports`);
  });

  fs.writeFile(outputDir + '/page.ts', generateSanityPage(sanityComponents), (err) => { })
}

function generateSanityType(configFile: ComponentConfig) {

  return `import {defineField} from 'sanity';

// Don't edit this file. This is a generated file. Edit the component file instead.
export const ${createComponentName(configFile.name)} = defineField({
  name: '${camelCase(lowerCase(configFile.name))}',
  title: '${createComponentName(configFile.name)}',
  type: 'object',
  fields: [
    ${configFile.props?.map((prop) => {
      return `defineField({
    name: '${prop.name}',
    title: '${prop.name}',
    type: '${prop.type}',
    ${prop.defaultValue ? `initialValue: '${prop.defaultValue}',` : ``}
    ${prop.options ? `options: { list: [${prop.options.map((option) => `'${option}'` )}] }` : ``}
  })`
    }).join(',\n')}
  ]
})\n
  `
}

function generateSanityPage(components: any[] = []) {

  const imports = components.filter((component) => component !== 'Page')

  return `import {defineField} from 'sanity';
${imports.map((component) => {
  return `import { ${component} } from './${camelCase(lowerCase(component))}'`
}).join('\n')}

// Don't edit this file. This is a generated file. Edit the component file instead.
export const Page = defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [${imports.map((component) => `{type: ${createComponentName(component)}.name}`).join(', ')}]
    })
  ]
})
  `
}