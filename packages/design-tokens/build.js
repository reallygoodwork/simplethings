const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');
const chroma = require('chroma-js');

console.log('Build started...');
console.log('\n==============================================');

registerTransforms(StyleDictionary, {
  expand: { composition: true, typography: false, border: false, shadow: false },
});

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
    const h = color.get('hsl.h');

    if (isNaN(h)) {
      return prop.value;
    }
    return `${h.toFixed()}deg ${s.toFixed()}% ${l.toFixed()}%`;
  },
});


const StyleDictionaryExtended = StyleDictionary.extend({
  source: ["studio/**/*.json"], // <-- make sure to have this match your token files!!!
  platforms: {
    css: {
      // transformGroup: 'tokens-studio',
      transforms: ["ts/size/px", "ts/opacity", "name/cti/constant", "ts/size/lineheight", "ts/typography/css/shorthand", "custom/hsl"],
      buildPath: 'build/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
    js: {
      // transformGroup: "tokens-studio",
      transforms: ["ts/size/px", "ts/opacity", "name/cti/constant", "ts/size/lineheight", "ts/typography/css/shorthand", "custom/hsl"],
      buildPath: "build/",
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