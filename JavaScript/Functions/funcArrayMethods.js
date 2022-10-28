// FUNCTION ARRAY METHODS (ForEach, Map, and Filter)
// Function array methods are array methods that require a function to be passed in as an argument (NOTE: Functions passed in as arguments for function array methods should have a parameter so the values in the array can be passed in the created function. Also, any type of function can be used as the argument for function array methods (Ex: Declaration, Arrow, or Function Expressions))

/* 
Syntax Example for Function Array Methods

array.functionArrayMethod(function);
*/

// FOR EACH (ForEach runs/executes a function for each item in the array that the ForEach method is used on. Each time the function is run an item is passed in as an argument for the function.)
const theLionKing = [
    `Simba`,
    `Scar`,
    `Zazu`,
    `Rafiki`,
    `Nala`,
    `Pumbaa`
];

// Example 1
function names(n) {
    console.log(n);
}

// Runs the names function for each item in the theLionKing array using the array item value as the argument for the n parameter (NOTE: Function must have a parameter to plug in the array items)
theLionKing.forEach(names);
/* 
Simba
Scar
Zazu
Rafiki
Nala
Pumbaa
*/

let b = `=`.repeat(25);
console.log(b);

// Example 2
// Runs the anonymous function on each item in the theLionKing array which displays each time in UPPERCASE text (NOTE: Using an arrow function. However, a declaration function can also be used here.)
// When an arrow function has only a single parameter parentheses are NOT necessary
theLionKing.forEach((n) => {
    console.log(n.toUpperCase());
})
/* 
SIMBA
SCAR
ZAZU
RAFIKI
NALA
PUMBAA
*/
console.log(b);

// MAP (Map runs/executes a function for each item in the array that the Map method is used on. Each time the function is run an item from the array is passed in as an argument. Also, it creates a new array with the returned values from the function that is run/executed for every item in the array.)

const cast = [
    {
        first: `Matthew`,
        last: `Broderick`
    },
    {
        first: `Jeremy`,
        last: `Irons`
    },
    {
        first: `Rowan`,
        last: `Atkinson`
    },
    {
        first: `Robert`,
        last: `Guillaume`
    },
    {
        first: `Moira`,
        last: `Kelly`
    },
    {
        first: `Ernie`,
        last: `Sabella`
    }
];

// Example 1
// Using an arrow function. However a declaration function can also be used (NOTE: When an arrow function has only a single parameter parentheses are NOT necessary. Also, when no curly brackets {} are used after the arrow in an arrow function the value following the arrow will be returned when the function is run.)
castNames = (a) => `${a.first} ${a.last}`;

// function castNames(a){
//     return `${a.first} ${a.last}`;
// }

// Creates a new array and sets the value of that new array to the firstAndLast variable
const firstAndLast = cast.map(castNames);
console.log(firstAndLast);
/* 
[
  'Matthew Broderick',
  'Jeremy Irons',
  'Rowan Atkinson',
  'Robert Guillaume',
  'Moira Kelly',
  'Ernie Sabella'
]
*/

// The Map method does NOT alter the original array
console.log(cast);

// Example 2
// Using an anonymous arrow function as the argument for the Map method
const initials = cast.map(a => `${a.first[0]}.${a.last[0]}.`);
console.log(initials);
// [ 'M.B.', 'J.I.', 'R.A.', 'R.G.', 'M.K.', 'E.S.' ]

console.log(b);

// FILTER
// Creates an array filled with all array items that pass the test (AKA Returns the boolean value of true) which is provided as a function that each array item is passed into (NOTE: The Filter method does NOT alter the original array)

// Example 1
const hakunaMatata = [
    `Hakuna Matata!`,
    `What a wonderful phrase`,
    `Hakuna Matata!`,
    `Ain't no passing craze`,
    `It means no worries`,
    `For the rest of your days`
];

function hM(line){
    return line === `Hakuna Matata!`;
}

// Adds the 2 `Hakuna Matata!` array items to the new array that is created because both of those values pass the test (AKA Return true) in the function
const lyrics = hakunaMatata.filter(hM);
console.log(lyrics); 
// [ 'Hakuna Matata!', 'Hakuna Matata!' ]

// The Filter Method does NOT alter the original array
console.log(hakunaMatata);

// Example 2
const nums = [7, 0, 10, -1,];

// Adds the 7 & 10 array values to the new array that is created/returned because both of those values pass the test in the function (AKA The function returns the value of true when each of those values are passed into the function)
// Using an anonymous arrow function as the argument for the filter method
const newNums = nums.filter((n) => n > 0);
console.log(newNums);
