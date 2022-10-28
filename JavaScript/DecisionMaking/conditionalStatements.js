// CONDITIONAL STATEMENTS
// Conditional Statements are used to complete certain actions (AKA Line(s) of code) based on a certain condition(s).

// IF
/*
Syntax Example...

if (condition) {
    CODE TO BE RUN GOES HERE;
}
*/

console.log('=======================================');
console.log('IF EXAMPLES');
console.log('=======================================');

// Code inside the brackets will run if the condition is true (NOTE: Remember to use parentheses () around the condition)
if (true) { //Condition is true so the code runs
    console.log(`Yay the condition was true!!!`);
}

if (false) { //Condition is false so the code does NOT run
    console.log(`This will NOT run`);
}

if (5 > 3) { //Condition is true so the code runs
    console.log(`Yes 5 is greater than 3`);
}

// IF and ELSE
// Shift + option + a to make a multi line comment
/*
Syntax Example...

if (condition) {
    CODE TO BE RUN GOES HERE;
} else {
    CODE TO BE RUN GOES HERE;
}
*/

console.log('=======================================');
console.log('IF & ELSE EXAMPLES');
console.log('=======================================');

// Code in the ELSE brackets run when the IF condition in the preceding IF statement and all preceding ELSE IF statements (If there are any) are false.
// NOTE: Also, when the IF condition is true, the code in the IF brackets will run and the code in the ELSE brackets will NOT run.
let num = 6;
if (num < 5) {
    console.log(`Number is less than 5`);
} else {
    console.log(`Number is greater or equal to 5`);
}

// IF and ELSE IF
/* 
Syntax Example...

if (condition) {
    CODE TO BE RUN GOES HERE;
} else if (condition) {
    CODE TO BE RUN GOES HERE;
}
*/

console.log('=======================================');
console.log('IF & ELSE IF EXAMPLES');
console.log('=======================================');

// Code in ELSE IF brackets runs if previous condition(s) are NOT true and the condition for that ELSE IF is true.
// NOTE: While there can only be a single IF and a single ELSE in a conditional statement, there's no limit to the amount of ELSE IFs that can be used.
let number = 1;
if (number === 5) {
    console.log(`Number is 5`);
} else if (number === 4) {
    console.log(`Number is 4`);
} else if (number < 4) {
    console.log(`Number is less than 4`);
}

// IF, ELSE IF, and ELSE
/* 
Syntax Example...

if (condition) {
    CODE TO BE RUN GOES HERE;
} else if (condition) {
    CODE TO BE RUN GOES HERE;
} else {
    CODE TO BE RUN GOES HERE;
}
*/

console.log('=======================================');
console.log('IF, ELSE IF, and ELSE EXAMPLES');
console.log('=======================================');

// Code in ELSE brackets will always run as long as the previous conditions are False (NOTE: Else does NOT have a condition that needs to be checked/true for it to run)

let day = `Monday`;
if (day === `Wednesday`) {
    console.log(`It is Hump Day!`);
} else if (day === `Friday`) {
    console.log(`YAY! It is Friday!`);
} else {
    console.log(`It is NOT Wednesday or Friday`);
}

// Nested Conditional Statements
// A conditional statement can be nested inside another conditional statement
// In this example the console.log(`Hi`); will only run when both the very first IF condition is true and the nested IF condition is true.
if (false) {
    console.log(`Hello`);

    if (true) {
        console.log(`Hi`);
    }
} else {
    console.log(`Goodbye`);
}

if (1 < 9) {
    console.log(`sweet`);

    if (3 < 4) {
        console.log(`great`);
    }
} else {
    console.log(`darn`);
}