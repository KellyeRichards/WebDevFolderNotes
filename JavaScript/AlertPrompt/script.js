// ALERT AND PROMPT

// Testing that the JS file is linked to the HTML file
console.log(`Linked to HTML file`);

// Alert (Alerts the user with a message)
// ! Auto-Save on will make alerts constantly pop up with every change made because changes refresh the page with auto-save on. Therefore, it's best to manually save when using alerts/prompts.
// ! CMD + S can be used to save

alert(`Hello!`);

// Prompt (Prompts the user to enter something)
prompt(`Welcome to the page. What is your name?`);

alert(`Cool Name!`);

// Prompt returns the user's response which can be set as a value for a variable
let favColor = prompt(`What is your favorite color?`);

// Displaying the user's response in the Console tab in the Chrome Dev Tools
console.log(favColor);

// The alert in this IF statement will only run (AKA be displayed in the browser) when the user enters in Chartreuse (NOTE: Must be an uppercase C in this example)
if (favColor === `Chartreuse`) {
    alert (`Chartreuse is also my favorite color!`);
}

// Using the user's response in an alert
alert(`Your favorite color is ${favColor}`);