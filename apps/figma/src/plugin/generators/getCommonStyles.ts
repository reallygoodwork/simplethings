export function getCommonStyles(objects: Record<string, any>[]) {
  let commonProperties = {};

  // Get the first object in the array
  let firstObject = objects[0];

  // Iterate through each property of the first object
  for (let key in firstObject) {
      let isCommon = true;
      let value = firstObject[key];

      // Compare the property value with other objects in the array
      for (let i = 1; i < objects.length; i++) {
          if (objects[i][key] !== value) {
              isCommon = false;
              break;
          }
      }

      // If the property is common, add it to the commonProperties object
      if (isCommon) {
          commonProperties[key] = value;
      }
  }

  return commonProperties;
}