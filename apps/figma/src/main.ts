import { on, showUI } from '@create-figma-plugin/utilities'
import { CreateSpecHandler } from './types'
import { lowerCase, camelCase } from 'lodash'
import { generateStyles } from './generateStyles'
// import { generateSpec } from '@simplethings/anthropocene'

// Get All Variables
// const localVariables = await figma.variables.getLocalVariablesAsync();

// Search for styles using getCSSAsync
// "VariableID:158:23873"



// function generateBoundPropReferences(node: SceneNode) {
//   const boundProps = []
//   if (node.type === 'INSTANCE') {
//     Object.keys(node.componentProperties).forEach((key) => {
//       boundProps.push({
//         figmaPropType: node.componentProperties[key].type,
//         figmaRef: key,
//         name: key.split('#')[0],
//         type: 'string'
//       })
//     })
//   } else if (node.componentPropertyReferences) {
//     Object.keys(node.componentPropertyReferences).forEach((key) => {
//       if (key === 'characters') {
//         boundProps.push({
//           figmaPropType: key,
//           figmaRef: node.componentPropertyReferences ? node.componentPropertyReferences[key] : null,
//           name: node.componentPropertyReferences ? node.componentPropertyReferences[key]?.split('#')[0] : null,
//           type: 'string'
//         })
//       }
//     })
//   }

//   return boundProps
// }

// function generateComponentProps(node: SceneNode) {
//   const hasProperties = node.parent?.type === 'PAGE' && node.type === 'COMPONENT' || node.type === 'COMPONENT_SET'

//   const componentProps = hasProperties && node.componentPropertyDefinitions ? Object.keys(node.componentPropertyDefinitions).map((key) => {
//     const prop = node.componentPropertyDefinitions[key]
//     return {
//       figmaRef: key,
//       name: camelCase(lowerCase(key.split('#')[0])),
//       tsType: prop.type === 'TEXT' || prop.type === 'VARIANT' ? 'string' : 'boolean',
//       defaultValue: prop.defaultValue,
//       options: prop.variantOptions,
//     }
//   }) : []

//   return componentProps
// }

// function getCommonStyles(arr: any[]) {
//   if (arr.length === 0) return {};

//   const commonProps = {};
//   const firstObject = arr[0];

//   Object.keys(firstObject).forEach(key => {
//     // Check if this property exists in all other objects
//     const isCommon = arr.every(obj => key in obj);
//     if (isCommon) {
//       commonProps[key] = firstObject[key];
//     }
//   });

//   return commonProps;

// }

// function removeCommonProperties(obj1, obj2) {
//   const newObj = { ...obj1 }; // Create a copy of obj1 to avoid mutating the original

//   for (const key of Object.keys(newObj)) {
//     // Check if the property exists in obj2 and if the values are the same
//     if (key in obj2 && newObj[key] === obj2[key]) {
//       delete newObj[key];
//     }
//   }

//   return newObj;
// }

// function generateSpec(node: SceneNode) {

//   if (node.type === 'COMPONENT_SET') {

//     const children = node.children
//     // const variantStyles = children.map((child) => generateStyles(child))
//     // const commonStyles = getCommonStyles(variantStyles)
//     const variants = children.map((child) => {
//       // const styles = removeCommonProperties(generateStyles(child), commonStyles)
//       return {
//         figmaRef: child.name,
//         name: child.name.split('=')[0],
//         value: child.name.split('=')[1],
//         styles,
//       }
//     })


//     return {
//       name: camelCase(lowerCase(node.name)),
//       isText: false,
//       isComponent: true,
//       elementAttributes: {},
//       elementType: 'div',
//       styles: commonStyles,
//       componentProps: generateComponentProps(node),
//       children: children[0].children.map((child) => generateSpec(child)),
//       variants
//     }
//   }

//   switch (node.type) {
//     case 'TEXT':
//       return {
//         name: camelCase(lowerCase(node.name)),
//         isText: true,
//         elementType: 'p',
//         isComponent: false,
//         elementAttributes: {},
//         styles: generateStyles(node),
//         boundProps: generateBoundPropReferences(node),
//       }
//     case 'VECTOR':
//     case 'ELLIPSE':
//     case 'POLYGON':
//     case 'RECTANGLE':
//       return {
//         name: camelCase(lowerCase(node.name)),
//         isText: false,
//         elementType: 'div',
//         isComponent: false,
//         styles: generateStyles(node),
//         boundProps: generateBoundPropReferences(node),
//       }
//     case 'GROUP':
//     case 'FRAME':
//       return {
//         name: camelCase(lowerCase(node.name)),
//         isText: false,
//         elementType: 'div',
//         isComponent: false,
//         styles: generateStyles(node),
//         children: node.children.map((child) => generateSpec(child)),
//         boundProps: generateBoundPropReferences(node),
//       }
//     case 'INSTANCE':
//       return {
//         name: camelCase(lowerCase(node.name)),
//         isText: false,
//         elementType: 'div',
//         isComponent: true,
//         elementAttributes: {},
//         boundProps: generateBoundPropReferences(node),
//         styles: generateStyles(node),
//         componentProps: generateComponentProps(node),
//         children: node.children.map((child) => generateSpec(child))
//       }
//     case 'COMPONENT':
//       return {
//         name: camelCase(lowerCase(node.name)),
//         isText: false,
//         elementType: 'div',
//         isComponent: true,
//         elementAttributes: {},
//         boundProps: generateBoundPropReferences(node),
//         styles: generateStyles(node),
//         componentProps: generateComponentProps(node),
//         children: node.children.map((child) => generateSpec(child))
//       }
//     default:
//       break
//   }

//   // const comp = node
//   // const componentProps = generateComponentProps(comp)
//   // const boundProps = generateBoundPropReferences(comp)

//   // const hasDefaultVariant = comp.type === 'COMPONENT_SET' ? comp.defaultVariant : null

//   // const styles = generateStyles(hasDefaultVariant ?? comp)



//   // const object = {
//   //   name: camelCase(lowerCase(comp.name)),
//   //   isText: comp.type === 'TEXT',
//   //   elementType: generateElementType(comp),
//   //   isComponent,
//   //   elementAttributes: {},
//   //   boundProps,
//   //   styles,
//   //   componentProps: componentProps,
//   //   children: comp.children?.map((child) => generateSpec(child))
//   // }

//   // return object
// }

export default function () {
  on<CreateSpecHandler>('CREATE_SPEC', async function () {
    console.clear()
    const nodes: Array<SceneNode> = []

    const localVariables = await figma.variables.getLocalVariablesAsync(); // filters local variables by the 'STRING' type

    const selection = figma.currentPage.selection

    const comp = selection[0]
    // const object = generateSpec(comp)

    figma.ui.postMessage(JSON.stringify({ message: 'Spec created', type: 'success', data: 'tacos' }))
  })

  showUI({
    height: 800,
    width: 600,
    themeColors: true
  })
}