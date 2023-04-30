// ?? 5-dars Do while and while | function

// !! uyga vazifa oxirida

// let a = 3;

// while(a){
//     console.log(a)
//     a--;
// }

// do{ // !! do whileda birinchi do bajariladi keyin while shartiniga o'tadi.
//     console.log(a);
//     a--;
// }while(a == 0){

// }

// ?? Function

// !!

// let id = 1;
// console.log(id)
// function getAvr(){
//     console.log('Asilbek, Welcome to Webbrain');
// }

// functionlarda funcsiyani tepada chaqirsa ham bo'ladi agar uni ham tepada
//  ham pasta chaqirilsa ikkimarta natija chiqadi .
// !! variable ga biritirilgan functiolar function expretion deyiladi.

// masalan

// getAvr()

const getAvr = function () {
  console.log("Asilbek, Welcome to Webbrain");
};
getAvr();

// ?? agar functionni expretion ko'rinishida yozib va funsiyani tepada chaqirilsa
// ?? error beradi.agar pasda chaqirilsa ishlaydi

// !! hoisting degani variable mi yoki function mi doim tepaga olib chiqib declear qilish deyiladi.

// callback function nima?

// functionlarni ichida parametr sifatida boshqa bir function ulash.

// Arrow function
// const getAvr =()=>{}

// defeult parametres if ||

// const telegram = (name, surname) => {
// if(surname) console.log(name, surname);
// else console.log(name)
//  ||, ??
// surname ? console.log(name, surname): console.log(name)
// console.log(name, surname || "")
// }

// telegram("", "asilbek");
// !! hoxlagan ma'lumotni return qilsak bo'ladi
// ?? nima return qilsh kerak. shunaqa functionlar borki ularni boshqa bir maqsadda ishlatish mumkin.
// ?? ya'na bir xil functionlar ham ular faqat bir xil functiya bajaradi bizga faqat natijasi kerak bo'ladi.
// ?? return qilishdan maqsad. agar return qilsak bu function ustida boshqa bir amal bajarsa bo'ladi.
// ?? agar return qilmasak: agar return qilmasak undefiend natija chiqadi.s

// const gpa = (a=0,b=0,c=0,d=0) => {
//     let res = (a + b + c +d) / 4
//     console.log(res)
//     return "okey"
// }
// const gpa = "() => {}"
// console.log(gpa(4, 3, 4, 2)); // 3.25
// console.log(gpa(4.5, 3.2, 4, 2.1)); // 3.4
// console.log(gpa(4.5, 4, 5, 3)); // 4.1

// console.log()

// !!
// const getNum = (a) => {
//   console.log(a);
//   let total = 193;
//   console.log((a * 100) / total);
//   return (a * 100) / total;
// };

// console.log(parseInt(getNum(159)));

// const gpa = (a=0,b=0,c=0,d=0) => {
//     let res = (a + b + c +d) / 4
//     return res
// }

// console.log(gpa(5,3,2,3))

// !! clean code nima?

// ?? clean code - bu functionga mos qilib nomlash masalan gpa() bo'lsa buni getGpa deb nomalash clean code bo'ladi.
//  kalit so'zlari
// get , calc , create , check ,
// camel case katta kichik harf bilan yozish:

// ?? vazifalar:

// 1 - masala
// let i = 0
// while(i < 10){
//     i++;
//     console.log(i)
// };

// 2 - masala
// let age = 20
// function checkAge(age){
//     if(age > 18){
//         console.log(true);
//     }else{
//         console.log('Did parents alloq you!')
//     }
// }
// checkAge(age)

// 3 - masala
// let a = 1
// let b = 1
// function min(a,b){
//     if(a < b){
//         console.log(a)

//     }
// else if(a == b){
//     console.log("a va b son teng")
// }
//     else{
//         console.log(b)

//     }
// }
// min(a,b)

// masala
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

// 4-masala

// function pow(a,b){
//     console.log(a ** b)
// }
// pow(1, 5)
// pow(2, 5)
