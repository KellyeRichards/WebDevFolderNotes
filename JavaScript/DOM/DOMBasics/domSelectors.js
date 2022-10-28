// DOM (Document Object Model)
// The DOM is the Object-Oriented (AKA JavaScript) representation of a webpage

// SELECTING

// BY ID

/* 
Syntax Example...

document.getElementById(`idName`);
*/

// getElementById returns the element that matches the ID attribute of a specified value/name (Returns a single element object)

// Example 1
console.log(`*By ID Example 1*`);
const mainPhoto = document.getElementById(`mainPhoto`);
console.log(mainPhoto); //Shows the HTML of the selected element
console.dir(mainPhoto); //Shows the JavaScript object created for the selected element

const b = `=`.repeat(25);
console.log(b);

// Example 2
console.log(`*By ID Example 2*`);
const history = document.getElementById("history");
console.dir(history);

console.log(b);

// Example 3
console.log(`*By ID Example 3*`);
const directory = document.getElementById(`directory`);
console.dir(directory);

console.log(b);

// By Tag (AKA Element) name
/* 
Syntax Example...

document.getElementsByTagName(`tagName`);
*/
// getElementsByTagName returns a collection of all elements with the specified Tag (AKA Element) name as an HTMLCollection of objects (NOTE: An HTMLCollection is similar to an array)

// Example 1
console.log(`* By Tag Name Example 1 *`);
// Returns an HTMLCollection of two objects (AKA the two strong elements)
const boldTags = document.getElementsByTagName(`strong`);
console.dir(boldTags);

// Example 2
console.log(`* By Tag Name Example 2 *`);
// Returns an HTMLCollection of a single object (AKA the one body element)
// Still returns an HTMLCollection even though there is only one body element/tag in the HTML file
const body = document.getElementsByTagName(`body`);
console.dir(body);

console.log(b);

// Example 3
console.log(`* By Tag Name Example 3 *`);
// Returns an HTMLCollection of a single object (AKA the one h1 element)
const h1 = document.getElementsByTagName(`h1`);
console.dir(h1);