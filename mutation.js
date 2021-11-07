/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
  For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
  The arguments ["hello", "hey"] should return false because the string hello does not contain y.
  Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.*/

function mutation(arr) {
  arr = arr.map((word) => word.toLowerCase());

  for (let char of arr[1]) {
    if (!arr[0].includes(char)) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
