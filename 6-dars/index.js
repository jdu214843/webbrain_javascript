

// !! 6-dars Objects

// object nima: key va valuedan tashkil topgan hisoblanadi.
// ?? object ko'p ma'lumotlarni o'zida saqlab turadi
// masalan inson haqida ma'lumot: yoshi, qayerdanligi, ismi, familyasi va h.k.

// let newObj1 = {} // hozirda class constractorlar ishlatmaydi. sababi ularning o'rnini function 
// function uni o'rnini bosadi.
// let newObj2 = new Object2()

// let description = {
//     name : "asilbek",
//     familya : "Boysoatov",
    // qayerdan : "Surxondaryo",
    // name : "javohir",
    // yoshi : 20,
    // "full name" : "Boysoatov Asilbek",
    // 0: 34856783
// }
// Object.freeze(description) // bunda yangilasa bo'lmaydi o'chirib bo'lmaydi , qo'shib ham bo'lmaydi
// Object.seal(description) //bu bor ma'lumotni yangilasak bo'ladi.qo'shsa va o'chirsa bo'lmaydi.
// delete description.name;
// description.where = 2023

// console.log(description)



//chaqirish 2 ta usuli . va []
// ?? bu usul dynamic usul deyiladi. 

// console.log(description.familya)
// console.log(description["full name"]) // agar keylarda bo'shliq bo'ladigan bo'lsa to'rtburchak qavusda chaqiriladi
// va bo'shliqli key yaratishda uni "" orasiga yozish lozim.
// keyslarda raqam yozish mumkin . raqam keyslarni [] bu holatda chaqirish kerak bo'ladi.
// console.log(description["name"]);
// let name = "familya"
// console.log(description[name]);

// const dec1 = {
//     name : "asilbek",
//     familya : "Boysoatov",
    // qayerdan : "Surxondaryo",
    // name : "javohir",
    // yoshi : 20,
    // "full name" : "Boysoatov Asilbek",
    // 0: 34856783
// }
// const dec2 = structuredClone(dec1);// bu boshqa objectdagi ma'umotlarni copy qilish uchun.

// console.log(dec2)
// dec1.name = "aisle"

// let description = {
//     name : "asilbek",
//     familya : "Boysoatov",
//     qayerdan : "Surxondaryo",
//     yoshi : 20,
//     "full name" :  "Boysoatov Asilbek",
//     0: 34856783
// }

// for(let i in description){
//     console.log(i)
// }
// Object.freeze(description);

// description.name = "Saidamin";
// delete description.name
// description.founded = 2022
// console.log(description)


