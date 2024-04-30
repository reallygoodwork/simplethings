const StyleDictionary = require('style-dictionary');
const chroma = require('chroma-js');

console.log('Build started...');
console.log('\n==============================================');




StyleDictionary.registerTransform({
  name: 'custom/hsl', // notice: the name is an override of an existing predefined method (yes, you can do it)
  type: 'value',
  matcher: function(token) {
      // this is an example of a possible filter (based on the "cti" values) to show how a "matcher" works
      return token.attributes.category === 'color';
  },
  transformer: function (token) {
    const hsl = chroma(token.value);
    const saturation = hsl.get('hsl.s') * 100;
    const lightness = hsl.get('hsl.l') * 100;
    const hue = hsl.get('hsl.h');
      return `${hue.toFixed()}deg ${saturation.toFixed()}% ${lightness.toFixed()}%`;
  }
});


const StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');