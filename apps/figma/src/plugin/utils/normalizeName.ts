export function normalizeName(name: string) {
  if (!name.length) {
    return ''
  }

  return name.replace(/[0-9]/g, '').replace(/\W/g, '').replace('[', '').replace(']', '').split(' ')[0].toLowerCase()
}
