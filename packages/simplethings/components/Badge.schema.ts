export const Badge = {
  "config": {
    "sanity": false,
    "atomicComponent": true
  },
  "updated": "2024-05-23T19:40:20.335Z",
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
  "children": [
    {
      "updated": "2024-05-23T19:40:20.365Z",
      "name": "Dot",
      "styles": {
        "background": "#6c8463",
        "width": "auto",
        "height": "auto",
        "borderRadius": "50%"
      },
      "boundProps": [
        {
          "figmaPropType": "visible",
          "figmaRef": "Show Dot#15:0",
          "name": "showDot",
          "type": "boolean"
        }
      ],
      "isText": false,
      "elementType": "div",
      "isComponent": false,
      "componentProps": []
    },
    {
      "updated": "2024-05-23T19:40:20.366Z",
      "name": "Badgetext",
      "styles": {
        "color": "#455540",
        "fontSize": "12px",
        "fontWeight": "500",
        "fontFamily": "Satoshi",
        "lineHeight": "14px",
        "textTransform": "uppercase"
      },
      "boundProps": [
        {
          "figmaPropType": "characters",
          "figmaRef": "Badge Text#15:6",
          "name": "badgeText",
          "type": "string"
        }
      ],
      "isText": true,
      "elementType": "p",
      "isComponent": false,
      "componentProps": [],
      "textValue": "Badge"
    },
    {
      "updated": "2024-05-23T19:40:20.367Z",
      "name": "Close",
      "styles": {
        "width": "14px",
        "overflow": "hidden",
        "position": "relative"
      },
      "boundProps": [
        {
          "figmaPropType": "visible",
          "figmaRef": "Show Close#15:3",
          "name": "showClose",
          "type": "boolean"
        }
      ],
      "isText": false,
      "elementType": "div",
      "isComponent": false,
      "componentProps": [],
      "children": [
        {
          "updated": "2024-05-23T19:40:20.367Z",
          "name": "Vector",
          "styles": {
            "width": "auto",
            "height": "auto",
            "borderRadius": "50%"
          },
          "boundProps": [],
          "isText": false,
          "elementType": "div",
          "isComponent": false,
          "componentProps": []
        }
      ]
    }
  ],
  "variants": [
    {
      "figmaRef": "theme=Primary",
      "name": "theme",
      "value": "Primary",
      "styles": {
        "height": "21px",
        "width": "100%",
        "padding": "3px 8px 4px 8px",
        "justifyContent": "space-between",
        "background": "#ebefe9",
        "borderColor": "#aabca3"
      },
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
          }
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
          }
        },
        {
          "name": "Close",
          "isText": false,
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          }
        }
      ]
    },
    {
      "figmaRef": "theme=Error",
      "name": "theme",
      "value": "Error",
      "styles": {
        "width": "100%",
        "padding": "4px 8px 4px 8px",
        "justifyContent": "flex-start",
        "background": "#ffe4e6",
        "borderColor": "#fda4af"
      },
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
          }
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
          }
        },
        {
          "name": "Close",
          "isText": false,
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          }
        }
      ]
    },
    {
      "figmaRef": "theme=Success",
      "name": "theme",
      "value": "Success",
      "styles": {
        "width": "100%",
        "padding": "4px 8px 4px 8px",
        "justifyContent": "flex-start",
        "background": "#d9eee6",
        "borderColor": "#85c3ae"
      },
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
          }
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
          }
        },
        {
          "name": "Close",
          "isText": false,
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          }
        }
      ]
    },
    {
      "figmaRef": "theme=Warning",
      "name": "theme",
      "value": "Warning",
      "styles": {
        "width": "100%",
        "padding": "3px 8px 4px 8px",
        "justifyContent": "flex-start",
        "background": "#fdeed7",
        "borderColor": "#ffa94d"
      },
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
          }
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
          }
        },
        {
          "name": "Close",
          "isText": false,
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          }
        }
      ]
    },
    {
      "figmaRef": "theme=Default",
      "name": "theme",
      "value": "Default",
      "styles": {
        "width": "100%",
        "padding": "3px 8px 4px 8px",
        "justifyContent": "flex-start",
        "background": "#e6e4e1",
        "borderColor": "#cdc9c2"
      },
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
          }
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
          }
        },
        {
          "name": "Close",
          "isText": false,
          "styles": {
            "width": "14px",
            "overflow": "hidden",
            "position": "relative"
          }
        }
      ]
    }
  ]
}