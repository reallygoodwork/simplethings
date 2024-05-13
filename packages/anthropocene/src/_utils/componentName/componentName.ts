import { z } from 'zod'

export const hasNoSpacesRegex = /^[^\s]+$/
export const hasCapitalFirstLetterRegex = /^[A-Z].*/

export const hasNoSpaces = (key: string) => hasNoSpacesRegex.test(key)
export const hasCapitalFirstLetter = (key: string) => hasCapitalFirstLetterRegex.test(key)

export const zComponentType = z
  .string()
  .refine((key) => hasNoSpaces(key), {
    message: 'Component name must not contain spaces',
  })
  .refine((key) => hasCapitalFirstLetter(key), {
    message: 'Component name must start with a capital letter',
  })
