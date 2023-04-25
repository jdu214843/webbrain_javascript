// ?? proxy proxy mavzusi
let user = {
  name: "asilbek",
  pw: 12434,
};
let proxy = new Proxy(user, {});

const getProxy = (user) => {
  get(target);
  return Object.keys(target).filter((value) => value !== "pw");
};

console.log(proxy);
console.log(user);
