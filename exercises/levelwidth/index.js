// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let storage = {};
  let traverseTree = (node, level) => {
    !storage[level] ? storage[level] = 1 : storage[level]++;
    node.children.forEach(child => traverseTree(child, level + 1));
  }
  traverseTree(root, 1);
  return Object.values(storage);

}

module.exports = levelWidth;
