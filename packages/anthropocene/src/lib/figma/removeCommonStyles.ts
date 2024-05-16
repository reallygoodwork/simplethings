type UnknownObject = {
  [key: string]: any;
};

export function removeCommonStyles(obj1: UnknownObject, obj2: UnknownObject) {
  const newObj = { ...obj1 }; // Create a copy of obj1 to avoid mutating the original

  for (const key of Object.keys(newObj)) {
    // Check if the property exists in obj2 and if the values are the same
    if (key in obj2 && newObj[key] === obj2[key]) {
      delete newObj[key];
    }
  }

  return newObj;
}