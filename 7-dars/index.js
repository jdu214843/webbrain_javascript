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
// !! ditraction - qilish obyektlarni ichiga kirish. ya'ni
// nomlar bir xil bo'lib qolganda yoki obyektni ichidagi obyektlar ham bir xil bo'lib qolganda 
// ishlatiladi . distraction ko'p hollar kerak bo'ladi.

// let {name, title, child:{agename: test}} = obj
// console.log(test);
// console.log(obj.name);
// for(value in obj){
//     console.log(obj['value']);
// }


// ?? sprate yoyib yuborish . sparate operatori bu - ikkita obyekt ichidan ma'lumotni gulli qavusdan tashqariga
// chiqarib olish. sprate {...obj nomi} ichida yozidaladi. bu copy qilib olish ham desa bo'ladi





