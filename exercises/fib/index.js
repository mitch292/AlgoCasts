// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function slowFib(n) {
  if (n < 2) {
    return n
  }
  return fib(n-1) + fib(n-2);
}

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.call(this, ...args)
    cache[args] = result;
    return result
  }

}

const fib = memoize(slowFib);


module.exports = fib;




// function fib(n) {
//   let arr = [0, 1];
//   for (let i = 2; i < n; i++) {
//     arr.push(arr[i-1] + arr[i-2])
//   }
//   return arr[arr.length-1] + arr[arr.length-2];
// }

// function fib(n, index = 2, current = 1, lastOne = 1) {
//   if (n === 0) {
//     return 0
//   } else if (n === 1) {
//     return 1
//   }
//   if (n === index)  {
//     return current
//   } else {
//     let newLastOne = current;
//     let newCurrent = current + lastOne;
//     return fib(n, index+1, newCurrent, newLastOne)
//   }
// }
