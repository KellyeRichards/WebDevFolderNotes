// STRING METHODS

// Basic Methods
/*
Syntax Example...

String.methodName();
*/

// Trim (Removes empty/white space before the start and after the end of content in a string)
console.log("   Hello   ");
console.log("   Hello   ".trim());

let trim1 = " Hi ";
let trim2 = " Bye ";
console.log(trim1);
console.log(trim2);
console.log(trim1.trim());
console.log(trim2.trim());

// Uppercase and Lowercase (Changes the text to uppercase or lowercase)
const text = "These are words";
console.log(text.toUpperCase()); //THESE ARE WORDS
console.log(text.toLowerCase()); //these are words

// Methods with arguments
/*
Syntax Example...

String.methodName(argument)
*/

// Index Of (Returns the index position)
let letters1 = "abcd";
console.log(letters1.indexOf("b")); // 1

// NOTE: indexOf will always return the first occurrence of the argument
let letters2 = "abac";
console.log(letters2.indexOf("a")); // 0

// If the argument is a string of two or more characters, then the index will be the index where the string argument begins
const fullName = "Austin Benedict";
console.log(fullName.indexOf("Benedict")); // 7

// Replace (Replaces content in a string)
// The first argument is the character(s) being selected. The second argument is the character(s) that is/are replacing what was put in for the first argument.
let hi ="hello";
console.log(hi.replace("h", "j")); //jello
console.log(hi.replace("hello", "Hi there!")); //Hi there!

// Repeat (Repeats the content in a string)
let lesson = "String Methods ";
console.log(lesson.repeat(1)); //String Methods
console.log(lesson.repeat(3)); //String Methods String Methods String Methods

// Slice (Extracts part of a string)
// First number/argument is the starting index. Second number/argument is the ending (NOTE: Goes up to the second index, but does NOT include that index)
let breakTime = "Almost break time!";
console.log(breakTime.slice(0, 12)); // Almost break

// If the second number/argument is NOT included, then the rest of the string will be included in the slice
console.log(breakTime.slice(7)); //break time!

console.log(breakTime.slice(0, 6) + breakTime.slice(12)); // Almost time!

// When using negative numbers it starts from the end of the string (Starting at 1, not 0)
console.log(breakTime.slice(-5, -1)); //time

console.log(breakTime.slice(-5)); //time!