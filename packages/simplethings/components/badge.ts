import { ElementSchema } from '@simplethings/anthropocene'

export const badge: ElementSchema = {
  "name": "rectangle2",
  "isText": false,
  "isComponent": true,
  "dependencies": [],
  "description": "A badge component",
  "elementAttributes": {},
  "elementType": "div",
  "styles": {
    "height": "45px",
    "backgroundColor": "A00028",
    "borderRadius": "0px"
  },
  "componentProps": [
    {
      "figmaRef": "Show Text#290:5",
      "name": "showText",
      "tsType": "boolean",
      "defaultValue": true
    },
    {
      "figmaRef": "hello#290:3",
      "name": "hello",
      "tsType": "string",
      "defaultValue": "test"
    },
    {
      "figmaRef": "Property 1",
      "name": "property1",
      "tsType": "string",
      "defaultValue": "Default",
      "options": [
        "Default",
        "Variant2"
      ]
    }
  ],
  "children": [
    {
      "name": "test",
      "isText": true,
      "elementType": "p",
      "isComponent": false,
      "elementAttributes": {},
      dependencies: [],
      "componentProps": [],
      "styles": {
        "backgroundColor": "000000",
        "borderRadius": "undefinedpx"
      },
      "boundProps": [
        {
          "figmaPropType": "characters",
          "figmaRef": "hello#290:3",
          "name": "hello",
          "type": "string"
        }
      ]
    }
  ],
  "variants": [
    {
      "figmaRef": "Property 1=Default",
      "name": "Property 1",
      "value": "Default",
      "styles": {}
    },
    {
      "figmaRef": "Property 1=Variant2",
      "name": "Property 1",
      "value": "Variant2",
      "styles": {
        "backgroundColor": "2A3D38"
      }
    }
  ]
}