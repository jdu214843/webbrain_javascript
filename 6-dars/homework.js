// ?? Homework

// 1-masala

// const dec1 = {
//     familya : "Boysoatov",
//     qayerdan : "Surxondaryo",
//     name : "javohir",
//     yoshi : 20,
//     "full name" : "Boysoatov Asilbek",
//     0: 34856783
// }

// for(i in dec1){
//     console.log(dec1[i]);
// }

// let values = Object.values(dec1)
// console.log(values)

// for(i in dec1){
//     console.log(Object.values(dec1))
// }
// console.log(Object.values(dec1));

// !! 2-masala

// No2
// object keylarini toping

// let obj={
//     id:1,
//     name:"WebBrain"
// }
// for(i in obj){
//     console.log(i);
// }

// !! 3-masala

// object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id

// !! 4-masala

// let user = {
//     name: "John",
//     surname: "Smith",
// }
// user.name = "Pete"
// delete user.name

// console.log(user);

// ?? 5-masala

// let salaries = {
//     John : 100,
//     Pete: 180,
//     Ann : 150,
// };
// let sum = 0;
// for(let a in salaries){
//     sum += salaries[a]
// }
// console.log(sum)

// !! 6-masala

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
for (let i in menu) {
  if (typeof menu[i] == "number") {
    menu[i] *= 2;
  }
}
function display(menu) {
  for (const i in menu) {
    console.log(menu[i]);
  }
}
display(menu);

// !! 7 - masala

let user = {
  id: 1,
  name: "Odil",
  age: 78,
  children: [
    {
      id: 1,
      name: "Umar",
      age: 54,
      children: [
        { id: 1, name: "Asmo", age: 34 },
        { id: 2, name: "Osim", age: 0 },
        { id: 3, name: "Xattob", age: 15 },
      ],
    },
    { id: 2, name: "Laylo", age: 14 },
    { id: 3, name: "Soliha", age: 12 },
  ],
};

// function getAges(object) {
//   function sumOfObj(object, array = []) {
//     let ages = array;
//     ages.push(object.age);
//     if (object.children !== undefined) {
//       for (let person of object.children) {
//         ages = sumOfObj(person, ages);
//       }
//     }
//     return ages;
//   }

//   return sumOfObj(object);
// }

// console.log(getAges(user));

//
