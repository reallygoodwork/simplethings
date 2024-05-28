export const Hero = {
  "name": "Hero",
  "styles": {
    "height": "380px",
    "padding": "10px",
    "overflow": "hidden",
    "background": "#17332d"
  },
  "className": "rounded-[0rem] h-[23.75rem] overflow-hidden p-2.5 bg-[#17332d]",
  "isText": false,
  "elementType": "div",
  "isComponent": true,
  "componentProps": [
    {
      "figmaRef": "Subtitle#351:1",
      "name": "subtitle",
      "tsType": "string",
      "defaultValue": "Eco-friendly designs, templates and code to help build your dream business while respecting the earth"
    },
    {
      "figmaRef": "Title#351:0",
      "name": "title",
      "tsType": "string",
      "defaultValue": "It’s giving green."
    }
  ],
  "textStyleClass": "",
  "boundProps": [],
  "description": "Here is the party element of the component",
  "elementAttributes": {},
  "children": [
    {
      "name": "Container",
      "styles": {
        "maxWidth": "1440px",
        "padding": "128px 24px 80px 24px"
      },
      "className": "rounded-[0rem] max-w-[90rem] pt-32 pb-20 px-6",
      "isText": false,
      "elementType": "div",
      "isComponent": false,
      "componentProps": [],
      "textStyleClass": "",
      "boundProps": [],
      "children": [
        {
          "name": "Content",
          "styles": {
            "display": "flex",
            "maxWidth": "600px",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "gap": "16px"
          },
          "className": "rounded-[0rem] flex max-w-[37.5rem] p-0 flex-col gap-4 justify-start items-center",
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
                "height": "auto",
                "color": "#ffffff",
                "fontSize": "72px",
                "fontWeight": "500",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "100%",
                "textAlign": "CENTER",
                "letterSpacing": "-1px"
              },
              "className": "font-medium text-7xl font-[Satoshi Variable] text-white leading-none tracking-[-1px] h-auto",
              "isText": true,
              "elementType": "p",
              "isComponent": false,
              "componentProps": [
                {
                  "figmaPropType": "characters",
                  "figmaRef": "Title#351:0",
                  "name": "title",
                  "type": "string"
                }
              ],
              "textStyleClass": "st-hero",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "title",
                  "value": "Title#351:0"
                }
              ],
              "textValue": "It’s giving green."
            },
            {
              "name": "Subtitle",
              "styles": {
                "height": "auto",
                "color": "#aabca3",
                "fontSize": "24px",
                "fontWeight": "500",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "32px",
                "textAlign": "CENTER"
              },
              "className": "font-medium text-2xl font-[Satoshi Variable] text-[#aabca3] leading-8 h-auto",
              "isText": true,
              "elementType": "p",
              "isComponent": false,
              "componentProps": [
                {
                  "figmaPropType": "characters",
                  "figmaRef": "Subtitle#351:1",
                  "name": "subtitle",
                  "type": "string"
                }
              ],
              "textStyleClass": "st-subtitle",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "subtitle",
                  "value": "Subtitle#351:1"
                }
              ],
              "textValue": "Eco-friendly designs, templates and code to help build your dream business while respecting the earth"
            }
          ]
        }
      ]
    }
  ],
  "dependencies": []
}