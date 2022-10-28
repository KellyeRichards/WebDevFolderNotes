// ARRAYS
// An array is a data structure that can store multiple values

// This is an example of an empty array.
let cryptids = [];

// This is an array of strings
cryptids = ["Red Woods Monster", "Jersey Devil", "Hodag"];
console.log("Moth Man".length); //8
console.log(cryptids);

// Length (Returns the amount of items in an array)
console.log(cryptids.length); // 3

// Index
console.log("Yeti"[1]); //e
console.log(cryptids[1]); //Jersey

// Changing an item in an array with index
cryptids[2] = "Hoop Snake";
console.log(cryptids);

// Adding an item to an array with index
cryptids[cryptids.length] = "The Goat Man";
console.log(cryptids); // Adds The Goat Man to the end

// This is an array of different value types
let randomArray = [12, "Chicken", true];
console.log(randomArray);