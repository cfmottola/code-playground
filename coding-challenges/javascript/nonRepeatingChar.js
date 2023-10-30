// Implement your function below.
function non_repeating(str) {
  let count = {};
  for (let char of str) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }
  return null;
}

// NOTE: The following input values will be used for testing your solution.
console.log(non_repeating("abcab")); // should return 'c'
console.log(non_repeating("abab")); // should return NULL
console.log(non_repeating("aabbbc")); // should return 'c'
console.log(non_repeating("aabbdbc")); // should return 'd'