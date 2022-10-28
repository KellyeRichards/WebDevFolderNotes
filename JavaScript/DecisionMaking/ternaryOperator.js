// TERNARY OPERATOR
// Similar to an IF/ELSE statement, a Ternary Operator has a single condition as well as two possible actions to be completed based on the condition being true or false. However, a Ternary Operator can be written on a single line. Also, a Ternary returns a value.

/* 
Syntax Example...

(condition) ? value : value;
*/

// Example 1
// If the value of the AGE variable is 16 or more, then the TRUE boolean value will be set to the canDrive variable. If the value of the AGE variable is less than 16, then the FALSE boolean value will be set to the canDrive variable.
let age = 20;
let canDrive = (age >= 16) ? true : false;
console.log(canDrive); //true

let age1 = 20;
let canDrive1 = (age1 >= 16) ? `It was true` : `It was false`;
console.log(canDrive1);

(20 >= 16) ? console.log(`It was true`) : console.log(`It was false`);

// Example 2
// If the length of the PASSWORD variable is 11 or more, then the `Meets Length Requirement` value will be set to the passwordCheck variable. If the length of the PASSWORD variable is less than 11, then the `Invalid. Does NOT meet length requirement.` value will be set to the passwordCheck variable.

// ``, "", '' all make strings, `` are specific to template literals `${}` but still can be used to make strings.
let password = "password123";
let passwordCheck = (password.length >= 11) ? `Meets Length Requirement` : `Invalid. Does NOT meet length requirement`;
console.log(passwordCheck); //Meets Length Requirement

// Example 3
// A Ternary can also be used to run some code (AKA Complete an action). However, it is better to use an IF ELSE in this situation because it is easier to read and understand what it is doing.

(true) ? console.log(`It was true!`) : console.log(`It was false!`);

// Example 3
if (true) {
    console.log(`It was true!`);
} else {
    console.log(`It was false!`);
}