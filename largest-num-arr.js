/* Return an array consisting of the largest number from an array.
  Remember, you can iterate through an array with a simple loop, and access each member with array syntax arr[i]*/

function largestOfFour(arr) {
  let newArr = [];
  for (let i of arr) {
    newArr.push(Math.max(...i));
  }
  return newArr;
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
