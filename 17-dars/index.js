// old va and global object
// JavaScript dasturlash tilida, var so'zi o'zgaruvchilar yaratish uchun ishlatiladi.
// var bilan yaratilgan o'zgaruvchilar lokal yoki global bo'lishi mumkin.
// Quyidagi misol, var bilan yaratilgan o'zgaruvchilar va ularning muammo darajalari bilan tanishishingiz mumkin:
function testVar() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // 2
  }
  console.log(x); // 2
}

testVar();

//Global obyekt, JavaScript dasturlash tilida, o'zgaruvchilar va funksiyalarni saqlash uchun yaratilgan eng katta obyekt hisoblanadi.
// Quyidagi misol, global obyekt va undagi o'zgaruvchilarni yaratish va ularga murojat qilish usulini ko'rsatadi:
var x = 1; // global o'zgaruvchi

function testGlobal() {
  y = 2; // global o'zgaruvchi
  console.log(x); // 1
  console.log(y); // 2
}

testGlobal();

console.log(window.x); // 1
console.log(window.y); // 2
