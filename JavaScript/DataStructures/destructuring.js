// DESTRUCTURING
// Destructuring unpacks/copies individual values/items from an Array or Properties (AKA Key value pairs) from objects and sets them to variables

// DESTRUCTURING WITH ARRAYS
/* 
Syntax Example for Arrays ...

variableType [variableNames] =  array;
*/

// Example 1
const darkKnightTrilogy = [
    `Batman Begins`,
    `The Dark Knight`,
    `The Dark Knight Rises`
];

// Copies the values from the darkKnightTrilogy array and sets them to the following variables (AKA Variable Names)
const [darkKnight1, darkKnight2, darkKnight3] = darkKnightTrilogy;
console.log(darkKnight1); // Batman Begins
console.log(darkKnight2); // The Dark Knight
console.log(darkKnight3); // The Dark Knight Rises
// Destructuring does NOT remove the values, it just copies them
console.log(darkKnightTrilogy);
// [ 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises' ]

// Example 2
const darkKnightVillains = [
    `Scarecrow`,
    `The Joker`,
    `Two-Face`,
    `Bane`,
    `Ra's Al Ghul`
];

// ... (Spread) in Destructing (AKA Using ... on the left side of a single equals sign) uses the REST operator. Sets the remaining values to a variable using the name specified (Ex: ...otherVillains)

const [crow, joker, ...otherVillains] = darkKnightVillains;
console.log(crow); //Scarecrow
console.log(joker); //The Joker
console.log(otherVillains); // [ 'Two-Face', 'Bane', "Ra's Al Ghul" ]


// Adding empty spaces skips items (In this case, joker would now be = to Two-Face)
/*
const [crow, , joker, ...otherVillains] = darkKnightVillains;
console.log(crow); //Scarecrow
console.log(joker); //Two-Face
console.log(otherVillains); //[ 'Bane', "Ra's Al Ghul" ]
*/

// DESTRUCTURING WITH OBJECTS
/* 
Syntax Example for Objects

variableType {keyNames} = object;
*/

const darkKnightActors = {
    batman: `Christian Bale`,
    alfred: `Michael Caine`,
    gordon: `Gary Oldman`
};
// Example 1
// In Destructuring Objects the keys are used to access the values that are paired with them. Also, the key names are used as the variable names
// NOTE: The order the key names are used in is NOT important since Properties (AKA Key Value Pairs) in objects do NOT have a set order
const {alfred, batman, gordon} = darkKnightActors;
console.log(batman); //Christian Bale
console.log(alfred); //Michael Caine
console.log(gordon); //Gary Oldman
console.log(darkKnightActors);
/* 
{
  batman: 'Christian Bale',
  alfred: 'Michael Caine',
  gordon: 'Gary Oldman'
}
*/

// Example 2
// Creating new variable names for the values that destructured/copied from the darkKNightActors object
// Syntax: (keyName: variableName)
const {
    batman: bruceWayne,
    alfred: alfredPennyworth,
    gordon: jimGordon
} = darkKnightActors;
console.log(bruceWayne); //Christian Bale
console.log(alfredPennyworth); //Michael Caine
console.log(jimGordon); //Gary Oldman

// Example 3
const darkKnightReleaseYears = {
    batmanBegins: 2005,
    theDarkKnight: 2008,
    theDarkKnightRises: 2012
};

// ... in Destructuring (AKA Using ... on the left side of a single equals sign) uses the REST operator. Sets the remaining Properties (AKA Key Value Pairs) to a variable with the name specified.
const {theDarkKnight, ...otherMovies} = darkKnightReleaseYears;
console.log(theDarkKnight); // 2008
console.log(otherMovies); 
// { batmanBegins: 2005, theDarkKnightRises: 2012 }