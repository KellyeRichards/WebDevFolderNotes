// SPREAD REVIEW
// Big Picture:
// SPREAD (Spreads/Copies the contents of one array or object into another array or object)

// Spread with arrays
const greet = [`hey`, `hi`, `whatsup`, `aloha`];
const unGreet = [`bye`, `see ya`, `farewell`, `aloha`];

// using ... includes the rest (or all in this case) of the array items
const convo = [...greet, ...unGreet];
console.log(convo);

const fullConvo = [
    ...greet,
    `How's the weather?`,
    `How 'bout them Cats?`,
    ...unGreet
];
console.log(fullConvo);
const b = `=`.repeat(25);
console.log(b);

// SPREAD WITH FUNCTIONS
const greet2 = [`hey`, `hi`, `whatsup`, `aloha`];

function showG2(a, b, c, d){
    console.log(`Using Spread`);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

showG2(...greet2);

console.log(b);

// DESTRUCTURING REVIEW
// Big Picture:
// Destructuring unpacks/copies individual values/items from an Array or Properties (AKA Key Value Pairs) from objects and sets them to variables

// Array destructuring allows you to neatly extract an array's value into new variables
const random = [
    `a`,
    `b`,
    `c`
];
let [one, two, three] = random;
console.log(two);

console.log(b);

// Object Destructuring allows you to neatly extract an object's values into new variables
const evil = {
    first: `Lord`,
    last: `Voldemort`
};
let {first, last} = evil;
console.log(last);

console.log(b);


// DESTRUCTURING WITH FUNCTIONS
// Destructuring the array argument that is passed in for the parameter
function showRandom([one, two, three]){
    console.log(`Using Destructuring`);
    console.log(one);
    console.log(two);
    console.log(three);
}

showRandom(random);

console.log(b);

function showEvil({first, last}){
    console.log(first);
    console.log(last);
}
showEvil(evil);

console.log(b);

// EXTRA OBJECT
const myName = {
    first: `Austin`,
    last: `Benedict`
}

function heIsEvil({last}){
    console.log(last);
}

heIsEvil(evil);
heIsEvil(myName);