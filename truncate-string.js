/* Truncate a string ( first argument) if it is longer than the given maximum string length (second argument). 
  Return the truncated string  with a ... ending.*/

let myString = "A-tisket a-tasket A green and yellow basket";

function truncateString(str, num) {
  let newStr = str.substr(0, num);
  if (str.length > num) {
    return newStr.concat("...");
  }
  return newStr;
}
console.log(
  truncateString(myString, "A-tisket a-tasket A green and yellow basket".length)
);
