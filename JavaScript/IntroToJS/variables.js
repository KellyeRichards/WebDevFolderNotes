// VARIABLES (For Storing/Assigning values)

/*
Syntax for Variables

variableType variableName = value;
*/

// NOTE: When creating a variable, the variable name should be in camelCasing

// LET is the variable type
// starWarsMovies is the variable name.
// 11 is the value being set/assigned to the variable
// NOTE: In JavaScript, when there is a single equal sign = the value to the right of the equal is being set as the value for whatever is on the left. Also, when you create a variable it is called Declaring a variable.
let starWarsMovies = 11;

// The number 11 displays in the terminal when the file is run because 11 is the value that was set to the starWarsMovies variable
console.log(starWarsMovies);

// Reassigning a new number value to the variable
// NOTE: When updating/reassigning a new value for a variable, the variable type should NOT be used
// starWarsMovies = 12;
// console.log(starWarsMovies);

// Using/referencing the current value of a variable to reassign/update the value of the variable to a new number.
// starWarsMovies = starWarsMovies + 2;
// starWarsMovies = starWarsMovies - 2;
// console.log(starWarsMovies);

// Shorthand way to use/reference the current value of the variable to reassign/update the value of the variable (Same results as examples above)
// starWarsMovies += 2;
// starWarsMovies -= 2;
// console.log(starWarsMovies);

// Incrementing (Adding One) using ++
// Decrementing (Subtracting One) using --
// NOTE: This will reassign the new incremented or decremented value as the new value for the variable
// starWarsMovies++;
// starWarsMovies--;

// console.log(starWarsMovies);

// Reassigning a different data/primitive value type as the new value for the variable
// starWarsMovies = true;
// starWarsMovies = null;
// starWarsMovies = "The babiest blue known to mankind";
// console.log(starWarsMovies);

// Using math operators with variables that have number values
let skywalkerMovies = 9;
console.log(skywalkerMovies); // 9
let nonSkywalkerMovies = starWarsMovies - skywalkerMovies;
console.log(nonSkywalkerMovies); // 2

// OTHER TYPES OF VARIABLES
// Const (Used for variables with a value that will NOT change)
const skywalkers = 3;
// Cannot reassign/update the value of a const variable
// skywalkers = 5;
console.log(skywalkers);

// Neither LET nor CONST can be used to redeclare a variable
// const num = 1;
// const num = 2;
// console.log(num);
// let number = 10;
// let number = 11;
// console.log(number);

// Var (The OG/Original Variable)
// NOTE: The var variable type is much less restrictive than LET or CONST. A new value can be Reassigned. Also, a new value can be redeclared (AKA Using the var variable type as well as using the same variable name to set a new value). LET and CONST were created to replace VAR.
var theRealOG = 1995;
console.log(theRealOG); // 1995
theRealOG = "Reassigning";
console.log(theRealOG); // Reassigning
var theRealOG = "Redeclaring";
console.log(theRealOG); // Redeclaring

// STRING VARIABLES
const firstName = "Austin";
const lastName = "Benedict";

// Concatenating String Variables
const fullName = firstName + " " + lastName;
// const fullName = "Austin" + " " + "Benedict";
// const fullName = "Austin Benedict";
console.log(fullName);

// Using the length Property with String Variables
console.log(fullName.length);
// console.log("Austin Benedict".length);

// Using Index with String Variables
console.log(fullName[1]);
// console.log("Austin Benedict"[1]);