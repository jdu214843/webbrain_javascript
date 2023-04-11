// sonni factorini topish

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // 120

// sonni 0 teng bo'lguncha ishlaydi

function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}

countdown(5); // 5, 4, 3, 2, 1, 0

// fibonacci sonlar
function fibonachi(n) {
  if (n <= 1) return n;
  return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(7)); // 13
