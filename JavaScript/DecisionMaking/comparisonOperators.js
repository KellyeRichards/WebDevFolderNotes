// COMPARISON OPERATORS
// Comparison Operators are used to return a True or False Boolean values when comparing two values

// Greater Than (Ex: >)
console.log(3 > 1); //true
console.log(0.9 > 1); //false

// Less Than (Ex: <)
console.log(3 < 1); //false
console.log(0.9 < 1); //true

// Greater Than or Equal to (Ex: >=)
console.log(3 >= 3); //true
console.log(3 >= 2); //true
console.log(3 >= 5); //false

// Less Than or Equal to (Ex: <=)
console.log(3 <= 3); //true
console.log(3 <= 2); //false
console.log(3 <= 5); //true

// EQUAL COMPARISONS
// Double Equals (Ex: ==)
// Checks if the characters (AKA Face Value) of the two values are the same (NOTE: Does NOT include data type when comparing two values)
// For a False value to be returned, it must be different face/character values
console.log(3 == 2); //false
console.log(3 == 3); // true
console.log(3 == "3"); //true
console.log("Hello" == "Hello"); //true
console.log("Hello" == "Hi"); //false
console.log("Hello" == "hello"); //false (Casing must be the same)

let hello = "Hi";
console.log(hello == "Hi"); //true

// Triple Equals (AKA Strict Equality) (Ex: ===)
// Checks if the characters (AKA Face value) of the two values are the same. Also, it compares the data/primitive types to compare if they are the same as well.
// For a False value to be returned they must either be different face/character values or different data types
console.log(3 === 3); //true
console.log(3 === "3"); //false
console.log("Hello" === `Hello`); //true (Both are String data types)

// NOT EQUAL COMPARISONS
// Not Equal (Ex: !=)
// ! is called a Bang in JavaScript
// Checks to see if characters (AKA Face value of two values are NOT equal to each other)
// For a True value to be returned, must be different face/character values
console.log(3 != 3); //false
console.log(3 != 2); //true
console.log("Hello" != "hello"); //true (Casing must be the same for this to return false)
console.log(3 != "3"); //false

// Strict Not Equal (Ex: !==)
// Checks to see if values are NOT equal to each other. Also, checks data types as well as characters (AKA Face values)
// For a True value to be returned, must be different face/character values or different data types

console.log(3 !== 3); //false
console.log(3 !== "3"); //true
console.log("Hello" !== `Hello`); //false

// All 3 below are the same, all are strings
console.log(`Hello`);
console.log("Hello");
console.log('Hello');
