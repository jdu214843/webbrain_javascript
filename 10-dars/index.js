// !! Arrays


// 1-masala

// let arr = ['background-color', 'list-style-image',"-webkit-transition"];

// const camelCase = (arr) => {
//   let str = arr.join(' ');
//   let res = ''

//   for(index in str) {
//     if(str[index - 1] === '-') {
//        res += str[index].toUpperCase();
//     } else {
//         res += str[index]
//     }
//   }
//   return res.replace(/-/g, '').split(' ')

// }
// console.log(camelCase(arr));





// 2-masala

// let array = ["webbrain","academy"]
// function Arra(array){
//     let str = array.join('');
//     let count = {}

//     for(value of str) {
//        if(count[value]) {
//         count[value]++;
//        } else { 
//         count[value] = 1;
//        }
//     }
//     return count ;
// }
// let a = Arra(array);
// console.log(a);


// // 3-masala

//   function sumAr(){
//     let Ar=[1,2,3];
//     let sum=0;
//     for( i = 0; i < Ar.length; i++){
//         sum = sum + Ar[i];
//     }
//     return sum;
//   }
//   console.log(sumAr())

// 4-masala

// let ar1 = [1,2,3,5]
//  let ar2 = [1,2,3,5]
 
// function Arr(ar1,ar2){

//     let a = ar1.toString();
//     let b = ar2.toString();
//     return a === b;
// }
// console.log(Arr(ar1,ar2));

// console.log(eval([1,2,3,4].join('+')))

// 5 - masala

let users = [
  {id: 1, year: 1998, engine: 1, name: "Tico"},
  {id: 2, year: 2005, engine: 1.2, name: "Matiz"},
  {id: 3, year: 2010, engine: 1.6, name: "Gentra"},
  {id: 4, year: 2010, engine: 1.5, name: "Cobalt"},
  {id: 5, year: 2012, engine: 2, name: "Malibu"},
  {id: 6, year: 2000, engine: 1.2, name: "Damas"},
  {id: 7, year: 2018, engine: 2.4, name: "Tracker"},
];



let result = users.map((v)=>{
  if(v.year < 2000){
    console.log(Object.assign(v,{status:"eski"}))
  }else if(v.year > 2000 && v.year <= 2010){
    console.log(Object.assign(v,{status:"o'rta"}))
  }else{
    console.log(Object.assign(v,{status:"yangi"}))
  }

})
console.log(users)


// console.log(arrOfObj);
// console.log(result);

// const newStatus = users.map(v => {
//   return v.value > 2000 ? {...v, status: "eski"} : v 
// })
// console.log(newStatus)
// console.log(users)
// let res = users.filter((value,index) => {
//    return value.year < 2000
// })
// console.log(res)

// -------------------------------

// let resSort = users.sort((a,b) => {
//     return a.engine - b.engine
// })

// let resSort = users.sort((a,b) => {
//   return a.year - b.year
// })
// console.log(resSort)

// const Sort = ()=>{
//   let resSort = users.sort((a,b) => a.name.localeCompare(b.name))
//   console.log(resSort)
// }
// Sort()
// console.log(resSort)





// ?? 2000 yildan oldinga mashinalar ro'yhatini chigaring
// ?? 2010 yildan keyingi chiggan mashinalar ro'yhatini chigaring
// ?? 2010 yildan keyingi chiqgan mashinalar ro'yhatini chiqaring
// ?? engine kuchiga qarab malumotlarni sartiforfka qiling
// ?? chigarilgan yiliga garab malumotlarni sartiforfka qiling
// ?? isimlarini Albhabet tarzda sartiforfka qiling
// !!2000 yildan oldin chiggan mashinalarga status: "eski" malumot go' shing
// !!2000~2010 yilda chiggan mashinalarga status: "o'rta" malumot qo' shing
// !!2010~2022 yildan oldin chiggan mashinalarga status: "yangi" malumot


