import { ComponentConfig } from '@configTypes/component'
import { createComponentName } from '@utils/createComponentName'
import { lowerCase } from 'lodash'

export const generateCVAStyles = (configFile: ComponentConfig) => {
  const componentName = createComponentName(configFile.name)
  const hasCVA = configFile.cvaSchema

  if (!hasCVA) {
    return
  } else {
    return `import { cva, VariantProps } from 'class-variance-authority'

const ${componentName}CVA = cva('${lowerCase(configFile.name)}', ${JSON.stringify(hasCVA, null, 2).replace(/"([^"]+)":/g, '$1:')})
  `
  }
}