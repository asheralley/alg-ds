// Write a function which takes in a string and returns counts of each
// character in the string

// explore examples

function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in
  // the string;
  // make object
  // loop over string for each character
  // if the char is a number/letter and is a key in oject, add one to count
  // if the char is a number/letter and not a key in object, add it and set
  // value to 1
  // return object

  let result = {};

  for (let char of str) {
    char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      // if (result[char] > 0) {
      //     result[char]++;
      // } else {
      //     result[char] = 1;
      // }
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

let test = charCount("Hi there!!1234 How are you?");

console.log(test);
// this is a comment
