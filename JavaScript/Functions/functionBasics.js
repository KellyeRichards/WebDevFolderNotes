// FUNCTIONS
// Functions are created lines of code that we can use throughout a JavaScript file (AKA Reuseable Procedures)

/* 
Syntax...

function functionName(){
    CODE TO BE RUN GOES HERE
};

To run a function...
functionName();
*/

// Example 1
function scream(){
    console.log(`Do you like scary movies?`);
};

// Runs/execute function
scream();

let b = `=`.repeat(25);
console.log(b);

// Example 2
// A function can have multiple lines of code inside of it
function hocusPocus(){
    console.log(`Oh look, another glorious morning`);
    console.log(`Makes me sick!`);
}

// A function can be run/executed multiple times
hocusPocus();
hocusPocus();

console.log(b);

// FUNCTIONS WITH PARAMETERS/ARGUMENTS
// Parameters are the names created when the function is declared/created
// Arguments are the values entered/passed in when running/executing the function

/* 
Syntax...

function functionName(parameter){
    CODE TO BE RUN GOES HERE
}

To run a function with a parameter...
functionName(argument);
*/

// Example 1
// Parameter is "villain"
function horrorMovieVillain(villain){
    console.log(`${villain} is the scariest horror movie villain.`);
}
// "Michael Myers" is the argument
horrorMovieVillain(`Michael Myers`);
horrorMovieVillain(`Sumara (The Ring)`);
horrorMovieVillain(`Freddy Krueger`);
horrorMovieVillain(`Xenomorph`);
horrorMovieVillain(`Jason`);

// Example 2
function beetlejuice(name) {
    console.log(`${name}, ${name}, ${name}!`);
}
beetlejuice(`Beetlejuice`);

console.log(b);

// Example 3
function theShining(word){
    const message = word.reverse();
    console.log(message);
}

// Parameters can accept all types of values (String, Number, Boolean, Array, etc.)
theShining([`R`, `E`, `D`, `R`, `U`, `M`]);

// Example 4
function villainWeapon(villain, weapon){
    console.log(`${villain}'s weapon of choice is a ${weapon}`);
}

// A function can have multiple parameters/arguments
villainWeapon(`Loki`, `Tesseract`);
villainWeapon(`Michael Myers`, `Chef's Knife`);
villainWeapon(`Megatron`, `Fusion Canon`);
villainWeapon(`Casper`, `false sense of security`);
villainWeapon(`Chuck Norris`, `Chuck Norris`)

console.log(b);

// Example 5
function sawMovies(numMovies, preferredMovies){
    console.log(`They have made ${numMovies} Saw movies. That is ${numMovies - preferredMovies} too many. They should have just made ${preferredMovies}`);
}

// Parameters/Arguments can be numbers.
sawMovies(9, 0);
sawMovies(9, -1);
sawMovies(9, 3);

// Example 6
function horrorMovieQuote(quote = `Heeeeeeeeere's Johnny!`){
    console.log(quote);
}
// You can set a default argument for a parameter

// Runs/executes function with default argument for the parameter
horrorMovieQuote();

// Runs/Executes function with a new created argument
horrorMovieQuote(`All work and no play makes Johnny a dull boy`);
horrorMovieQuote(`What's your favorite scary movie?`);
horrorMovieQuote();

console.log(b);

// RETURN KEYWORD
// The return keyword stops the execution of a function and returns a value if a value is present

/* 
function functionName(){
    return value;
}
*/

// Example 1
function sixthSense(){
    return `I see dead people`;
}

// Function returns a value that we can set to a variable
let cole = sixthSense();
console.log(cole);

console.log(b);

// Example 2
function macbeth(){
    console.log(`Double, Double, Toil, and Trouble`);
    return;
    console.log(`Fire Burn and Cauldron Bubble`);
}
// The 2nd console log does not run because it is on a line after the return keyword in the function
macbeth();

console.log(b);

// Example 3
function aQuietPlace(sound){
    if (sound === ``){
        return `You are safe`;
    }
    return `THEY HEAR YOU!!!`;
}

const safe = aQuietPlace(``);
console.log(safe);

const notSafe = aQuietPlace(`lajkshlskahfjdslalfa`);
console.log(notSafe);

// FUNCTION NESTING
/* 
Syntax...

function functionNameOne(){
    function functionNameTwo(){
        CODE TO BE RUN GOES HERE (if necessary);
    }
    functionNameTwo();
    CODE TO BE RUN GOES HERE (if necessary);
}
functionNameOne();
*/

function americanPsycho(){
    function americanPsycho1(){
        console.log(`Do you like Huey Lewis and the News?`);
    }
    americanPsycho1();
}
americanPsycho();