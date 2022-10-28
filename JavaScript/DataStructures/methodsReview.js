// ARRAY METHODS REVIEW
const gotHouses = ["Stark", "Baratheon", "Lannister", "Targaryen"];

// Push (Adds an item to the end of an array)
gotHouses.push("Tyrell");
console.log(gotHouses);

// Pop (Returns the value of the item at the end of an array. Also, Pop removes the item at the end of an array)
const otherHouse = gotHouses.pop();
console.log(gotHouses);
console.log(otherHouse);

// Shift (Returns the value of the item at the beginning of an array (AKA Item at index of Zero). Also, Shift removes the item at the beginning of an array).
const stark = gotHouses.shift();
console.log(gotHouses);
console.log(stark);

// Unshift (Adds a new array item to the beginning of an array before the other items)
gotHouses.unshift("Tully");
console.log(gotHouses);

// Push (Adds a new array item to the end of an array after the other items)
gotHouses.push("Bolton");
console.log(gotHouses);

const targaryens = ["Daenerys", "Aegon", "Rhaegar"];
const dragons = ["Drogon", "Balerion", "Meraxes"];
const newDragons = ["Dragan", "Alexstrasza", "Falcor"];

// Concat (Concatenates two arrays into one array)
// NOTE: You can add more arrays by separating with a comma
const powersCombined = targaryens.concat(dragons, newDragons);
console.log(powersCombined);
// const extreme = powersCombined.concat(newDragons);
// console.log(extreme);

// Example of IndexOf on an array
console.log(powersCombined.indexOf("Balerion")); //4

// Includes (Determines if an array includes a specific value).
// Returns a boolean value (true/false)
console.log(powersCombined.includes("Balerion")); //true
console.log(powersCombined.includes("Smaug")); //false

// Reverse (Reverses the order of the array)
powersCombined.reverse();
console.log(powersCombined);

// Slice (returns a specified section of a string array)
// Example of Slice on an array
console.log(powersCombined.slice(3, 6));

// If a second number is not included, then slice will return the item at the starting index as well as all items that follow.
console.log(powersCombined.slice(3));

// Splice (Removes, replaces, or adds items to an array.)
// First position determines starting index.
// Second position determines how many array items to remove.
// Third position determines the values being set for that position(s).

// Syntax for Splice
// variableArrayName.splice(startingIndex, numberOfIndexesToRemove, addedItemValues)

const lannisters = ["Tyrion", "Tywin", "Cersei", "Jaime"];

// Removing with Splice
lannisters.splice(2, 2);
console.log(lannisters);

// Replacing with Splice
lannisters.splice(1, 1, "Joffrey");
console.log(lannisters);

// Adding with Splice
lannisters.splice(2, 0, "Tommen");
console.log(lannisters);