export const CardWithDescription = {
  "hasImage": false,
  "isIterable": false,
  "updated": "2024-05-30T00:01:28.317Z",
  "name": "CardWithDescription",
  "styles": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "gap": "24px"
  },
  "className": "flex p-0 flex-col gap-6 justify-start items-start",
  "isText": false,
  "elementType": "div",
  "isComponent": true,
  "componentProps": [
    {
      "figmaRef": "Title#169:15",
      "name": "title",
      "tsType": "string",
      "defaultValue": "The card is just the start"
    },
    {
      "figmaRef": "Body#169:14",
      "name": "body",
      "tsType": "string",
      "defaultValue": "Qui occaecat amet adipisicing excepteur sit mollit anim culpa exercitation Lorem duis cupidatat laboris laboris exercitation."
    },
    {
      "figmaRef": "image",
      "name": "imageURI",
      "tsType": "string",
      "defaultValue": ""
    },
    {
      "figmaRef": "string",
      "name": "imageAlt",
      "tsType": "string",
      "defaultValue": "Alt Text Missing"
    }
  ],
  "textStyleClass": "",
  "boundProps": [],
  "description": "To be added",
  "elementAttributes": {},
  "children": [
    {
      "hasImage": true,
      "isIterable": false,
      "updated": "2024-05-30T00:01:28.319Z",
      "name": "Image",
      "styles": {
        "display": "flex",
        "height": "200px",
        "width": "304px",
        "flexDirection": "row",
        "background": "#d9d9d9"
      },
      "className": "flex h-[12.5rem] w-[19rem] flex-row bg-[#d9d9d9]",
      "isText": false,
      "elementType": "div",
      "isComponent": false,
      "componentProps": [
        {
          "figmaPropType": "image",
          "figmaRef": "image",
          "name": "imageURI",
          "type": "string"
        },
        {
          "figmaPropType": "string",
          "figmaRef": "string",
          "name": "imageAlt",
          "type": "string"
        }
      ],
      "textStyleClass": "",
      "boundProps": []
    },
    {
      "hasImage": false,
      "isIterable": false,
      "updated": "2024-05-30T00:01:28.320Z",
      "name": "Cardbody",
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignItems": "flex-start",
        "gap": "9px"
      },
      "className": "flex p-0 flex-col gap-[0.5625rem] justify-start items-start",
      "isText": false,
      "elementType": "div",
      "isComponent": false,
      "componentProps": [],
      "textStyleClass": "",
      "boundProps": [],
      "children": [
        {
          "hasImage": false,
          "isIterable": false,
          "updated": "2024-05-30T00:01:28.320Z",
          "name": "Title",
          "styles": {
            "display": "flex",
            "flexDirection": "row",
            "color": "#1c1b17",
            "fontSize": "20px",
            "fontWeight": "500",
            "fontFamily": "Satoshi Variable",
            "lineHeight": "24px"
          },
          "className": "font-medium text-xl font-[Satoshi Variable] text-[#1c1b17] leading-6 flex flex-row",
          "isText": true,
          "elementType": "p",
          "isComponent": false,
          "componentProps": [
            {
              "figmaPropType": "characters",
              "figmaRef": "Title#169:15",
              "name": "title",
              "type": "string"
            }
          ],
          "textStyleClass": "st-lead text-[#1c1b17] text-left",
          "boundProps": [
            {
              "figmaRef": "characters",
              "name": "title",
              "value": "Title#169:15"
            }
          ],
          "textValue": "The card is just the start"
        },
        {
          "hasImage": false,
          "isIterable": false,
          "updated": "2024-05-30T00:01:28.322Z",
          "name": "Subtitle",
          "styles": {
            "display": "flex",
            "height": "auto",
            "width": "304px",
            "flexDirection": "row",
            "color": "#1c1b17cc",
            "fontSize": "16px",
            "fontWeight": "500",
            "fontFamily": "Satoshi Variable",
            "lineHeight": "22px"
          },
          "className": "font-medium text-base font-[Satoshi Variable] text-[#1c1b17cc] leading-[1.375rem] flex h-auto w-[19rem] flex-row",
          "isText": true,
          "elementType": "p",
          "isComponent": false,
          "componentProps": [
            {
              "figmaPropType": "characters",
              "figmaRef": "Body#169:14",
              "name": "body",
              "type": "string"
            }
          ],
          "textStyleClass": "st-body text-[#1c1b17cc] text-left",
          "boundProps": [
            {
              "figmaRef": "characters",
              "name": "body",
              "value": "Body#169:14"
            }
          ],
          "textValue": "Qui occaecat amet adipisicing excepteur sit mollit anim culpa exercitation Lorem duis cupidatat laboris laboris exercitation."
        }
      ]
    }
  ],
  "dependencies": []
}