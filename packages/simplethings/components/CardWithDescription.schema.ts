export const CardWithDescription = {
  "name": "CardWithDescription",
  "styles": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "gap": "24px"
  },
  "className": "rounded-[0rem] flex p-0 flex-col gap-6 justify-start items-start",
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
    }
  ],
  "textStyleClass": "",
  "boundProps": [],
  "description": "To be added",
  "elementAttributes": {},
  "children": [
    {
      "name": "Asset",
      "styles": {
        "padding": "32px 24px 32px 24px",
        "overflow": "hidden",
        "background": "#efefef",
        "borderRadius": "8px"
      },
      "className": "rounded-lg overflow-hidden py-8 px-6 bg-[#efefef]",
      "isText": false,
      "elementType": "div",
      "isComponent": false,
      "componentProps": [],
      "textStyleClass": "",
      "boundProps": [],
      "children": []
    },
    {
      "name": "Cardbody",
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignItems": "flex-start",
        "gap": "9px"
      },
      "className": "rounded-[0rem] flex p-0 flex-col gap-[0.5625rem] justify-start items-start",
      "isText": false,
      "elementType": "div",
      "isComponent": false,
      "componentProps": [],
      "textStyleClass": "",
      "boundProps": [],
      "children": [
        {
          "name": "Title",
          "styles": {
            "color": "#1c1b17",
            "fontSize": "20px",
            "fontWeight": "500",
            "fontFamily": "Satoshi Variable",
            "lineHeight": "24px"
          },
          "className": "font-medium text-xl font-[Satoshi Variable] text-[#1c1b17] leading-6",
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
          "textStyleClass": "st-lead",
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
          "name": "Subtitle",
          "styles": {
            "height": "auto",
            "width": "304px",
            "color": "#1c1b17cc",
            "fontSize": "16px",
            "fontWeight": "500",
            "fontFamily": "Satoshi Variable",
            "lineHeight": "22px"
          },
          "className": "font-medium text-base font-[Satoshi Variable] text-[#1c1b17cc] leading-[1.375rem] h-auto w-[19rem]",
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
          "textStyleClass": "st-body",
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