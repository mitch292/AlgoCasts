// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let fast = list.head.next.next ? list.head.next.next : null;
  let slow = list.head.next ? list.head.next : null;

  while (fast) {
    if (fast === slow) {
      return true;
    } else {
      if (!fast.next) {
        return false;
      } else {
        fast = fast.next.next;
        slow = slow.next;
      }
    } 
  }
  return false
}

module.exports = circular;
