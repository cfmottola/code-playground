function most_frequent(values) {
  const count = {};
  let most_frequent_value = null;
  let most_frequent_count = 0;
  for (let v of values) {
    if (count[v]) {
      count[v]++;
    }
    else {
      count[v] = 1;
    }
    if (count[v] > most_frequent_count) {
      most_frequent_value = v;
      most_frequent_count = count[v];
    }
  }
  return most_frequent_value;
}

let values = [1, 3, 1, 3, 2, 1];
console.log(most_frequent(values)); // 1 expected

values = [3, 3, 1, 3, 2, 1];
console.log(most_frequent(values)); // 3 expected

values = [];
console.log(most_frequent(values)); // NULL expected

values = [0];
console.log(most_frequent(values)); // 0 expected