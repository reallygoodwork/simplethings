import { ElementSchema } from '@configTypes/element/element'
import { createClassName } from '@utils/createClassName'
import { createComponentName } from '@utils/createComponentName'
import handlebars from 'handlebars'

export const generateReactComponent = async (configFile: ElementSchema) => {

  const template = handlebars.compile(templateSource)

  const context = {
    name: createComponentName(configFile.name),
    baseClassname: createClassName(configFile.name),
    elementType: configFile.elementType,
    dependencies: configFile.dependencies,
    componentProps: configFile.componentProps,
    variants: configFile.variants,
    typeScriptType: configFile.typeScriptType || 'HTMLDivElement',
    children: configFile.children,
  }

  return template(context)
}

const templateSource = `import React from 'react';
{{#if dependencies}}
{{#each dependencies}}
import {{#if this.isDefault}}{{this.name}}{{else}}{{this.name}}{{/if}} from '{{this.packageName}}'
{{/each}}
{{/if}}
{{#if variants}}
import { cva, VariantProps } from 'class-variance-authority'
{{/if}}

{{#if variants}}
const {{name}}CVA = cva('{{baseClassname}}', {
  variants: {

  }
})
{{/if}}

export interface {{name}}Props extends React.HTMLAttributes<HTMLDivElement>{{#if variants}}, VariantProps<typeof {{name}}CVA>{{/if}} {
  className?: string;
}

export const {{name}}: React.FC<{{name}}Props> = ({ className = '' }) => {
  return (
    <{{elementType}} className={className}>
      {{#if children}}
        {{#each children}}
          {{#if this.isText}}
       <{{this.elementType}}>{{#if this.boundProps}}{{{this.boundProps.name}}}{{/if}}{{this.textValue}}</{{this.elementType}}>
          {{else}}
            <{{>this.name}} />
          {{/if}}
        {{/each}}
      {{/if}}
    </{{elementType}}>
  );
};`
