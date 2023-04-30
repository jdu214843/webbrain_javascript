// ?? Objects 2

// let obj = {
//     name : "webbrain",
//     age: 23,
//     child:{
//         name : "eshmat",
//         age : 13,
//         child:{
//             name: "toshmat",
//             age: 33,
//         }
//     }
// }

// console.log(obj);
// let sum = 0;

// while(obj){
//     sum += obj.age;
//     obj = obj.child;
// }
// console.log(sum);

// let title  = 34;

// let obj = {
//     name : "asilbek",
//     title: "name",
//     [title]: "IT center",
//     title,
// }

// console.log(obj.name);
// console.log(obj.name);
// console.log(obj[title]);
// console.log(obj.title)
// console.log(obj["title"]);
// let title = "name"
// let obj1 = {
//     name : "asilbek",
//     title: "name",
//     founded : "23",
// }

// let obj2 = structuredClone(obj1)
// obj2.name = "javohir";
// delete obj1.title
// console.log(obj2 == obj1);
// console.log(obj1);

// let obj4 = {
//     name : "asilbek",
//     title: "name",
//     titles : "jasur",
// }

// obj5 = obj4;
// obj5.name = "javohir"
// obj4.name = "saidamin"
// console.log(obj5== obj4)

// function sayHi(){
//     console.log("hello")

// }
// let user = {
//     name : "webbrain",

//     getUser: function (){
//         return () =>{
//             console.log(`Hi ${this.name}`);
//         }
//     }
// }
// let usr = user;
// usr.getUser()();
// user.sayHi();

// let id1 = Symbol("id1")
// let id2 = Symbol("id1")
// // console.log(id1);

// let name = "symbol"
// let obj = {
//    name : "webbrain",
//    title : "IT Center",
//    child:{
//        agename : 2022,
//     }
// }

/*object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping*/

let person = {
  id: 1,
  name: "Odil",
  age: 78,
  child: {
    id: 1,
    name: "Ali",
    age: 48,
    child: {
      id: 1,
      name: "Umar",
      age: 20,
    },
  },
};

// function sumOfObj(obj) {
//   if (obj.child !== undefined) return obj.age + sumOfObj(obj.child);
//   return obj.age;
// }
// console.log(sumOfObj(person));
let sum = 0;
while (person) {
  sum += person.age;
  person = person.child;
}

console.log(sum);

// function getName() {
//   console.log(new.target);
//     this.name = "webbrain";
//     this.sayHi = function (){
//         console.log(this)
//         return this;
//     }
// }
// new getName("eshmat");
// console.log((new getName().sayHi()));
