// Classes Advanced Methods

let a = 12345678;
let c = 0;
let b = 0;

while (a > 0) {
  c = c + (a % 10);
  //   console.log(a);
  b = a % 10;
  //   console.log(b);
  a = (a - b) / 10;
}
console.log(c);
