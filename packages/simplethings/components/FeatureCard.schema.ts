export const FeatureCard = {
  "config": {},
  "updated": "2024-05-27T19:53:18.297Z",
  "name": "FeatureCard",
  "dependencies": [],
  "description": "To be added",
  "isText": false,
  "isComponent": true,
  "elementAttributes": {},
  "elementType": "div",
  "typeScriptType": "HTMLDivElement",
  "styles": {
    "display": "flex",
    "height": "576px",
    "maxWidth": "1440px",
    "padding": "16px",
    "overflow": "hidden",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "gap": "16px",
    "borderRadius": "8px"
  },
  "className": "rounded-lg flex h-[36rem] overflow-hidden p-4 gap-4 justify-start items-start",
  "componentProps": [
    {
      "figmaRef": "showLogo#358:18",
      "name": "showLogo",
      "tsType": "boolean",
      "defaultValue": true
    },
    {
      "figmaRef": "Attribution#357:5",
      "name": "attribution",
      "tsType": "string",
      "defaultValue": "lorem ipsum dolor sit"
    },
    {
      "figmaRef": "Quote#357:0",
      "name": "quote",
      "tsType": "string",
      "defaultValue": "Velit commodo ipsum nulla labore incididunt ullamco ad voluptate cupidatat commodo. Veniam ex ad magna id. Adipisicing quis ut incididunt elit. Occaecat exercitation id aliqua exercitation eu laborum tempor nisi est aliqua enim ex voluptate."
    },
    {
      "figmaRef": "Variant",
      "name": "variant",
      "tsType": "string",
      "defaultValue": "default",
      "options": [
        "default",
        "light"
      ]
    }
  ],
  "children": {
    "content": {
      "boundProps": [],
      "elementType": "div",
      "isText": false,
      "hasBackgroundImage": false,
      "variants": [
        {
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "default"
          },
          "styles": {
            "display": "flex",
            "padding": "32px",
            "flexDirection": "column",
            "justifyContent": "space-between",
            "alignItems": "flex-start"
          },
          "isText": false,
          "className": "rounded-[0rem] flex p-8 flex-col justify-between items-start"
        },
        {
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "light"
          },
          "styles": {
            "display": "flex",
            "padding": "32px",
            "flexDirection": "column",
            "justifyContent": "space-between",
            "alignItems": "flex-start"
          },
          "isText": false,
          "className": "rounded-[0rem] flex p-8 flex-col justify-between items-start"
        }
      ],
      "children": {
        "mejuriLogo": {
          "boundProps": [
            {
              "figmaRef": "visible",
              "name": "showLogo",
              "value": "showLogo#358:18"
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
                  "name": "showLogo",
                  "value": "showLogo#358:18"
                }
              ],
              "properties": {
                "variant": "default"
              },
              "styles": {
                "display": "flex",
                "padding": "0px 0px 64px 0px",
                "justifyContent": "flex-start",
                "alignItems": "flex-start",
                "gap": "11px"
              },
              "isText": false,
              "className": "rounded-[0rem] flex pt-0 pb-16 px-0 gap-[0.6875rem] justify-start items-start"
            },
            {
              "elementType": "div",
              "boundProps": [
                {
                  "figmaRef": "visible",
                  "name": "showLogo",
                  "value": "showLogo#358:18"
                }
              ],
              "properties": {
                "variant": "light"
              },
              "styles": {
                "display": "flex",
                "padding": "0px 0px 64px 0px",
                "justifyContent": "flex-start",
                "alignItems": "flex-start",
                "gap": "11px"
              },
              "isText": false,
              "className": "rounded-[0rem] flex pt-0 pb-16 px-0 gap-[0.6875rem] justify-start items-start"
            }
          ],
          "children": {
            "vector": {
              "boundProps": [],
              "elementType": "div",
              "isText": false,
              "hasBackgroundImage": false,
              "variants": [
                {
                  "elementType": "div",
                  "boundProps": [],
                  "properties": {
                    "variant": "default"
                  },
                  "styles": {
                    "background": "#e4ebf6"
                  },
                  "isText": false,
                  "className": "bg-[#e4ebf6]bg-[#e4ebf6]bg-[#e4ebf6]bg-[#e4ebf6]bg-[#e4ebf6]bg-[#e4ebf6]"
                },
                {
                  "elementType": "div",
                  "boundProps": [],
                  "properties": {
                    "variant": "light"
                  },
                  "styles": {
                    "background": "#1c1b17"
                  },
                  "isText": false,
                  "className": "bg-[#1c1b17]bg-[#1c1b17]bg-[#1c1b17]bg-[#1c1b17]bg-[#1c1b17]bg-[#1c1b17]"
                }
              ]
            }
          }
        },
        "lockup": {
          "boundProps": [],
          "elementType": "div",
          "isText": false,
          "hasBackgroundImage": false,
          "variants": [
            {
              "elementType": "div",
              "boundProps": [],
              "properties": {
                "variant": "default"
              },
              "styles": {
                "display": "flex",
                "flexDirection": "column",
                "justifyContent": "flex-start",
                "alignItems": "flex-start",
                "gap": "24px"
              },
              "isText": false,
              "className": "rounded-[0rem] flex p-0 flex-col gap-6 justify-start items-start"
            },
            {
              "elementType": "div",
              "boundProps": [],
              "properties": {
                "variant": "light"
              },
              "styles": {
                "display": "flex",
                "flexDirection": "column",
                "justifyContent": "flex-start",
                "alignItems": "flex-start",
                "gap": "24px"
              },
              "isText": false,
              "className": "rounded-[0rem] flex p-0 flex-col gap-6 justify-start items-start"
            }
          ],
          "children": {
            "quote": {
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "quote",
                  "value": "Quote#357:0"
                }
              ],
              "elementType": "p",
              "isText": true,
              "hasBackgroundImage": false,
              "textValue": "Velit commodo ipsum nulla labore incididunt ullamco ad voluptate cupidatat commodo. Veniam ex ad magna id. Adipisicing quis ut incididunt elit. Occaecat exercitation id aliqua exercitation eu laborum tempor nisi est aliqua enim ex voluptate.",
              "variants": [
                {
                  "elementType": "p",
                  "boundProps": [
                    {
                      "figmaRef": "characters",
                      "name": "quote",
                      "value": "Quote#357:0"
                    }
                  ],
                  "properties": {
                    "variant": "default"
                  },
                  "styles": {
                    "height": "auto",
                    "color": "#ffffff",
                    "fontSize": "24px",
                    "fontWeight": "500",
                    "fontFamily": "Satoshi Variable",
                    "lineHeight": "32px"
                  },
                  "isText": true,
                  "className": "font-medium text-2xl font-[Satoshi Variable] text-white leading-8 h-auto",
                  "textStyleClass": "st-subtitle"
                },
                {
                  "elementType": "p",
                  "boundProps": [
                    {
                      "figmaRef": "characters",
                      "name": "quote",
                      "value": "Quote#357:0"
                    }
                  ],
                  "properties": {
                    "variant": "light"
                  },
                  "styles": {
                    "height": "auto",
                    "color": "#1c1b17",
                    "fontSize": "24px",
                    "fontWeight": "500",
                    "fontFamily": "Satoshi Variable",
                    "lineHeight": "32px"
                  },
                  "isText": true,
                  "className": "font-medium text-2xl font-[Satoshi Variable] text-[#1c1b17] leading-8 h-auto",
                  "textStyleClass": "st-subtitle"
                }
              ]
            },
            "attribution": {
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "attribution",
                  "value": "Attribution#357:5"
                }
              ],
              "elementType": "p",
              "isText": true,
              "hasBackgroundImage": false,
              "textValue": "lorem ipsum dolor sit",
              "variants": [
                {
                  "elementType": "p",
                  "boundProps": [
                    {
                      "figmaRef": "characters",
                      "name": "attribution",
                      "value": "Attribution#357:5"
                    }
                  ],
                  "properties": {
                    "variant": "default"
                  },
                  "styles": {
                    "height": "auto",
                    "color": "#aabca3",
                    "fontSize": "16px",
                    "fontWeight": "500",
                    "fontFamily": "Satoshi Variable",
                    "lineHeight": "22px"
                  },
                  "isText": true,
                  "className": "font-medium text-base font-[Satoshi Variable] text-[#aabca3] leading-[1.375rem] h-auto",
                  "textStyleClass": "st-body"
                },
                {
                  "elementType": "p",
                  "boundProps": [
                    {
                      "figmaRef": "characters",
                      "name": "attribution",
                      "value": "Attribution#357:5"
                    }
                  ],
                  "properties": {
                    "variant": "light"
                  },
                  "styles": {
                    "height": "auto",
                    "color": "#1c1b1799",
                    "fontSize": "16px",
                    "fontWeight": "500",
                    "fontFamily": "Satoshi Variable",
                    "lineHeight": "22px"
                  },
                  "isText": true,
                  "className": "font-medium text-base font-[Satoshi Variable] text-[#1c1b1799] leading-[1.375rem] h-auto",
                  "textStyleClass": "st-body"
                }
              ]
            }
          }
        }
      }
    },
    "asset": {
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
            "borderRadius": "8px",
            "object-fit": "cover"
          },
          "isText": false,
          "className": "rounded-lg p-0"
        },
        {
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "light"
          },
          "styles": {
            "borderRadius": "8px",
            "object-fit": "cover"
          },
          "isText": false,
          "className": "rounded-lg p-0"
        }
      ]
    }
  },
  "variantOptions": {
    "showLogo": {
      "true": "",
      "false": ""
    },
    "variant": {
      "default": "",
      "light": ""
    }
  },
  "defaultVariants": {
    "variant": "default"
  },
  "compoundVariants": [
    {
      "variant": "default",
      "className": "rounded-lg flex h-[36rem] w-[6.25rem] overflow-hidden p-4 gap-4 justify-start items-start bg-[#17332d]"
    },
    {
      "variant": "light",
      "className": "rounded-lg flex h-[36rem] w-[6.25rem] overflow-hidden p-4 gap-4 justify-start items-start bg-[#f4f3f3]"
    }
  ],
  "variants": [
    {
      "figmaRef": "Variant=Default",
      "name": "Variant",
      "value": "Default",
      "styles": {
        "width": "100%",
        "background": "#17332d"
      },
      "className": "rounded-lg flex h-[36rem] w-[6.25rem] overflow-hidden p-4 gap-4 justify-start items-start bg-[#17332d]",
      "props": [
        {
          "name": "variant",
          "value": "default"
        }
      ],
      "children": [
        {
          "name": "Content",
          "isText": false,
          "styles": {
            "display": "flex",
            "padding": "32px",
            "flexDirection": "column",
            "justifyContent": "space-between",
            "alignItems": "flex-start"
          },
          "className": "rounded-[0rem] flex p-8 flex-col justify-between items-start"
        },
        {
          "name": "Asset",
          "isText": false,
          "styles": {
            "borderRadius": "8px",
            "object-fit": "cover"
          },
          "className": "rounded-lg p-0"
        }
      ]
    },
    {
      "figmaRef": "Variant=Light",
      "name": "Variant",
      "value": "Light",
      "styles": {
        "width": "100%",
        "background": "#f4f3f3"
      },
      "className": "rounded-lg flex h-[36rem] w-[6.25rem] overflow-hidden p-4 gap-4 justify-start items-start bg-[#f4f3f3]",
      "props": [
        {
          "name": "variant",
          "value": "light"
        }
      ],
      "children": [
        {
          "name": "Content",
          "isText": false,
          "styles": {
            "display": "flex",
            "padding": "32px",
            "flexDirection": "column",
            "justifyContent": "space-between",
            "alignItems": "flex-start"
          },
          "className": "rounded-[0rem] flex p-8 flex-col justify-between items-start"
        },
        {
          "name": "Asset",
          "isText": false,
          "styles": {
            "borderRadius": "8px",
            "object-fit": "cover"
          },
          "className": "rounded-lg p-0"
        }
      ]
    }
  ]
}