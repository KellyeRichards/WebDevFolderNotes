// TEMPLATE LITERALS REVIEW
// New way to create or concatenate strings

// Example of a Template Literal
const example1 = `This is a Template Literal because of backticks, but its data/primitive type is still a string`;
const example2 = "This is a string";
const example3 = 'This is also a string';

// Template Literals recognize line breaks
const linesOne = `Where are you?
And I'm so sorrrrrrry`;
console.log(linesOne);

// Regular strings require \n for a line break
// const thisIsBad = "So many
// Bright lights to cast a shadow";
// console.log(thisIsBad);

const thisIsGood = "Don't wanna be an\nAmerican idioT";
console.log(thisIsGood);

// Example of Expression Interpolation (AKA String Concatenation with Template Literals)
// Uses ${} instead of plus sign
let fullName = `Austin${` `}Benedict`;
// let fullName = "Austin" + " " + "Benedict";
console.log(fullName);

const middle = 'Stone';
fullName = `Austin ${middle} Benedict`;
console.log(fullName);

// Adding numbers to Template Literals
let nameAge1 = `My name is Austin and I am ${2022-1994} years old`;
console.log(nameAge1);

let currentYear = 2022;
const birthYear = 1994;
let nameAge2 = `My name is Austin and I am ${currentYear-birthYear} years old`;
console.log(nameAge2);