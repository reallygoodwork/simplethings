import { ElementSchema, Variant } from '@configTypes/element/element';
import { createClassName } from '@utils/createClassName';
import { createComponentName } from '@utils/createComponentName';
import handlebars, { SafeString } from 'handlebars';
import { camelCase, lowerCase } from 'lodash';

const templateSource = `import React from 'react';
{{#if dependencies}}
{{#each dependencies}}
import {{#if this.isDefault}}{{this.name}}{{else}}{{this.name}}{{/if}} from '{{this.packageName}}'
{{/each}}
{{/if}}
{{#if variants}}
import { cva, cx, VariantProps } from 'class-variance-authority'
{{/if}}

{{#if variants}}
const {{name}}CVA = cva('{{baseClassname}}', {
  variants: {
    {{#each variants}}
    {{#if options}}
    {{name}}: {
      {{#each options}}
      {{this}}: '',
      {{/each}}
    },
    {{/if}}
    {{#ifEquals tsType 'boolean'}}
    {{name}}:{
      true: '',
      false: '',
    },
    {{/ifEquals}}
    {{/each}}
  },
  defaultVariants: {
    {{#each variants}}
    {{name}}: {{#ifEquals tsType 'boolean'}}{{defaultValue}}{{else}}'{{defaultValue}}'{{/ifEquals}},
    {{/each}}
  },
  {{#if compoundVariants}}
  compoundVariants: [
    {{#each compoundVariants}}
    {
      {{#each this}}
      {{@key}}: '{{this}}',
      {{/each}}
    },
    {{/each}}
  ]
  {{/if}}
})
{{/if}}

export interface {{name}}Props extends React.HTMLAttributes<{{typeScriptType}}>{{#if variants}}, VariantProps<typeof {{name}}CVA>{{/if}} {
  className?: string;
  {{#each componentProps}}
  {{name}}: {{tsType}};
  {{/each}}
}

export const {{name}}: React.FC<{{name}}Props> = ({
  className = '',
  {{#each variants}}
  {{name}},
  {{/each}}
  {{#each componentProps}}
  {{name}},
  {{/each}}
}) => {
  return (
    <{{elementType}} className={
      {{~#if variants}}{{name}}CVA({
      {{#each variants}}
      {{name}},
      {{/each}}
      className
    })
      {{else}}
className
    {{~/if~}}
    }>
      {{> DomTreePartial}}
    </{{elementType}}>
  );
};`

const DomTreePartial = `{{#if children}}
{{#each children}}
{{#if this.isText}}
<{{this.elementType}} className="">
  {{#hasBoundProps this.boundProps}}
  {{#boundPropsAreText this.boundProps}}{{{{raw-helper}}}}{buttonText}{{{{/raw-helper}}}}{{/boundPropsAreText}}
  {{else}}
  {{this.textValue}}
  {{/hasBoundProps}}
</{{this.elementType}}>
  {{else}}
  {{#if this.isComponent}}
<{{this.name}} />
  {{else}}
  <{{this.elementType}}>
    {{> DomTreePartial}}
  </{{this.elementType}}>
{{/if}}
{{/if}}
{{/each}}
{{/if}}`

function generateComponentProps(
  variants: { name: string; tsType: string; defaultValue: string | boolean; options: any[] }[],
) {
  return variants
    .filter(variant => variant.tsType === 'string' && !variant.options)
    .map(variant => ({
      name: camelCase(variant.name),
      defaultValue: variant.defaultValue,
      tsType: variant.tsType,
    }));
}

function generateVariantProps(
  variants: { name: string; tsType: string; defaultValue: string | boolean; options: any[] }[],
) {
  return variants
    .filter(variant => (variant.tsType === 'string' && variant.options) || variant.tsType === 'boolean')
    .map(variant => ({
      name: camelCase(variant.name),
      defaultValue: variant.tsType === 'boolean' ? variant.defaultValue : camelCase(lowerCase(variant.defaultValue as string)),
      options: variant.options?.map(option => camelCase(lowerCase(option))) || [],
      tsType: variant.tsType,
    }));
}

interface Options {
  fn: (context?: any) => string;
  inverse: (context?: any) => string;
}

handlebars.registerHelper('ifEquals', function (this: any, arg1: any, arg2: any, options: Options): string {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

handlebars.registerHelper('json', function(context) {
  return JSON.stringify(context);
});

handlebars.registerHelper('hasBoundProps', function (this: any, boundProps: any, options: Options): string {
  return boundProps.length > 0 ? options.fn(this) : options.inverse(this);
});

handlebars.registerPartial('DomTreePartial', DomTreePartial);

handlebars.registerHelper('boundPropsAreText', function (this: any, boundProps: any, options: Options):
  | SafeString
  | string {
  const prop = boundProps.find((boundProp: any) => boundProp.figmaPropType === 'characters');
  return prop ? new handlebars.SafeString(`{${prop.name}}`) : options.inverse(this);
});

handlebars.registerHelper('raw-helper', function (options) {
  return options.fn();
});

const generateCompoundVariants = (variants?: Variant[], name?: string) => {
  if (!variants) return [];

  return variants.map(variant => {
    const className = `${name}-${variant.props?.map(prop => prop.value).join('-')}`;
    const variantObj: any = {
      className,
    };

    for (const prop of variant.props || []) {
      variantObj[camelCase(lowerCase(prop.name))] = typeof prop.value === 'string' ? camelCase(lowerCase(prop.value)) : prop.value;
    }

    return variantObj;
  });

};

export const generateReactComponent = async (configFile: ElementSchema) => {
  const template = handlebars.compile(templateSource);
  const context = {
    name: createComponentName(configFile.name),
    baseClassname: createClassName(configFile.name),
    elementType: configFile.elementType,
    dependencies: configFile.dependencies,
    componentProps: generateComponentProps((configFile.componentProps as any) || []),
    variants: generateVariantProps((configFile.componentProps as any) || []),
    typeScriptType: configFile.typeScriptType || 'HTMLDivElement',
    children: configFile.children,
    compoundVariants: generateCompoundVariants(configFile.variants, createClassName(configFile.name)),
  };

  return template(context);
};
