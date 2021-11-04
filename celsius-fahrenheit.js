/* The algorithm to convert Celsius to Fahrenheit is the temperature in Celsius times )/5, plus 32.
  Assign the Fahrenheit temperature equivalent to the given Celsius temperature. 
  Use the algorithm mentioned above to help convert the celsius temperature to fahrenheit. */

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(convertToF(30));
