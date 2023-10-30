const values = [1,2,3,1];

function arrayOfProds(values) {
  let prod = 1;
  for (let value of values) {
    prod = prod * value;
  }
  const prods = [];
  for (let value of values) {
    prods.push(prod / value);
  }
  return prods;
}

console.log(arrayOfProds(values));