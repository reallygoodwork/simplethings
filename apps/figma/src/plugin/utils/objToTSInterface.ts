type Partial<T> = {
  [P in keyof T]?: T[P]
}

interface IObjToTSConfigPrivate {
  prependWithI: boolean
  sortAlphabetically: boolean
  addExport: boolean
  useArrayGeneric: boolean
  optionalFields: boolean
  prefix: string
  rootObjectName: string
}

export type IObjToTSConfig = Partial<IObjToTSConfigPrivate>

export class ObjToTS {
  private config: IObjToTSConfigPrivate

  private interfaces: {
    [name: string]: {
      [field: string]: string
    }
  } = {}

  constructor(config: IObjToTSConfig = {}) {
    this.config = {
      prependWithI: false,
      sortAlphabetically: false,
      addExport: false,
      useArrayGeneric: false,
      optionalFields: false,
      prefix: '',
      rootObjectName: 'RootObject',
      ...config,
    }
  }

  convert(obj: {}) {
    this.interfaces = {}
    let result = `type JSON = ${this.unknownToTS(obj)}\n\n`;
    result += this.interfacesToString();
    return this.interfacesToString();
  }

  private unknownToTS(value: {}, key: string | undefined = void 0) {
    let type: string = typeof value
    if (type === 'object') {
      if (Array.isArray(value)) {
        type = this.arrayToTS(value, key)
      } else {
        type = this.objectToTS(value, key && this.capitalizeFirst(key))
      }
    }
    return type
  }

  private arrayToTS(array: {}[], key: string | undefined = void 0) {
    let type = array.length ? void 0 : 'any'
    if (array.includes('true') && array.includes('false')) {
      return `Boolean`
    } else {
      let string = ''
      array.forEach((val, i, el) => {
        if (i + 1 === array.length) {
          string += `'${val}'`
        } else {
          string += `'${val}' | `
        }
      })
      return string
      // return this.config.useArrayGeneric ? `Array<${type}>` : `${type}[]`
    }

  }

  private keyToTypeName(key: string | undefined = void 0) {
    if (!key || key.length < 2) {
      return key
    }
    const [first, ...rest]: string[] = Array.prototype.slice.apply(key)
    const last = rest.pop()
    return [first.toUpperCase(), ...rest, last === 's' ? '' : last].join('')
  }

  private capitalizeFirst(str: string) {
    const [first, ...rest]: string[] = Array.prototype.slice.apply(str)
    return [first.toUpperCase(), ...rest].join('')
  }

  private objectToTS(obj: {}, type: string = this.config.rootObjectName) {
    if (obj === null) {
      return 'any'
    }
    const { prependWithI, prefix } = this.config
    if (prependWithI) {
      type = `I${prefix || ''}${type}`
    }
    if (!this.interfaces[type]) {
      this.interfaces[type] = {}
    }
    const interfaceName = this.interfaces[type]
    Object.keys(obj).forEach((key) => {
      const value = obj[key]
      const fieldType = this.unknownToTS(value, key)
      if (!interfaceName[key] || interfaceName[key].indexOf('any') === 0) {
        interfaceName[key] = fieldType
      }
    })
    return type
  }

  private interfacesToString() {
    const { sortAlphabetically, addExport, optionalFields } = this.config
    return Object.keys(this.interfaces)
      .map((name) => {
        const interfaceStr = [`${addExport ? 'export ' : ''}interface ${name} {`]
        const fields = Object.keys(this.interfaces[name])
        if (sortAlphabetically) {
          fields.sort()
        }
        fields.forEach((field) => {
          const type = this.interfaces[name][field]
          interfaceStr.push(`  ${field}${optionalFields ? '?' : ''}: ${type};`)
        })
        interfaceStr.push('}\n')
        return interfaceStr.join('\n')
      })
      .join('\n')
  }
}
