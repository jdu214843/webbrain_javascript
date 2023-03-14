// ?? NUMBERS

// katta raqamlarni yaxshi tushinib olish uchun _ ko'rinishida
// qulay qilib yozish yaxshi. misol 100_000_000 ko'rinishida.

// float raqamlar kasr qismi mavjud raqamlar
// katta raqamlari qisqa qilib ifodalash uchun 
// !! e deb yozamiz bu e nollar soni nechta ekanini ifodalaydi.
//  misol 1e7 ya'ni 1 dan so'ng 7 ta nol bor degani.
// console.log(1e700)  // bu raqamdan keyin 7 dan so'ng 00 yozsangiz infinity ko'rinishga olib keladi./

// pastdagi misolda bo'lish bo'lgan davomli kasrga tushib qolsa.
// oxirgi qismida yaxlitlab yuboradi va raqam teng bo'lmay qoladi.

// console.log(0.1 + 0.2 === 0.3)// bu false
// console.log(.1 + .2) // bu davomi kasr.
// !! buni oldini olish uchun funksiyalar bor

// masalan
// console.log(Number)
// toFixed - bu kasr qismidan boshlab nechta raqam qo'shib chiqarib berish vazifasini bajaradi
// masalan - bu yaxlitlab ham yuboradi, va bu avto tarizda numberni stringga o'tkazi yuboradi
// let num = 0.1 + 0.2
// agar variable bn kelsa number shartmas
// bunday holatda + ishorasidan foydalansa bo'ladi. stringni numberga o'ykazadi
// console.log(Number(0.1 + 0.2).toFixed(2))// bunda 0.30 chiqadi

// float bn numberni farqi - number birinchi ko'rgan raqamni oladi undan keyin raqam bo'lmagan bironta belgi ko'rsa NaN beradi.
// float esa raqamgacha bo'lgan qismini olib qolganini tashab yuboradi.
// bu NaN bo'ladi
// let num = "1.3 + 2.3"
// console.log(Number(num))
// console.log(parseFloat(num))

// eval - string ichida arifmetik amal bajarilishi uchun
// eval metodi/masalan
// console.log(Number(eval(num))) // bu avto tarizda numberga o'tkazib oladi

// !! ###############################

// agar 
// console.log(+'1_000' + 1)// agar belgi aralashib qolsa NaN beradi.
// console.log(+'1000' + 1)// bu holatda ishlaydi.

// let num = 7;
// console.log(num.toString(2))

// binary raqamlar - bu 2 lik sanoq sistemasidir. 

// let num = 5;
// console.log(num.toString(2))
// console.log(parseInt("101" , 2)) // bu binarydan distemelga o'tkazib beradi.
// qaysi bace dan conver qilsak o'shanda parse qilish kerak/
// base deganda - 2 lik 9 lik 16 lik sanoq sistemasidir.

// console.log(isNaN(+"1_000"))// isnan raqamligini tekshirib beradi.
// console.log(isNaN(+"1000"))

// !! Object.is 2 ta stringni bir biriga taqqoslab beradi.

// let res = Object.is("webs" , "web")
// console.log(res);


// let num = 232;
// let num1 = 242;
// console.log(num1.toPrecision(3))
// console.log(num.toPrecision(4)) // raqamni nechta son borligini ifodalaganda ishlatiladi.


// !! Math - bu javascriptda amallarni bajarishda yordam beradigan qo'shimcha metod
// bu kutubxonda emas // bu build in funstiyasidir

// console.log(Math.abs(-10)) // bu doim raqamni mustbatni chiqaradi.
// console.log(Math.floor(-10.999)) // kasr qismini pastga qarab yahlitlaydi
// console.log(Math.ceil(1.2)) // kasr qismini yuqoriga qarab yahlitlaydi
// console.log(Math.round(2.5)) // qiymatni yahlitlaydi. bu kasr qismini 5 yoki undan yuqoriligiga nisbatdan yahlitlaydi.
// console.log(Math.trunc(-10.99)) // bu doim kasr qismi nima bo'lishidan qatiy nazar o'chirib yuboradi.floor esa butun qismiga nisbatada kasr qismini pastga qarab yahlitlaydi
// console.log(Math.trunc(Math.random() *100)) // bu sonlarni random qilib tasodifiy chiqaradi
// console.log(Math.min(1,2 ,0, 45)) // bu eng kichikini topadi
// console.log(Math.max(...[1,2 ,0, 45])) // sonlarni eng kattasini topadi
// console.log(Math.pow(4, 2)) // bu sonlarni darajaga ko'taradi.
// console.log(Math.sqrt(9))// bu sonlarni ildiz ositdan chiqaradi
// console.log(Math.cbrt(9))//
// console.log(Math.sqrt(9))// 
// console.log(Math.sqrt(9))//

function randomIntiger(min = 1, max = 50) {
    return Math.trunc(Math.random() * (max - min));
  }
console.log(randomIntiger())

// !! Homeworkclear

// let num = [1,2,5,23,45,8,4];

