function sum(a) {
  if (a === undefined) {
    return 0;
  }

  return function innerSum(b) {
    if (b === undefined) {
      return a;
    }
    return sum(a + b);
  };
}

const result = sum(5)(4)(3)(6)();
console.log(result);
