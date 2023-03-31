// let array = [2, 4, 0, 12, 3, 11];

// function processArray(arr) {
//   while (arr.length >= 2) {
//     // !! Arraydagi eng katta 2 ta sonni topish
//     let sortedArr = [...arr].sort((a, b) => b - a);
//     let max1 = sortedArr[0];
//     let max2 = sortedArr[1];

//     // !! Ularning ayirmasini hisoblash
//     let getminus = Math.abs(max1 - max2);

//     // !! Eng katta 2 ta sonni arraydan olib tashlash
//     arr = arr.filter((element) => element !== max1 && element !== max2);

//     // !! Ayirmasini arrayga qo'shish
//     if (getminus !== 0) {
//       arr.push(getminus);
//     }
//     console.log(arr);
//   }
// }
// processArray(array);
