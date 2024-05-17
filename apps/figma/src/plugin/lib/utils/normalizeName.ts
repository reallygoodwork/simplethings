export function normalizeName(name: string): string {
  // remove all spaces and camelcase the name
  name = name.replace(/ /g, '')
  name = name.replace(/([a-z])([A-Z])/g, '$1 $2')
  name = name.replace(/\W/g, ' ')
  name = name.replace(/\s(.)/g, function ($1) {
    return $1.toUpperCase()
  })

  // if name starts with a number, add an X to the beginning
  if (name.match(/^[0-9]/)) {
    name = 'X' + name
  }
  // remove all non-alphanumeric characters
  name = name.replace(/[^a-zA-Z0-9]/g, '')
  // capitalize first letter
  return name.charAt(0).toUpperCase() + name.slice(1)
}
