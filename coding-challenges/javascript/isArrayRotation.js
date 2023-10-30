// Implement your function below.
// function isRotation(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let match = false;
//   let p1 = 0;
//   let p2 = 0;
//   while (p1 < arr1.length) {
//     if (arr1[p1] === arr2[p2]) {
//       match = true;
//       p1++;
//       if (arr2[p2+1] !== undefined) {
//         p2++;
//       } else {
//         p2 = 0;
//       }
//     } else if (!match && arr2[p2+1] !== undefined) {
//       p2++;
//     } else {
//       return false;
//     }
//   }
//   return match;
// }

function isRotation(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const key = arr1[0];
  let start = -1;
  for (let i = 0; i < arr2.length; i++) {
    if (key === arr2[i]) {
      start = i;
    }
  }
  if (start === -1) {
    return false;
  }
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] !== arr2[start]) {
      return false;
    }
    if (arr2[start+1] === undefined) {
      start = 0;
    } else {
      start++;
    }
  }
  return true;
}
    

// NOTE: The following input values will be used for testing your solution.
arr1 = [1, 2, 3, 4, 5, 6, 7]
arr2a = [4, 5, 6, 7, 8, 1, 2, 3]
// is_rotation(arr1, arr2a) should return False.
console.log(isRotation(arr1, arr2a));
arr2b = [4, 5, 6, 7, 1, 2, 3]
// isRotation(arr1, arr2b) should return True.
console.log(isRotation(arr1, arr2b));
arr2c = [4, 5, 6, 9, 1, 2, 3]
// isRotation(arr1, arr2c) should return False.
console.log(isRotation(arr1, arr2c));
arr2d = [4, 6, 5, 7, 1, 2, 3]
// isRotation(arr1, arr2d) should return False.
console.log(isRotation(arr1, arr2d));
arr2e = [4, 5, 6, 7, 0, 2, 3]
// isRotation(arr1, arr2e) should return False.
console.log(isRotation(arr1, arr2e));
arr2f = [1, 2, 3, 4, 5, 6, 7]
// isRotation(arr1, arr2f) should return True.
console.log(isRotation(arr1, arr2f));
arr2g = [7, 1, 2, 3, 4, 5, 6]
// isRotation(arr1, arr2g) should return True.
console.log(isRotation(arr1, arr2g));