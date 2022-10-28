// SPREAD AND DESTRUCTURING WITH FUNCTIONS (Parameters & Arguments)

// ARRAYS
const ghostbusters = [
    `Peter Venkman`,
    `Ray Stantz`,
    `Egon Spengler`,
    `Winston Zeddemore`
];

// Without Spread or Destructuring
function showGB1(g){
    console.log(`Without Spread or Destructuring`);
    console.log(g[0]);
    console.log(g[1]);
    console.log(g[2]);
    console.log(g[3]);
}

// Displays each item from the ghostbusters array by accessing each one using index
showGB1(ghostbusters);
/* 
Without Spread or Destructuring
Peter Venkman
Ray Stantz
Egon Spengler
Winston Zeddemore
*/

const b = `=`.repeat(25);
console.log(b);

// Spread
function showGB2(a, b, c, d){
    console.log(`Using Spread`);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

// Using Spread to use the items in the ghostbusters array as arguments that are passed in the showGB2 function for the a, b, c, and d parameters
showGB2(...ghostbusters);
// showGB2(`Peter Venkman`, `Ray Stantz`, `Egon Spengler`, `Winston Zeddmore`);
/* 
Using Spread
Peter Venkman
Ray Stantz
Egon Spengler
Winston Zeddemore
*/

console.log(b);

// Destructuring
// Destructuring the array argument that is passed in for the parameter
function showGB3([one, two, three, four]){
    console.log(`Using Destructuring`);
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
}
showGB3(ghostbusters);
/* 
Using Destructuring
Peter Venkman
Ray Stantz
Egon Spengler
Winston Zeddemore
*/

console.log(b);

// OBJECTS
const ghostbustersCast = {
    peter: `Bill Murray`,
    egon: `Harold Ramis`,
    ray: `Dan Aykroyd (Half of Blues Brothers)`,
    winston: `Ernie Hudson`,
    zuul: `Sigourney Weaver`
};

// Key value pairs (AKA Properties) in objects cannot be passed into a function as argument values when a function is run/executed. Therefore Spread cannot be used to pass the contents of an object into a function as arguments when a function is run/executed.

// DESTRUCTURING
// Without Destructuring
function showCast1(c){
    console.log(`Without Destructuring`);
    console.log(c.peter);
    console.log(c.egon);
    console.log(c.ray);
    console.log(c.winston);
    console.log(c.zuul);
}

// Display each key value from the ghostbustersCast object by accessing each value with the key that is paired with it
showCast1(ghostbustersCast);
/* 
Without Destructuring
Bill Murray
Harold Ramis
Dan Aykroyd (Half of Blues Brothers)
Ernie Hudson
Sigourney Weaver
*/

console.log(b);

// With Destructuring
// Example 1
// Destructuring the object argument passed in by destructing the parameter for the function
function showCast2({peter, winston, ray, egon, zuul}){
    console.log(`Example 1 With Destructuring`);
    console.log(peter);
    console.log(winston);
    console.log(ray);
    console.log(egon);
    console.log(zuul);
}
showCast2(ghostbustersCast);
/* 
Example 1 With Destructuring
Bill Murray
Ernie Hudson
Dan Aykroyd (Half of Blues Brothers)
Harold Ramis
Sigourney Weaver
*/

console.log(b);

// Example 2
// Parameter destructuring can be used to select only a certain key or keys from an object (NOTE: This only works when the argument passed in is an object. Does NOT work for arrays.)
function showCast3({zuul}){
    console.log(`Example 2 With Destructuring`);
    console.log(zuul);
}
showCast3(ghostbustersCast);
/* 
Example 2 With Destructuring
Sigourney Weaver
*/

console.log(b);

// USING REST WITH PARAMETERS IN FUNCTIONS
// Using REST so any other arguments that are passed into this function will be grouped in the b parameter as an array with those values inside of it
function restFunc(a, ...b){
    console.log(`Using Rest`);
    console.log(a);
    console.log(b);
}

restFunc(`Chicken`, `Turkey`, `Tofu`, `Duck`, `Tharivol Nightbreeze`, `This close to lunch might as well be pizza!`, `Hoggo Greenwell, Halfling Bard`);

/* 
Using Rest
Chicken
[
  'Turkey',
  'Tofu',
  'Duck',
  'Tharivol Nightbreeze',
  'This close to lunch might as well be pizza!',
  'Hoggo Greenwell, Halfling Bard'
]
*/