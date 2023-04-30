// ?? masalalar
// console.log(("kasjdhf" && false) || ("frontend " && "mobile"));
// console.log((isFinite(true) && isNaN(false)) || "frontend undefined");

//  malumot update qilish
// let list = [
//   { id: 1, name: "eshmat", title: "CEO" },
//   { id: 2, name: "toshmat", title: "CTO" },
//   { id: 3, name: "gulmat", title: "HR" },
//   { id: 4, name: "holmat", title: "CEE" },
// ];
// const update = (newData) => {
//   const index = list.findIndex((item) => item.id === newData.id);

//   if (index !== -1) {
//     list[index] = { ...list[index], ...newData };
//   }
// };

// update({ id: 3, name: "asilbek" });

// console.log(list);

// malumotlarni gruhlash

// let list = [
//   { id: 1, name: "eshmat", title: "CEO" },
//   { id: 2, name: "toshmat", title: "CTO" },
//   { id: 3, name: "gulmat", title: "HR" },
//   { id: 4, name: "holmat", title: "CEE" },
//   { id: 5, name: "holmat", title: "CEE" },
//   { id: 6, name: "holmat", title: "CEE" },
// ];

// const getGroup = (group) => {
//   let res = {};
//   group.map((value) => {
//     if (!res[value.title]) {
//       res[value.title] = new Array();
//     }
//     res[value.title].push(value);
//   });
//   return res;
// };

// console.log(getGroup(list));

let webbrain = {
  frontend: [
    { course: "react", price: 120 },
    { course: "vue", price: 110 },
    { course: "angular", price: 100 },
  ],
  backend: [
    { course: "java", price: 120 },
    { course: "php", price: 110 },
    { course: "nodejs", price: 100 },
  ],
  mobile: {
    android: [
      { course: "android", price: 120 },
      { course: "flutter", price: 110 },
    ],
    ios: [
      { course: "ios", price: 100 },
      { course: "flutter", price: 100 },
    ],
  },
};

function getGroup(list) {
  let sum = 0;
  for (let key in list) {
    let value = list[key];
    if (Array.isArray(value)) {
      sum += value.reduce((acc, item) => acc + item.price, 0);
    } else {
      sum += getGroup(value);
    }
  }
  return sum;
}
const total = getGroup(webbrain);
console.log(total);

// function getTotal(list) {
//   let res = 0;

//   for (let i in list) {
//     let value = list[i];
//     if (Array.isArray(value)) {
//       res += value.reduce((acc, item) => acc + item.price, 0);
//     } else if (typeof value === "object") {
//       res += getTotal(value);
//     }
//   }
//   return +res;
// }
// const total = getTotal(webbrain);
// console.log(total);

// function flatten(obj) {
//   let result = [];

//   for (let key in obj) {
//     let value = obj[key];
//     if (Array.isArray(value)) {
//       result = result.concat(value);
//     } else if (typeof value === "object") {
//       result = result.concat(flatten(value));
//     }
//   }

//   return result;
// }
