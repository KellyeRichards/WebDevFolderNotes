// FOR OF LOOPS (Loop that iterates through a value)
// Strings and Arrays are values that can be iterated through. Cannot iterate through objects because they do NOT have indexes like Strings and Arrays.

/* 
Syntax Example...

for (variableName of iterableValue){
    CODE TO BE RUN GOES HERE;
}
*/

// Example 1 (Displays `I Love Pizza!` vertically in the Terminal)
const pizza = `I Love Pizza!`;
for (char of pizza){
    // Runs this console log for the value at each index of the pizza String variable
    // NOTE: The value of each index is plugged in the char variable each time through the loop
    console.log(char);
}

// Example 2 (Displays each String one at a time in the Terminal)
const pizzaChains = [
    `Little Caesar's`,
    `Jet's`,
    `Domino's`,
    `Toppd`,
    `Donato's`,
    `Mellow Mushroom`
];
// Displays the string/value at each index of the pizzaChains Array each time through the loop
for (chain of pizzaChains){
    console.log(chain);
}

let b = `=`.repeat(25);
console.log(b);

// Example 3 (Displays each String/Topping one at a time in the Terminal)
const pizzaToppings = [
    [`Sausage`, `Bacon`, `Pepperoni`],
    [`Mozzarella`, `Parmesan`, `Provolone`],
    [`Pineapple`, `Broccoli`, `Basil`],
    [`Garlic Butter`, `Ranch`, `Marinara`]
];

// Displays the string/value at each index of the nested arrays in the pizzaToppings array each time through the Outer Loop (Loops through the Outer loop four times and also loops through the Nested loop three times for each loops through the Outer loop)

// Outer Loop
for (category of pizzaToppings){
    // console.log(category);
    // Nested Loop
    for (topping of category){
        console.log(topping);
    }
}

console.log(b);

// Using slice on the iterableValue will let you single out items
for (category of pizzaToppings.slice(1, 2)){

    // Nested Loop
    for (topping of category){
        console.log(topping);
    }
}