const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');
const chroma = require('chroma-js');

console.log('Build started...');
console.log('\n==============================================');

StyleDictionary.registerTransform({
  name: 'custom/hsl',
  type: 'value',
  matcher: function (prop) {
    return prop.attributes.category === 'color' || prop.type === 'color';
  },
  transformer: function (prop) {
    if (prop.value === 'transparent') {
      return prop.value;
    }

    const color = chroma(prop.value);
    const s = color.get('hsl.s') * 100;
    const l = color.get('hsl.l') * 100;
    let h = color.get('hsl.h');

    if (isNaN(h)) {
      h = 0;
    }
    return `${h.toFixed()}deg ${s.toFixed()}% ${l.toFixed()}%`;
  },
});

StyleDictionary.registerTransform({
  name: 'custom/unitConvert',
  type: 'value',
  matcher: function (prop) {
    return prop.attributes.category === 'size';
  },
  transformer: function (prop) {

    if (prop.attributes.unit === 'px') {
      return `${prop.value}px`;
    } else if (prop.attributes.unit === 'em') {
      return `${prop.value}em`;
    } else if (prop.attributes.unit === 'no-unit') {
      return prop.value;
    } else {
      return `${prop.value}rem`;
    }
  },
})


const StyleDictionaryExtended = StyleDictionary.extend({
  source: ["studio/**/*.json"], // <-- make sure to have this match your token files!!!
  platforms: {
    css: {
      // transformGroup: 'tokens-studio',
      transforms: ["name/cti/constant", "custom/unitConvert", "custom/hsl"],
      buildPath: 'tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
    js: {
      // transformGroup: "tokens-studio",
      transforms: ["name/cti/constant", "custom/unitConvert", "custom/hsl"],
      buildPath: "tokens/",
      files: [
        {
          format: "typescript/es6-declarations",
          destination: "tokens.d.ts"
        },
        {
          destination: "tokens.ts",
          format: "javascript/es6",
        }
      ]
    }
  },
});

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.cleanAllPlatforms();
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');