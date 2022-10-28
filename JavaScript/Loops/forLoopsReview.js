// FOR LOOPS REVIEW
/* 
Syntax Example

for (variable = value; condition; action){
    CODE TO BE RUN GOES HERE;
}
*/

// Example 1 (Displays 1 and 2)
for (i = 1; i <= 2; i++){
    console.log(i);
}

let b = `=`.repeat(25);
console.log(b);

// Example 2 (Counts down from 3 to 0)
for (i = 3; i >= 0; i--){
    console.log(i);
}

console.log(b);

// Example 3 (Display 0, 3, and 6)
for (i = 0; i <= 6; i += 3){
    console.log(i);
}

console.log(b);

// Example 4 (Loops through items in an array)
const loopTypes = [
    `For`,
    `For Of`,
    `While`
];

for (i = 0; i < loopTypes.length; i++){
    console.log(loopTypes[i]);
}

// Example 5 (Nesting with For Loops)
// The Outer/Parent Loop loops two times which causes the Nested/Child Loop to loop 8 times in total
for (i = 1; i <= 2; i++){
    console.log(i);

    for (z = 1; z <= 4; z++){
        console.log(z);
    }
}


// !EXTRA
// Nested Loops (Parent, Child, Grandchild)
for (i = 1; i <= 2; i++){
    console.log(i);

    for (z = 1; z <= 4; z++){
        console.log(z);

        for (x = 1; x <= 3; x++){
            console.log(x);
        }
    }
}