export const Card = {
  "config": {},
  "updated": "2024-05-24T14:44:40.466Z",
  "name": "Card",
  "dependencies": [],
  "description": "To be added",
  "isText": false,
  "isComponent": true,
  "elementAttributes": {},
  "elementType": "div",
  "typeScriptType": "HTMLDivElement",
  "styles": {
    "display": "flex",
    "overflow": "hidden",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "gap": "16px",
    "background": "#efefef",
    "borderRadius": "8px"
  },
  "componentProps": [
    {
      "figmaRef": "Title#357:10",
      "name": "title",
      "tsType": "string",
      "defaultValue": "You Believe in Authority"
    },
    {
      "figmaRef": "Show Text#168:7",
      "name": "showText",
      "tsType": "boolean",
      "defaultValue": true
    },
    {
      "figmaRef": "Body#357:14",
      "name": "body",
      "tsType": "string",
      "defaultValue": "'Cause, baby, I'm an anarchist. You're a spineless liberal. We marched together for the eight-hour day"
    },
    {
      "figmaRef": "Variant",
      "name": "variant",
      "tsType": "string",
      "defaultValue": "default",
      "options": [
        "default",
        "noBottom",
        "noPadding"
      ]
    }
  ],
  "children": [
    {
      "updated": "2024-05-24T14:44:40.482Z",
      "name": "Cardbody",
      "styles": {
        "display": "flex",
        "maxWidth": "260px",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "gap": "8px"
      },
      "boundProps": [
        {
          "figmaPropType": "visible",
          "figmaRef": "Show Text#168:7",
          "name": "showText",
          "type": "boolean"
        }
      ],
      "isText": false,
      "elementType": "div",
      "isComponent": false,
      "componentProps": [],
      "children": [
        {
          "updated": "2024-05-24T14:44:40.484Z",
          "name": "Title",
          "styles": {
            "color": "#000000",
            "fontSize": "20px",
            "fontWeight": "500",
            "fontFamily": "Satoshi Variable",
            "lineHeight": "22px"
          },
          "boundProps": [
            {
              "figmaPropType": "characters",
              "figmaRef": "Title#357:10",
              "name": "title",
              "type": "string"
            }
          ],
          "isText": true,
          "elementType": "p",
          "isComponent": false,
          "componentProps": [],
          "textValue": "You Believe in Authority"
        },
        {
          "updated": "2024-05-24T14:44:40.486Z",
          "name": "Body",
          "styles": {
            "height": "auto",
            "color": "#1c1b1799",
            "fontSize": "14px",
            "fontWeight": "400",
            "fontFamily": "Satoshi Variable",
            "lineHeight": "20px",
            "textAlign": "CENTER"
          },
          "boundProps": [
            {
              "figmaPropType": "characters",
              "figmaRef": "Body#357:14",
              "name": "body",
              "type": "string"
            }
          ],
          "isText": true,
          "elementType": "p",
          "isComponent": false,
          "componentProps": [],
          "textValue": "'Cause, baby, I'm an anarchist. You're a spineless liberal. We marched together for the eight-hour day"
        }
      ]
    },
    {
      "updated": "2024-05-24T14:44:40.483Z",
      "name": "Image",
      "styles": {
        "height": "412px",
        "width": "600px",
        "object-fit": "contain"
      },
      "boundProps": [],
      "isText": false,
      "elementType": "div",
      "isComponent": false,
      "componentProps": []
    }
  ],
  "variants": [
    {
      "figmaRef": "Variant=Default",
      "name": "Variant",
      "value": "Default",
      "styles": {
        "width": "100%",
        "padding": "32px 24px 32px 24px"
      },
      "props": [
        {
          "name": "variant",
          "value": "default"
        }
      ],
      "children": [
        {
          "name": "Cardbody",
          "isText": false,
          "styles": {
            "display": "flex",
            "maxWidth": "260px",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "gap": "8px"
          }
        },
        {
          "name": "Image",
          "isText": false,
          "styles": {
            "height": "412px",
            "width": "600px",
            "object-fit": "contain"
          }
        }
      ]
    },
    {
      "figmaRef": "Variant=No Bottom",
      "name": "Variant",
      "value": "No Bottom",
      "styles": {
        "width": "100%",
        "padding": "32px 24px 0px 24px"
      },
      "props": [
        {
          "name": "variant",
          "value": "noBottom"
        }
      ],
      "children": [
        {
          "name": "Cardbody",
          "isText": false,
          "styles": {
            "display": "flex",
            "maxWidth": "260px",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "gap": "8px"
          }
        },
        {
          "name": "Image",
          "isText": false,
          "styles": {
            "height": "412px",
            "width": "600px",
            "object-fit": "contain"
          }
        }
      ]
    },
    {
      "figmaRef": "Variant=No Padding",
      "name": "Variant",
      "value": "No Padding",
      "styles": {
        "width": "100%",
        "padding": "32px 0px 0px 0px"
      },
      "props": [
        {
          "name": "variant",
          "value": "noPadding"
        }
      ],
      "children": [
        {
          "name": "Cardbody",
          "isText": false,
          "styles": {
            "display": "flex",
            "maxWidth": "260px",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "gap": "8px"
          }
        },
        {
          "name": "Image",
          "isText": false,
          "styles": {
            "height": "412px",
            "width": "600px",
            "object-fit": "contain"
          }
        }
      ]
    }
  ]
}