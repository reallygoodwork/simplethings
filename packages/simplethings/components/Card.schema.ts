export const Card = {
  "config": {},
  "updated": "2024-05-23T18:28:17.358Z",
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
  "componentProps": [
    {
      "figmaRef": "Show Text#168:7",
      "name": "showText",
      "tsType": "boolean",
      "defaultValue": true
    },
    {
      "figmaRef": "Image Padding",
      "name": "imagePadding",
      "tsType": "string",
      "defaultValue": "default",
      "options": [
        "default",
        "noBottom",
        "noPadding"
      ]
    }
  ],
  "children": [
    {
      "updated": "2024-05-23T18:28:17.374Z",
      "name": "LeadsmallLockup",
      "styles": {
        "display": "flex",
        "maxWidth": "260px",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "gap": "8px"
      },
      "boundProps": [
        {
          "figmaPropType": "visible",
          "figmaRef": "Show Text#168:7",
          "name": "showText",
          "type": "boolean"
        }
      ],
      "isText": false,
      "elementType": "div",
      "isComponent": false,
      "componentProps": [],
      "children": [
        {
          "updated": "2024-05-23T18:28:17.376Z",
          "name": "TheCardIsJustTheStart",
          "styles": {
            "color": "#000000",
            "fontSize": "20px",
            "fontWeight": "500",
            "fontFamily": "Satoshi Variable",
            "lineHeight": "22px"
          },
          "boundProps": [],
          "isText": true,
          "elementType": "p",
          "isComponent": false,
          "componentProps": [],
          "textValue": "The card is just the start"
        },
        {
          "updated": "2024-05-23T18:28:17.377Z",
          "name": "QuiOccaecatAmetAdipisicingExcepteurSitMollitAnimCulpaExercitationLoremDuisCupidatatLaborisLaborisExercitation",
          "styles": {
            "height": "auto",
            "color": "#1c1b1799",
            "fontSize": "14px",
            "fontWeight": "400",
            "fontFamily": "Satoshi Variable",
            "lineHeight": "20px",
            "textAlign": "CENTER"
          },
          "boundProps": [],
          "isText": true,
          "elementType": "p",
          "isComponent": false,
          "componentProps": [],
          "textValue": "Qui occaecat amet adipisicing excepteur sit mollit anim culpa exercitation Lorem duis cupidatat laboris laboris exercitation."
        }
      ]
    },
    {
      "updated": "2024-05-23T18:28:17.375Z",
      "name": "PexelsPhotoByKennethSurillo",
      "styles": {
        "height": "412px",
        "width": "600px",
        "object-fit": "contain"
      },
      "boundProps": [],
      "isText": false,
      "elementType": "div",
      "isComponent": false,
      "componentProps": []
    }
  ],
  "variants": [
    {
      "figmaRef": "Image Padding=Default",
      "name": "Image Padding",
      "value": "Default",
      "styles": {
        "width": "100%",
        "padding": "32px 24px 32px 24px"
      },
      "props": [
        {
          "name": "imagePadding",
          "value": "default"
        }
      ],
      "children": [
        {
          "name": "LeadsmallLockup",
          "isText": false,
          "styles": {
            "display": "flex",
            "maxWidth": "260px",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "gap": "8px"
          }
        },
        {
          "name": "PexelsPhotoByKennethSurillo",
          "isText": false,
          "styles": {
            "height": "412px",
            "width": "600px",
            "object-fit": "contain"
          }
        }
      ]
    },
    {
      "figmaRef": "Image Padding=No Bottom",
      "name": "Image Padding",
      "value": "No Bottom",
      "styles": {
        "width": "100%",
        "padding": "32px 24px 0px 24px"
      },
      "props": [
        {
          "name": "imagePadding",
          "value": "noBottom"
        }
      ],
      "children": [
        {
          "name": "LeadsmallLockup",
          "isText": false,
          "styles": {
            "display": "flex",
            "maxWidth": "260px",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "gap": "8px"
          }
        },
        {
          "name": "PexelsPhotoByKennethSurillo",
          "isText": false,
          "styles": {
            "height": "412px",
            "width": "600px",
            "object-fit": "contain"
          }
        }
      ]
    },
    {
      "figmaRef": "Image Padding=No Padding",
      "name": "Image Padding",
      "value": "No Padding",
      "styles": {
        "width": "100%",
        "padding": "32px 0px 0px 0px"
      },
      "props": [
        {
          "name": "imagePadding",
          "value": "noPadding"
        }
      ],
      "children": [
        {
          "name": "LeadsmallLockup",
          "isText": false,
          "styles": {
            "display": "flex",
            "maxWidth": "260px",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "center",
            "gap": "8px"
          }
        },
        {
          "name": "PexelsPhotoByKennethSurillo",
          "isText": false,
          "styles": {
            "height": "412px",
            "width": "600px",
            "object-fit": "contain"
          }
        }
      ]
    }
  ]
}