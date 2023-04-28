// !! 4 - dars Switch statement and For Loops

// if --> <> , <= >=, == ===
// switch -> ===
// let data = 'bulut'
// switch(data){
// case 'yomgir':
//         console.log("bugun yomgir");
//         console.log("bugun yomgir");
//     break;

//     case 'bulut':
//         console.log("bugun qor");

//         default: console.log("no data")
// }
// !! case -  data aniq ma'lum bir qiymatga teng bo'lishini kutadi:
// !! case aniq qiymatga teng bo'lishi kerak:

// ?? if dan farqi exicet: aniq ma'lumot qabul qiladi: va condition dek katta yoki kichik qabul qilmaydi:

// ?? Foor Loops

// !! for da 3 ta nuqta bor bular (boshlanish nuqtasi, manzil qayergacha, tugash nuqtasi)

// for( i = 0; i <= 10; i++){
//     console.log(i)
// };

// console.log(c);
// let browser
// switch(browser){
//     case 'Edge':
//         alert("You've got the Edge");
//         break;

//         case 'Chrome':
//         case 'Firefox':
//         case 'Safari':
//         case 'Opera':
//             alert('Okay we support these browsers too');
//             break;
//         default:
//             alert('We hope that this page looks ok!');
// }

// let a = +prompt('a?' , '');

// if(a == 0){
//     alert( 0 )
// }
// if(a == 1){
//     alert( 1 )
// }
// if(a == 2 || a == 3){
//     alert('2,3');
// }

// let a = 35235;
// let res = 0;
// let sum = 0;
// while (a > 0) {
//   sum = sum + (a % 10);
//   res = a % 10;
//   //   console.log(b);

//   a = (a - res) / 10;

//   res = 0;
// }
// console.log(sum);
let result = 0;

const getTotal = function (num) {
  let res;
  if (num > 0) {
    res = num % 10;
    result += res;
    num -= res;
    num /= 10;
    return getTotal(num);
  } else {
    return result;
  }
};
let s = 123145644;
console.log(getTotal(s));

// a = false;
// b = true;
// c = true;

// if(a) {
//     console.log('a');
// } else if(b) { // bajariladi
//     console.log('b1');
// } else if(c) { // bajarilmaydi
//     console.log('c1');
// } else {
//     console.log('nothing');
// }

// if (a) {
//     console.log('a');
// }
// if (b) {// bajariladi
//     console.log('b2');
// }
// if (c) {// bajariladi
//     console.log('c2');
// } else {

// }
