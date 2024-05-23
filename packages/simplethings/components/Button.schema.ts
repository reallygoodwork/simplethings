export const Button = {
  "config": {},
  "updated": "2024-05-23T16:57:39.830Z",
  "name": "Button",
  "dependencies": [],
  "description": "To be added",
  "isText": false,
  "isComponent": true,
  "elementAttributes": {},
  "elementType": "div",
  "typeScriptType": "HTMLDivElement",
  "styles": {
    "borderRadius": "6px"
  },
  "componentProps": [
    {
      "figmaRef": "Show Trailing Icon#10:5",
      "name": "showTrailingIcon",
      "tsType": "boolean",
      "defaultValue": false
    },
    {
      "figmaRef": "Show Leading Icon#10:3",
      "name": "showLeadingIcon",
      "tsType": "boolean",
      "defaultValue": false
    },
    {
      "figmaRef": "Button Text#6:1",
      "name": "buttonText",
      "tsType": "string",
      "defaultValue": "Button Text"
    },
    {
      "figmaRef": "Size",
      "name": "size",
      "tsType": "string",
      "defaultValue": "xs",
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
      "tsType": "string",
      "defaultValue": "primary",
      "options": [
        "primary",
        "secondary",
        "soft",
        "link",
        "solid"
      ]
    }
  ],
  "children": [
    {
      "updated": "2024-05-23T16:57:39.877Z",
      "name": "ButtonText",
      "styles": {
        "color": "#171e15",
        "fontSize": "12px",
        "fontWeight": "500",
        "fontFamily": "Satoshi",
        "lineHeight": "12px"
      },
      "boundProps": [
        {
          "figmaPropType": "characters",
          "figmaRef": "Button Text#6:1",
          "name": "buttonText",
          "type": "string"
        }
      ],
      "isText": true,
      "elementType": "p",
      "isComponent": false,
      "componentProps": [],
      "textValue": "Button Text"
    }
  ],
  "variants": [
    {
      "figmaRef": "Size=xs, Purpose=Primary",
      "name": "Size",
      "value": "xs, Purpose",
      "styles": {
        "width": "100%",
        "padding": "10px 24px 10px 24px",
        "background": "#280aa2"
      },
      "props": [
        {
          "name": "size",
          "value": "xs"
        },
        {
          "name": "Purpose",
          "value": "primary"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#171e15",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "12px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=sm, Purpose=Primary",
      "name": "Size",
      "value": "sm, Purpose",
      "styles": {
        "width": "100%",
        "padding": "10px 20px 10px 20px",
        "background": "#e4f223"
      },
      "props": [
        {
          "name": "size",
          "value": "sm"
        },
        {
          "name": "Purpose",
          "value": "primary"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#171e15",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=md, Purpose=Primary",
      "name": "Size",
      "value": "md, Purpose",
      "styles": {
        "width": "100%",
        "padding": "12px 20px 12px 20px",
        "background": "#e4f223"
      },
      "props": [
        {
          "name": "size",
          "value": "md"
        },
        {
          "name": "Purpose",
          "value": "primary"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#171e15",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=lg, Purpose=Primary",
      "name": "Size",
      "value": "lg, Purpose",
      "styles": {
        "width": "100%",
        "padding": "16px 20px 16px 20px",
        "background": "#e4f223"
      },
      "props": [
        {
          "name": "size",
          "value": "lg"
        },
        {
          "name": "Purpose",
          "value": "primary"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#171e15",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=xl, Purpose=Primary",
      "name": "Size",
      "value": "xl, Purpose",
      "styles": {
        "width": "100%",
        "padding": "16px 20px 16px 20px",
        "background": "#e4f223"
      },
      "props": [
        {
          "name": "size",
          "value": "xl"
        },
        {
          "name": "Purpose",
          "value": "primary"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#171e15",
            "fontSize": "16px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "16px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=xs, Purpose=Secondary",
      "name": "Size",
      "value": "xs, Purpose",
      "styles": {
        "width": "100%",
        "padding": "10px 20px 10px 20px",
        "background": "#ffffff",
        "borderColor": "#f2f2f1",
        "borderWidth": "1px",
        "borderStyle": "solid"
      },
      "props": [
        {
          "name": "size",
          "value": "xs"
        },
        {
          "name": "Purpose",
          "value": "secondary"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#171e15",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "12px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=sm, Purpose=Secondary",
      "name": "Size",
      "value": "sm, Purpose",
      "styles": {
        "width": "100%",
        "padding": "10px 20px 10px 20px",
        "background": "#ffffff",
        "borderColor": "#f2f2f1",
        "borderWidth": "1px",
        "borderStyle": "solid"
      },
      "props": [
        {
          "name": "size",
          "value": "sm"
        },
        {
          "name": "Purpose",
          "value": "secondary"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#171e15",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=md, Purpose=Secondary",
      "name": "Size",
      "value": "md, Purpose",
      "styles": {
        "width": "100%",
        "padding": "12px 20px 12px 20px",
        "background": "#ffffff",
        "borderColor": "#f2f2f1",
        "borderWidth": "1px",
        "borderStyle": "solid"
      },
      "props": [
        {
          "name": "size",
          "value": "md"
        },
        {
          "name": "Purpose",
          "value": "secondary"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#171e15",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=lg, Purpose=Secondary",
      "name": "Size",
      "value": "lg, Purpose",
      "styles": {
        "width": "100%",
        "padding": "16px 20px 16px 20px",
        "background": "#ffffff",
        "borderColor": "#f2f2f1",
        "borderWidth": "1px",
        "borderStyle": "solid"
      },
      "props": [
        {
          "name": "size",
          "value": "lg"
        },
        {
          "name": "Purpose",
          "value": "secondary"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#111827",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=xl, Purpose=Secondary",
      "name": "Size",
      "value": "xl, Purpose",
      "styles": {
        "width": "100%",
        "padding": "16px 20px 16px 20px",
        "background": "#ffffff",
        "borderColor": "#f2f2f1",
        "borderWidth": "1px",
        "borderStyle": "solid"
      },
      "props": [
        {
          "name": "size",
          "value": "xl"
        },
        {
          "name": "Purpose",
          "value": "secondary"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#171e15",
            "fontSize": "16px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "16px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=xs, Purpose=Soft",
      "name": "Size",
      "value": "xs, Purpose",
      "styles": {
        "width": "100%",
        "padding": "10px 20px 10px 20px",
        "background": "#d7dfd3"
      },
      "props": [
        {
          "name": "size",
          "value": "xs"
        },
        {
          "name": "Purpose",
          "value": "soft"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#455540",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "12px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=sm, Purpose=Soft",
      "name": "Size",
      "value": "sm, Purpose",
      "styles": {
        "width": "100%",
        "padding": "10px 20px 10px 20px",
        "background": "#d7dfd3"
      },
      "props": [
        {
          "name": "size",
          "value": "sm"
        },
        {
          "name": "Purpose",
          "value": "soft"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#455540",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=md, Purpose=Soft",
      "name": "Size",
      "value": "md, Purpose",
      "styles": {
        "width": "100%",
        "padding": "12px 20px 12px 20px",
        "background": "#d7dfd3"
      },
      "props": [
        {
          "name": "size",
          "value": "md"
        },
        {
          "name": "Purpose",
          "value": "soft"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#455540",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=lg, Purpose=Soft",
      "name": "Size",
      "value": "lg, Purpose",
      "styles": {
        "width": "100%",
        "padding": "16px 20px 16px 20px",
        "background": "#d7dfd3"
      },
      "props": [
        {
          "name": "size",
          "value": "lg"
        },
        {
          "name": "Purpose",
          "value": "soft"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#455540",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=xl, Purpose=Soft",
      "name": "Size",
      "value": "xl, Purpose",
      "styles": {
        "width": "100%",
        "padding": "16px 20px 16px 20px",
        "background": "#d7dfd3"
      },
      "props": [
        {
          "name": "size",
          "value": "xl"
        },
        {
          "name": "Purpose",
          "value": "soft"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#455540",
            "fontSize": "16px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "16px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=xs, Purpose=Link",
      "name": "Size",
      "value": "xs, Purpose",
      "styles": {
        "width": "100%",
        "padding": "4px 0px 4px 0px",
        "background": "rgba(0, 0, 0, 0)"
      },
      "props": [
        {
          "name": "size",
          "value": "xs"
        },
        {
          "name": "Purpose",
          "value": "link"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#455540",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "12px",
            "letterSpacing": "-0.025em"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=sm, Purpose=Link",
      "name": "Size",
      "value": "sm, Purpose",
      "styles": {
        "width": "100%",
        "padding": "4px 0px 4px 0px",
        "background": "rgba(0, 0, 0, 0)"
      },
      "props": [
        {
          "name": "size",
          "value": "sm"
        },
        {
          "name": "Purpose",
          "value": "link"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#455540",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=md, Purpose=Link",
      "name": "Size",
      "value": "md, Purpose",
      "styles": {
        "width": "100%",
        "padding": "4px 0px 4px 0px",
        "background": "rgba(0, 0, 0, 0)"
      },
      "props": [
        {
          "name": "size",
          "value": "md"
        },
        {
          "name": "Purpose",
          "value": "link"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#455540",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=lg, Purpose=Link",
      "name": "Size",
      "value": "lg, Purpose",
      "styles": {
        "width": "100%",
        "padding": "4px 0px 4px 0px",
        "background": "rgba(0, 0, 0, 0)"
      },
      "props": [
        {
          "name": "size",
          "value": "lg"
        },
        {
          "name": "Purpose",
          "value": "link"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#455540",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=xl, Purpose=Link",
      "name": "Size",
      "value": "xl, Purpose",
      "styles": {
        "width": "100%",
        "padding": "5px 0px 5px 0px",
        "background": "rgba(0, 0, 0, 0)"
      },
      "props": [
        {
          "name": "size",
          "value": "xl"
        },
        {
          "name": "Purpose",
          "value": "link"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#455540",
            "fontSize": "16px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "16px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=xs, Purpose=Solid",
      "name": "Size",
      "value": "xs, Purpose",
      "styles": {
        "width": "100%",
        "padding": "10px 20px 10px 20px",
        "background": "#17332d"
      },
      "props": [
        {
          "name": "size",
          "value": "xs"
        },
        {
          "name": "Purpose",
          "value": "solid"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#f6f8f5",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "12px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=sm, Purpose=Solid",
      "name": "Size",
      "value": "sm, Purpose",
      "styles": {
        "width": "100%",
        "padding": "10px 20px 10px 20px",
        "background": "#17332d"
      },
      "props": [
        {
          "name": "size",
          "value": "sm"
        },
        {
          "name": "Purpose",
          "value": "solid"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#f6f8f5",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=md, Purpose=Solid",
      "name": "Size",
      "value": "md, Purpose",
      "styles": {
        "width": "100%",
        "padding": "12px 20px 12px 20px",
        "background": "#17332d"
      },
      "props": [
        {
          "name": "size",
          "value": "md"
        },
        {
          "name": "Purpose",
          "value": "solid"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#f6f8f5",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=lg, Purpose=Solid",
      "name": "Size",
      "value": "lg, Purpose",
      "styles": {
        "width": "100%",
        "padding": "16px 20px 16px 20px",
        "background": "#17332d"
      },
      "props": [
        {
          "name": "size",
          "value": "lg"
        },
        {
          "name": "Purpose",
          "value": "solid"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#f6f8f5",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          }
        }
      ]
    },
    {
      "figmaRef": "Size=xl, Purpose=Solid",
      "name": "Size",
      "value": "xl, Purpose",
      "styles": {
        "width": "100%",
        "padding": "16px 20px 16px 20px",
        "background": "#17332d"
      },
      "props": [
        {
          "name": "size",
          "value": "xl"
        },
        {
          "name": "Purpose",
          "value": "solid"
        }
      ],
      "children": [
        {
          "name": "ButtonText",
          "isText": true,
          "styles": {
            "color": "#f6f8f5",
            "fontSize": "16px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "16px"
          }
        }
      ]
    }
  ]
}