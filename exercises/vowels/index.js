// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {

    if (/[aeiou]/i.test(str[i])) {
      count++;
    }
  }
  return count;
}

module.exports = vowels;


// function vowels(str) {
//   let count = 0;
//   let vowel = {
//     a: 1,
//     e: 1,
//     i: 1,
//     o: 1,
//     u: 1,
//   };

//   for (let i = 0; i < str.length; i++) {
//     if (vowel[str[i].toLowerCase()]) {
//       count++;
//     }
//   }
//   return count;
// }