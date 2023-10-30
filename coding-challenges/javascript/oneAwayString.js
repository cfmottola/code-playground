function is_one_away(s1, s2) {
  const diff_size = Math.abs(s1.length - s2.length);
  
  if (diff_size > 1) {
    return false;
  }
  let p1 = 0;
  let p2 = 0;
  let diff = 0;
  while (p1 < s1.length || p2 < s2.length) {
    if (s1[p1] === s2[p2]) {
      p1++;
      p2++;
    } else {
      if (diff > 1) {
        return false;
      }
      diff++;
      if (!diff_size) {
        p1++;
        p2++;
      } else if (s1.length > s2.length) {
        p1++;
      } else {
        p2++;
      }
    }
  }
  return diff <= 1;
}

// NOTE: The following input values will be used for testing your solution.
console.log(is_one_away("abcde", "abcd"));  // should return True
console.log(is_one_away("abde", "abcde"));  // should return True
console.log(is_one_away("a", "a"));  // should return True
console.log(is_one_away("abcdef", "abqdef"));  // should return True
console.log(is_one_away("abcdef", "abccef"));  // should return True
console.log(is_one_away("abcdef", "abcde"));  // should return True
console.log(is_one_away("aaa", "abc"));  // should return False
console.log(is_one_away("abcde", "abc"));  // should return False
console.log(is_one_away("abc", "abcde"));  // should return False
console.log(is_one_away("abc", "bcc"));  // should return False
