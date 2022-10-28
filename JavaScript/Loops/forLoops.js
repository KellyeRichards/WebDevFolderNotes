// FOR LOOPS
// Loops in JavaScript are used to complete a task (AKA Run some code) a certain number of times

/* 
Syntax Example...

for (1st Statement; 2nd Statement; 3rd Statement) {
    CODE TO BE RUN GOES HERE
};
*/

// STEPS OF A FOR LOOP
// 1st Statement only runs once at the beginning
// Code in the For Loop (AKA Code in curly brackets) will run
// 3rd Statement will run after each time the code in the For Loop is run and then checks to see if the 2nd Statement is still true before looping/running the code again
// Loop will continue as long as the 2nd Statement remains true. The code does NOT run when the 2nd Statement is false, because the For Loop has ended.

// Example 1 (Displays `There's no place like home` three times)
// NOTE: i is commonly used for the variable name. However, any other letter or name will work as well.
for (i = 1; i <= 3; i++) {
    console.log(`There's no place like home`);
}
/* 
let i = 1;
console.log(`There's no place like home`)
i++;
2 <= 3
console.log(`There's no place like home`)
i++;
3 <= 3
console.log(`There's no place like home`)
i++;
4 <= 3
For Loop has Ended
*/


// INFINITE LOOP (Do NOT run this)
// The following loop example would never stop looping because "i" will always be more than 0

/*
for (i = 1; i > 0; i++) {
    console.log(`THIS WOULD RUN FOREVER`);
}
*/

// Example 2 (Count from 1 to 5)
for (i = 1; i <= 5; i++){
    console.log(i);
}

console.log(`=`.repeat(25));

// Example 3 (Count from 5 to 0)
for (i = 5; i >= 0; i--) {
    console.log(i);
}

console.log(`=`.repeat(25));

// Example 4 (Counts from 0 to 10 by 2 (AKA Even Numbers))
/*
for (i = 1; i <= 5; i++){
    console.log(i*2);
}
*/

for (i = 0; i <= 10; i += 2) {
    console.log(i);
}
// i += 2
// i = i + 2

console.log(`=`.repeat(25));

// Example 5 (Counts from 1 to 25)
for (i = 1; i <= 25; i++) {
    console.log(i);
}

console.log(`=`.repeat(25));

// Example 6 (Loops through an Array)
const topics = [
    `Terminal`,
    `Git`,
    `Bootstrap`,
    `CSS`,
    `HTML`
];

for (i = 0; i < topics.length; i++){
    console.log(topics[i]);
}

console.log(`=`.repeat(25));

// Example 7 (Nested For Loops)
// Outer Loop
for (i = 1; i <= 2; i++){
    console.log(`${i}. Outer Loop`);

    // Nested Loop
    for (x = 1; x <= 3; x++){
        console.log(`${x}. Nested Loop`);
    }
}

/* 
1. Outer Loop
1. Nested Loop
2. Nested Loop
3. Nested Loop
2. Outer Loop
1. Nested Loop
2. Nested Loop
3. Nested Loop
*/