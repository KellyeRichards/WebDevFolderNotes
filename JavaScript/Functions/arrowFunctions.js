// ARROW FUNCTIONS
// Allow us to write shorter function syntax (AKA shorthand)

/* 
REGULAR FUNCTION SYNTAX

function functionName(){
    CODE TO BE RUN GOES HERE;
}
*/

/* ARROW FUNCTION SYNTAX

functionName = () => {
    CODE TO BE RUN GOES HERE;
}
*/

// Example 1
adding = () => {
    console.log(1 + 1);
}
adding();

// Example 2
subtracting = () => {
    console.log(1 - 1);
}
subtracting();

// Example 3
// Arrow functions with a parameter
multiplying = (num, num1) => console.log(num * num1);
multiplying(5, 100);

food = (sandwiches, cost) => console.log(sandwiches * cost);
food(5, 5.99);

// Example 4
// You can also remove the () around the parameter
dividing = number => console.log(number / 2);
dividing(8);

// Example 5
modulo = num => num % 2;
const result = modulo(5);
console.log(result);
