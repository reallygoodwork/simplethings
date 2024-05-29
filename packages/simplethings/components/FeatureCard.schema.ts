export const FeatureCard = {
  "config": {},
  "updated": "2024-05-29T20:18:22.482Z",
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
    "maxWidth": "1440px",
    "padding": "16px",
    "overflow": "hidden",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "gap": "16px",
    "borderRadius": "8px"
  },
  "hasImage": false,
  "className": "rounded-lg flex max-w-[90rem] overflow-hidden p-4 flex-row gap-4 justify-start items-start",
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
  "children": {
    "content": {
      "name": "content",
      "boundProps": [],
      "elementType": "div",
      "isText": false,
      "isComponent": false,
      "hasBackgroundImage": false,
      "variants": [
        {
          "name": "content",
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
          "isComponent": false,
          "className": "flex p-8 flex-col justify-between items-start",
          "textStyleClass": "",
          "componentProps": [],
          "hasImage": false
        },
        {
          "name": "content",
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
          "isComponent": false,
          "className": "flex p-8 flex-col justify-between items-start",
          "textStyleClass": "",
          "componentProps": [],
          "hasImage": false
        }
      ],
      "componentProps": [],
      "hasImage": false,
      "children": {
        "mejuriLogo": {
          "name": "mejuriLogo",
          "boundProps": [
            {
              "figmaRef": "visible",
              "name": "showLogo",
              "value": "showLogo#358:18"
            }
          ],
          "elementType": "div",
          "isText": false,
          "isComponent": false,
          "hasBackgroundImage": false,
          "variants": [
            {
              "name": "mejuriLogo",
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
                "flexDirection": "row",
                "justifyContent": "flex-start",
                "alignItems": "flex-start",
                "gap": "11px"
              },
              "isText": false,
              "isComponent": false,
              "className": "flex pt-0 pb-16 px-0 flex-row gap-[0.6875rem] justify-start items-start",
              "textStyleClass": "",
              "componentProps": [
                {
                  "figmaPropType": "visible",
                  "figmaRef": "showLogo#358:18",
                  "name": "showLogo",
                  "type": "boolean"
                }
              ],
              "hasImage": false
            },
            {
              "name": "mejuriLogo",
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
                "flexDirection": "row",
                "justifyContent": "flex-start",
                "alignItems": "flex-start",
                "gap": "11px"
              },
              "isText": false,
              "isComponent": false,
              "className": "flex pt-0 pb-16 px-0 flex-row gap-[0.6875rem] justify-start items-start",
              "textStyleClass": "",
              "componentProps": [
                {
                  "figmaPropType": "visible",
                  "figmaRef": "showLogo#358:18",
                  "name": "showLogo",
                  "type": "boolean"
                }
              ],
              "hasImage": false
            }
          ],
          "componentProps": [
            {
              "figmaPropType": "visible",
              "figmaRef": "showLogo#358:18",
              "name": "showLogo",
              "type": "boolean"
            }
          ],
          "hasImage": false,
          "children": {
            "vector": {
              "name": "vector",
              "boundProps": [],
              "elementType": "div",
              "isText": false,
              "isComponent": false,
              "hasBackgroundImage": false,
              "variants": [
                {
                  "name": "vector",
                  "elementType": "div",
                  "boundProps": [],
                  "properties": {
                    "variant": "default"
                  },
                  "styles": {
                    "display": "flex",
                    "flexDirection": "row",
                    "background": "#e4ebf6"
                  },
                  "isText": false,
                  "isComponent": false,
                  "className": "flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]",
                  "textStyleClass": "",
                  "componentProps": [],
                  "hasImage": false
                },
                {
                  "name": "vector",
                  "elementType": "div",
                  "boundProps": [],
                  "properties": {
                    "variant": "light"
                  },
                  "styles": {
                    "display": "flex",
                    "flexDirection": "row",
                    "background": "#1c1b17"
                  },
                  "isText": false,
                  "isComponent": false,
                  "className": "flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]",
                  "textStyleClass": "",
                  "componentProps": [],
                  "hasImage": false
                }
              ],
              "componentProps": [],
              "hasImage": false
            }
          }
        },
        "lockup": {
          "name": "lockup",
          "boundProps": [],
          "elementType": "div",
          "isText": false,
          "isComponent": false,
          "hasBackgroundImage": false,
          "variants": [
            {
              "name": "lockup",
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
              "isComponent": false,
              "className": "flex p-0 flex-col gap-6 justify-start items-start",
              "textStyleClass": "",
              "componentProps": [],
              "hasImage": false
            },
            {
              "name": "lockup",
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
              "isComponent": false,
              "className": "flex p-0 flex-col gap-6 justify-start items-start",
              "textStyleClass": "",
              "componentProps": [],
              "hasImage": false
            }
          ],
          "componentProps": [],
          "hasImage": false,
          "children": {
            "quote": {
              "name": "quote",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "quote",
                  "value": "Quote#357:0"
                }
              ],
              "elementType": "p",
              "isText": true,
              "isComponent": false,
              "hasBackgroundImage": false,
              "textValue": "Velit commodo ipsum nulla labore incididunt ullamco ad voluptate cupidatat commodo. Veniam ex ad magna id. Adipisicing quis ut incididunt elit. Occaecat exercitation id aliqua exercitation eu laborum tempor nisi est aliqua enim ex voluptate.",
              "variants": [
                {
                  "name": "quote",
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
                    "display": "flex",
                    "height": "auto",
                    "width": "600px",
                    "flexDirection": "row",
                    "color": "#ffffff",
                    "fontSize": "24px",
                    "fontWeight": "500",
                    "fontFamily": "Satoshi Variable",
                    "lineHeight": "32px"
                  },
                  "isText": true,
                  "isComponent": false,
                  "className": "font-medium text-2xl font-[Satoshi Variable] text-white leading-8 flex h-auto w-[37.5rem] flex-row",
                  "textStyleClass": "st-subtitle text-white text-left",
                  "componentProps": [
                    {
                      "figmaPropType": "characters",
                      "figmaRef": "Quote#357:0",
                      "name": "quote",
                      "type": "string"
                    }
                  ],
                  "hasImage": false
                },
                {
                  "name": "quote",
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
                    "display": "flex",
                    "height": "auto",
                    "width": "600px",
                    "flexDirection": "row",
                    "color": "#1c1b17",
                    "fontSize": "24px",
                    "fontWeight": "500",
                    "fontFamily": "Satoshi Variable",
                    "lineHeight": "32px"
                  },
                  "isText": true,
                  "isComponent": false,
                  "className": "font-medium text-2xl font-[Satoshi Variable] text-[#1c1b17] leading-8 flex h-auto w-[37.5rem] flex-row",
                  "textStyleClass": "st-subtitle text-[#1c1b17] text-left",
                  "componentProps": [
                    {
                      "figmaPropType": "characters",
                      "figmaRef": "Quote#357:0",
                      "name": "quote",
                      "type": "string"
                    }
                  ],
                  "hasImage": false
                }
              ],
              "componentProps": [
                {
                  "figmaPropType": "characters",
                  "figmaRef": "Quote#357:0",
                  "name": "quote",
                  "type": "string"
                }
              ],
              "hasImage": false
            },
            "attribution": {
              "name": "attribution",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "attribution",
                  "value": "Attribution#357:5"
                }
              ],
              "elementType": "p",
              "isText": true,
              "isComponent": false,
              "hasBackgroundImage": false,
              "textValue": "lorem ipsum dolor sit",
              "variants": [
                {
                  "name": "attribution",
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
                    "display": "flex",
                    "height": "auto",
                    "flexDirection": "row",
                    "color": "#aabca3",
                    "fontSize": "16px",
                    "fontWeight": "500",
                    "fontFamily": "Satoshi Variable",
                    "lineHeight": "22px"
                  },
                  "isText": true,
                  "isComponent": false,
                  "className": "font-medium text-base font-[Satoshi Variable] text-[#aabca3] leading-[1.375rem] flex h-auto flex-row",
                  "textStyleClass": "st-body text-[#aabca3] text-left",
                  "componentProps": [
                    {
                      "figmaPropType": "characters",
                      "figmaRef": "Attribution#357:5",
                      "name": "attribution",
                      "type": "string"
                    }
                  ],
                  "hasImage": false
                },
                {
                  "name": "attribution",
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
                    "display": "flex",
                    "height": "auto",
                    "flexDirection": "row",
                    "color": "#1c1b1799",
                    "fontSize": "16px",
                    "fontWeight": "500",
                    "fontFamily": "Satoshi Variable",
                    "lineHeight": "22px"
                  },
                  "isText": true,
                  "isComponent": false,
                  "className": "font-medium text-base font-[Satoshi Variable] text-[#1c1b1799] leading-[1.375rem] flex h-auto flex-row",
                  "textStyleClass": "st-body text-[#1c1b1799] text-left",
                  "componentProps": [
                    {
                      "figmaPropType": "characters",
                      "figmaRef": "Attribution#357:5",
                      "name": "attribution",
                      "type": "string"
                    }
                  ],
                  "hasImage": false
                }
              ],
              "componentProps": [
                {
                  "figmaPropType": "characters",
                  "figmaRef": "Attribution#357:5",
                  "name": "attribution",
                  "type": "string"
                }
              ],
              "hasImage": false
            }
          }
        }
      }
    },
    "media": {
      "name": "media",
      "boundProps": [
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
      "elementType": "div",
      "isText": false,
      "isComponent": false,
      "hasBackgroundImage": true,
      "variants": [
        {
          "name": "media",
          "elementType": "div",
          "boundProps": [
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
          "properties": {
            "variant": "default"
          },
          "styles": {
            "display": "flex",
            "width": "100%",
            "maxWidth": "520px",
            "maxHeight": "544px",
            "overflow": "hidden",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "borderRadius": "8px",
            "object-fit": "cover"
          },
          "isText": false,
          "isComponent": false,
          "className": "rounded-lg flex max-w-[32.5rem] w-full overflow-hidden p-0 flex-col justify-start items-center",
          "textStyleClass": "",
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
          "hasImage": true
        },
        {
          "name": "media",
          "elementType": "div",
          "boundProps": [
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
          "properties": {
            "variant": "light"
          },
          "styles": {
            "display": "flex",
            "width": "100%",
            "maxWidth": "520px",
            "maxHeight": "544px",
            "overflow": "hidden",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "borderRadius": "8px",
            "object-fit": "cover"
          },
          "isText": false,
          "isComponent": false,
          "className": "rounded-lg flex max-w-[32.5rem] w-full overflow-hidden p-0 flex-col justify-start items-center",
          "textStyleClass": "",
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
          "hasImage": true
        }
      ],
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
      "hasImage": true
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
      "className": "rounded-lg flex max-w-[90rem] overflow-hidden p-4 flex-row gap-4 justify-start items-start bg-[#17332d]"
    },
    {
      "variant": "light",
      "className": "rounded-lg flex max-w-[90rem] overflow-hidden p-4 flex-row gap-4 justify-start items-start bg-[#f4f3f3]"
    }
  ],
  "variants": [
    {
      "figmaRef": "Variant=Default",
      "name": "Variant",
      "value": "Default",
      "styles": {
        "background": "#17332d"
      },
      "className": "rounded-lg flex max-w-[90rem] overflow-hidden p-4 flex-row gap-4 justify-start items-start bg-[#17332d]",
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
          "className": "flex p-8 flex-col justify-between items-start"
        },
        {
          "name": "Media",
          "isText": false,
          "styles": {
            "display": "flex",
            "width": "100%",
            "maxWidth": "520px",
            "maxHeight": "544px",
            "overflow": "hidden",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "borderRadius": "8px",
            "object-fit": "cover"
          },
          "className": "rounded-lg flex max-w-[32.5rem] w-full overflow-hidden p-0 flex-col justify-start items-center"
        }
      ]
    },
    {
      "figmaRef": "Variant=Light",
      "name": "Variant",
      "value": "Light",
      "styles": {
        "background": "#f4f3f3"
      },
      "className": "rounded-lg flex max-w-[90rem] overflow-hidden p-4 flex-row gap-4 justify-start items-start bg-[#f4f3f3]",
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
          "className": "flex p-8 flex-col justify-between items-start"
        },
        {
          "name": "Media",
          "isText": false,
          "styles": {
            "display": "flex",
            "width": "100%",
            "maxWidth": "520px",
            "maxHeight": "544px",
            "overflow": "hidden",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "borderRadius": "8px",
            "object-fit": "cover"
          },
          "className": "rounded-lg flex max-w-[32.5rem] w-full overflow-hidden p-0 flex-col justify-start items-center"
        }
      ]
    }
  ]
}