/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as two dimensional array.*/

// let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// let size = 2;
// let newArr = [];

// newArr.push(arr.splice(0, size));
// console.log(newArr);
// console.log(arr);

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > size - 1) {
    newArr.push(arr.splice(0, size));
  }
  if (arr.length > 0) {
    newArr.push(arr);
  }
  return newArr;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
