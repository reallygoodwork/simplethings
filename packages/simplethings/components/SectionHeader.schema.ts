export const SectionHeader = {
  "updated": "2024-05-23T19:04:00.368Z",
  "name": "SectionHeader",
  "styles": {
    "display": "flex",
    "width": "100%",
    "padding": "144px 0px 0px 0px",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "gap": "16px",
    "borderRadius": "6px"
  },
  "boundProps": [
    {
      "figmaPropType": "BOOLEAN",
      "figmaRef": "Show Trailing Icon#10:5",
      "name": "showTrailingIcon",
      "type": "string",
      "value": true
    },
    {
      "figmaPropType": "BOOLEAN",
      "figmaRef": "Show Leading Icon#10:3",
      "name": "showLeadingIcon",
      "type": "string",
      "value": false
    },
    {
      "figmaPropType": "TEXT",
      "figmaRef": "Button Text#6:1",
      "name": "buttonText",
      "type": "string",
      "value": "Learn More"
    },
    {
      "figmaPropType": "VARIANT",
      "figmaRef": "Size",
      "name": "size",
      "type": "string",
      "value": "sm"
    },
    {
      "figmaPropType": "VARIANT",
      "figmaRef": "Purpose",
      "name": "purpose",
      "type": "string",
      "value": "Link"
    }
  ],
  "isText": false,
  "elementType": "div",
  "isComponent": true,
  "componentProps": [
    {
      "figmaRef": "Show Button#168:5",
      "name": "showButton",
      "tsType": "boolean",
      "defaultValue": true
    },
    {
      "figmaRef": "Subtitle#168:4",
      "name": "subtitle",
      "tsType": "string",
      "defaultValue": "Qui occaecat amet adipisicing excepteur sit mollit anim culpa exercitation Lorem duis cupidatat laboris laboris exercitation."
    },
    {
      "figmaRef": "Title#168:3",
      "name": "title",
      "tsType": "string",
      "defaultValue": "The card is just the start"
    },
    {
      "figmaRef": "Show Trailing Icon#10:5",
      "name": "showTrailingIcon",
      "defaultValue": false,
      "tsType": "boolean"
    },
    {
      "figmaRef": "Show Leading Icon#10:3",
      "name": "showLeadingIcon",
      "defaultValue": false,
      "tsType": "boolean"
    },
    {
      "figmaRef": "Button Text#6:1",
      "name": "buttonText",
      "defaultValue": "Learn More",
      "tsType": "string"
    },
    {
      "figmaRef": "Size",
      "name": "size",
      "defaultValue": "sm",
      "tsType": "any",
      "options": [
        "xs",
        "sm",
        "md",
        "xl",
        "lg"
      ]
    },
    {
      "figmaRef": "Purpose",
      "name": "purpose",
      "defaultValue": "link",
      "tsType": "any",
      "options": [
        "primary",
        "secondary",
        "soft",
        "link",
        "solid"
      ]
    }
  ],
  "description": "This is a cool description",
  "elementAttributes": {},
  "children": [
    {
      "updated": "2024-05-23T19:04:00.370Z",
      "name": "TheCardIsJustTheStart",
      "styles": {
        "color": "#000000",
        "fontSize": "48px",
        "fontWeight": "500",
        "fontFamily": "Satoshi Variable",
        "lineHeight": "100%",
        "textAlign": "CENTER",
        "letterSpacing": "-1px"
      },
      "boundProps": [
        {
          "figmaPropType": "characters",
          "figmaRef": "Title#168:3",
          "name": "title",
          "type": "string"
        }
      ],
      "isText": true,
      "elementType": "p",
      "isComponent": false,
      "componentProps": [],
      "textValue": "The card is just the start"
    },
    {
      "updated": "2024-05-23T19:04:00.370Z",
      "name": "QuiOccaecatAmetAdipisicingExcepteurSitMollitAnimCulpaExercitationLoremDuisCupidatatLaborisLaborisExercitation",
      "styles": {
        "height": "auto",
        "color": "#1c1b17cc",
        "fontSize": "18px",
        "fontWeight": "500",
        "fontFamily": "Satoshi Variable",
        "lineHeight": "24px",
        "textAlign": "CENTER"
      },
      "boundProps": [
        {
          "figmaPropType": "characters",
          "figmaRef": "Subtitle#168:4",
          "name": "subtitle",
          "type": "string"
        }
      ],
      "isText": true,
      "elementType": "p",
      "isComponent": false,
      "componentProps": [],
      "textValue": "Qui occaecat amet adipisicing excepteur sit mollit anim culpa exercitation Lorem duis cupidatat laboris laboris exercitation."
    },
    {
      "updated": "2024-05-23T19:04:00.371Z",
      "name": "Button",
      "styles": {
        "padding": "4px 0px 4px 0px",
        "background": "rgba(0, 0, 0, 0)",
        "borderRadius": "6px"
      },
      "boundProps": [
        {
          "figmaPropType": "BOOLEAN",
          "figmaRef": "Show Trailing Icon#10:5",
          "name": "showTrailingIcon",
          "type": "string",
          "value": true
        },
        {
          "figmaPropType": "BOOLEAN",
          "figmaRef": "Show Leading Icon#10:3",
          "name": "showLeadingIcon",
          "type": "string",
          "value": false
        },
        {
          "figmaPropType": "TEXT",
          "figmaRef": "Button Text#6:1",
          "name": "buttonText",
          "type": "string",
          "value": "Learn More"
        },
        {
          "figmaPropType": "VARIANT",
          "figmaRef": "Size",
          "name": "size",
          "type": "string",
          "value": "sm"
        },
        {
          "figmaPropType": "VARIANT",
          "figmaRef": "Purpose",
          "name": "purpose",
          "type": "string",
          "value": "Link"
        }
      ],
      "isText": false,
      "elementType": "div",
      "isComponent": true,
      "componentProps": [],
      "elementAttributes": {}
    }
  ],
  "dependencies": [
    {
      "name": "{ Button }",
      "packageName": "./button"
    }
  ]
}