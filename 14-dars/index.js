// function sum(a) {
//   if (a === undefined) {
//     return 0;
//   }

//   return function innerSum(b) {
//     if (b === undefined) {
//       return a;
//     }
//     return sum(a + b);
//   };
// }

// const result = sum(5)(4)(3)(6)(7)(5)(8)();
// console.log(result);

// let list = [
//   { id: 1, name: "eshmat", title: "CEO" },
//   { id: 2, name: "toshmat", title: "CTO" },
//   { id: 3, name: "eshmat", title: "CEO" },
//   { id: 4, name: "toshmat", title: "CTO" },
// ];

// let res = {};
// let ceo = [];
// let cto = [];

// let result = list.map((value) => {});

let list = [
  { id: 1, name: "eshmat", title: "CEO" },
  { id: 1, name: "eshmat", title: "CEO" },
  { id: 2, name: "toshmat", title: "CTO" },
  { id: 4, name: "toshmat", title: "SES" },
  { id: 3, name: "eshmat", title: "CTO" },
  { id: 5, name: "toshmat", title: "SES" },
];

const getTitle = (data) => {
  let res = [];
  data.map((value) => {
    res[value.title] = new Array();
    res[value.title].push(value);
  });
  return res;
};
console.log(getTitle(list));
