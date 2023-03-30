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
