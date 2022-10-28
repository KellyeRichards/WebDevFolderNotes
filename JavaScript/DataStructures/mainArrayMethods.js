// MAIN ARRAY METHODS
const tmnt = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
console.log(tmnt);

// Arrays are Not Constants
// The keyword const is a little misleading. It does NOT define a constant array. It defines a constant reference to an array. Because of this, we can still change the elements of a constant array.

// Push (Adds an item to the end of an array)
tmnt.push("Master Splinter");
console.log(tmnt);

// Pop (Returns the value of the item at the end of an array. Also, Pop removes the items at the end of an array)
const splinter = tmnt.pop();
console.log(tmnt);
console.log(splinter);

// Shift (Returns the value of the item at the beginning of an array (AKA Item at index of Zero). Also, Shift, removes the item at the beginning of an array).
const leonardo = tmnt.shift();
console.log(tmnt);
console.log(leonardo);

// Unshift (Adds a new array item to the beginning of an array. Also, Unshift shifts all items in the array to the right)
tmnt.unshift("Casey Jones");
console.log(tmnt);
