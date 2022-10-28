// FUNCTION EXPRESSIONS (another way to write functions)
// Creating a function and storing to a variable

/* 
Syntax...

variableType variableName = function(){
    CODE TO BE RUN GOES HERE;
}
*/

// Example 1
const func1 = function(){
    console.log(`This is a Function Expression`);
}
func1();

// Example 2
const func2 = function func2(){
    console.log(`The variable name and function should be the same.`);
}
func2();

// NOTE: The function declaration causes its identifier to be bound before anything in its code-block is executed. This differs from an assignment with a function expression, which is evaluated in normal top-down order.

func3(); //CAN run a function declaration on a line that precedes where the function is created
function func3(){
    console.log(`Yay it executed!`);
}

// Can NOT run a function expression on a line that precedes where the function is created
// func4();
const func4 = function(){
    console.log(`This will not run`);
}
// func4();