export function getCommonStyles(arr: any[]) {
  if (arr.length === 0) return {};

  const commonProps: {
    [key: string]: any;
  } = {};
  const firstObject = arr[0];

  Object.keys(firstObject).forEach(key => {
    // Check if this property exists in all other objects
    const isCommon = arr.every(obj => key in obj);
    if (isCommon) {
      commonProps[key] = firstObject[key];
    }
  });

  return commonProps;

}