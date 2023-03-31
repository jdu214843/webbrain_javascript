// !! Arrays 2 qism

// Advanced arrays methods

// let num  = [1,3,4,5,6,0];
// let str = ['orange', 'apple', 'banana', "kivi"];

let obj = [
  { id: 1, year: 2003, name: "asilbek" },
  { id: 2, year: 2002, name: "jasur" },
  { id: 3, year: 1995, name: "javohir" },
  { id: 4, year: 2002, name: "sardor" },
  { id: 5, year: 2003, name: "saidasror" },
  { id: 6, year: 2002, name: "Muhammadsiddiq" },
  { id: 7, year: 2002, name: "Muhammadsodiq" },
  { id: 8, year: 2002, name: "Muhammadsaid" },
];

// let res = obj.filter((value) => value.id >= 5);
// let res = obj.filter(function (value, index) {
//   return value.length <= 5;
// });
// // let res = num.filter((value, index) => {
// //   return value < 5;
// // });
// console.log(res);

// !! ------

// !! object bo'yicha masala

// Object ichidagi Boolean tipidagi malumotlarni chiqaring keylari bilan birga?

// let obj3 = {
//   id: 1,
//   name: "webbrain",
//   offline: true,
//   online: true,
//   individual: false,
// };

// const getBoolean = (obj) => {
//   let res = ``;
//   for (key in obj) {
//     if (typeof obj[key] === "boolean") res += ` ${key} : ${obj[key]}`;
//   }
//   return res;
// };
// console.log(getBoolean(obj3));

// 2 - Masala:
// Ojbect ichidagi agelar yigindisini toping ?

// let obj2 = {
//   title: "Webbrain",
//   age: 2,
//   child: {
//     age: 44,
//     name: "Webbrain",
//     child: {
//       age: 23,
//     },
//   },
// };
// const getAge = (obj2) => {
//   let res = 0;
//   while (obj2) {
//     res += obj2.age;
//     obj2 = obj2.child;
//   }
//   return res;
// };
// console.log(getAge(obj2));

// !! sonlarning o'rta arifmetigini topish

// function test(A, S) {
//   let count = 0;
//   let n = 0;
//   while (n < A.length) {
//     for (let i = n; i <= A.length; i++) {
//       let fragment = A.slice(n, i);
//       console.log(fragment);
//       if (fragment.length) {
//         eval(`(${fragment.join("+")})/${fragment.length}`) === S
//           ? count++
//           : null;
//       }
//     }
//     n++;
//   }
//   return count;
// }
// console.log(test([0, 4, 3, -1], 2));

// !! string masalalar
// !! masala

// let str = "Webbrain Academy";

// const getText = (string)=>{
//     let res = ``
//     let largeText = 0;
//     let lowerText = 0;
//     for(value of string){
//         if(value === value.toUpperCase() && value !== ' '){
//            largeText += value.length
//         }else if (value === value.toLowerCase() && value !== ' '){
//             lowerText += value.length
//         }
//     }
//     console.log(res = `Katta harflar soni: ${largeText} ta: kichik harflar soni ${lowerText} ta:`)
// }
// getText(str)

// !! 2 - Masala:
// Berilgan stringdagi @ chani a harfiga o'zgartiring ?
// let str1 = "webbr@in ac@demy"

// const getIcon = (text)=>{
//     let res = ''
//     for(value of text){
//         if(value === "@") {value = 'a'}
//         else res += value;
//     }
//     return res
// }

// console.log(getIcon(str1))

// !! 3 - Masala:
// Dublicate bolgan harflarni ochiring ?

// let str3 = "weeebbbbbbbrrrrraaaiiiiinn";

// const getDoubleCate = (str) => {
//   let res = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i + 1] === str[i]);
//     else res += str[i];
//   }

//   return res;
// };
// console.log(getDoubleCate(str3));

// !! 4 -masala
// string ichidagi raqamlarni aniqlang

// let num = "we2bbrain44 aca3demy";
// const getNum = (str) => {
//   let res = "";
//   for (i of str) {
//     if (Number(i)) {
//       res += i;
//     }
//   }
//   return +res;
// };
// console.log(getNum(num));

// !! 5 - Masala:
// String berilgan stringning har bir belgisini 2marta takrorlang ?

// let str5 = "Webbrain";

// const getDoubleStr = (str) => {
//   let res = "";
//   for (value of str) {
//     res += value + value;
//   }

//   return res;
// };
// console.log(getDoubleStr(str5));

// !! 6 - masala:
// Berilgan soz palendrom yoki palendrom emasligini aniqlang ?
// let str6 = "kiyik";

// const getPolendrom = (str) => {
//   let polindrom = str.split("").reverse().join();
//   return polindrom === str;
// };
// console.log(getPolendrom(str6));

// !! 7 - masala
// Berilgan stringdagi harflar soni bir biriga teng yoki teng emasligini aniqlang. Tartib muhim emas.

// let str7a = "web";
// let str7b = "ewb";

// const getAmount = (str1, str2) => {
//   let a = str1
//     .split("")
//     .sort((a, b) => a.localeCompare(b))
//     .join("");

//   let b = str2
//     .split("")
//     .sort((a, b) => a.localeCompare(b))
//     .join("");

//   return a === b;
// };
// console.log(getAmount(str7a, str7b));

// !! 8 - Masala:
// Stringda qatnashgan belgilar sanogini toping ?

// let str8 = "webbrain academy";

// const getCharNum = (str) => {
//   let res = {};
//   for (value of str) {
//     if (res[value]) res[value]++;
//     else res[value] = 1;
//   }
//   return res;
// };

// console.log(getCharNum(str8));

// !! 9 - Masala:
// Stringni ziplang?

// let str9 = "webbraaain Accaaademyyyy";

// const strZip = (str) => {
//   let res = "";
//   let count = 1;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) count++;
//     else {
//       res += str[i];
//       if (count > 1) {
//         res += count;
//         console.log(res);
//         count = 1;
//       }
//     }
//   }
//   return res;
// };
// console.log(strZip(str9));

// !! array masalalar

// !! Binary masala

let res = 5766;
let count = 0;
let r = 0;
let isStartCount = false;

const getBinary = (res1) => {
  s = res1.toString(2);
  console.log(+s);
  for (char of s) {
    if (char == "1") {
      r = count > r ? count : r;
      count = 0;
      isStartCount = true;
    } else if (isStartCount) {
      count++;
    }
  }
  console.log(`nol: ${r}`);
};
getBinary(res);

// ----------------------- Array Boyicha Masalalar:

// 1 - Masala:
//Array ichidagi doublikat sonlarni chiqarib yuboring? new Setsiz!

// let arr1 = [2, 2, 2, 2, 4, 4, 4, 5, 6, 7];

// const getDoublicateArr = (arr) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) res.push(arr[i]);
//   }
//   return res;
// };
// console.log(getDoublicateArr(arr1));

// !! 2 - Masala:
// Arraylarni bir-biriga taqqoslang?

// let arr2 = [1, 2, 3];
// let arr3 = [1, 2, 3];

// const getComporasionArr = (arr1, arr2) => {
//   let oneArr = arr1.join("");
//   let twoArr = arr2.join("");

//   return oneArr === twoArr;
// };
// console.log(getComporasionArr(arr2, arr3));
// 3 - Masala:
// Array ichidagi ikki honali sonlarni chiqaring ?

// let arr4 = [1, 65, 4, 67, 567];

// const getTwoRoom = (arr) => {
//   let res = [];
//   let strArr = arr.join(" ").split(" ");

//   for (value of strArr) {
//     if (value.length === 2) res.push(+value);
//   }
//   return res;
// };
// console.log(getTwoRoom(arr4));

// -------------------------- Advenced Homeworks:
// [2,3,2,4,5,2,3]
// [2,3,2,1,2,3]
// [2,2,1,2]
// [1,2]
// [1]
// Berilgan Array shu korinishda chiqishi kerak ?

let arr5 = [2, 3, 2, 4, 5, 2, 3];

const arrTwoMax = (arr) => {
  for (value of arr) {
    let sortArr = arr.sort((a, b) => a - b);
    let max = sortArr.pop() - sortArr.pop();

    sortArr.push(max);

    let total = sortArr.filter((value) => value);
    console.log(total);
  }
};
// arrTwoMax(arr5);
