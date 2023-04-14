// Classes Advanced Methods

let a = 124;
let c = 0;
let b = 0;

while (a > 0) {
  c = c + (a % 10);
  b = a % 10;
  a = (a - b) / 10;
}
console.log(c);
