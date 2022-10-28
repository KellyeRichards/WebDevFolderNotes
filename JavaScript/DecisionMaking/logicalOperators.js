// LOGICAL OPERATORS
// Logical Operators are used to return a True or False value based off two Boolean values (AKA True or False)

// AND (Ex: &&)
// The AND logical operator checks if both values are true
// Returns true when both conditions are true. If at least one condition is false, then it returns false

// Example 1
let andOne = true && false;
console.log(andOne); //false

let test = false && false;
console.log(test); //false

// Example 2
let andTwo = 5 < 6 && 10 >= 10;
// let andTwo = true && true;
console.log(andTwo); //true

// Example 3
let andThree = "Hello!".length === 6 && 10 === "10";
// let andThree = 6 === 6 && 10 === "10";
// let andThree = true && false;
console.log(andThree); //false

// Example 4
let andFour = 2 > -10 && "Hi" !== "hi" && 2 != "2";
// let andFour = true && true && false;
console.log(andFour); //false

// OR (Ex: ||)
// Shift + \ (Backslash) will create the Pipe character
// The OR operator checks if at least one condition is true
// Returns False when both conditions are false. If at least one condition is true, then it will return true.

// Example 1
let orOne = true || false;
console.log(orOne); //true

// Example 2
let orTwo = 1 > 2 || "Jam" === "Jelly";
// let orTwo = false || false;
console.log(orTwo); //false

// Example 3
let orThree = `Two` == 2 || "One".length == 1 || false === false;
// let orThree = false || false || true
console.log(orThree); //true

// Example 4
let orFour = "Five".length === 4 || `Hot Dog` === `Sandwich`;
// let orFour = true || false
console.log(orFour); //true

// Order of Operations (AND before OR)
let orderOne = "False" === `False` || `True` === `true` && 5 == "five".length;
// let orderOne = true || false && false;
// let orderOne = true || false;
console.log(orderOne); //true

// NOT (Example: !)
// ! is called a Bang in JavaScript

// The NOT logical operator converts the value from True to False if the value is True. Also, the NOT logical operator converts the value from False to True if the value is False.

// Example 1
let notOne = !true;
console.log(notOne); //false

// Example 2
let notTwo = !("Chuck Norris".length >= "John Wick".length);
// let notTwo = !(12 >= 9);
// let notTwo = !(true); "Not true"
console.log(notTwo); //false

// Example 3
// AND, OR, as well as NOT
let andOrNot = !(1 < 3 || 6 === 4 && !true);
// let andOrNot = !(true || false && false);
// let andOrNot = !(true || false);
// let andOrNot = !(true);
console.log(andOrNot); //false


// EXTRA EXAMPLE WITH MULTIPLE &&s
let andOrNot2 = !(1 < 3 || 6 === 4 && !true || 1 == 1 && 2 === "Two");
// let andOrNot2 = !(true || false && false || true && false);
// let andOrNot2 = !(true || false || false);
// let andOrNot2 = !(true);
console.log(andOrNot2); //false
