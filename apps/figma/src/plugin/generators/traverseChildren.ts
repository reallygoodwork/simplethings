interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export function groupChildrenByDepth(node: TreeNode): TreeNode[][][] {
  const result: TreeNode[][][] = [];

  function traverse(node: TreeNode, depth: number, index: number) {
    if (!result[depth]) {
      result[depth] = [];
    }
    if (!result[depth][index]) {
      result[depth][index] = [];
    }

    result[depth][index].push(node);

    if (node.children) {
      node.children.forEach((child, childIndex) => {
        traverse(child, depth + 1, childIndex);
      });
    }
  }

  traverse(node, 0, 0);
  return result;
}