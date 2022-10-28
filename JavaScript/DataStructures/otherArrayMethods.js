// OTHER ARRAY METHODS

const theHobbit = ["An Unexpected Journey", "The Desolation of Smaug", "The Battle of the Five Armies"];
const lotr = ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"];

// Concat (Concatenates two arrays into one array)
const allLOTR = theHobbit.concat(lotr);
console.log(allLOTR);

// IndexOf (Returns the index/item of the value entered)
// Example of indexOf on a string
console.log("Sauron".indexOf("S")); //0

// Example of IndexOf on an array
console.log(allLOTR.indexOf("The Two Towers")); //4

// Includes (Determines if an array includes a specific value).
// Returns a boolean value (true/false)
console.log(allLOTR.includes("The Two Towers")); //true
console.log(allLOTR.includes("Sauron")); //false

// Reverse (Reverses the order of the array)
allLOTR.reverse();
console.log(allLOTR);

// Slice (returns a specified section of a string array)

// Example of Slice on a string
console.log("Gandalf".slice(0, 4)); //Gand

// Example of Slice on an array
console.log(allLOTR.slice(3, 6));
/* 
[
  'The Battle of the Five Armies',
  'The Desolation of Smaug',
  'An Unexpected Journey'
]
*/

// If a second number is not included, then slice will return the item at the starting index as well as all items that follow.
console.log(allLOTR.slice(3));
/* 
[
  'The Battle of the Five Armies',
  'The Desolation of Smaug',
  'An Unexpected Journey'
]
*/

// Splice (Removes, replaces, or adds items to an array.)
// First position determines the starting index. Second position determines how many array items to remove. Third position determines the values being set for that position(s).

// Syntax for Splice
// variableArrayName.splice(startingIndex, numberOfIndexesToRemove, addedItemValues)

const hobbits = ["Samwise Gamgee", "Frodo Baggins", "Meriadoc Brandybuck", "Peregrine Took"];

// Removing with Splice
hobbits.splice(2, 2);
console.log(hobbits);

// Replacing with Splice
hobbits.splice(1, 1, "Smeagol");
console.log(hobbits);

// Adding with Splice
hobbits.splice(2, 0, "Deagol");
console.log(hobbits);