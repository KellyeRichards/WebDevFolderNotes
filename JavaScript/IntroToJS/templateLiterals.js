// TEMPLATE LITERALS
// New way to create or concatenate strings

// Example of a Template Literal
// Template Literals use back-ticks (``) instead of quotes ("" or '')
const example = `This is a Template Literal`;
console.log(example);

// Template Literals recognize line breaks (\n)
// Example of a line break in a regular string
const linesOne = "First Line\nSecond Line";
console.log(linesOne);

// const badExample = "First Line
// Second Line";
// console.log(badExample);

// Example of a line break in a Template Literal
const linesTwo = `1st Line
2nd Line`;
console.log(linesTwo);

// Concatenation with Template Literals
// Example of Concatenation with regular strings
const myName = "Austin" + " " + "Benedict";
console.log(myName);

// Example of Expression Interpolation (AKA String Concatenation with Template Literals)
// Uses ${} instead of a plus sign
let fullName = `Austin${` `}Benedict`;
// let fullName = `Austin` + ` ` + `Benedict`;
console.log(fullName);

const middle = "Stone";
fullName = `Austin ${middle} Benedict`;
console.log(fullName);

// Adding numbers into Template Literals
// Example of adding a number into a regular string
let nameAge1 = "My name is Austin and I am " + (2022-1994) + " years old";
console.log(nameAge1);

// Example of adding a number into a Template Literal
let nameAge2 = `My name is Austin and I am ${2022-1994} years old`;
console.log(nameAge2);

let currentYear = 2022;
const birthYear = 1994;
let nameAge3 = `My name is Austin and I am ${currentYear-birthYear} years old`;
console.log(nameAge3);