/**
 *
 * @param children - The children of the node
 * @param property - The property to check
 * @param comparator - The value to compare against
 * @returns If all children have the same value for the given property
 */
export function findChildStyles(children: ChildrenMixin['children'], property: string, comparator?: string): boolean {
  return children
    .filter((child) => child.type === 'TEXT')
    .map((child) => (comparator ? child[property] !== comparator : child[property]))
    .every((val, i, arr) => val === arr[0])
}
