// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    let crawlTree = (node) => {
      if (data < node.data) {
        if (node.left === null) {
          node.left = new Node(data);
        } else {
          crawlTree(node.left);
        }
      } else if (data > node.data) {
        if (node.right === null) {
          node.right = new Node(data);
        } else {
          crawlTree(node.right);
        }
      }
    }
    crawlTree(this);
  }

  contains(data) {
    let isItHere = null;
    let crawlTree = (node) => {
      if (node.data === data) {
        isItHere = node;
      } else if (data < node.data && node.left) {
        crawlTree(node.left);
      } else if (data > node.data && node.right) {
        crawlTree(node.right);
      }
    }


    crawlTree(this);
    return isItHere;

  }

}

module.exports = Node;
