import { hasChildren } from '../utils/hasChildren';
import { camelize } from './utils'

export async function generateComponentProps(node: SceneNode) {

  const props = []

  async function processNode(node: SceneNode): Promise<void> {
    const hasProperties = node.parent?.type === 'PAGE' && node.type === 'COMPONENT' || node.type === 'COMPONENT_SET'

    if (hasProperties && node.componentPropertyDefinitions) {
      Object.keys(node.componentPropertyDefinitions).forEach((key) => {
        const prop = node.componentPropertyDefinitions[key];
        props.push({
          figmaRef: key,
          name: camelize(key.split('#')[0]),
          tsType: prop?.type === 'TEXT' || prop?.type === 'VARIANT' ? 'string' : 'boolean',
          defaultValue: prop?.type === 'VARIANT' && prop?.variantOptions?.length > 0 ? camelize(prop.defaultValue as string) : prop.defaultValue,
          options: prop?.variantOptions?.map((option) => camelize(option)),
        });
      });
    }

    if (hasChildren(node)) {
      for (const child of node.children) {
        if (child.type === 'INSTANCE') {
          const parent = await (child as InstanceNode).getMainComponentAsync();
          Object.keys((child as InstanceNode).componentProperties).forEach((key) => {
            const prop = (child as InstanceNode).componentProperties[key];
            const object: any = {
              figmaRef: key,
              name: camelize(key.split('#')[0].toLowerCase()),
              defaultValue: prop?.type === 'TEXT' ? prop?.value : prop?.type === 'VARIANT' ? camelize(prop?.value as string) : prop?.value === 'true' ? true : false,
              tsType: prop?.type === 'TEXT' ? 'string' : prop?.type === 'VARIANT' ? 'any' : 'boolean',
            };

            if (parent.parent?.type === 'COMPONENT_SET') {
              object['options'] = parent.parent?.variantGroupProperties?.[key]?.values.map((option) => camelize(option));
            }

            props.push(object);
          })
        }

        await processNode(child);
      }
    }
  }

  await processNode(node);

  return props.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.place === value.place && t.name === value.name
    ))
  )
}