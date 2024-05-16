import { Dependency } from '@configTypes/dependencies'

type options = {
  hasVariants?: boolean
  dependencies?: Dependency[]
  library?: 'react' | 'vue' | 'svelte'
}

export const createDependencyString = ({ dependencies, hasVariants, library }: options) => {

    if (!dependencies || !dependencies.length) {
      return ''
    }

  let dependenciesString = ''

  if (library && library === 'react') {
    dependenciesString += `import React from 'react'\n`
  }

    dependenciesString += dependencies
      .map((dep) => {
        return dep.isDefault
          ? `import ${dep.name} from '${dep.packageName}'`
          : `import { ${dep.name} } from '${dep.packageName}'`
      })
      .join('\n')

    if (hasVariants) {
      return dependenciesString + `\nimport { VariantProps, cva } from 'class-variance-authority'\n`
    }

    return dependenciesString

}
