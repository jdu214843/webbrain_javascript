// let x = 7;
// let y = -3;

// const getDekart = (a, b) => {
//   if (a > 0 && b > 0) {
//     console.log("1-chorak");
//   } else if (a < 0 && b > 0) {
//     console.log("2-chorak");
//   } else if (a < 0 && b < 0) {
//     console.log("3-chorak");
//   } else {
//     console.log("4-chorak");
//   }
// };
// getDekart(x, y);

// let a = 1;
// let b = 4;
// let c = 2;

// const getFunction = (x, y, z) => {
//   if (x + y > z && x + z > y && y + z > x) {
//     console.log("yes");
//   } else {
//     console.log("No");
//   }
// };

// getFunction(a, b, c);

// let x = 12;

// const getFunction = (a) => {
//   if (a <= 0) return -a;
//   if (a > 0 && a < 2) return a * a;
//   if (a >= 2) return 4;
// };

// console.log(getFunction(x));

// let a = 10;

// const getType = (x) => {
//   if (x == 0) return "nol";
//   if (x > 0) {
//     if (x % 2 == 0) {
//       return "musbat juft";
//     } else {
//       return "musbat toq";
//     }
//   } else {
//     if (x % 2 == 0) {
//       return "manfiy juft";
//     } else {
//       return "manfiy toq";
//     }
//   }
// };
// console.log(getType(a));

// let a = 4875;

// const getSon = (x) => {
//   let b;
//   if (x % 2 == 0) {
//     b = " xonali juft son";
//   } else {
//     b = " xonali toq son";
//   }
//   return String(String(x).length).concat(b);
// };
// console.log(getSon(a));

function processArray(arr) {
  while (arr.length >= 2) {
    // Arraydagi eng katta 2 ta sonni topish
    let sortedArr = [...arr].sort((a, b) => b - a);
    let max1 = sortedArr[0];
    let max2 = sortedArr[1];

    // Ularning ayirmasini hisoblash
    let difference = Math.abs(max1 - max2);

    // Eng katta 2 ta sonni arraydan olib tashlash
    arr = arr.filter((element) => element !== max1 && element !== max2);

    // Ayirmasini arrayga qo'shish
    arr.push(difference);
    console.log(arr);
  }

  return arr;
}

let array = [10, 7, 15, 4, 23, 12];
processArray(array);
