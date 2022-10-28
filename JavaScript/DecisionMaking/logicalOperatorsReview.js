// LOGICAL OPERATORS REVIEW
// Logical Operators are used to return a True or False Boolean value based off of two different compared Boolean values (AKA True or False)

// AND (&&)
// Returns TRUE when both conditions/booleans are True. If at least one is FALSE, then it returns false.
// Example 1
console.log(true && true); //true

// Example 2
console.log(true && false && true); //false

// Example 3
console.log(7 < 8 && 1 == '1'); //true
// console.log(true && true);

// OR (|| AKA Pipe character)
// Returns False when both conditions/booleans are False. If at least one is True, then it returns True.
// Example 1
console.log(false || true); //true

// Example 2
console.log(false || false || true); //true

// Example 3
console.log(1 < 4 || `Hello` == 'hello'); //true
// console.log(true || false);

// NOT (!)
// The NOT logical operator reverses the boolean value (AKA True/False) of the boolean that follows the NOT operator

// Example 1
console.log(!false); //true

// Example 2
console.log(!(1 < -1));  //true
// console.log(!(false));

// AND, OR, NOT
// Order of Operations (AND before OR)
console.log(true || !true && true); //true
// console.log(true || false && true);
// console.log(true || false);