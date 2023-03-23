// !! String Homework
// masala
// function Count(num){
//     let binary = num.toString(2)
//     let a = 0
//     let b = 0
//     for(let i = 0; i<binary.length; i++){
//         if((binary[i] - 0)===1){
//             a++;
//         }else{
//             b++;
//         }
//     }
//     return `${a} ta raqam ${b} ta nol`
// }
// console.log(Count(50));


// ?? 1 -masala



// let str1 = "webbrain academy"
// let str2 = "feafa"
// let res = str1.localeCompare(str2)

//     if(res < 0){
//         console.log("mutlaqo teng emas")
//     }else if(res > 0){
//         console.log("qisman o'xshash")
//     }else{
//         console.log("ikkisi teng")
//     }



// !! 2-masala

// let str = "webbrain"

// getCount = (a) =>{
//     console.log(a.slice());
// }
// getCount(str)

// let str = "webbrain"
// function getCount(a){
//     console.log(a.split(""));
    
// }
// getCount(str)

// ?? 3-masala

// let str = "webbrain"

// function turncate(cat,n){
//     console.log(cat.slice(0, n));
// }
// turncate(str,5)

// ?? 4-masala

// function getData(str){
//     let res = {num:0, letter: 0, char: 0};
//     for(i of str){
//         if(isFinite(i)){
//             res.num++
//         }else if(i.toLowerCase() !== i.toUpperCase()){
//             res.letter++
//         }else{
//             res.char++
//         }
//     }
//     console.log(res)
// }

// getData("webbr@#$%n2022")

// function getUpperCase(str){
//     res = "";
//     for(i in str){
//         res += str[i - 1] === " " || str[i - 1] === undefined ? 
//         str[i].toUpperCase(): str[i]
//     }
//     console.log(res)
// }
// getUpperCase("webbrain academy")

// 1 - masala
// console.log(eval([1,2,3,4].join("+")))

// 2-masala

// const paragraph = (str) => {
//         let res = ""
//         let count = 1
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] === str[i + 1]) {
//                 count++
//             } else {
//                 res += str[i]
//                 if (count > 1) {
//                     res += count
//                     count = 1
//                 }
//             }
//         }
//         console.log(res)
//     }
// paragraph("webbbrainnnnnn")

// let res = "";
// function getDubl(str){
//     for(i of str){
//         res += i
//      }
//     console.log(res)
// }

// getDubl("webbrain")


// let res = "10110110010111110"
// let count = 0;
// let s = 0;
// for(i of res){
//     if(i == 1){
//         count++
//         count > s && (s = count)
//     }else{
//         count = 0
//     }
// }
// console.log(s)
