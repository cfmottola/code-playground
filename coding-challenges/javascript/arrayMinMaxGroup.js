const values = [4, 1, 2, 4, 5, 1, 2, 4];
const windowSize = 3;

// expected = [[1,4],[1,5], [2,4]]

function arrayMinMaxGroup(values, windowSize) {
  const groups = [];
  let min = null, max = null;
  let index = 0;
  for (let value of values) {
    if (min === null) {
      min = value;
    } else {
      min = Math.min(min, value);
    }
    if (max === null) {
      max = value;
    } else {
      max = Math.max(max, value);
    }
    if ((index+1) % windowSize === 0 || values[index+1] === undefined) {
      groups.push([min, max]);
      min = null;
      max = null;
    }
    index++;
  }
  return groups;
}

console.log(arrayMinMaxGroup(values, windowSize));