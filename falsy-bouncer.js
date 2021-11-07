/* Remove all values from an array. Falsy values in Javascript are false, null,"", undefined, and NaN.
  Hint: Try converting each value to a boolean.*/

function bouncer(arr) {
  let newArray = [];
  for (let val of arr) {
    if (Boolean(val)) {
      newArray.push(val);
    }
  }
  return newArray;
}
console.log(bouncer([7, "ate", "", false, 9]));
