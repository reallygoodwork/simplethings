export const CardGrid = {
  "hasImage": false,
  "isIterable": false,
  "updated": "2024-05-29T23:59:57.925Z",
  "name": "CardGrid",
  "styles": {
    "display": "flex",
    "padding": "112px 0px 112px 0px",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "gap": "24px"
  },
  "className": "flex py-28 px-0 flex-row gap-6 justify-start items-start",
  "isText": false,
  "elementType": "div",
  "isComponent": true,
  "componentProps": [
    {
      "figmaRef": "card",
      "name": "cards",
      "tsType": "CardProps[]",
      "defaultValue": [],
      "iterable": true
    }
  ],
  "textStyleClass": "",
  "boundProps": [],
  "description": "To be added",
  "elementAttributes": {},
  "children": [
    {
      "hasImage": false,
      "isIterable": true,
      "updated": "2024-05-29T23:59:57.931Z",
      "name": "Card",
      "styles": {
        "display": "flex",
        "padding": "32px 24px 32px 24px",
        "overflow": "hidden",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "gap": "16px",
        "background": "#efefef",
        "borderRadius": "8px"
      },
      "className": "rounded-lg flex overflow-hidden py-8 px-6 flex-col gap-4 justify-start items-center bg-[#efefef]",
      "isText": false,
      "elementType": "div",
      "isComponent": true,
      "componentProps": [
        {
          "figmaPropType": "BOOLEAN",
          "figmaRef": "Show Text#168:7",
          "name": "showText",
          "type": "string",
          "value": true
        },
        {
          "figmaPropType": "TEXT",
          "figmaRef": "Title#357:10",
          "name": "title",
          "type": "string",
          "value": "You Believe in Authority"
        },
        {
          "figmaPropType": "TEXT",
          "figmaRef": "Body#357:14",
          "name": "body",
          "type": "string",
          "value": "'Cause, baby, I'm an anarchist. You're a spineless liberal. We marched together for the eight-hour day"
        },
        {
          "figmaPropType": "VARIANT",
          "figmaRef": "Variant",
          "name": "variant",
          "type": "string",
          "value": "Default"
        },
        {
          "figmaRef": "image",
          "name": "imageURI",
          "value": "imageURI"
        },
        {
          "figmaRef": "string",
          "name": "imageAlt",
          "value": "Alt Text Missing"
        }
      ],
      "textStyleClass": "",
      "boundProps": [],
      "elementAttributes": {},
      "iterable": false
    }
  ],
  "dependencies": [
    {
      "name": "{ Card, type CardProps }",
      "packageName": "./card"
    }
  ]
}