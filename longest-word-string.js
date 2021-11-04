function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLetters = 0;
  for (let word of words) {
    if (word.length > maxLetters) {
      maxLetters = word.length;
    }
  }
  return maxLetters;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
