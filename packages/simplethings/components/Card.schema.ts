export const Card = {
  "config": {},
  "updated": "2024-05-28T15:29:03.806Z",
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
  "className": "rounded-lg flex overflow-hidden flex-col gap-4 justify-start items-center bg-[#efefef]",
  "componentProps": [
    {
      "figmaRef": "Body#357:14",
      "name": "body",
      "tsType": "string",
      "defaultValue": "'Cause, baby, I'm an anarchist. You're a spineless liberal. We marched together for the eight-hour day"
    },
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
  "children": {
    "cardBody": {
      "boundProps": [
        {
          "figmaRef": "visible",
          "name": "showText",
          "value": "Show Text#168:7"
        }
      ],
      "elementType": "div",
      "isText": false,
      "hasBackgroundImage": false,
      "variants": [
        {
          "elementType": "div",
          "boundProps": [
            {
              "figmaRef": "visible",
              "name": "showText",
              "value": "Show Text#168:7"
            }
          ],
          "properties": {
            "variant": "default"
          },
          "styles": {
            "display": "flex",
            "maxWidth": "260px",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "gap": "8px"
          },
          "isText": false,
          "className": "rounded-[0rem] flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [
            {
              "figmaRef": "visible",
              "name": "showText",
              "value": "Show Text#168:7"
            }
          ],
          "properties": {
            "variant": "noBottom"
          },
          "styles": {
            "display": "flex",
            "maxWidth": "260px",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "gap": "8px"
          },
          "isText": false,
          "className": "rounded-[0rem] flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [
            {
              "figmaRef": "visible",
              "name": "showText",
              "value": "Show Text#168:7"
            }
          ],
          "properties": {
            "variant": "noPadding"
          },
          "styles": {
            "display": "flex",
            "maxWidth": "260px",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "gap": "8px"
          },
          "isText": false,
          "className": "rounded-[0rem] flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center",
          "textStyleClass": ""
        }
      ],
      "children": {
        "title": {
          "boundProps": [
            {
              "figmaRef": "characters",
              "name": "title",
              "value": "Title#357:10"
            }
          ],
          "elementType": "p",
          "isText": true,
          "hasBackgroundImage": false,
          "textValue": "You Believe in Authority",
          "variants": [
            {
              "elementType": "p",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "title",
                  "value": "Title#357:10"
                }
              ],
              "properties": {
                "variant": "default"
              },
              "styles": {
                "color": "#000000",
                "fontSize": "20px",
                "fontWeight": "500",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "22px"
              },
              "isText": true,
              "className": "font-medium text-xl font-[Satoshi Variable] text-black leading-[1.375rem]",
              "textStyleClass": "st-lead--tight"
            },
            {
              "elementType": "p",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "title",
                  "value": "Title#357:10"
                }
              ],
              "properties": {
                "variant": "noBottom"
              },
              "styles": {
                "color": "#000000",
                "fontSize": "20px",
                "fontWeight": "500",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "22px"
              },
              "isText": true,
              "className": "font-medium text-xl font-[Satoshi Variable] text-black leading-[1.375rem]",
              "textStyleClass": "st-lead--tight"
            },
            {
              "elementType": "p",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "title",
                  "value": "Title#357:10"
                }
              ],
              "properties": {
                "variant": "noPadding"
              },
              "styles": {
                "color": "#1c1b17",
                "fontSize": "20px",
                "fontWeight": "500",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "22px"
              },
              "isText": true,
              "className": "font-medium text-xl font-[Satoshi Variable] text-[#1c1b17] leading-[1.375rem]",
              "textStyleClass": "st-lead--tight"
            }
          ]
        },
        "body": {
          "boundProps": [
            {
              "figmaRef": "characters",
              "name": "body",
              "value": "Body#357:14"
            }
          ],
          "elementType": "p",
          "isText": true,
          "hasBackgroundImage": false,
          "textValue": "'Cause, baby, I'm an anarchist. You're a spineless liberal. We marched together for the eight-hour day",
          "variants": [
            {
              "elementType": "p",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "body",
                  "value": "Body#357:14"
                }
              ],
              "properties": {
                "variant": "default"
              },
              "styles": {
                "height": "auto",
                "color": "#1c1b1799",
                "fontSize": "14px",
                "fontWeight": "400",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "20px",
                "textAlign": "CENTER"
              },
              "isText": true,
              "className": "font-normal text-sm font-[Satoshi Variable] text-[#1c1b1799] leading-5 h-auto",
              "textStyleClass": "st-small"
            },
            {
              "elementType": "p",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "body",
                  "value": "Body#357:14"
                }
              ],
              "properties": {
                "variant": "noBottom"
              },
              "styles": {
                "height": "auto",
                "color": "#1c1b1799",
                "fontSize": "14px",
                "fontWeight": "400",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "20px",
                "textAlign": "CENTER"
              },
              "isText": true,
              "className": "font-normal text-sm font-[Satoshi Variable] text-[#1c1b1799] leading-5 h-auto",
              "textStyleClass": "st-small"
            },
            {
              "elementType": "p",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "body",
                  "value": "Body#357:14"
                }
              ],
              "properties": {
                "variant": "noPadding"
              },
              "styles": {
                "height": "auto",
                "color": "#1c1b1799",
                "fontSize": "14px",
                "fontWeight": "400",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "20px",
                "textAlign": "CENTER"
              },
              "isText": true,
              "className": "font-normal text-sm font-[Satoshi Variable] text-[#1c1b1799] leading-5 h-auto",
              "textStyleClass": "st-small"
            }
          ]
        }
      }
    },
    "image": {
      "boundProps": [],
      "elementType": "div",
      "isText": false,
      "hasBackgroundImage": true,
      "variants": [
        {
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "default"
          },
          "styles": {
            "height": "412px",
            "width": "600px",
            "object-fit": "contain"
          },
          "isText": false,
          "className": "rounded-[0rem] h-[25.75rem] w-[37.5rem]",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "noBottom"
          },
          "styles": {
            "height": "412px",
            "width": "600px",
            "object-fit": "contain"
          },
          "isText": false,
          "className": "rounded-[0rem] h-[25.75rem] w-[37.5rem]",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "noPadding"
          },
          "styles": {
            "height": "412px",
            "width": "600px",
            "object-fit": "contain"
          },
          "isText": false,
          "className": "rounded-[0rem] h-[25.75rem] w-[37.5rem]",
          "textStyleClass": ""
        }
      ]
    }
  },
  "variantOptions": {
    "showText": {
      "true": "",
      "false": ""
    },
    "variant": {
      "default": "",
      "noBottom": "",
      "noPadding": ""
    }
  },
  "defaultVariants": {
    "variant": "default"
  },
  "compoundVariants": [
    {
      "variant": "default",
      "className": "rounded-lg flex overflow-hidden py-8 px-6 flex-col gap-4 justify-start items-center bg-[#efefef]"
    },
    {
      "variant": "noBottom",
      "className": "rounded-lg flex overflow-hidden pt-8 pb-0 px-6 flex-col gap-4 justify-start items-center bg-[#efefef]"
    },
    {
      "variant": "noPadding",
      "className": "rounded-lg flex overflow-hidden pt-8 pb-0 px-0 flex-col gap-4 justify-start items-center bg-[#efefef]"
    }
  ],
  "variants": [
    {
      "figmaRef": "Variant=Default",
      "name": "Variant",
      "value": "Default",
      "styles": {
        "padding": "32px 24px 32px 24px"
      },
      "className": "rounded-lg flex overflow-hidden py-8 px-6 flex-col gap-4 justify-start items-center bg-[#efefef]",
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
          },
          "className": "rounded-[0rem] flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center"
        },
        {
          "name": "Image",
          "isText": false,
          "styles": {
            "height": "412px",
            "width": "600px",
            "object-fit": "contain"
          },
          "className": "rounded-[0rem] h-[25.75rem] w-[37.5rem]"
        }
      ]
    },
    {
      "figmaRef": "Variant=No Bottom",
      "name": "Variant",
      "value": "No Bottom",
      "styles": {
        "padding": "32px 24px 0px 24px"
      },
      "className": "rounded-lg flex overflow-hidden pt-8 pb-0 px-6 flex-col gap-4 justify-start items-center bg-[#efefef]",
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
          },
          "className": "rounded-[0rem] flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center"
        },
        {
          "name": "Image",
          "isText": false,
          "styles": {
            "height": "412px",
            "width": "600px",
            "object-fit": "contain"
          },
          "className": "rounded-[0rem] h-[25.75rem] w-[37.5rem]"
        }
      ]
    },
    {
      "figmaRef": "Variant=No Padding",
      "name": "Variant",
      "value": "No Padding",
      "styles": {
        "padding": "32px 0px 0px 0px"
      },
      "className": "rounded-lg flex overflow-hidden pt-8 pb-0 px-0 flex-col gap-4 justify-start items-center bg-[#efefef]",
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
          },
          "className": "rounded-[0rem] flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center"
        },
        {
          "name": "Image",
          "isText": false,
          "styles": {
            "height": "412px",
            "width": "600px",
            "object-fit": "contain"
          },
          "className": "rounded-[0rem] h-[25.75rem] w-[37.5rem]"
        }
      ]
    }
  ]
}