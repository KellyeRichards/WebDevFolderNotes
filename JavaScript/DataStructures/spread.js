// SPREAD (Spreads/Copies the contents of one array or object into another array or object)

/* 
Syntax Example...

...dataStructure
*/

// SPREAD WITH ARRAYS
// Example 1
// Spreads/Copies the CONTENTS of the nums1 and nums2 array into the allNums array
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const allNums = [...nums1, ...nums2];
console.log(allNums); // [ 1, 2, 3, 4, 5, 6 ]

// Example 2
// Spreads/Copies the CONTENTS of the places array into the placesAndMore array. Also, adding two more values/items (`Church` & `Movie Theater` to the placesAndMore array.)
const places = [`Home`, `Work`, `Store`];
const placesAndMore = [...places, `Church`, `Movie Theater`];
console.log(placesAndMore); // [ 'Home', 'Work', 'Store', 'Church', 'Movie Theater' ]

// Example 3
const me = [`Austin`];
const meAndHeatherly = [`Heatherly`, ...me];
console.log(meAndHeatherly); //[ 'Heatherly', 'Austin' ]
const theFam = [
    `Emrys`,
    ...meAndHeatherly,
    `Sasha`
];
console.log(theFam); // [ 'Emrys', 'Heatherly', 'Austin', 'Sasha' ]

// Example 4
const vGames = [`Runescape`, `Slay the Spire`, `Chivalry 2`];
const tTopGames = [`D&D`, `Call of Cthulu`, `Pathfinder`];
const sports = [`Cycling`, `Basketball`, `Fencing`];
const books = [`Harry Potter`, `The Lord of the Rings`, `The Dark Tower`];
const food = [`Lamb Chop`, `Pepperoni Pizza`, `Crystal Blue Roll (Sushi)`];

const allEntertainment = [
    ...vGames,
    ...tTopGames,
    ...sports,
    ...books,
    ...food
];
console.log(allEntertainment);
/* 
[
    'Runescape',
    'Slay the Spire',
    'Chivalry 2',
    'D&D',
    'Call of Cthulu',
    'Pathfinder',
    'Cycling',
    'Basketball',
    'Fencing',
    'Harry Potter',
    'The Lord of the Rings',
    'The Dark Tower',
    'Lamb Chop',
    'Pepperoni Pizza',
    'Crystal Blue Roll (Sushi)'
]
*/

// SPREAD WITH OBJECTS
// Example 1
// Spreads/Copies the contents of chicagoTeams1 & chicagoTeams2 objects into the chicagoTeams object
const chicagoTeams1 = {
    football: `Da Bears`,
    hockey: `Blackhawks`
};
const chicagoTeams2 = {
    basketball: `Bulls`
};

const chicagoTeams = {
    ...chicagoTeams1,
    ...chicagoTeams2
};

console.log(chicagoTeams);
// { football: 'Da Bears', hockey: 'Blackhawks', basketball: 'Bulls' }

// Example 2
// When there is a duplicate key name (AKA a key name that is used twice in a single object) the contents of the object that is spread last will set the value for that key name
const baseballTeams1 = {
    chicago: `Cubs`,
    sanDiego: `Padres`,
    boston: `Red Sox`
};

const baseballTeams2 = {
    chicago: `White Sox`,
    tampaBay: `Rays`
};

const baseballTeams = {
    ...baseballTeams1,
    ...baseballTeams2
};
console.log(baseballTeams);

/* 
{
  chicago: 'Cubs',
  tampaBay: 'Rays',
  sanDiego: 'Padres',
  boston: 'Red Sox'
}
*/

// Example 3
const spiderman = {spidermanOne: `Toby Maguire`};
const spidermen = {
    ...spiderman,
    spidermanTwo: `Andrew Garfield`
};
console.log(spidermen);
// { spidermanOne: 'Toby Maguire', spidermanTwo: 'Andrew Garfield' }
const allSpidermen = {
    ...spidermen,
    spidermanThree: `Tom Holland`
};
console.log(allSpidermen);

/* 
{
  spidermanOne: 'Toby Maguire',
  spidermanTwo: 'Andrew Garfield',
  spidermanThree: 'Tom Holland'
}
*/