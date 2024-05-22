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

async function getComponentDependencies(firstChild: SceneNode, isChild: boolean): Promise<any[]> {
  if (isChild) return [];

  const components = await Promise.all(
    ((firstChild as any).children || [])
      ?.filter((child) => child.type === 'INSTANCE')
      .map((child) => ({
        name: `{ ${transformString(child.name)} }`,
        packageName: `./${transformString(child.name)}`,
      }))
  );

  return components;
}

function extractPropsFromChildName(childName: string): any[] {
  return childName.split(',').map((prop) => {
    const [name, value] = prop.split('=').map(camelize);
    return { name: name.trim(), value: value.trim() };
  });
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
  };
}

async function processChildren(children: SceneNode[]): Promise<ElementSchema[]> {
  return await Promise.all(children.map((child) => generateSpec(child, true)));
}

export const generateSpec = async (spec: SceneNode, isChild?: boolean): Promise<ElementSchema | null> => {
  const name = transformString(spec.name);

  if (spec.type === 'COMPONENT_SET') {

    const childrenGroup = spec.children.map((child) => child?.children as any);

    console.log(childrenGroup)

    const children = spec.children as SceneNode[];
    const defaultVariant = spec.defaultVariant
    const variantStyles = await generateVariantStyles(children);
    const componentDependencies = await getComponentDependencies(defaultVariant, isChild);
    const commonStyles = getCommonStyles(variantStyles);

    const variants = children.map((child) => createVariant(child, commonStyles));
    const hasChildren = children && children.length > 0;
    const componentChildren = defaultVariant as any;
    const childrenArray = hasChildren ? await processChildren(componentChildren.children) : [];

    return {
      name,
      dependencies: componentDependencies,
      description: spec.description || 'To be added',
      isText: false,
      isComponent: true,
      elementAttributes: {},
      elementType: 'div',
      typeScriptType: 'HTMLDivElement',
      styles: commonStyles,
      componentProps: generateComponentProps(spec),
      children: childrenArray,
      variants,
    };
  }


  const childStyles = generateStyleConfig(spec as any);
  const styles = generateStyleObject(childStyles[0]);
  const boundProps = await generateBoundPropReferences(spec);
  let children: any[] = [];

  if (spec.type === 'GROUP' || spec.type === 'FRAME' || spec.type === 'COMPONENT') {
    children = await processChildren(spec.children as SceneNode[]);
  }

  const childrenList = await Promise.all(children);

  const commonAttributes = {
    name,
    styles,
    boundProps,
    isText: false,
    elementType: 'div',
    isComponent: false,
    componentProps: [],
  };

  switch (spec.type) {
    case 'TEXT':
      return {
        ...commonAttributes,
        textValue: spec.characters,
        elementType: 'p',
        isText: true,
        variants: [],
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
        componentProps: generateComponentProps(spec),
      };
    case 'COMPONENT':
      const componentDependencies = await getComponentDependencies(spec.children[0], isChild);
      return {
        ...commonAttributes,
        description: spec.description || 'To be added',
        isComponent: true,
        elementAttributes: {},
        componentProps: generateComponentProps(spec),
        children: childrenList,
        dependencies: componentDependencies,
      };
    default:
      return null;
  }
};
