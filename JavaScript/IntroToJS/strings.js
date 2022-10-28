// STRINGS (Content inside of single or double quotes)

// Only the content inside of the single/double quotes will be in the terminal
console.log("Austin Benedict"); // Austin Benedict
console.log('Austin Benedict'); // Austin Benedict

// Examples of strings with single or double quotes inside of the string
console.log('Captain America said, "Avengers Assemble!"');
// Captain America said, "Avengers Assemble!"
console.log("You're a wizard, Harry"); // You're a wizard, Harry

// console.log('This doesn't work'); Because it needs "" on the outside

// The backslash "\" (AKA Escape Character) allows for special characters to be used in a string
// NOTE: The backslash will NOT appear in the terminal/console
console.log('This\'ll work!'); // This'll work!

// Concatenation (Adding strings together using a plus sign "+")
console.log("Commonwealth" + "Coders"); //CommonwealthCoders
console.log("Commonwealth " + "Coders"); //Commonwealth Coders
console.log("Commonwealth" + " " + "Coders"); //Commonwealth Coders

// Length Property (Returns the length/number of characters and spaces in the string)
console.log("TARDIS".length); //6
console.log("Time and Relative Dimension in Space".length); //36

console.log("Hi".length + "Bye".length); // 5

// .length does not include the "\" (Backslash/Escape Character)
console.log('This\'ll work!'.length);

// Index
// Each character or space in a string has a set index
/*
Syntax Example...

String[Number]
*/
// Index starts at 0 (Zero)
console.log("Hello"[1]); //e
console.log("Hello"[0]); //H
console.log("Hello"[4]); //o





