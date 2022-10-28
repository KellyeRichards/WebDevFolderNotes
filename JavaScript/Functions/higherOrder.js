// HIGHER ORDER FUNCTIONS
// Passing a function as an argument into another function that has a parameter

// Example 1 (Passing a pre-existing function as the argument for a parameter)

// Function that is used as an argument in print function
function hello(){
    console.log(`Hello, how are you?`);
}

function print(greet){
    // Need to include the parentheses () so the function passed in as an argument will run/execute
    greet();
}

// Do NOT include parentheses () after function name when passing in as an argument. Doing this will run/execute the function before it is passed in as the argument.
print(hello); //Hello, how are you?

// Example 2 (Passing an anonymous function as an argument)
// NOTE: An anonymous function is a function without a name
// Ex: function()

function exampleTwo(f){
    f();
}

// Passing an anonymous declaration function as an argument
exampleTwo(function(){
    console.log(`1st time running the exampleTwo function`);
}); //1st time running the exampleTwo function

// Passing an anonymous arrow function as an argument
exampleTwo(() => {
    console.log(`2nd time running the exampleTwo function`);
}); //2nd time running the exampleTwo function


// Example 3 (Setting an anonymous function as a default argument for a parameter)
function exampleThree(param = function(){
    console.log(`Example 3 default parameter`);
}){
    param();
}

function chicken(){
    console.log(`Why do we always use chicken?`);
}

// Runs the exampleThree function with the default anonymous function as the argument for the param parameter
exampleThree(); //Example 3 default parameter

exampleThree(chicken);  //Why do we always use chicken?

exampleThree(hello); //Hello, how are you?

