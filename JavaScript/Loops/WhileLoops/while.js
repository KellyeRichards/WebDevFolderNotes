// WHILE LOOPS
/* 
Syntax Example...

while (condition){
    CODE TO BE RUN GOES HERE;
}
*/

// A While Loop continues looping as long as the condition remains true
// NOTE: Unlike For Loop, a While Loop will NOT run the code in the brackets "{}" at least once when the condition is false the first time it is checked

// Example 1 (Counts from 1 to 3)
let number = 1;
while (number <= 3){
    console.log(number);
    number++;
}

// Example 2 (Continue looping until the user enters the number set for the favNum variable)
const favNum = 4;
let userInput;
// NOTE: Using != instead of !== because Prompt always returns the value entered as a string
while (userInput != favNum) {
    userInput = prompt(`Enter the number ${favNum}`)
}
alert(`You entered ${favNum}`);

// Example 3 (The Break Keyword/Statement in Loops)
// The Break Keyword/Statement stops the loop and moves (AKA Breaks) out of the loop
const strongestAvenger = `Hulk`;
let userEntry = prompt(`Who is the Strongest Avenger?`);

// Continues looping until the user enters the value set for the strongestAvenger variable. When the user has entered the correct value, the condition for the IF statement will be true and the BREAK will run.

while (true){
    if (userEntry === strongestAvenger){
        break;
    } else {
        userEntry = prompt(`Who is the Strongest Avenger?`);
    }
}
alert(`Correct. HULK SMASH (AKA BREAK)!`);