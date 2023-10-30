// Implement your function below.
// function common_elements(arr1, arr2) {
//   const result = [];
//   const elements = {};
//   for (let v of arr1) {
//     elements[v] = true;
//   }
//   for (let v of arr2) {
//     if (elements[v]) {
//       result.push(v);
//     }
//   }
//   return result;
// }
// function common_elements(arr1, arr2) {
//   const result = new Set();
//   if (arr1.length === 0 || arr2.length === 0) {
//     return result;
//   }
//   const max_length = arr1.length > arr2.length ? arr1.length : arr2.length;
//   const element1 = {};
//   const element2 = {};
//   for (let i = 0; i < max_length; i++) {
//     if (arr1[i] !== undefined) {
//       element1[arr1[i]] = true;
//     }
//     if (arr2[i] !== undefined) {
//       element2[arr2[i]] = true;
//     }
//     if (element1[arr1[i]] && element2[arr1[i]]) {
//       result.add(arr1[i]);
//     }
//     if (element1[arr2[i]] && element2[arr2[i]]) {
//       result.add(arr2[i]);
//     }
//   }
  
//   return result;
// }

function common_elements(arr1, arr2) {
  const result = [];
  let p1 = 0;
  let p2 = 0;

  while(p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
      p2++;
    }
    else if (arr1[p1] > arr2[p2]) {
      p2++;
    }
    else {
      p1++;
    }
  }
  return result;
}


// NOTE: The following input values will be used for testing your solution.
const list_a1 = [1, 3, 4, 6, 7, 9]
const list_a2 = [1, 2, 4, 5, 9, 10]
// common_elements(list_a1, list_a2) should return [1, 4, 9] (a list).
console.log(common_elements(list_a1, list_a2));

const list_b1 = [1, 2, 9, 10, 11, 12]
const list_b2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15]
// common_elements(list_b1, list_b2) should return [1, 2, 9, 10, 12] (a list).
console.log(common_elements(list_b1, list_b2));

const list_c1 = [0, 1, 2, 3, 4, 5]
const list_c2 = [6, 7, 8, 9, 10, 11]
// common_elements(list_c1, list_c2) should return [] (an empty list).
console.log(common_elements(list_c1, list_c2));