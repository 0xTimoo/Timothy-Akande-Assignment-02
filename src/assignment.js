// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/* Challenge - 1 */

function sumOfNumbers(arrayOfNumbers) {
    let result = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        result += arrayOfNumbers[i]
    }

    return result;
    //return arrayOfNumbers.length;
}
//sumOfNumbers(arrayOfNumbers);
assignment.sumOfNumbers = sumOfNumbers;

/* Challenge - 2 */

function countEvenNumbers(arrayOfNumbers) {
    let count = 0;
  
    arrayOfNumbers.forEach(function(arrayIndex) {

      if (arrayIndex % 2 === 0) {
        count += 1
      }
    });
    return count;
}

//countEvenNumbers(arrayOfNumbers);
assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

