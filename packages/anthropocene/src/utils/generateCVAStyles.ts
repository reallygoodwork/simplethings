import { ComponentConfig } from '@configTypes/component'
import { ElementSchema } from '@configTypes/element/element'
import { createComponentName } from '@utils/createComponentName'
import { lowerCase } from 'lodash'

export const generateCVAStyles = (configFile: ElementSchema) => {
  const componentName = createComponentName(configFile.name)
  const hasCVA = configFile.componentProps?.length > 0

  console.log('hasCVA', hasCVA )

  if (hasCVA) {
    return `import { cva, VariantProps } from 'class-variance-authority'

  const ${componentName}CVA = cva('${lowerCase(configFile.name)}', {
    variants: {}
  })
    `
  } else {
    return ``
  }
}
