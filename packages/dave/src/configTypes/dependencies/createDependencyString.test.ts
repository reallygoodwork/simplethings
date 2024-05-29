import { createDependencyString } from './createDependencyString'

describe('createDependencyString', () => {

  const mockDependency = [
    {
      name: 'React',
      packageName: 'react',
      isDefault: true
    },
    {
      name: 'useState',
      packageName: 'react',
      isDefault: false
    }
  ]

  it ('it should return a string of dependencies', () => {
    expect(createDependencyString(mockDependency)).toBe("import React from 'react'\nimport { useState } from 'react'\n")
  })

  it ('it should return a string of dependencies with variants', () => {
    expect(createDependencyString(mockDependency, true)).toBe("import React from 'react'\nimport { useState } from 'react'\nimport { VariantProps, cva } from 'class-variance-authority'\n")
  })
})