/* Check if the value is classified as boolean primitive. Return true or false. Boolean primitives are true and false. */

function booWho(bool) {
  return bool === true || bool === false;
}
console.log(booWho(null));
