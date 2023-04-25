// ?? proxy proxy mavzusi
let user = {
  name: "asilbek",
  _pw: 12434,
};
// let proxy = new Proxy(user, {
//   ownKeys(target) {
//     return Object.keys(target).filter((value) => value !== "_pw");
//   },
// });

// for (value in proxy) {
//   console.log(value);
// }

let range = {
  from: 1,
  to: 10,
};
let proxy = new Proxy(range, {
  has(target, prop) {
    return target.from >= prop && target.to <= prop;
  },
});
