// OBJECTS (An Object (AKA Object Literal) is a Data Structure that can store multiple values. Objects store data/values in Properties (AKA Key Value Pairs))

/* 
Syntax Example for an Object

{ key: value }
*/

// NOTE: Keys should be written in camelCase

// Object Example 1
const user = { firstName: `Austin`, lastName: `Benedict`};

// Object Example 2

const userInfo = {
    username: `12abenedict`,
    first: `Austin`,
    last: `Benedict`,
    age: 28,
    loggedIn: true
};

// ACCESSING VALUES IN AN OBJECT (To access a value in an object the key that is paired with that value must be used/referenced)
// Using Square Brackets [] and a String ("", '', ``)
console.log(userInfo[`username`]); // 12abenedict
console.log(userInfo[`age`]); // 28
console.log(userInfo['loggedIn']); // true

// Using a Dot .
// NOTE: Dot syntax is the more commonly used way to access a value in an object
console.log(userInfo.first); // Austin
console.log(userInfo.last); // Benedict

// MODIFYING/ADDING WITH AN OBJECT
const theRock = {
    firstName: `Dwayne`,
    lastName: `Johnson`,
    age: 50,
    goodActor: true,
    bestMovie: `Jungle Cruise`
};

// MODIFYING
// Example using Square Brackets
theRock[`bestMovie`] = `Tooth Fairy`;
console.log(theRock[`bestMovie`]); // Tooth Fairy
console.log(theRock);

// Example using Dot
theRock.bestMovie = `Jumanji`;
console.log(theRock.bestMovie); // Jumanji
console.log(theRock);

// ADDING
// When referencing a key that does NOT already exist in the object it will create a new Key Value Pair (AKA Property)
// Example using Square Brackets
theRock[`highestGrossingMovie`] = `Furious 7`;
console.log(theRock[`highestGrossingMovie`]); // Furious 7
console.log(theRock);

// Example using Dot
// Example 1
theRock.worstMovie = `Scorpion King`;
console.log(theRock.worstMovie); // Scorpion King
console.log(theRock);

// Example 2
theRock.upcomingMovie = `Black Adam`;
console.log(theRock.upcomingMovie); // Black Adam
console.log(theRock);