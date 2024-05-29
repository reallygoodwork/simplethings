import path from 'path'
import { ElementSchema } from '@configTypes/element/element'
import { createComponentName } from '@utils/createComponentName'
import handlebars, { SafeString } from 'handlebars'
import { camelCase, lowerCase } from 'lodash'

import { ComponentPartial, DomTreePartial, templateSource } from './template'

handlebars.registerPartial('ComponentPartial', ComponentPartial)

function generateComponentProps(
  props: { iterable?: boolean; name: string; tsType: string; defaultValue: string | boolean; options: any[] }[],
) {
  const properties = props.map((variant) => ({
    name: variant.name,
    defaultValue: variant.iterable ? '[]' : variant.defaultValue,
    tsType: variant.options ? variant.options.map((option) => `'${option}'`).join(' | ') : variant.tsType,
  }))

  return properties
}

function generateVariantProps(
  variants: { name: string; tsType: string; defaultValue: string | boolean; options: any[]; className?: string }[],
) {
  return (
    variants
      // .filter(variant => (variant.tsType === 'string' && variant.options) || variant.tsType === 'boolean')
      .map((variant) => ({
        name: camelCase(variant.name),
        defaultValue:
          variant.tsType === 'boolean' ? variant.defaultValue : camelCase(lowerCase(variant.defaultValue as string)),
        className: variant.className,
        options: variant.options?.map((option) => camelCase(lowerCase(option))) || [],
        // tsType: variant.tsType,
      }))
  )
}

interface Options {
  fn: (context?: any) => string
  inverse: (context?: any) => string
}

handlebars.registerHelper('ifEquals', function (this: any, arg1: any, arg2: any, options: Options): string {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this)
})

handlebars.registerHelper('json', function (context) {
  return JSON.stringify(context, null, 2)
})

handlebars.registerHelper('renderPropHelper', function (this: any) {

  if (this.tsType === 'boolean') {
    return this.defaultValue
  } else if (this.tsType === 'string') {
    return `\`${this.defaultValue}\``
  } else if (this.defaultValue === '[]') {
    return '[]'
  } else {
    return `'${this.defaultValue}'`
  }

})

handlebars.registerHelper('renderMap', function (this: any, name: string): string {

  return `${name.toLowerCase()}s`
})

handlebars.registerHelper('isEmptyString', function (this: any, arg1: any, options: Options) {
  return arg1?.length === 0 ? options.fn(this) : options.inverse(this)
})

handlebars.registerHelper('hasBoundProps', function (this: any, boundProps: any, options: Options): string {
  return boundProps?.length > 0 ? options.fn(this) : options.inverse(this)
})

handlebars.registerHelper('renderImage', function (this: any, boundProps: any, options: Options): string | undefined {
  if (boundProps.find((boundProp: any) => boundProp.figmaRef === 'image')) {
    return `<img src={${boundProps.find((boundProp: any) => boundProp.figmaRef === 'image').name}} alt={imageAlt} />`
  }
})

handlebars.registerHelper('shouldIterate', function (this: any, iterable: any, options: Options): string {
  return iterable ? options.fn(this) : options.inverse(this)
})

handlebars.registerHelper('toLowerCase', function (str) {
  return str?.toLowerCase()
})

handlebars.registerPartial('DomTreePartial', DomTreePartial)

handlebars.registerHelper('handleIterable', function (this: any) {
  if (this.iterable) {
    return '[]'
  }
  else {
    return `<${this.elementType} className={${this.className}}>{${this.children.map((child: any) => handlebars.compile(DomTreePartial)(child)).join('')}</${this.elementType}>`
  }
})

handlebars.registerHelper('boundPropsAreText', function (this: any, boundProps: any, options: Options):
  | SafeString
  | string {
  const prop = boundProps.find((boundProp: any) => boundProp.figmaRef === 'characters')
  return prop ? new handlebars.SafeString(`{${prop.name}}`) : options.inverse(this)
})

handlebars.registerHelper('boundPropsVisible', function (this: any, boundProps: any, options: Options):
  | SafeString
  | string {
  const prop = boundProps.find((boundProp: any) => boundProp.figmaRef === 'visible')
  return prop ? options.fn(this) : options.inverse(this)
})

handlebars.registerHelper('renderVisibleProp', function (this: any): SafeString | string {
  console.log(this.boundProps)
  const prop = this.boundProps.find((boundProp: any) => boundProp.figmaRef === 'visible')
  return prop.name
})

handlebars.registerHelper('asciim', function (text) {
  const result = Handlebars.Utils.escapeExpression(text)
  return new handlebars.SafeString(result)
})

handlebars.registerHelper('raw-helper', function (options) {
  return options.fn()
})




function createCXString(variant: any) {
  if (!variant) {
    return ''
  }

  return Object.entries(variant.properties).map(([key, value]) => {
    return `${key} === ${typeof value === 'string' ? `'${value}'` : value}`
  }).join(' && ') + ' && ' + `'${variant.className}'`
}

handlebars.registerHelper('renderClassName', function (this: any) {

  if (this.isText) {
    if (this.variants?.length > 1) {
      return `"${this.variants[0].textStyleClass}"`
    } else {
      return `"${this.textStyleClass || this.className}"`
    }
  }

  if (this.variants && this.variants.length > 1) {
    return `{cx(${this.variants?.map((variant: any) => createCXString(variant)).join(', ')})}`
  } else {
    return `"${this.className}"`
  }
})

export const generateReactComponent = async (configFile: ElementSchema) => {
  const template = handlebars.compile(templateSource, { noEscape: true })


  const context = {
    isComponent: configFile.isComponent,
    name: createComponentName(configFile.name),
    baseClassname: configFile.className,
    elementType: configFile.elementType,
    dependencies: configFile.dependencies,
    componentProps: generateComponentProps((configFile.componentProps as any) || []),
    variants: generateVariantProps((configFile.variants as any) || []),
    typeScriptType: configFile.typeScriptType || 'HTMLDivElement',
    children: configFile.children,
    compoundVariants: configFile.compoundVariants,
    defaultVariants: configFile.defaultVariants,
    variantOptions: configFile.variantOptions,
    updated: configFile.updated,
  }

  return template(context)
}
