// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  for (let i = 0; i < str.length; i++) {
    const reverseStr = str.split("").reverse().join("");
    if (str === reverseStr) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(palindrome("abba"));
console.log(palindrome("abcdefg"));
