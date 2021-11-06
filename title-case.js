/* Return the provided string with the first letter of each word capitalized. 
  Make sure the rest of the word is in lowercase.
  For the purpose of this exercise, you should also capitalize connecting words like the and of.*/

let string = "I'm a little tea pot";

function titleCase(str) {
  let newStr = "";
  for (let word of str.toLowerCase().split(" ")) {
    newStr += word[0].toUpperCase() + word.slice(1) + " ";
  }
  return newStr.trim();
}
console.log(titleCase(string));
