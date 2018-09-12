// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let arr = str.split(' ')
  let caps = [];
  arr.forEach(str => caps.push(str[0].toUpperCase() + str.slice(1)))
  return caps.join(' ')
}

module.exports = capitalize;
