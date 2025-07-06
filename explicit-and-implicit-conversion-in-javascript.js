/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/
//Part 1 - Fixing code

let result = Number("5") - 2; //The original syntax worked but this ensures "5" will be treated as a number in the subtraction.
console.log("The result is: " + result);

let isValid = Boolean(null); // Leaving "false" is technically a truthy because the string is not empty and the function runs. By replacing the string with a null value, the function evaluates to false and does not run.
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; //Using Number() on age converts the string to a number and allows for addition rather than concatenation which produced "255" originally
console.log("Total Age: " + totalAge);

//Part 2 - Creating code
//Explicit Type Conversion
let myAge = "25"
let currentYear = 2032
let birthYear = currentYear - Number(myAge)
console.log("If I am " + myAge + " years old and the year is " + String(currentYear) + ", then I was born in " + String(birthYear))

//Implicit Type Conversion
console.log(NaN + "27") //NaN gets implicitly converted to a string and concatenated
//Final result is an output of "NaN27"