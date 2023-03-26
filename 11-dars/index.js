// !! Arrays 2 qism

// Advanced arrays methods

// let num  = [1,3,4,5,6,0];
// let str = ['orange', 'apple', 'banana', "kivi"];

// let obj = [
//     {id: 1, year : 2003, name:"asilbek"},
//     {id: 2, year : 2002, name:"jasur"},
//     {id: 3, year : 1995, name:"javohir"},
//     {id: 4, year : 2002, name:"sardor"},
//     {id: 5, year : 2003, name:"saidasror"},
//     {id: 6, year : 2002, name:"Muhammadsiddiq"},
//     {id: 7, year : 2002, name:"Muhammadsodiq"},
//     {id: 8, year : 2002, name:"Muhammadsaid"},
// ];

// let res  = obj.filter((value)=>value.id >= 5)
// let res = str.filter(function(value, index){
//     return value.length <= 5
// });
// let res = num.filter((value,index)=>{
//     return  value < 5
// });
// console.log(res)

// !! ------

let str = "Webbrain Academy";

const getIcon = (string)=>{
    let res = ``
    let largeText = 0;
    let lowerText = 0;
    for(value of string){
        // console.log(value)
        if(value === value.toUpperCase() && value !== ' '){
           largeText += value.length
        }else if (value === value.toLowerCase() && value !== ' '){
            lowerText += value.length
        }
    }
    console.log(res = `Katta harflar soni: ${largeText} ta: kichik harflar soni ${lowerText} ta:`)
}
getIcon(str)


