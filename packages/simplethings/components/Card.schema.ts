export const Card = {
  "config": {},
  "updated": "2024-05-28T23:33:03.137Z",
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
      "name": "cardBody",
      "boundProps": [
        {
          "figmaRef": "visible",
          "name": "showText",
          "value": "Show Text#168:7"
        }
      ],
      "elementType": "div",
      "isText": false,
      "isComponent": false,
      "hasBackgroundImage": false,
      "variants": [
        {
          "name": "cardBody",
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
          "isComponent": false,
          "className": "flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center",
          "textStyleClass": "",
          "componentProps": [
            {
              "figmaPropType": "visible",
              "figmaRef": "Show Text#168:7",
              "name": "showText",
              "type": "boolean"
            }
          ]
        },
        {
          "name": "cardBody",
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
          "isComponent": false,
          "className": "flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center",
          "textStyleClass": "",
          "componentProps": [
            {
              "figmaPropType": "visible",
              "figmaRef": "Show Text#168:7",
              "name": "showText",
              "type": "boolean"
            }
          ]
        },
        {
          "name": "cardBody",
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
          "isComponent": false,
          "className": "flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center",
          "textStyleClass": "",
          "componentProps": [
            {
              "figmaPropType": "visible",
              "figmaRef": "Show Text#168:7",
              "name": "showText",
              "type": "boolean"
            }
          ]
        }
      ],
      "componentProps": [
        {
          "figmaPropType": "visible",
          "figmaRef": "Show Text#168:7",
          "name": "showText",
          "type": "boolean"
        }
      ],
      "children": {
        "title": {
          "name": "title",
          "boundProps": [
            {
              "figmaRef": "characters",
              "name": "title",
              "value": "Title#357:10"
            }
          ],
          "elementType": "p",
          "isText": true,
          "isComponent": false,
          "hasBackgroundImage": false,
          "textValue": "You Believe in Authority",
          "variants": [
            {
              "name": "title",
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
                "display": "flex",
                "flexDirection": "row",
                "color": "#000000",
                "fontSize": "20px",
                "fontWeight": "500",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "22px"
              },
              "isText": true,
              "isComponent": false,
              "className": "font-medium text-xl font-[Satoshi Variable] text-black leading-[1.375rem] flex flex-row",
              "textStyleClass": "st-lead--tight text-black text-left",
              "componentProps": [
                {
                  "figmaPropType": "characters",
                  "figmaRef": "Title#357:10",
                  "name": "title",
                  "type": "string"
                }
              ]
            },
            {
              "name": "title",
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
                "display": "flex",
                "flexDirection": "row",
                "color": "#000000",
                "fontSize": "20px",
                "fontWeight": "500",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "22px"
              },
              "isText": true,
              "isComponent": false,
              "className": "font-medium text-xl font-[Satoshi Variable] text-black leading-[1.375rem] flex flex-row",
              "textStyleClass": "st-lead--tight text-black text-left",
              "componentProps": [
                {
                  "figmaPropType": "characters",
                  "figmaRef": "Title#357:10",
                  "name": "title",
                  "type": "string"
                }
              ]
            },
            {
              "name": "title",
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
                "display": "flex",
                "flexDirection": "row",
                "color": "#1c1b17",
                "fontSize": "20px",
                "fontWeight": "500",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "22px"
              },
              "isText": true,
              "isComponent": false,
              "className": "font-medium text-xl font-[Satoshi Variable] text-[#1c1b17] leading-[1.375rem] flex flex-row",
              "textStyleClass": "st-lead--tight text-[#1c1b17] text-left",
              "componentProps": [
                {
                  "figmaPropType": "characters",
                  "figmaRef": "Title#357:10",
                  "name": "title",
                  "type": "string"
                }
              ]
            }
          ],
          "componentProps": [
            {
              "figmaPropType": "characters",
              "figmaRef": "Title#357:10",
              "name": "title",
              "type": "string"
            }
          ]
        },
        "body": {
          "name": "body",
          "boundProps": [
            {
              "figmaRef": "characters",
              "name": "body",
              "value": "Body#357:14"
            }
          ],
          "elementType": "p",
          "isText": true,
          "isComponent": false,
          "hasBackgroundImage": false,
          "textValue": "'Cause, baby, I'm an anarchist. You're a spineless liberal. We marched together for the eight-hour day",
          "variants": [
            {
              "name": "body",
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
                "display": "flex",
                "height": "auto",
                "flexDirection": "row",
                "color": "#1c1b1799",
                "fontSize": "14px",
                "fontWeight": "400",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "20px",
                "textAlign": "CENTER"
              },
              "isText": true,
              "isComponent": false,
              "className": "font-normal text-sm font-[Satoshi Variable] text-[#1c1b1799] leading-5 flex h-auto flex-row",
              "textStyleClass": "st-small text-[#1c1b1799] text-center",
              "componentProps": [
                {
                  "figmaPropType": "characters",
                  "figmaRef": "Body#357:14",
                  "name": "body",
                  "type": "string"
                }
              ]
            },
            {
              "name": "body",
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
                "display": "flex",
                "height": "auto",
                "flexDirection": "row",
                "color": "#1c1b1799",
                "fontSize": "14px",
                "fontWeight": "400",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "20px",
                "textAlign": "CENTER"
              },
              "isText": true,
              "isComponent": false,
              "className": "font-normal text-sm font-[Satoshi Variable] text-[#1c1b1799] leading-5 flex h-auto flex-row",
              "textStyleClass": "st-small text-[#1c1b1799] text-center",
              "componentProps": [
                {
                  "figmaPropType": "characters",
                  "figmaRef": "Body#357:14",
                  "name": "body",
                  "type": "string"
                }
              ]
            },
            {
              "name": "body",
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
                "display": "flex",
                "height": "auto",
                "flexDirection": "row",
                "color": "#1c1b1799",
                "fontSize": "14px",
                "fontWeight": "400",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "20px",
                "textAlign": "CENTER"
              },
              "isText": true,
              "isComponent": false,
              "className": "font-normal text-sm font-[Satoshi Variable] text-[#1c1b1799] leading-5 flex h-auto flex-row",
              "textStyleClass": "st-small text-[#1c1b1799] text-center",
              "componentProps": [
                {
                  "figmaPropType": "characters",
                  "figmaRef": "Body#357:14",
                  "name": "body",
                  "type": "string"
                }
              ]
            }
          ],
          "componentProps": [
            {
              "figmaPropType": "characters",
              "figmaRef": "Body#357:14",
              "name": "body",
              "type": "string"
            }
          ]
        }
      }
    },
    "image": {
      "name": "image",
      "boundProps": [],
      "elementType": "div",
      "isText": false,
      "isComponent": false,
      "hasBackgroundImage": true,
      "variants": [
        {
          "name": "image",
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "default"
          },
          "styles": {
            "display": "flex",
            "height": "412px",
            "width": "600px",
            "flexDirection": "row",
            "object-fit": "contain"
          },
          "isText": false,
          "isComponent": false,
          "className": "flex h-[25.75rem] w-[37.5rem] flex-row",
          "textStyleClass": "",
          "componentProps": []
        },
        {
          "name": "image",
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "noBottom"
          },
          "styles": {
            "display": "flex",
            "height": "412px",
            "width": "600px",
            "flexDirection": "row",
            "object-fit": "contain"
          },
          "isText": false,
          "isComponent": false,
          "className": "flex h-[25.75rem] w-[37.5rem] flex-row",
          "textStyleClass": "",
          "componentProps": []
        },
        {
          "name": "image",
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "noPadding"
          },
          "styles": {
            "display": "flex",
            "height": "412px",
            "width": "600px",
            "flexDirection": "row",
            "object-fit": "contain"
          },
          "isText": false,
          "isComponent": false,
          "className": "flex h-[25.75rem] w-[37.5rem] flex-row",
          "textStyleClass": "",
          "componentProps": []
        }
      ],
      "componentProps": []
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
          "className": "flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center"
        },
        {
          "name": "Image",
          "isText": false,
          "styles": {
            "display": "flex",
            "height": "412px",
            "width": "600px",
            "flexDirection": "row",
            "object-fit": "contain"
          },
          "className": "flex h-[25.75rem] w-[37.5rem] flex-row"
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
          "className": "flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center"
        },
        {
          "name": "Image",
          "isText": false,
          "styles": {
            "display": "flex",
            "height": "412px",
            "width": "600px",
            "flexDirection": "row",
            "object-fit": "contain"
          },
          "className": "flex h-[25.75rem] w-[37.5rem] flex-row"
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
          "className": "flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center"
        },
        {
          "name": "Image",
          "isText": false,
          "styles": {
            "display": "flex",
            "height": "412px",
            "width": "600px",
            "flexDirection": "row",
            "object-fit": "contain"
          },
          "className": "flex h-[25.75rem] w-[37.5rem] flex-row"
        }
      ]
    }
  ]
}