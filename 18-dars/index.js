// setTimeout(function) and setInterval(function)
function sayHi() {
  console.log("Hello, World!");
}

setTimeout(sayHi, 3000); // 3 sekunddan keyin "Hello, World!" yozuvi ko'rsatiladi

let num = 0;
function increment() {
  num++;
  console.log(num);
}

setInterval(increment, 1000); // 1 sekunddan keyin sonlar chiqadi
