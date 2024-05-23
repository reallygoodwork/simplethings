import { generateStyleConfig } from '../lib/generateStyleConfig';
import { generateStyleObject } from '../lib/generateStyleObject';
import { ElementSchema } from '../types/element';
import { generateBoundPropReferences } from './generateBoundPropReferences';
import { generateComponentProps } from './generateComponentProps';
import { getCommonStyles } from './getCommonStyles';
import { removeCommonStyles } from './removeCommonStyles';
import { camelize } from './utils';

function transformString(input: string): string {
  return input
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .split(/\s+/)
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('')
    .replace(/^./, str => str.toUpperCase());
}

async function generateVariantStyles(children: SceneNode[]): Promise<any[]> {
  return await Promise.all(
    children.map(async (child) => {
      const mainStyles = generateStyleConfig(child as any, {
        isRoot: true,
        isFirstChild: true,
        parentLayout: null,
        parentDefinedStyles: [],
        groupTopLeft: { x: 0, y: 0 },
      });
      return generateStyleObject(mainStyles[0]);
    })
  );
}

async function getComponentDependencies(firstChild: SceneNode): Promise<any[]> {

  const components = await Promise.all(
    ((firstChild as any).children || [])
      ?.filter((child) => child.type === 'INSTANCE')
      .map((child) => ({
        name: `{ ${transformString(child.name)} }`,
        packageName: `./${transformString(child.name).toLowerCase()}`,
      }))
  );

  return components.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.place === value.place && t.name === value.name
    ))
  );
}

function extractPropsFromChildName(childName: string): any[] {
  return childName.split(',').map((prop) => {
    const [name, value] = prop.split('=').map(camelize);
    return { name: name.trim(), value: value.trim() };
  });
}

function getChildrenVariantStyles(child: SceneNode[]): any[] {
  if (!child || !child.length) return [];
  const childrenStyles = child.map((child) => ({
    name: transformString(child.name),
    isText: child.type === 'TEXT',
    styles: generateStyleConfig(child as any)
  })).map((child) => {
    return {
      ...child,
      styles: generateStyleObject(child.styles[0])
    }
  });

  return childrenStyles;


}


function createVariant(child: SceneNode, commonStyles: any): any {
  const childStyles = generateStyleConfig(child);
  const childStylesObject = generateStyleObject(childStyles[0]);
  const styles = removeCommonStyles(childStylesObject, commonStyles);
  const props = extractPropsFromChildName(child.name);



  return {
    figmaRef: child.name,
    name: child.name.split('=')[0],
    value: child.name.split('=')[1],
    styles,
    props,
    children: getChildrenVariantStyles(child.children as any),
  };
}

async function processChildren(children: SceneNode[]): Promise<ElementSchema[]> {
  return await Promise.all(children.map((child) => generateSpec(child, true)));
}



export const generateSpec = async (spec: SceneNode, isChild?: boolean): Promise<ElementSchema | null> => {
  const name = transformString(spec.name);
  const updated = new Date().toISOString();

  if (spec.type === 'COMPONENT_SET') {
    const children = spec.children as SceneNode[];
    const defaultVariant = spec.defaultVariant
    const variantStyles = await generateVariantStyles(children);
    const componentDependencies = await getComponentDependencies(defaultVariant);
    const commonStyles = getCommonStyles(variantStyles);

    const variants = children.map((child) => createVariant(child, commonStyles));
    const hasChildren = children && children.length > 0;
    const componentChildren = defaultVariant as any;
    const childrenArray = hasChildren ? await processChildren(componentChildren.children) : [];

    const description = spec.description.split('\n');
    let configObject = {};

    description.forEach((desc) => {
      if (desc.includes('::sanity')) {
        configObject['sanity'] = desc.split('=').at(-1).trim() === 'true'
      } else if (desc.includes('::atomicComponent')) {
        configObject['atomicComponent'] = desc.split('=').at(-1).trim() === 'true'
      }
    })

    const componentPropsEl = await generateComponentProps(spec);
    const componentPropsArray = componentPropsEl.filter((value, index) => {
      const _value = JSON.stringify(value);
      return index === componentPropsEl.findIndex(obj => {
        return JSON.stringify(obj) === _value;
      });
    });

    return {
      config: configObject,
      updated,
      name,
      dependencies: componentDependencies,
      description: spec.description || 'To be added',
      isText: false,
      isComponent: true,
      elementAttributes: {},
      elementType: 'div',
      typeScriptType: 'HTMLDivElement',
      styles: commonStyles,
      componentProps: componentPropsArray,
      children: childrenArray,
      variants,
    };
  }


  const childStyles = generateStyleConfig(spec as any);
  const styles = generateStyleObject(childStyles[0]);
  const boundProps = await generateBoundPropReferences(spec);
  const boundPropsArray = boundProps.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === boundProps.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });

  let children: any[] = [];

  if (spec.type === 'GROUP' || spec.type === 'FRAME' || spec.type === 'COMPONENT') {
    children = await processChildren(spec.children as SceneNode[]);
  }

  const childrenList = await Promise.all(children);

  const commonAttributes = {
    updated,
    name,
    styles,
    boundProps: boundPropsArray,
    isText: false,
    elementType: 'div',
    isComponent: false,
    componentProps: [],
  };

  const componentPropsEl = await generateComponentProps(spec);
  const componentPropsArray = componentPropsEl.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === componentPropsEl.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });


  switch (spec.type) {
    case 'TEXT':
      return {
        ...commonAttributes,
        textValue: spec.characters,
        elementType: 'p',
        isText: true,
      };
    case 'VECTOR':
    case 'ELLIPSE':
      return {
        ...commonAttributes,
        styles: {
          ...styles,
          width: styles.width || 'auto',
          height: styles.height || 'auto',
          borderRadius: '50%',
        },
      };
    case 'POLYGON':
    case 'RECTANGLE':
      return commonAttributes;
    case 'GROUP':
    case 'FRAME':
      return {
        ...commonAttributes,
        children: childrenList,
      };
    case 'INSTANCE':

      return {
        ...commonAttributes,
        name: transformString(spec.name),
        isComponent: true,
        elementAttributes: {},
        componentProps: componentPropsArray,
      };
    case 'COMPONENT':
      const componentDependencies = await getComponentDependencies(spec);

      return {
        ...commonAttributes,
        description: spec.description || 'To be added',
        isComponent: true,
        elementAttributes: {},
        componentProps: componentPropsArray,
        children: childrenList,
        dependencies: componentDependencies,
      };
    default:
      return null;
  }
};
