// HIGHER ORDER FUNCTIONS REVIEW
// Passing a function as an argument into another function that has a parameter

// Example 1 (Passing a pre-existing function as the argument for a parameter)

// Function that is used as an argument in the mutedDanger function
function hello(){
    console.log(`Hello, how are you?`);
}
// hello();

function mutedDanger(greet){
    // Need to include the parentheses () so the function passed in as an argument will run/execute.
    greet();
}
mutedDanger(hello);

const b = `=`.repeat(25);
console.log(b);

// Example 2 (passing an anonymous function as an argument)
// NOTE: An anonymous function is a function without a name Ex: function()
// This is saying for the plugNPlay function with a parameter of batarang, we want to run that parameter as a function (but we still have to give that parameter an argument)
function plugNPlay(batarang){
    batarang();
}

// Passing an anonymous declaration function as an argument 
// Below we are running the function plugNPlay two separate times with different arguments (whatever is in the parentheses after plugNPlay). Because batarang parameter is set up to be run as a function, this works.
plugNPlay(function(){
    console.log(`1st time running the plugNPlay function`);
});

// Anonymous Arrow Function
/* 
(parameter) => {
    CODE TO BE RUN
}
 */
plugNPlay(() => {
    console.log(`Second time`)
});

// Named Arrow function syntax
/* 
functionName = () => {
    CODE TO BE RUN;
}
*/

console.log(b);

// Example 3 (Setting an anonymous function as a default argument for a parameter)

// Everything inside the () after exampleThree is the parameter. Because it is built out as a function with some code to run, this will work by calling the exampleThree function with no argument. However, since this exampleThree function has code to be run AFTER the parameter function (AKA electronWhistle) and it is set up to allow a function to be run it its place (just like the previous examples), we can run a function name as the argument which will replace everything previously written inside the parentheses.

function exampleThree(electronWhistle = function(){
    console.log(`Example 3 default parameter`);
}){
    electronWhistle();
}

// Runs the exampleThree function with the default anonymous function as the argument for the electronWhistle parameter
exampleThree();

// Uses the hello function that was created at the beginning of the file for the argument instead of using the default anonymous function as the argument
exampleThree(hello);