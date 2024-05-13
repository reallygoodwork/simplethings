import { Dependency } from "@configTypes/dependencies";

export const createDependencyString = (dependency: Dependency[], hasVariants?: boolean) => {



  const dependencies = dependency.map(dep => {
    return dep.isDefault ? `import ${dep.name} from '${dep.packageName}'` : `import { ${dep.name} } from '${dep.packageName}'`
  }).join('\n')

  if (hasVariants) {
    return dependencies + `\nimport { VariantProps, cva } from 'class-variance-authority'\n`
  }

  return dependencies
}