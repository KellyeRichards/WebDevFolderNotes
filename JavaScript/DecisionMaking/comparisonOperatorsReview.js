// COMPARISON OPERATORS REVIEW
// Comparison Operators are used to return a True or False value when comparing two values (Booleans)

// Greater Than
console.log(7 > 6); //true
console.log(2.1 > 1.2345); //true

// Less than
console.log(7 < 6); //false
console.log(0.9 < -4); //false

// Greater Than or Equal To
console.log(10 >= 10); //true
console.log(3 >= -100); //true

// Less Than or Equal To
console.log(4 <= 3); //false
console.log(143 <= 176.04); //true

// EQUAL COMPARISONS
// Double Equals
// Equal face/character value, but does NOT check data type
// For a False value to be returned it must be a different face/character value
console.log(3 == 2); //false
console.log("Friday" == 'Friday'); //true
console.log(3 == `3`); //true
console.log("T" == "t"); //false (NOTE: JavaScript recognizes these two letters as different characters)


// !true and false Booleans are associate with binary terms, 1 == true, 0 == false
console.log(1 == true); 
console.log(0 == false);

// Triple Equals (AKA Strict Equality)
// Equal face/character value and data type
// For a False value to be returned it must be a different face/character value OR a different data type
// It is best to always use Triple Equals unless there is a specific reason to use Double Equals
console.log(7 === 7); //true
console.log(6 === `6`); //false
console.log("Friday" === 'Friday'); //true

// NOT EQUAL COMPARISONS
// NOT Equal face/character value, but does NOT check data type
// For a True value to be returned it must be a different face/character value
// Uses !(AKA Bang)
console.log(3 != 3); //false
console.log(2 != 3); //true
console.log(3 != `3`); //false

// Strict NOT Equal
// NOT Equal face/character value OR data type
// For a True value to be returned it must be a different face/character value OR data type
console.log(3 !== 3); //false
console.log(5 !== `5`); //true