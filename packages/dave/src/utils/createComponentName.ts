import { camelCase, upperFirst, lowerCase } from "lodash";

export const createComponentName = (name: string) => upperFirst(camelCase(lowerCase(name)))