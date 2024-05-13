import { camelCase, upperFirst, lowerCase } from "lodash";

export const createComponentName = (name: string) => {
  return upperFirst(camelCase(lowerCase(name)));
}