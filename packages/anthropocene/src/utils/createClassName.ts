import { camelCase, lowerCase } from "lodash";

export const createClassName = (name: string) => camelCase(lowerCase(name))