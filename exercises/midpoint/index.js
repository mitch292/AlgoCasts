// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  //Have a slow node and a fast node
  let fast = list.head;
  let slow = list.head;
  let end = false;

  while (end === false) {
    if (fast.next === null || fast.next.next === null) {
      end = true;
    } else {
      fast = fast.next.next;
      slow = slow.next;
    }
  }
  return slow;

  //when fast node reaches end of the list
  //return slow node

}

module.exports = midpoint;
