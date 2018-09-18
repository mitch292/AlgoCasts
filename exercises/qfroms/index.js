// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.firstStack = new Stack;
    this.secondStack = new Stack;
  }
  add(item) {
    this.firstStack.push(item);
  }

  peek() {
    while (this.firstStack.peek() !== undefined) {
      this.secondStack.push(this.firstStack.pop());
    }
    let tempVal = this.secondStack.peek();
    
    while (this.secondStack.peek() !== undefined) {
      this.firstStack.push(this.secondStack.pop())
    }
    return tempVal;
  }


  remove() {

    while (this.firstStack.peek() !== undefined) {
      this.secondStack.push(this.firstStack.pop());
    }
    let tempVal = this.secondStack.pop();
    
    while (this.secondStack.peek() !== undefined) {
      this.firstStack.push(this.secondStack.pop())
    }
    return tempVal;
  }
}

module.exports = Queue;


//implement a queue using two stacks




//flag that indiicates which stack is main
//flag will have to be flipped on every remove
//one initial stack
//one secondary stack

//add method
//add is fine just put on the top of the stack

//peek method
//peek is fine, just peak end of mainStack

//remove method
  //peek from main stack
    //if peak === undefined
    //return secondary stack.pop
    //flip main stack flag