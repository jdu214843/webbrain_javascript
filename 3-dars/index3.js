// !! if and else masalalar

// function User(){
//     User = {
//         admin: false
//     }
// }
// let user = new User();
// User = {
//     admin: true
// };

// console.log(User.admin)

// !! if va else bo'yicha mustahkamlash uchun masalalar



// let a = 23000000;
// let c = 0;
// let b = 0;
// while(a > 0){
//     c = c + (a % 10);
//     b = a % 10;
//     a = (a -b) / 10;
// }
// console.log(c);


// let a = 372677;
// let c = 0;
// let b = 0;
// while(a > 0){
//     c = c + a % 10;
//     b = a % 10;
//     a = (a - b) / 10;
//     b = 0;
// }
// console.log(c);



// var isBalanced = function(node){
//     if(root === null) return true;

//     return checkHeight(root)!== false;
// }

// var checkHeight = function(node){
//     if(node === null) return 0
//     let left = checkHeight(node.left);
//     let right = checkHeight(node.right);

//     if(left === false || right === false || Math.abs(left - right) > 1){
//         return false;
//     }

//     return Math.max(left, right) + 1;
// }


// import {default as Student, sayHi} from './app.js'

// let student1 = new Student("Asilbek");

// console.log(student1.learn());
// console.log(sayHi("Adilbek"));



// let a = 5;
// let b = 6;
// c = a + b;

// console.log(c);

// let g = 7;
// let h = 9;

// if(g > h){
//     console.log(g)
// }else{
//     console.log(h);
// }



// let a = 27;
// let b = 28;
// let c = 30;

// if((a > b && a > c) || (c < a && a < b)){
//     console.log(a);
// }else if((b > a && b < c) || (b > c && b < a)){
//     console.log(b)
// }else if ((a < c && c < b) || (b < c && c < a)){
//     console.log(c)
// }


// if(a == b){
//     console.log(" a son va b son teng")
// }else if (b == c){
//     console.log("b son va c son teng")
// }else if (a == c){
//     console.log(" a son va c son teng")
// }else{
//     console.log(c);
// }


// let a = 1;
// let b = -1;
// let c = -11;

// if (( a < b && b < c)){
//     console.log(a);
// }else if ((b < a && a < c)){
//     console.log(b);
// }else{
//     console.log(c);
// };
// sonlarning kichigini topish

// har qanday sonni yig'indisini topib beradi:




// dictiniory masalalar yechimi ///////


// let mapUzbEng = new Map();

// mapUzbEng.set("olma", "mayiz");
// mapUzbEng.set("apple", "ansir");
// mapUzbEng.set("nok", "hurmo");
// mapUzbEng.set("banan", "gilos");
// mapUzbEng.set("tut", "olcha");
// mapUzbEng.set("uzum", "pear");

// console.log(mapUzbEng.get("tut"));
// console.log(mapUzbEng.get("olcha"));
// console.log(mapUzbEng.set("apple", "anjir"));
// console.log(mapUzbEng.get("olcha"));

// console.log(mapUzbEng.size);

// console.log(mapUzbEng.has("nok"));
// console.log(mapUzbEng.has("charry"));

// const iterable = mapUzbEng.keys();


// for (let i = 0; i < mapUzbEng.size; i++){
//     console.log(iterable.next().value)
// }

// console.log(mapUzbEng);

// mapUzbEng.forEach((value, key) => {
//   console.log(key + "ning ingisizchasi " + value)
// });


// mapUzbEng.clear();
// console.log(mapUzbEng);


// mapdan foydalanish misollarda;/////////////////////////////////



// var numIdenticalPairs = function(nums){
//     let map = new Map();
//     let result = 0;
//     for ( i = 0; i < nums.length; i++){
//         if (map.has(nums [i] )){
//             map.set(nums [i], map.get(nums[i]) +1);
//         }else{
//             map.set(nums[i], 1)
//         }
//     }
//     map.forEach((value, key) => {
//         result += value *(value - 1)/2;
//     });
//     return result;

// };

// console.log(numIdenticalPairs([1,2,3,1,1,3,]));
// console.log(numIdenticalPairs([1,1,1,1,4,1,1,1]));


// map missollar end

// 3 ta son yig'indisini chiqarish

// let a = 286;
// let b = (a % 10);
// let c = ((a - (a - (a % 100))) - b) / 10;
// let n = (a - (a % 100)) / 100;

// console.log(n+b+c);


// let a = 298;
// let  b = 0
// c = 0
// sum = 0
// let sonlar = [];
// while(a > 0){
//     b = b + a % 10;
//     c = a % 10;
//     sonlar.push(c)
//     a = (a - c) / 10;
//     c = 0  ;   
// }
// sonlar.sort()
// if ( sonlar.length >= 3 ){
//     if (sonlar.length / 2 == 0){
//         console.log(sonlar[(sonlar.length) / 2])
//         sum = ((sonlar.length) / 2) + 1 
//         console.log(sonlar[sum])
//     }
//     if ( sonlar.length / 2 != 0){
//         console.log(sonlar[(sonlar.length + 1) / 2])
//     }

// }


// let a = 10;

// console.log(a++)
// console.log(a)
// console.log(a--)
// console.log(a)
// let b = 10;
// b= 15;
// console.log(b=30);
// console.log(++b);

// 5 savol

// const fruits = [2, 1, 3,99,22,11];
// fruits.sort();
// console.log(fruits);
// const numbers = [25,90 ,21,1];
// console.log(Math.min.apply(null,numbers));