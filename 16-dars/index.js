// scopes and closure

function greeting(message) {
  return function (name) {
    console.log(`${message}, ${name}!`);
  };
}

let sayHey = greeting("Hello");
sayHey("John"); // Hello, John!

let sayHi = greeting("Hi");
sayHi("Jane"); // Hi, Jane!
