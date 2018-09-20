// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(value, next = null) {
    this.data = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    //option 1
    // let crawlNodes = (node) => {
    //   if (node !== null) {
    //     count++;
    //     crawlNodes(node.next)
    //   }
    // }
    // crawlNodes(this.head);


    //option 2
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    //option 1
    // let crawlNodes = (node) => {
    //   if (node.next === null) {
    //     return node;
    //   } else {
    //     return crawlNodes(node.next);
    //   }
    // }
    // return crawlNodes(this.head)

    //option 2
    let node = this.head;
    while (node.next !== null) {
      node = node.next
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (this.head === null) {
      return;
    } else if (this.head.next === null) {
      this.clear()
    } else {
      let prev = this.head
      let node = this.head.next
      while (node) {
        if (node.next === null) {
          prev.next = null;
          return;
        } else {
          prev = node;
          node = node.next;
        }
      }
    }
  }

  insertLast(data) {
    if (this.head) {
      let node = this.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(data);
    } else {
      this.head = new Node(data)
    }
  }


  getAt(index) {
    let count = 0;
    let node = this.head;
    while (node !== null) {
      if (index === count) {
        return node;
      } else {
        count++;
        node = node.next;
      }
    }
    return null;
  }

  removeAt(index) {
    if (this.head === null) {
      return null;
    } else if (index === 0) {
      return this.removeFirst()
    }
    let nodeBefore = this.getAt(index-1);
    let nodeAfter = this.getAt(index+1);
    nodeBefore.next = nodeAfter;
  }

  insertAt(data, index) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    } else if (index === 0) {
      this.insertFirst(data);
      return;
    } else if (index >= this.size()) {
      this.insertLast(data);
      return;
    }
    let nodeBefore = this.getAt(index-1);
    let nodeToMove = this.getAt(index);
    nodeBefore.next = new Node(data, nodeToMove);
  }

  forEach(func) {
    let node = this.head;
    while (node) {
      func(node);
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
