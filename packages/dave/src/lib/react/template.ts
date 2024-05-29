export const templateSource = `// Generated with Dave
// {{updated}}
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
{{#if dependencies}}
{{#each dependencies}}
import {{#if this.isDefault}}{{this.name}}{{else}}{{this.name}}{{/if}} from '{{this.packageName}}'
{{/each}}
{{/if}}
{{#if variants}}
import { cva, cx, VariantProps } from 'class-variance-authority'
{{else}}
import { cx } from 'class-variance-authority'
{{/if}}

export interface {{name}}Props extends React.HTMLAttributes<{{typeScriptType}}>{{#if variants}}, VariantProps<typeof {{name}}CVA>{{/if}} {
  className?: string;
  {{#each componentProps}}
  {{name}}: {{tsType}};
  {{/each}}
}

export const {{name}}: React.FC<{{name}}Props> = ({
  className = '',
  {{#each componentProps}}
  {{name}} = {{#renderPropHelper this}}{{/renderPropHelper}},
  {{/each}}
}) => {
  return (
    <{{elementType}} className={
        {{~#if variants}}{{name}}CVA({ {{~#each variantOptions}} {{~@key}}, {{/each}}className })
      {{~else~}}
cx('{{baseClassname}}', className)
    {{~/if~}}
    }>
      {{> DomTreePartial}}
    </{{elementType}}>
  );
};

{{#if variants}}
const {{name}}CVA = cva('{{baseClassname}}', {
  variants: {{json variantOptions}},
  defaultVariants: {{json defaultVariants}},
  compoundVariants: {{json compoundVariants}}
})
{{/if}}

`

export const DomTreePartial = `{{#if children}}
{{#each children}}
{{#if this.isText}}
{{#isEmptyString this.elementType}}
{{#hasBoundProps this.boundProps}}
  {{#boundPropsAreText this.boundProps}}{{{{raw-helper}}}}{buttonText}{{{{/raw-helper}}}}{{/boundPropsAreText}}
  {{else}}
  {{this.textValue}}
{{/hasBoundProps}}
{{else}}
<{{this.elementType}} className={{#renderClassName this}}{{/renderClassName}}>
  {{#hasBoundProps this.boundProps}}
  {{#boundPropsAreText this.boundProps}}{{{{raw-helper}}}}{buttonText}{{{{/raw-helper}}}}{{/boundPropsAreText}}
  {{else}}
  {{this.textValue}}
  {{/hasBoundProps}}
</{{this.elementType}}>
{{/isEmptyString}}
  {{else}}
  {{#if this.isComponent}}
  {{#hasBoundProps this.boundProps}}
  {{#boundPropsVisible this.boundProps}}
{ {{~renderVisibleProp}} ?
  {{> ComponentPartial}}
: null}
  {{/boundPropsVisible}}
  {{else}}
  {{#shouldIterate this.isIterable}}
{ {{~renderMap this.name}}.map(props => <{{this.name}} {...props} />) }
  {{else}}
  {{> ComponentPartial}}
  {{/shouldIterate}}
  {{/hasBoundProps}}
{{else}}
  {{#hasBoundProps this.boundProps}}
  {{#boundPropsVisible this.boundProps}}
{ {{~renderVisibleProp}} ?
  <{{this.elementType}} className={{#renderClassName this}}{{/renderClassName}}>
    {{> DomTreePartial}}
  </{{this.elementType}}>
: null}
  {{/boundPropsVisible}}
  {{else}}
<{{this.elementType}} className={{#renderClassName this}}{{/renderClassName}}>
  {{> DomTreePartial}}
</{{this.elementType}}>
  {{/hasBoundProps}}
{{/if}}
{{/if}}
{{/each}}
{{/if}}`

export const ComponentPartial = `<{{this.name}} {{#each this.componentProps}}{{name}}={ {{~name~}} } {{/each}} />
`