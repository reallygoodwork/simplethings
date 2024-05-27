import { camelize } from './utils'

export async function generateComponentProps(node: SceneNode) {
  const hasProperties = node.parent?.type === 'PAGE' && node.type === 'COMPONENT' || node.type === 'COMPONENT_SET'

  const props = []

  if (hasProperties && node.componentPropertyDefinitions) {
    Object.keys(node.componentPropertyDefinitions).forEach((key) => {
      const prop = node.componentPropertyDefinitions[key]
      props.push({
        figmaRef: key,
        name: camelize(key.split('#')[0]),
        tsType: prop?.type === 'TEXT' || prop?.type === 'VARIANT' ? 'string' : 'boolean',
        defaultValue: prop?.type === 'VARIANT' && prop?.variantOptions?.length > 0 ? camelize(prop.defaultValue as string) : prop.defaultValue,
        options: prop?.variantOptions?.map((option) => camelize(option)),
      })
    })
  }


  if (node.type === 'COMPONENT_SET' || node.type === 'COMPONENT') {

    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i]

      if (child.type === 'INSTANCE') {
        const parent = await child.getMainComponentAsync()
        Object.keys(child.componentProperties).forEach(async (key) => {
          let object = {
            figmaRef: key,
            name: camelize(key.split('#')[0].toLowerCase()),
            defaultValue: child.componentProperties[key]?.type === 'TEXT' ? child.componentProperties[key]?.value : child.componentProperties[key]?.type === 'VARIANT' ? camelize(child.componentProperties[key]?.value as string) : child.componentProperties[key]?.value === 'true' ? true : false,
            tsType: child.componentProperties[key]?.type === 'TEXT' ? 'string' : child.componentProperties[key]?.type === 'VARIANT' ? 'any' : 'boolean',
          }

          if (parent.parent?.type === 'COMPONENT_SET') {
            object['options'] = parent.parent?.variantGroupProperties?.[key]?.values.map((option) => camelize(option))
          }

          props.push(object)
        })
      }
    }

    // node.children.forEach(async (child) => {
    //   if (child.type === 'INSTANCE') {
    //     const parent = await child.getMainComponentAsync()
    //     Object.keys(child.componentProperties).forEach(async (key) => {
    //       let object = {
    //         figmaRef: key,
    //         name: camelize(key.split('#')[0].toLowerCase()),
    //         defaultValue: child.componentProperties[key]?.type === 'TEXT' ? child.componentProperties[key]?.value : child.componentProperties[key]?.type === 'VARIANT' ? camelize(child.componentProperties[key]?.value as string) : child.componentProperties[key]?.value === 'true' ? true : false,
    //         tsType: child.componentProperties[key]?.type === 'TEXT' ? 'string' : child.componentProperties[key]?.type === 'VARIANT' ? 'any' : 'boolean',
    //       }

    //       if (parent.parent?.type === 'COMPONENT_SET') {
    //         object['options'] = parent.parent?.variantGroupProperties?.[key]?.values.map((option) => camelize(option))
    //       }

    //       props.push(object)
    //     })
    //   }
    // })
  }

  return props.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.place === value.place && t.name === value.name
    ))
  )
}