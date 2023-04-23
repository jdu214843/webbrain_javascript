// //25dars | Error handling | Callback | Promise | Async await

// let res = 0;
// function getResult(num) {
//   let sum;
//   if (num > 0) {
//     sum = num % 10;
//     res += sum;
//     num -= sum;
//     num /= 10;
//     return getResult(num);
//   } else {
//     return res;
//   }
// }

// let a = 3634534;
// console.log(getResult(a));

let obj = {
  name: "foo",
  pw: 23423,
  age: 36,
  title: "new",
};

let proxy = new Proxy(obj, {
  ownKeys(target, prop, recievers) {
    return Object.keys(target).filter((value) => value !== "pw");
  },
});

for (i in proxy) {
  console.log(i);
}
