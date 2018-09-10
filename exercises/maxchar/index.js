// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let storage = {};
  let greatest = '';
  str.split('').forEach(char => {
    if (storage[char]) {
      storage[char]++;
    } else {
      storage[char] = 1;
    }
    if (greatest.length === 0 || storage[greatest] < storage[char]) {
      greatest = char;
    }
  });
  return greatest;
}

module.exports = maxChar;
