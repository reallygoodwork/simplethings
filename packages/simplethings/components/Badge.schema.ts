export const Badge = {
  "config": {
    "sanity": false,
    "atomicComponent": true
  },
  "updated": "2024-05-28T15:25:35.203Z",
  "name": "Badge",
  "dependencies": [],
  "description": "::sanity = false\n::atomicComponent = true",
  "isText": false,
  "isComponent": true,
  "elementAttributes": {},
  "elementType": "div",
  "typeScriptType": "HTMLDivElement",
  "styles": {
    "display": "flex",
    "alignItems": "center",
    "gap": "6px",
    "borderWidth": "1px",
    "borderRadius": "9999px",
    "borderStyle": "solid"
  },
  "className": "rounded-[624.9375rem] border flex px-2 gap-1.5 items-center",
  "componentProps": [
    {
      "figmaRef": "Badge Text#15:6",
      "name": "badgeText",
      "tsType": "string",
      "defaultValue": "Badge"
    },
    {
      "figmaRef": "Show Close#15:3",
      "name": "showClose",
      "tsType": "boolean",
      "defaultValue": true
    },
    {
      "figmaRef": "Show Dot#15:0",
      "name": "showDot",
      "tsType": "boolean",
      "defaultValue": true
    },
    {
      "figmaRef": "theme",
      "name": "theme",
      "tsType": "string",
      "defaultValue": "primary",
      "options": [
        "default",
        "error",
        "success",
        "warning",
        "primary"
      ]
    }
  ],
  "children": {
    "dot": {
      "boundProps": [
        {
          "figmaRef": "visible",
          "name": "showDot",
          "value": "Show Dot#15:0"
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
              "name": "showDot",
              "value": "Show Dot#15:0"
            }
          ],
          "properties": {
            "theme": "primary"
          },
          "styles": {
            "background": "#6c8463"
          },
          "isText": false,
          "className": "bg-[#6c8463]",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [
            {
              "figmaRef": "visible",
              "name": "showDot",
              "value": "Show Dot#15:0"
            }
          ],
          "properties": {
            "theme": "error"
          },
          "styles": {
            "background": "#f23051"
          },
          "isText": false,
          "className": "bg-[#f23051]",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [
            {
              "figmaRef": "visible",
              "name": "showDot",
              "value": "Show Dot#15:0"
            }
          ],
          "properties": {
            "theme": "success"
          },
          "styles": {
            "background": "#418b75"
          },
          "isText": false,
          "className": "bg-[#418b75]",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [
            {
              "figmaRef": "visible",
              "name": "showDot",
              "value": "Show Dot#15:0"
            }
          ],
          "properties": {
            "theme": "warning"
          },
          "styles": {
            "background": "#fd7e14"
          },
          "isText": false,
          "className": "bg-[#fd7e14]",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [
            {
              "figmaRef": "visible",
              "name": "showDot",
              "value": "Show Dot#15:0"
            }
          ],
          "properties": {
            "theme": "default"
          },
          "styles": {
            "background": "#8a8577"
          },
          "isText": false,
          "className": "bg-[#8a8577]",
          "textStyleClass": ""
        }
      ]
    },
    "badgeText": {
      "boundProps": [
        {
          "figmaRef": "characters",
          "name": "badgeText",
          "value": "Badge Text#15:6"
        }
      ],
      "elementType": "p",
      "isText": true,
      "hasBackgroundImage": false,
      "textValue": "Badge",
      "variants": [
        {
          "elementType": "p",
          "boundProps": [
            {
              "figmaRef": "characters",
              "name": "badgeText",
              "value": "Badge Text#15:6"
            }
          ],
          "properties": {
            "theme": "primary"
          },
          "styles": {
            "color": "#455540",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px",
            "textTransform": "uppercase"
          },
          "isText": true,
          "className": "uppercase font-medium text-xs font-[Satoshi] text-[#455540] leading-[0.875rem]",
          "textStyleClass": ""
        },
        {
          "elementType": "p",
          "boundProps": [
            {
              "figmaRef": "characters",
              "name": "badgeText",
              "value": "Badge Text#15:6"
            }
          ],
          "properties": {
            "theme": "error"
          },
          "styles": {
            "color": "#e01e49",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px",
            "textTransform": "uppercase"
          },
          "isText": true,
          "className": "uppercase font-medium text-xs font-[Satoshi] text-[#e01e49] leading-[0.875rem]",
          "textStyleClass": ""
        },
        {
          "elementType": "p",
          "boundProps": [
            {
              "figmaRef": "characters",
              "name": "badgeText",
              "value": "Badge Text#15:6"
            }
          ],
          "properties": {
            "theme": "success"
          },
          "styles": {
            "color": "#326f5d",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px",
            "textTransform": "uppercase"
          },
          "isText": true,
          "className": "uppercase font-medium text-xs font-[Satoshi] text-[#326f5d] leading-[0.875rem]",
          "textStyleClass": ""
        },
        {
          "elementType": "p",
          "boundProps": [
            {
              "figmaRef": "characters",
              "name": "badgeText",
              "value": "Badge Text#15:6"
            }
          ],
          "properties": {
            "theme": "warning"
          },
          "styles": {
            "color": "#e8590c",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px",
            "textTransform": "uppercase"
          },
          "isText": true,
          "className": "uppercase font-medium text-xs font-[Satoshi] text-[#e8590c] leading-[0.875rem]",
          "textStyleClass": ""
        },
        {
          "elementType": "p",
          "boundProps": [
            {
              "figmaRef": "characters",
              "name": "badgeText",
              "value": "Badge Text#15:6"
            }
          ],
          "properties": {
            "theme": "default"
          },
          "styles": {
            "color": "#3c3933",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px",
            "textTransform": "uppercase"
          },
          "isText": true,
          "className": "uppercase font-medium text-xs font-[Satoshi] text-[#3c3933] leading-[0.875rem]",
          "textStyleClass": ""
        }
      ]
    },
    "close": {
      "boundProps": [
        {
          "figmaRef": "visible",
          "name": "showClose",
          "value": "Show Close#15:3"
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
              "name": "showClose",
              "value": "Show Close#15:3"
            }
          ],
          "properties": {
            "theme": "primary"
          },
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          },
          "isText": false,
          "className": "rounded-[0rem] w-3.5 overflow-hidden p-0 relative",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [
            {
              "figmaRef": "visible",
              "name": "showClose",
              "value": "Show Close#15:3"
            }
          ],
          "properties": {
            "theme": "error"
          },
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          },
          "isText": false,
          "className": "rounded-[0rem] w-3.5 overflow-hidden p-0 relative",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [
            {
              "figmaRef": "visible",
              "name": "showClose",
              "value": "Show Close#15:3"
            }
          ],
          "properties": {
            "theme": "success"
          },
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          },
          "isText": false,
          "className": "rounded-[0rem] w-3.5 overflow-hidden p-0 relative",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [
            {
              "figmaRef": "visible",
              "name": "showClose",
              "value": "Show Close#15:3"
            }
          ],
          "properties": {
            "theme": "warning"
          },
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          },
          "isText": false,
          "className": "rounded-[0rem] w-3.5 overflow-hidden p-0 relative",
          "textStyleClass": ""
        },
        {
          "elementType": "div",
          "boundProps": [
            {
              "figmaRef": "visible",
              "name": "showClose",
              "value": "Show Close#15:3"
            }
          ],
          "properties": {
            "theme": "default"
          },
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          },
          "isText": false,
          "className": "rounded-[0rem] w-3.5 overflow-hidden p-0 relative",
          "textStyleClass": ""
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
                "theme": "primary"
              },
              "styles": {},
              "isText": false,
              "className": "",
              "textStyleClass": ""
            },
            {
              "elementType": "div",
              "boundProps": [],
              "properties": {
                "theme": "error"
              },
              "styles": {},
              "isText": false,
              "className": "",
              "textStyleClass": ""
            },
            {
              "elementType": "div",
              "boundProps": [],
              "properties": {
                "theme": "success"
              },
              "styles": {},
              "isText": false,
              "className": "",
              "textStyleClass": ""
            },
            {
              "elementType": "div",
              "boundProps": [],
              "properties": {
                "theme": "warning"
              },
              "styles": {},
              "isText": false,
              "className": "",
              "textStyleClass": ""
            },
            {
              "elementType": "div",
              "boundProps": [],
              "properties": {
                "theme": "default"
              },
              "styles": {},
              "isText": false,
              "className": "",
              "textStyleClass": ""
            }
          ]
        }
      }
    }
  },
  "variantOptions": {
    "showClose": {
      "true": "",
      "false": ""
    },
    "showDot": {
      "true": "",
      "false": ""
    },
    "theme": {
      "default": "",
      "error": "",
      "success": "",
      "warning": "",
      "primary": ""
    }
  },
  "defaultVariants": {
    "theme": "primary"
  },
  "compoundVariants": [
    {
      "theme": "primary",
      "className": "rounded-[624.9375rem] border border-[#aabca3] flex h-[1.3125rem] pt-[0.1875rem] pb-1 px-2 gap-1.5 justify-between items-center bg-[#ebefe9]"
    },
    {
      "theme": "error",
      "className": "rounded-[624.9375rem] border border-rose-300 flex py-1 px-2 gap-1.5 justify-start items-center bg-rose-100"
    },
    {
      "theme": "success",
      "className": "rounded-[624.9375rem] border border-[#85c3ae] flex py-1 px-2 gap-1.5 justify-start items-center bg-[#d9eee6]"
    },
    {
      "theme": "warning",
      "className": "rounded-[624.9375rem] border border-[#ffa94d] flex pt-[0.1875rem] pb-1 px-2 gap-1.5 justify-start items-center bg-[#fdeed7]"
    },
    {
      "theme": "default",
      "className": "rounded-[624.9375rem] border border-[#cdc9c2] flex pt-[0.1875rem] pb-1 px-2 gap-1.5 justify-start items-center bg-[#e6e4e1]"
    }
  ],
  "variants": [
    {
      "figmaRef": "theme=Primary",
      "name": "theme",
      "value": "Primary",
      "styles": {
        "height": "21px",
        "padding": "3px 8px 4px 8px",
        "justifyContent": "space-between",
        "background": "#ebefe9",
        "borderColor": "#aabca3"
      },
      "className": "rounded-[624.9375rem] border border-[#aabca3] flex h-[1.3125rem] pt-[0.1875rem] pb-1 px-2 gap-1.5 justify-between items-center bg-[#ebefe9]",
      "props": [
        {
          "name": "theme",
          "value": "primary"
        }
      ],
      "children": [
        {
          "name": "Dot",
          "isText": false,
          "styles": {
            "background": "#6c8463"
          },
          "className": "bg-[#6c8463]"
        },
        {
          "name": "Badgetext",
          "isText": true,
          "styles": {
            "color": "#455540",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px",
            "textTransform": "uppercase"
          },
          "className": "uppercase font-medium text-xs font-[Satoshi] text-[#455540] leading-[0.875rem]"
        },
        {
          "name": "Close",
          "isText": false,
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          },
          "className": "rounded-[0rem] w-3.5 overflow-hidden p-0 relative"
        }
      ]
    },
    {
      "figmaRef": "theme=Error",
      "name": "theme",
      "value": "Error",
      "styles": {
        "padding": "4px 8px 4px 8px",
        "justifyContent": "flex-start",
        "background": "#ffe4e6",
        "borderColor": "#fda4af"
      },
      "className": "rounded-[624.9375rem] border border-rose-300 flex py-1 px-2 gap-1.5 justify-start items-center bg-rose-100",
      "props": [
        {
          "name": "theme",
          "value": "error"
        }
      ],
      "children": [
        {
          "name": "Dot",
          "isText": false,
          "styles": {
            "background": "#f23051"
          },
          "className": "bg-[#f23051]"
        },
        {
          "name": "Badgetext",
          "isText": true,
          "styles": {
            "color": "#e01e49",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px",
            "textTransform": "uppercase"
          },
          "className": "uppercase font-medium text-xs font-[Satoshi] text-[#e01e49] leading-[0.875rem]"
        },
        {
          "name": "Close",
          "isText": false,
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          },
          "className": "rounded-[0rem] w-3.5 overflow-hidden p-0 relative"
        }
      ]
    },
    {
      "figmaRef": "theme=Success",
      "name": "theme",
      "value": "Success",
      "styles": {
        "padding": "4px 8px 4px 8px",
        "justifyContent": "flex-start",
        "background": "#d9eee6",
        "borderColor": "#85c3ae"
      },
      "className": "rounded-[624.9375rem] border border-[#85c3ae] flex py-1 px-2 gap-1.5 justify-start items-center bg-[#d9eee6]",
      "props": [
        {
          "name": "theme",
          "value": "success"
        }
      ],
      "children": [
        {
          "name": "Dot",
          "isText": false,
          "styles": {
            "background": "#418b75"
          },
          "className": "bg-[#418b75]"
        },
        {
          "name": "Badgetext",
          "isText": true,
          "styles": {
            "color": "#326f5d",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px",
            "textTransform": "uppercase"
          },
          "className": "uppercase font-medium text-xs font-[Satoshi] text-[#326f5d] leading-[0.875rem]"
        },
        {
          "name": "Close",
          "isText": false,
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          },
          "className": "rounded-[0rem] w-3.5 overflow-hidden p-0 relative"
        }
      ]
    },
    {
      "figmaRef": "theme=Warning",
      "name": "theme",
      "value": "Warning",
      "styles": {
        "padding": "3px 8px 4px 8px",
        "justifyContent": "flex-start",
        "background": "#fdeed7",
        "borderColor": "#ffa94d"
      },
      "className": "rounded-[624.9375rem] border border-[#ffa94d] flex pt-[0.1875rem] pb-1 px-2 gap-1.5 justify-start items-center bg-[#fdeed7]",
      "props": [
        {
          "name": "theme",
          "value": "warning"
        }
      ],
      "children": [
        {
          "name": "Dot",
          "isText": false,
          "styles": {
            "background": "#fd7e14"
          },
          "className": "bg-[#fd7e14]"
        },
        {
          "name": "Badgetext",
          "isText": true,
          "styles": {
            "color": "#e8590c",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px",
            "textTransform": "uppercase"
          },
          "className": "uppercase font-medium text-xs font-[Satoshi] text-[#e8590c] leading-[0.875rem]"
        },
        {
          "name": "Close",
          "isText": false,
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          },
          "className": "rounded-[0rem] w-3.5 overflow-hidden p-0 relative"
        }
      ]
    },
    {
      "figmaRef": "theme=Default",
      "name": "theme",
      "value": "Default",
      "styles": {
        "padding": "3px 8px 4px 8px",
        "justifyContent": "flex-start",
        "background": "#e6e4e1",
        "borderColor": "#cdc9c2"
      },
      "className": "rounded-[624.9375rem] border border-[#cdc9c2] flex pt-[0.1875rem] pb-1 px-2 gap-1.5 justify-start items-center bg-[#e6e4e1]",
      "props": [
        {
          "name": "theme",
          "value": "default"
        }
      ],
      "children": [
        {
          "name": "Dot",
          "isText": false,
          "styles": {
            "background": "#8a8577"
          },
          "className": "bg-[#8a8577]"
        },
        {
          "name": "Badgetext",
          "isText": true,
          "styles": {
            "color": "#3c3933",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px",
            "textTransform": "uppercase"
          },
          "className": "uppercase font-medium text-xs font-[Satoshi] text-[#3c3933] leading-[0.875rem]"
        },
        {
          "name": "Close",
          "isText": false,
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          },
          "className": "rounded-[0rem] w-3.5 overflow-hidden p-0 relative"
        }
      ]
    }
  ]
}