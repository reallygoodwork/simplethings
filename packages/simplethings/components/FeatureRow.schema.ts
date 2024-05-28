export const FeatureRow = {
  "config": {},
  "updated": "2024-05-28T19:12:59.216Z",
  "name": "FeatureRow",
  "dependencies": [
    {
      "name": "{ Button }",
      "packageName": "./button"
    }
  ],
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
    "justifyContent": "flex-start",
    "gap": "156px",
    "borderColor": "#e2e2e2",
    "borderWidth": "1px 0px 1px 0px",
    "borderStyle": "solid"
  },
  "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-[9.75rem] justify-start",
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
      "defaultValue": "alternate",
      "options": [
        "alternate",
        "centeredAlt"
      ]
    },
    {
      "figmaRef": "Show Trailing Icon#10:5",
      "name": "showTrailingIcon",
      "defaultValue": false,
      "tsType": "boolean"
    },
    {
      "figmaRef": "Show Leading Icon#10:3",
      "name": "showLeadingIcon",
      "defaultValue": false,
      "tsType": "boolean"
    },
    {
      "figmaRef": "Button Text#6:1",
      "name": "buttonText",
      "defaultValue": "Learn More",
      "tsType": "string"
    },
    {
      "figmaRef": "Size",
      "name": "size",
      "defaultValue": "sm",
      "tsType": "any",
      "options": [
        "xs",
        "sm",
        "md",
        "xl",
        "lg"
      ]
    },
    {
      "figmaRef": "Purpose",
      "name": "purpose",
      "defaultValue": "link",
      "tsType": "any",
      "options": [
        "primary",
        "secondary",
        "soft",
        "link",
        "solid"
      ]
    }
  ],
  "children": {
    "media": {
      "name": "media",
      "boundProps": [],
      "elementType": "div",
      "isText": false,
      "isComponent": false,
      "hasBackgroundImage": false,
      "variants": [
        {
          "name": "media",
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "alternate"
          },
          "styles": {
            "padding": "32px 24px 32px 24px",
            "overflow": "hidden",
            "background": "#efefef",
            "borderRadius": "8px"
          },
          "isText": false,
          "isComponent": false,
          "className": "rounded-lg overflow-hidden py-8 px-6 bg-[#efefef]",
          "textStyleClass": "",
          "componentProps": []
        },
        {
          "name": "media",
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "centeredAlt"
          },
          "styles": {
            "padding": "32px 24px 32px 24px",
            "overflow": "hidden",
            "background": "#efefef",
            "borderRadius": "8px"
          },
          "isText": false,
          "isComponent": false,
          "className": "rounded-lg overflow-hidden py-8 px-6 bg-[#efefef]",
          "textStyleClass": "",
          "componentProps": []
        }
      ],
      "componentProps": []
    },
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
            "variant": "alternate"
          },
          "styles": {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "flex-start",
            "gap": "312px"
          },
          "isText": false,
          "isComponent": false,
          "className": "rounded-[0rem] flex p-0 flex-col gap-[19.5rem] justify-start items-start",
          "textStyleClass": "",
          "componentProps": []
        },
        {
          "name": "content",
          "elementType": "div",
          "boundProps": [],
          "properties": {
            "variant": "centeredAlt"
          },
          "styles": {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "flex-start",
            "gap": "16px"
          },
          "isText": false,
          "isComponent": false,
          "className": "rounded-[0rem] flex p-0 flex-col gap-4 justify-center items-start",
          "textStyleClass": "",
          "componentProps": []
        }
      ],
      "componentProps": [],
      "children": {
        "title": {
          "name": "title",
          "boundProps": [
            {
              "figmaRef": "characters",
              "name": "title",
              "value": "Title#168:12"
            }
          ],
          "elementType": "p",
          "isText": true,
          "isComponent": false,
          "hasBackgroundImage": false,
          "textValue": "Set guardrails to prevent overspending",
          "variants": [
            {
              "name": "title",
              "elementType": "p",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "title",
                  "value": "Title#168:12"
                }
              ],
              "properties": {
                "variant": "alternate"
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
              "isComponent": false,
              "className": "font-medium text-4xl font-[Satoshi Variable] text-[#1c1b17] leading-10 tracking-[0px]",
              "textStyleClass": "st-large",
              "componentProps": [
                {
                  "figmaPropType": "characters",
                  "figmaRef": "Title#168:12",
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
                  "value": "Title#168:12"
                }
              ],
              "properties": {
                "variant": "centeredAlt"
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
              "isComponent": false,
              "className": "font-medium text-4xl font-[Satoshi Variable] text-[#1c1b17] leading-10 tracking-[0px]",
              "textStyleClass": "st-large",
              "componentProps": [
                {
                  "figmaPropType": "characters",
                  "figmaRef": "Title#168:12",
                  "name": "title",
                  "type": "string"
                }
              ]
            }
          ],
          "componentProps": [
            {
              "figmaPropType": "characters",
              "figmaRef": "Title#168:12",
              "name": "title",
              "type": "string"
            }
          ]
        },
        "cta": {
          "name": "cta",
          "boundProps": [],
          "elementType": "div",
          "isText": false,
          "isComponent": false,
          "hasBackgroundImage": false,
          "variants": [
            {
              "name": "cta",
              "elementType": "div",
              "boundProps": [],
              "properties": {
                "variant": "alternate"
              },
              "styles": {
                "display": "flex",
                "flexDirection": "column",
                "justifyContent": "flex-start",
                "alignItems": "flex-start",
                "gap": "16px"
              },
              "isText": false,
              "isComponent": false,
              "className": "rounded-[0rem] flex p-0 flex-col gap-4 justify-start items-start",
              "textStyleClass": "",
              "componentProps": []
            },
            {
              "name": "cta",
              "elementType": "div",
              "boundProps": [],
              "properties": {
                "variant": "centeredAlt"
              },
              "styles": {
                "display": "flex",
                "flexDirection": "column",
                "justifyContent": "flex-start",
                "alignItems": "flex-start",
                "gap": "16px"
              },
              "isText": false,
              "isComponent": false,
              "className": "rounded-[0rem] flex p-0 flex-col gap-4 justify-start items-start",
              "textStyleClass": "",
              "componentProps": []
            }
          ],
          "componentProps": [],
          "children": {
            "ctaText": {
              "name": "ctaText",
              "boundProps": [
                {
                  "figmaRef": "characters",
                  "name": "cTAText",
                  "value": "CTA Text#168:13"
                }
              ],
              "elementType": "p",
              "isText": true,
              "isComponent": false,
              "hasBackgroundImage": false,
              "textValue": "Stay in policy and on budget with proactive policy controls, configurable approvals, and AI-powered reconciliation.",
              "variants": [
                {
                  "name": "ctaText",
                  "elementType": "p",
                  "boundProps": [
                    {
                      "figmaRef": "characters",
                      "name": "cTAText",
                      "value": "CTA Text#168:13"
                    }
                  ],
                  "properties": {
                    "variant": "alternate"
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
                  "isComponent": false,
                  "className": "font-medium text-2xl font-[Satoshi Variable] text-[#1c1b17cc] leading-8 h-auto w-[36.25rem]",
                  "textStyleClass": "st-subtitle",
                  "componentProps": [
                    {
                      "figmaPropType": "characters",
                      "figmaRef": "CTA Text#168:13",
                      "name": "cTAText",
                      "type": "string"
                    }
                  ]
                },
                {
                  "name": "ctaText",
                  "elementType": "p",
                  "boundProps": [
                    {
                      "figmaRef": "characters",
                      "name": "cTAText",
                      "value": "CTA Text#168:13"
                    }
                  ],
                  "properties": {
                    "variant": "centeredAlt"
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
                  "isComponent": false,
                  "className": "font-medium text-2xl font-[Satoshi Variable] text-[#1c1b17cc] leading-8 h-auto w-[36.25rem]",
                  "textStyleClass": "st-subtitle",
                  "componentProps": [
                    {
                      "figmaPropType": "characters",
                      "figmaRef": "CTA Text#168:13",
                      "name": "cTAText",
                      "type": "string"
                    }
                  ]
                }
              ],
              "componentProps": [
                {
                  "figmaPropType": "characters",
                  "figmaRef": "CTA Text#168:13",
                  "name": "cTAText",
                  "type": "string"
                }
              ]
            },
            "Button": {
              "name": "Button",
              "boundProps": [
                {
                  "figmaRef": "visible",
                  "name": "showButton",
                  "value": "Show Button#168:11"
                }
              ],
              "elementType": "div",
              "isText": false,
              "isComponent": true,
              "hasBackgroundImage": false,
              "variants": [
                {
                  "name": "Button",
                  "elementType": "div",
                  "boundProps": [
                    {
                      "figmaRef": "visible",
                      "name": "showButton",
                      "value": "Show Button#168:11"
                    }
                  ],
                  "properties": {
                    "variant": "alternate"
                  },
                  "styles": {
                    "padding": "4px 0px 4px 0px",
                    "background": "rgba(0, 0, 0, 0)",
                    "borderRadius": "6px"
                  },
                  "isText": false,
                  "isComponent": true,
                  "className": "rounded-md py-1 px-0 bg-transparent",
                  "textStyleClass": "",
                  "componentProps": [
                    {
                      "figmaPropType": "BOOLEAN",
                      "figmaRef": "Show Trailing Icon#10:5",
                      "name": "showTrailingIcon",
                      "type": "string",
                      "value": true
                    },
                    {
                      "figmaPropType": "BOOLEAN",
                      "figmaRef": "Show Leading Icon#10:3",
                      "name": "showLeadingIcon",
                      "type": "string",
                      "value": false
                    },
                    {
                      "figmaPropType": "TEXT",
                      "figmaRef": "Button Text#6:1",
                      "name": "buttonText",
                      "type": "string",
                      "value": "Learn More"
                    },
                    {
                      "figmaPropType": "VARIANT",
                      "figmaRef": "Size",
                      "name": "size",
                      "type": "string",
                      "value": "sm"
                    },
                    {
                      "figmaPropType": "VARIANT",
                      "figmaRef": "Purpose",
                      "name": "purpose",
                      "type": "string",
                      "value": "Link"
                    }
                  ]
                },
                {
                  "name": "Button",
                  "elementType": "div",
                  "boundProps": [
                    {
                      "figmaRef": "visible",
                      "name": "showButton",
                      "value": "Show Button#168:11"
                    }
                  ],
                  "properties": {
                    "variant": "centeredAlt"
                  },
                  "styles": {
                    "padding": "4px 0px 4px 0px",
                    "background": "rgba(0, 0, 0, 0)",
                    "borderRadius": "6px"
                  },
                  "isText": false,
                  "isComponent": true,
                  "className": "rounded-md py-1 px-0 bg-transparent",
                  "textStyleClass": "",
                  "componentProps": [
                    {
                      "figmaPropType": "BOOLEAN",
                      "figmaRef": "Show Trailing Icon#10:5",
                      "name": "showTrailingIcon",
                      "type": "string",
                      "value": true
                    },
                    {
                      "figmaPropType": "BOOLEAN",
                      "figmaRef": "Show Leading Icon#10:3",
                      "name": "showLeadingIcon",
                      "type": "string",
                      "value": false
                    },
                    {
                      "figmaPropType": "TEXT",
                      "figmaRef": "Button Text#6:1",
                      "name": "buttonText",
                      "type": "string",
                      "value": "Learn More"
                    },
                    {
                      "figmaPropType": "VARIANT",
                      "figmaRef": "Size",
                      "name": "size",
                      "type": "string",
                      "value": "sm"
                    },
                    {
                      "figmaPropType": "VARIANT",
                      "figmaRef": "Purpose",
                      "name": "purpose",
                      "type": "string",
                      "value": "Link"
                    }
                  ]
                }
              ],
              "componentProps": [
                {
                  "figmaPropType": "BOOLEAN",
                  "figmaRef": "Show Trailing Icon#10:5",
                  "name": "showTrailingIcon",
                  "type": "string",
                  "value": true
                },
                {
                  "figmaPropType": "BOOLEAN",
                  "figmaRef": "Show Leading Icon#10:3",
                  "name": "showLeadingIcon",
                  "type": "string",
                  "value": false
                },
                {
                  "figmaPropType": "TEXT",
                  "figmaRef": "Button Text#6:1",
                  "name": "buttonText",
                  "type": "string",
                  "value": "Learn More"
                },
                {
                  "figmaPropType": "VARIANT",
                  "figmaRef": "Size",
                  "name": "size",
                  "type": "string",
                  "value": "sm"
                },
                {
                  "figmaPropType": "VARIANT",
                  "figmaRef": "Purpose",
                  "name": "purpose",
                  "type": "string",
                  "value": "Link"
                }
              ]
            }
          }
        }
      }
    }
  },
  "variantOptions": {
    "showButton": {
      "true": "",
      "false": ""
    },
    "variant": {
      "alternate": "",
      "centeredAlt": ""
    }
  },
  "defaultVariants": {
    "variant": "alternate"
  },
  "compoundVariants": [
    {
      "variant": "alternate",
      "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-[9.75rem] justify-start items-start"
    },
    {
      "variant": "centeredAlt",
      "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-[9.75rem] justify-start items-center"
    }
  ],
  "variants": [
    {
      "figmaRef": "Variant=Alternate",
      "name": "Variant",
      "value": "Alternate",
      "styles": {
        "alignItems": "flex-start"
      },
      "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-[9.75rem] justify-start items-start",
      "props": [
        {
          "name": "variant",
          "value": "alternate"
        }
      ],
      "children": [
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
        },
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
        }
      ]
    },
    {
      "figmaRef": "Variant=Centered Alt",
      "name": "Variant",
      "value": "Centered Alt",
      "styles": {
        "alignItems": "center"
      },
      "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-[9.75rem] justify-start items-center",
      "props": [
        {
          "name": "variant",
          "value": "centeredAlt"
        }
      ],
      "children": [
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
        },
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
        }
      ]
    }
  ]
}