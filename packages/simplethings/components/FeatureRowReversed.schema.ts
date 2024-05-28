export const FeatureRowReversed = {
  "config": {},
  "updated": "2024-05-28T16:40:07.324Z",
  "name": "FeatureRowReversed",
  "dependencies": [],
  "description": "To be added",
  "isText": false,
  "isComponent": true,
  "elementAttributes": {},
  "elementType": "div",
  "typeScriptType": "HTMLDivElement",
  "styles": {
    "display": "flex",
    "height": "628px",
    "padding": "64px 0px 64px 0px",
    "justifyContent": "space-between",
    "gap": "16px",
    "borderColor": "#e2e2e2",
    "borderWidth": "1px 0px 1px 0px",
    "borderStyle": "solid"
  },
  "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-4 justify-between",
  "componentProps": [
    {
      "figmaRef": "CTA Text#168:13",
      "name": "cTAText",
      "tsType": "string",
      "defaultValue": "Stay in policy and on budget with proactive policy controls, configurable approvals, and AI-powered reconciliation."
    },
    {
      "figmaRef": "Title#168:12",
      "name": "title",
      "tsType": "string",
      "defaultValue": "Set guardrails to prevent overspending"
    },
    {
      "figmaRef": "Show Button#168:11",
      "name": "showButton",
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
        "centered"
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
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "flex-start",
            "gap": "312px"
          },
          "isText": false,
          "className": "rounded-[0rem] flex p-0 flex-col gap-[19.5rem] justify-start items-start",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "centered"
          },
          "styles": {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "flex-start",
            "gap": "16px"
          },
          "isText": false,
          "className": "rounded-[0rem] flex p-0 flex-col gap-4 justify-center items-start",
          "textStyleClass": ""
        }
      ],
      "children": {
        "title": {
          "boundProps": [
            {
              "figmaRef": "characters",
              "name": "title",
              "value": "Title#168:12"
            }
          ],
          "elementType": "p",
          "isText": true,
          "hasBackgroundImage": false,
          "textValue": "Set guardrails to prevent overspending",
          "variants": [
            {
              "elementType": "p",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "title",
                  "value": "Title#168:12"
                }
              ],
              "properties": {
                "variant": "default"
              },
              "styles": {
                "color": "#1c1b17",
                "fontSize": "36px",
                "fontWeight": "500",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "40px",
                "letterSpacing": "0px"
              },
              "isText": true,
              "className": "font-medium text-4xl font-[Satoshi Variable] text-[#1c1b17] leading-10 tracking-[0px]",
              "textStyleClass": "st-large"
            },
            {
              "elementType": "p",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "title",
                  "value": "Title#168:12"
                }
              ],
              "properties": {
                "variant": "centered"
              },
              "styles": {
                "color": "#1c1b17",
                "fontSize": "36px",
                "fontWeight": "500",
                "fontFamily": "Satoshi Variable",
                "lineHeight": "40px",
                "letterSpacing": "0px"
              },
              "isText": true,
              "className": "font-medium text-4xl font-[Satoshi Variable] text-[#1c1b17] leading-10 tracking-[0px]",
              "textStyleClass": "st-large"
            }
          ]
        },
        "cta": {
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
                "gap": "16px"
              },
              "isText": false,
              "className": "rounded-[0rem] flex p-0 flex-col gap-4 justify-start items-start",
              "textStyleClass": ""
            },
            {
              "elementType": "div",
              "boundProps": [],
              "properties": {
                "variant": "centered"
              },
              "styles": {
                "display": "flex",
                "flexDirection": "column",
                "justifyContent": "flex-start",
                "alignItems": "flex-start",
                "gap": "16px"
              },
              "isText": false,
              "className": "rounded-[0rem] flex p-0 flex-col gap-4 justify-start items-start",
              "textStyleClass": ""
            }
          ],
          "children": {
            "ctaText": {
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "cTAText",
                  "value": "CTA Text#168:13"
                }
              ],
              "elementType": "p",
              "isText": true,
              "hasBackgroundImage": false,
              "textValue": "Stay in policy and on budget with proactive policy controls, configurable approvals, and AI-powered reconciliation.",
              "variants": [
                {
                  "elementType": "p",
                  "boundProps": [
                    {
                      "figmaRef": "characters",
                      "name": "cTAText",
                      "value": "CTA Text#168:13"
                    }
                  ],
                  "properties": {
                    "variant": "default"
                  },
                  "styles": {
                    "height": "auto",
                    "width": "580px",
                    "color": "#1c1b17cc",
                    "fontSize": "24px",
                    "fontWeight": "500",
                    "fontFamily": "Satoshi Variable",
                    "lineHeight": "32px"
                  },
                  "isText": true,
                  "className": "font-medium text-2xl font-[Satoshi Variable] text-[#1c1b17cc] leading-8 h-auto w-[36.25rem]",
                  "textStyleClass": "st-subtitle"
                },
                {
                  "elementType": "p",
                  "boundProps": [
                    {
                      "figmaRef": "characters",
                      "name": "cTAText",
                      "value": "CTA Text#168:13"
                    }
                  ],
                  "properties": {
                    "variant": "centered"
                  },
                  "styles": {
                    "height": "auto",
                    "width": "580px",
                    "color": "#1c1b17cc",
                    "fontSize": "24px",
                    "fontWeight": "500",
                    "fontFamily": "Satoshi Variable",
                    "lineHeight": "32px"
                  },
                  "isText": true,
                  "className": "font-medium text-2xl font-[Satoshi Variable] text-[#1c1b17cc] leading-8 h-auto w-[36.25rem]",
                  "textStyleClass": "st-subtitle"
                }
              ]
            },
            "button": {
              "boundProps": [
                {
                  "figmaRef": "visible",
                  "name": "showButton",
                  "value": "Show Button#168:11"
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
                      "name": "showButton",
                      "value": "Show Button#168:11"
                    }
                  ],
                  "properties": {
                    "variant": "default"
                  },
                  "styles": {
                    "padding": "4px 0px 4px 0px",
                    "background": "rgba(0, 0, 0, 0)",
                    "borderRadius": "6px"
                  },
                  "isText": false,
                  "className": "rounded-md py-1 px-0 bg-transparent",
                  "textStyleClass": ""
                },
                {
                  "elementType": "div",
                  "boundProps": [
                    {
                      "figmaRef": "visible",
                      "name": "showButton",
                      "value": "Show Button#168:11"
                    }
                  ],
                  "properties": {
                    "variant": "centered"
                  },
                  "styles": {
                    "padding": "4px 0px 4px 0px",
                    "background": "rgba(0, 0, 0, 0)",
                    "borderRadius": "6px"
                  },
                  "isText": false,
                  "className": "rounded-md py-1 px-0 bg-transparent",
                  "textStyleClass": ""
                }
              ],
              "children": {
                "buttonText": {
                  "boundProps": [
                    {
                      "figmaRef": "characters",
                      "name": "buttonText",
                      "value": "Button Text#6:1"
                    }
                  ],
                  "elementType": "p",
                  "isText": true,
                  "hasBackgroundImage": false,
                  "textValue": "Learn More",
                  "variants": [
                    {
                      "elementType": "p",
                      "boundProps": [
                        {
                          "figmaRef": "characters",
                          "name": "buttonText",
                          "value": "Button Text#6:1"
                        }
                      ],
                      "properties": {
                        "variant": "default"
                      },
                      "styles": {
                        "color": "#455540",
                        "fontSize": "14px",
                        "fontWeight": "500",
                        "fontFamily": "Satoshi",
                        "lineHeight": "14px"
                      },
                      "isText": true,
                      "className": "font-medium text-sm font-[Satoshi] text-[#455540] leading-[0.875rem]",
                      "textStyleClass": ""
                    },
                    {
                      "elementType": "p",
                      "boundProps": [
                        {
                          "figmaRef": "characters",
                          "name": "buttonText",
                          "value": "Button Text#6:1"
                        }
                      ],
                      "properties": {
                        "variant": "centered"
                      },
                      "styles": {
                        "color": "#455540",
                        "fontSize": "14px",
                        "fontWeight": "500",
                        "fontFamily": "Satoshi",
                        "lineHeight": "14px"
                      },
                      "isText": true,
                      "className": "font-medium text-sm font-[Satoshi] text-[#455540] leading-[0.875rem]",
                      "textStyleClass": ""
                    }
                  ]
                }
              }
            }
          }
        }
      }
    },
    "media": {
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
            "padding": "32px 24px 32px 24px",
            "overflow": "hidden",
            "background": "#efefef",
            "borderRadius": "8px"
          },
          "isText": false,
          "className": "rounded-lg overflow-hidden py-8 px-6 bg-[#efefef]",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "centered"
          },
          "styles": {
            "padding": "32px 24px 32px 24px",
            "overflow": "hidden",
            "background": "#efefef",
            "borderRadius": "8px"
          },
          "isText": false,
          "className": "rounded-lg overflow-hidden py-8 px-6 bg-[#efefef]",
          "textStyleClass": ""
        }
      ]
    }
  },
  "variantOptions": {
    "showButton": {
      "true": "",
      "false": ""
    },
    "variant": {
      "default": "",
      "centered": ""
    }
  },
  "defaultVariants": {
    "variant": "default"
  },
  "compoundVariants": [
    {
      "variant": "default",
      "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-4 justify-between items-start"
    },
    {
      "variant": "centered",
      "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-4 justify-between items-center"
    }
  ],
  "variants": [
    {
      "figmaRef": "Variant=Default",
      "name": "Variant",
      "value": "Default",
      "styles": {
        "alignItems": "flex-start"
      },
      "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-4 justify-between items-start",
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
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "flex-start",
            "gap": "312px"
          },
          "className": "rounded-[0rem] flex p-0 flex-col gap-[19.5rem] justify-start items-start"
        },
        {
          "name": "Media",
          "isText": false,
          "styles": {
            "padding": "32px 24px 32px 24px",
            "overflow": "hidden",
            "background": "#efefef",
            "borderRadius": "8px"
          },
          "className": "rounded-lg overflow-hidden py-8 px-6 bg-[#efefef]"
        }
      ]
    },
    {
      "figmaRef": "Variant=Centered",
      "name": "Variant",
      "value": "Centered",
      "styles": {
        "alignItems": "center"
      },
      "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-4 justify-between items-center",
      "props": [
        {
          "name": "variant",
          "value": "centered"
        }
      ],
      "children": [
        {
          "name": "Content",
          "isText": false,
          "styles": {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "flex-start",
            "gap": "16px"
          },
          "className": "rounded-[0rem] flex p-0 flex-col gap-4 justify-center items-start"
        },
        {
          "name": "Media",
          "isText": false,
          "styles": {
            "padding": "32px 24px 32px 24px",
            "overflow": "hidden",
            "background": "#efefef",
            "borderRadius": "8px"
          },
          "className": "rounded-lg overflow-hidden py-8 px-6 bg-[#efefef]"
        }
      ]
    }
  ]
}