// PARSE INT
// parseInt is used to attempt to convert a string value into a number value. If the conversion is NOT possible, then it will return NaN (Not a Number) as the result/value

// Example 1
// parseInt converts the string value of `15` to the number value of 15 in this example
const parse1 = parseInt(`15`);
console.log(parse1);// 15 (Number value)
console.log(`15`); //`15` (String value)

// Example 2
// parseInt cannot convert a string of letters into a number value. Therefore NaN is returned
const parse2 = parseInt(`forty two`);
console.log(parse2); // NaN (Not Number)

// Example 3
// In this case, the first number (15) is returned
const parse3 = parseInt(`15 16 17`);
console.log(parse3);

// ALL VALUES HAVE A DEFAULT BOOLEAN VALUE
if (NaN) {
    console.log(`NaN has a default boolean value of FALSE, so this will NOT run`);
};

if (42) {
    console.log(`Positive numbers have a default boolean value of TRUE so this will run`);
};

if (-1) {
    console.log(`Negative numbers have a default boolean value of TRUE so this will run`);
};

if (` `) {
    console.log(`Strings that have at least one character (including spaces) have a default boolean value of TRUE so this will run`);
};

if (``) {
    console.log(`Empty Strings (AKA strings with no characters/spaces in them) have a default boolean value of FALSE so this will NOT run`);
};

if (0) {
    console.log(`0 (Zero) has a default boolean value of FALSE so this will not run`);
};