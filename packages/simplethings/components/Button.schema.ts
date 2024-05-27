export const Button = {
  "config": {},
  "updated": "2024-05-27T18:55:37.905Z",
  "name": "Button",
  "dependencies": [],
  "description": "Generic Button Component",
  "isText": false,
  "isComponent": true,
  "elementAttributes": {},
  "elementType": "button",
  "typeScriptType": "HTMLButtonElement",
  "styles": {
    "borderRadius": "6px"
  },
  "className": "rounded-md",
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
      "textValue": "Button Text",
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
            "size": "xs",
            "purpose": "primary"
          },
          "styles": {
            "color": "#171e15",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "12px"
          },
          "isText": true,
          "className": "font-medium text-xs font-[Satoshi] text-[#171e15] leading-[0.75rem]",
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
            "size": "sm",
            "purpose": "primary"
          },
          "styles": {
            "color": "#171e15",
            "fontSize": "14px",
            "fontWeight": "400",
            "fontFamily": "Satoshi Variable",
            "lineHeight": "20px"
          },
          "isText": true,
          "className": "font-normal text-sm font-[Satoshi Variable] text-[#171e15] leading-5",
          "textStyleClass": "st-small"
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
            "size": "md",
            "purpose": "primary"
          },
          "styles": {
            "color": "#171e15",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          },
          "isText": true,
          "className": "font-medium text-sm font-[Satoshi] text-[#171e15] leading-[0.875rem]",
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
            "size": "lg",
            "purpose": "primary"
          },
          "styles": {
            "color": "#171e15",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          },
          "isText": true,
          "className": "font-medium text-sm font-[Satoshi] text-[#171e15] leading-[0.875rem]",
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
            "size": "xl",
            "purpose": "primary"
          },
          "styles": {
            "color": "#171e15",
            "fontSize": "16px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "16px"
          },
          "isText": true,
          "className": "font-medium text-base font-[Satoshi] text-[#171e15] leading-4",
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
            "size": "xs",
            "purpose": "secondary"
          },
          "styles": {
            "color": "#171e15",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "12px"
          },
          "isText": true,
          "className": "font-medium text-xs font-[Satoshi] text-[#171e15] leading-[0.75rem]",
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
            "size": "sm",
            "purpose": "secondary"
          },
          "styles": {
            "color": "#171e15",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          },
          "isText": true,
          "className": "font-medium text-sm font-[Satoshi] text-[#171e15] leading-[0.875rem]",
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
            "size": "md",
            "purpose": "secondary"
          },
          "styles": {
            "color": "#171e15",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          },
          "isText": true,
          "className": "font-medium text-sm font-[Satoshi] text-[#171e15] leading-[0.875rem]",
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
            "size": "lg",
            "purpose": "secondary"
          },
          "styles": {
            "color": "#111827",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          },
          "isText": true,
          "className": "font-medium text-sm font-[Satoshi] text-gray-900 leading-[0.875rem]",
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
            "size": "xl",
            "purpose": "secondary"
          },
          "styles": {
            "color": "#171e15",
            "fontSize": "16px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "16px"
          },
          "isText": true,
          "className": "font-medium text-base font-[Satoshi] text-[#171e15] leading-4",
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
            "size": "xs",
            "purpose": "soft"
          },
          "styles": {
            "color": "#455540",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "12px"
          },
          "isText": true,
          "className": "font-medium text-xs font-[Satoshi] text-[#455540] leading-[0.75rem]",
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
            "size": "sm",
            "purpose": "soft"
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
            "size": "md",
            "purpose": "soft"
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
            "size": "lg",
            "purpose": "soft"
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
            "size": "xl",
            "purpose": "soft"
          },
          "styles": {
            "color": "#455540",
            "fontSize": "16px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "16px"
          },
          "isText": true,
          "className": "font-medium text-base font-[Satoshi] text-[#455540] leading-4",
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
            "size": "xs",
            "purpose": "link"
          },
          "styles": {
            "color": "#455540",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "12px",
            "letterSpacing": "-0.025em"
          },
          "isText": true,
          "className": "font-medium text-xs font-[Satoshi] text-[#455540] leading-[0.75rem] tracking-[-0.025px]",
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
            "size": "sm",
            "purpose": "link"
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
            "size": "md",
            "purpose": "link"
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
            "size": "lg",
            "purpose": "link"
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
            "size": "xl",
            "purpose": "link"
          },
          "styles": {
            "color": "#455540",
            "fontSize": "16px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "16px"
          },
          "isText": true,
          "className": "font-medium text-base font-[Satoshi] text-[#455540] leading-4",
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
            "size": "xs",
            "purpose": "solid"
          },
          "styles": {
            "color": "#f6f8f5",
            "fontSize": "12px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "12px"
          },
          "isText": true,
          "className": "font-medium text-xs font-[Satoshi] text-[#f6f8f5] leading-[0.75rem]",
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
            "size": "sm",
            "purpose": "solid"
          },
          "styles": {
            "color": "#f6f8f5",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          },
          "isText": true,
          "className": "font-medium text-sm font-[Satoshi] text-[#f6f8f5] leading-[0.875rem]",
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
            "size": "md",
            "purpose": "solid"
          },
          "styles": {
            "color": "#f6f8f5",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          },
          "isText": true,
          "className": "font-medium text-sm font-[Satoshi] text-[#f6f8f5] leading-[0.875rem]",
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
            "size": "lg",
            "purpose": "solid"
          },
          "styles": {
            "color": "#f6f8f5",
            "fontSize": "14px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "14px"
          },
          "isText": true,
          "className": "font-medium text-sm font-[Satoshi] text-[#f6f8f5] leading-[0.875rem]",
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
            "size": "xl",
            "purpose": "solid"
          },
          "styles": {
            "color": "#f6f8f5",
            "fontSize": "16px",
            "fontWeight": "500",
            "fontFamily": "Satoshi",
            "lineHeight": "16px"
          },
          "isText": true,
          "className": "font-medium text-base font-[Satoshi] text-[#f6f8f5] leading-4",
          "textStyleClass": ""
        }
      ]
    }
  },
  "variantOptions": {
    "showTrailingIcon": {
      "true": "",
      "false": ""
    },
    "showLeadingIcon": {
      "true": "",
      "false": ""
    },
    "size": {
      "xs": "",
      "sm": "",
      "md": "",
      "xl": "",
      "lg": ""
    },
    "purpose": {
      "primary": "",
      "secondary": "",
      "soft": "",
      "link": "",
      "solid": ""
    }
  },
  "defaultVariants": {
    "size": "xs",
    "purpose": "primary"
  },
  "compoundVariants": [
    {
      "size": "xs",
      "purpose": "primary",
      "className": "rounded-md w-[6.25rem] py-2.5 px-6 bg-[#280aa2]"
    },
    {
      "size": "sm",
      "purpose": "primary",
      "className": "rounded-md w-[6.25rem] py-2.5 px-5 bg-[#e4f223]"
    },
    {
      "size": "md",
      "purpose": "primary",
      "className": "rounded-md w-[6.25rem] py-3 px-5 bg-[#e4f223]"
    },
    {
      "size": "lg",
      "purpose": "primary",
      "className": "rounded-md w-[6.25rem] py-4 px-5 bg-[#e4f223]"
    },
    {
      "size": "xl",
      "purpose": "primary",
      "className": "rounded-md w-[6.25rem] py-4 px-5 bg-[#e4f223]"
    },
    {
      "size": "xs",
      "purpose": "secondary",
      "className": "rounded-md border border-[#f2f2f1] w-[6.25rem] py-2.5 px-5 bg-white"
    },
    {
      "size": "sm",
      "purpose": "secondary",
      "className": "rounded-md border border-[#f2f2f1] w-[6.25rem] py-2.5 px-5 bg-white"
    },
    {
      "size": "md",
      "purpose": "secondary",
      "className": "rounded-md border border-[#f2f2f1] w-[6.25rem] py-3 px-5 bg-white"
    },
    {
      "size": "lg",
      "purpose": "secondary",
      "className": "rounded-md border border-[#f2f2f1] w-[6.25rem] py-4 px-5 bg-white"
    },
    {
      "size": "xl",
      "purpose": "secondary",
      "className": "rounded-md border border-[#f2f2f1] w-[6.25rem] py-4 px-5 bg-white"
    },
    {
      "size": "xs",
      "purpose": "soft",
      "className": "rounded-md w-[6.25rem] py-2.5 px-5 bg-[#d7dfd3]"
    },
    {
      "size": "sm",
      "purpose": "soft",
      "className": "rounded-md w-[6.25rem] py-2.5 px-5 bg-[#d7dfd3]"
    },
    {
      "size": "md",
      "purpose": "soft",
      "className": "rounded-md w-[6.25rem] py-3 px-5 bg-[#d7dfd3]"
    },
    {
      "size": "lg",
      "purpose": "soft",
      "className": "rounded-md w-[6.25rem] py-4 px-5 bg-[#d7dfd3]"
    },
    {
      "size": "xl",
      "purpose": "soft",
      "className": "rounded-md w-[6.25rem] py-4 px-5 bg-[#d7dfd3]"
    },
    {
      "size": "xs",
      "purpose": "link",
      "className": "rounded-md w-[6.25rem] py-1 px-0 bg-transparent"
    },
    {
      "size": "sm",
      "purpose": "link",
      "className": "rounded-md w-[6.25rem] py-1 px-0 bg-transparent"
    },
    {
      "size": "md",
      "purpose": "link",
      "className": "rounded-md w-[6.25rem] py-1 px-0 bg-transparent"
    },
    {
      "size": "lg",
      "purpose": "link",
      "className": "rounded-md w-[6.25rem] py-1 px-0 bg-transparent"
    },
    {
      "size": "xl",
      "purpose": "link",
      "className": "rounded-md w-[6.25rem] py-[0.3125rem] px-0 bg-transparent"
    },
    {
      "size": "xs",
      "purpose": "solid",
      "className": "rounded-md w-[6.25rem] py-2.5 px-5 bg-[#17332d]"
    },
    {
      "size": "sm",
      "purpose": "solid",
      "className": "rounded-md w-[6.25rem] py-2.5 px-5 bg-[#17332d]"
    },
    {
      "size": "md",
      "purpose": "solid",
      "className": "rounded-md w-[6.25rem] py-3 px-5 bg-[#17332d]"
    },
    {
      "size": "lg",
      "purpose": "solid",
      "className": "rounded-md w-[6.25rem] py-4 px-5 bg-[#17332d]"
    },
    {
      "size": "xl",
      "purpose": "solid",
      "className": "rounded-md w-[6.25rem] py-4 px-5 bg-[#17332d]"
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
      "className": "rounded-md w-[6.25rem] py-2.5 px-6 bg-[#280aa2]",
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
          },
          "className": "font-medium text-xs font-[Satoshi] text-[#171e15] leading-[0.75rem]"
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
      "className": "rounded-md w-[6.25rem] py-2.5 px-5 bg-[#e4f223]",
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
            "fontWeight": "400",
            "fontFamily": "Satoshi Variable",
            "lineHeight": "20px"
          },
          "className": "font-normal text-sm font-[Satoshi Variable] text-[#171e15] leading-5"
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
      "className": "rounded-md w-[6.25rem] py-3 px-5 bg-[#e4f223]",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-[#171e15] leading-[0.875rem]"
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
      "className": "rounded-md w-[6.25rem] py-4 px-5 bg-[#e4f223]",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-[#171e15] leading-[0.875rem]"
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
      "className": "rounded-md w-[6.25rem] py-4 px-5 bg-[#e4f223]",
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
          },
          "className": "font-medium text-base font-[Satoshi] text-[#171e15] leading-4"
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
      "className": "rounded-md border border-[#f2f2f1] w-[6.25rem] py-2.5 px-5 bg-white",
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
          },
          "className": "font-medium text-xs font-[Satoshi] text-[#171e15] leading-[0.75rem]"
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
      "className": "rounded-md border border-[#f2f2f1] w-[6.25rem] py-2.5 px-5 bg-white",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-[#171e15] leading-[0.875rem]"
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
      "className": "rounded-md border border-[#f2f2f1] w-[6.25rem] py-3 px-5 bg-white",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-[#171e15] leading-[0.875rem]"
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
      "className": "rounded-md border border-[#f2f2f1] w-[6.25rem] py-4 px-5 bg-white",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-gray-900 leading-[0.875rem]"
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
      "className": "rounded-md border border-[#f2f2f1] w-[6.25rem] py-4 px-5 bg-white",
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
          },
          "className": "font-medium text-base font-[Satoshi] text-[#171e15] leading-4"
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
      "className": "rounded-md w-[6.25rem] py-2.5 px-5 bg-[#d7dfd3]",
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
          },
          "className": "font-medium text-xs font-[Satoshi] text-[#455540] leading-[0.75rem]"
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
      "className": "rounded-md w-[6.25rem] py-2.5 px-5 bg-[#d7dfd3]",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-[#455540] leading-[0.875rem]"
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
      "className": "rounded-md w-[6.25rem] py-3 px-5 bg-[#d7dfd3]",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-[#455540] leading-[0.875rem]"
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
      "className": "rounded-md w-[6.25rem] py-4 px-5 bg-[#d7dfd3]",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-[#455540] leading-[0.875rem]"
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
      "className": "rounded-md w-[6.25rem] py-4 px-5 bg-[#d7dfd3]",
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
          },
          "className": "font-medium text-base font-[Satoshi] text-[#455540] leading-4"
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
      "className": "rounded-md w-[6.25rem] py-1 px-0 bg-transparent",
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
          },
          "className": "font-medium text-xs font-[Satoshi] text-[#455540] leading-[0.75rem] tracking-[-0.025px]"
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
      "className": "rounded-md w-[6.25rem] py-1 px-0 bg-transparent",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-[#455540] leading-[0.875rem]"
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
      "className": "rounded-md w-[6.25rem] py-1 px-0 bg-transparent",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-[#455540] leading-[0.875rem]"
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
      "className": "rounded-md w-[6.25rem] py-1 px-0 bg-transparent",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-[#455540] leading-[0.875rem]"
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
      "className": "rounded-md w-[6.25rem] py-[0.3125rem] px-0 bg-transparent",
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
          },
          "className": "font-medium text-base font-[Satoshi] text-[#455540] leading-4"
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
      "className": "rounded-md w-[6.25rem] py-2.5 px-5 bg-[#17332d]",
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
          },
          "className": "font-medium text-xs font-[Satoshi] text-[#f6f8f5] leading-[0.75rem]"
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
      "className": "rounded-md w-[6.25rem] py-2.5 px-5 bg-[#17332d]",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-[#f6f8f5] leading-[0.875rem]"
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
      "className": "rounded-md w-[6.25rem] py-3 px-5 bg-[#17332d]",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-[#f6f8f5] leading-[0.875rem]"
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
      "className": "rounded-md w-[6.25rem] py-4 px-5 bg-[#17332d]",
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
          },
          "className": "font-medium text-sm font-[Satoshi] text-[#f6f8f5] leading-[0.875rem]"
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
      "className": "rounded-md w-[6.25rem] py-4 px-5 bg-[#17332d]",
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
          },
          "className": "font-medium text-base font-[Satoshi] text-[#f6f8f5] leading-4"
        }
      ]
    }
  ]
}