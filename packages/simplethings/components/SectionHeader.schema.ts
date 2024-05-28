export const SectionHeader = {
  "name": "SectionHeader",
  "styles": {
    "display": "flex",
    "width": "100%",
    "padding": "160px 0px 0px 0px",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "gap": "13.6899995803833px"
  },
  "className": "rounded-[0rem] flex w-full pt-40 pb-0 px-0 flex-col gap-[0.8556249737739563rem] justify-start items-center",
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
  "textStyleClass": "",
  "boundProps": [],
  "description": "This is a cool description",
  "elementAttributes": {},
  "children": [
    {
      "name": "Title",
      "styles": {
        "color": "#000000",
        "fontSize": "48px",
        "fontWeight": "500",
        "fontFamily": "Satoshi Variable",
        "lineHeight": "100%",
        "textAlign": "CENTER",
        "letterSpacing": "-1px"
      },
      "className": "font-medium text-5xl font-[Satoshi Variable] text-black leading-none tracking-[-1px]",
      "isText": true,
      "elementType": "p",
      "isComponent": false,
      "componentProps": [
        {
          "figmaPropType": "characters",
          "figmaRef": "Title#168:3",
          "name": "title",
          "type": "string"
        }
      ],
      "textStyleClass": "st-title",
      "boundProps": [
        {
          "figmaRef": "characters",
          "name": "title",
          "value": "Title#168:3"
        }
      ],
      "textValue": "The card is just the start"
    },
    {
      "name": "Subtitle",
      "styles": {
        "height": "auto",
        "width": "526px",
        "color": "#1c1b17cc",
        "fontSize": "18px",
        "fontWeight": "500",
        "fontFamily": "Satoshi Variable",
        "lineHeight": "24px",
        "textAlign": "CENTER"
      },
      "className": "font-medium text-lg font-[Satoshi Variable] text-[#1c1b17cc] leading-6 h-auto w-[32.875rem]",
      "isText": true,
      "elementType": "p",
      "isComponent": false,
      "componentProps": [
        {
          "figmaPropType": "characters",
          "figmaRef": "Subtitle#168:4",
          "name": "subtitle",
          "type": "string"
        }
      ],
      "textStyleClass": "st-heading",
      "boundProps": [
        {
          "figmaRef": "characters",
          "name": "subtitle",
          "value": "Subtitle#168:4"
        }
      ],
      "textValue": "Qui occaecat amet adipisicing excepteur sit mollit anim culpa exercitation Lorem duis cupidatat laboris laboris exercitation."
    },
    {
      "name": "Button",
      "styles": {
        "padding": "4px 0px 4px 0px",
        "background": "rgba(0, 0, 0, 0)",
        "borderRadius": "6px"
      },
      "className": "rounded-md py-1 px-0 bg-transparent",
      "isText": false,
      "elementType": "div",
      "isComponent": true,
      "componentProps": [
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
      "textStyleClass": "",
      "boundProps": [
        {
          "figmaRef": "visible",
          "name": "showButton",
          "value": "Show Button#168:5"
        }
      ],
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