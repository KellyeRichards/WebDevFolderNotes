// FOR OF LOOPS REVIEW
// A For Of Loop loops through the values/indexes of an iterable value (AKA Array or String)

/* 
Syntax Example

for (variableName of iterableValue){
    CODE TO BE RUN GOES HERE;
}
*/

// Example 1
// Displays a letter/character from the forOf string once for each time through the loop
const forOf = `For Of Loop`;
for (letter of forOf){
    console.log(letter);
}

let b = `=`.repeat(25);
console.log(b);

// Example 2
const loops = [
    `Loops`,
    `Are`,
    `Loopy`
];

// Displays each array item/index value from the loops array each time through the loop (NOTE: The length of the iterable value determines how many times the code in the loop is run)
let num = 1;
for (item of loops){
    console.log(num + `. ${item}`);
    num++;
}

console.log(b);

// Example 3
const nesting = [
    [
        `1st item in the 1st nested array`,
        `2nd item in the 1st nested array`
    ],
    [
        `1st item in the 2nd nested array`,
        `2nd item in the 2nd nested array`
    ]
];

// Displays an array item/string value from the arrays that are nested in the "nesting" array each time through the nested For Of loop (NOTE: This nested loop runs/loops twice each time the outer loop runs which is also twice)
for (outerArray of nesting){
    for (items of outerArray){
        console.log(items);
    }
}