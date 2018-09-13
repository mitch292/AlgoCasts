// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, column = 0, string = '') {

  //base case
  if (n === row) {
    return;
  }

  let width = n + (n-1);
  if (string.length === width) {
    console.log(string)
    return pyramid(n, row + 1)
  }
  let numOfPounds = row + (row + 1);
  let spacing = Math.floor((width - numOfPounds) / 2);

  if (spacing > 0) {
    if (column <= spacing - 1 || column >= width - spacing) {
      string += ' ';
    } else {
      string += '#';
    }
  } else {
    string += '#'
  }
  pyramid(n, row, column + 1, string);

}

module.exports = pyramid;


// function pyramid(n) {
//   //for each row (= n)
//   let width = n + (n-1);
//   for (let i = 0; i < n; i++) {
//     let string = '';
//     for (let j = 0; j < width; j++) {
//       let numOfHash = i + (i + 1)
//       let spacing = Math.floor((width - numOfHash) / 2);
//       if (spacing > 0) {
//         if ( j <= spacing - 1 || j >= width - spacing) {
//           string += ' ';
//         } else {
//           string += '#';
//         }
//       } else {
//         string += '#';
//       } 
//     }
//     console.log(string);
//   }
//   //width of the last row should be n + n-1
//   //number of hashtags can be row number plus row number + 1
// }