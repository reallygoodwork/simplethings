export function returnValidElement(node: SceneNode): string {
  if (!node.name && !node.parent.name) {
    return 'div'
  }

  const elementTypes = ['button', 'select', 'textarea', 'header', 'footer', 'nav']

  if (node.name.toLowerCase().includes('group')) {
    return 'div'
  }

  if (node.name.toLowerCase().includes('input')) {
    return 'input:text'
  }

  const elements = elementTypes.filter((element) => {
    if (node.name.toLowerCase().includes(element)) {
      return element
    }
  })

  if (elements[0]?.length) {
    return elements[0]
  } else {
    return 'div'
  }
}
