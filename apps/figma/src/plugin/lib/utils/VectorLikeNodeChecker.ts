const vectorLikeTypes: SceneNode['type'][] = ['LINE', 'ELLIPSE', 'POLYGON', 'STAR', 'VECTOR', 'BOOLEAN_OPERATION']

export class VectorLikeNodeChecker {
  private readonly memo = new WeakMap<SceneNode, boolean>()

  check(node: SceneNode): boolean {
    const memo = this.memo.get(node)
    if (memo != null) {
      return memo
    }

    let result = false
    if (vectorLikeTypes.includes(node.type)) {
      result = true
    } else if ('children' in node) {
      result =
        node.children.length !== 0 &&
        node.children.every((child) => this.check(child)) &&
        node.children.filter((child) => child.type !== 'COMPONENT').length === 0
    }

    this.memo.set(node, result)
    return result
  }
}
