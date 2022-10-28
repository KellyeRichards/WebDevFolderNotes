// OPERATORS
// Adding and Subtracting (+ is for Addition, - is for Subtraction)
console.log(2 + 2); // 4
console.log(2.25 + 2.55 + 1.5); // 6.3
console.log(1 - 3); // -2

// Multiplying and Dividing (* is for Multiplication and / is for Division)
console.log(4 * 5); // 20
console.log(1.5 * 2.5); // 3.75
console.log(1 / 4); // 0.25
console.log(0 / 0); // NaN (Not a Number)

// Exponentiation (** is for Exponentiation/Exponents)
// Raises the first number to the power of the second number
console.log(5 ** 3); // 125
// 5*5*5 = 125
console.log(6 ** 2); // 36
// 6*6 = 36

// Modulus (AKA Remainder)
// Returns the division remainder
// Percentage sign "%" is used for Modulus
console.log(10 % 3); // 1
console.log(14 % 4); // 2
// Since 5 cannot go into 3, the remainder is 3
console.log(3 % 5); // 3

// Order of operations in JavaScript (Parentheses, Exponents, Multiplication, Division, Modulus, Addition, Subtraction) PEMDMAS

console.log(1 + 2 * 3); // 7
console.log((1 + 2) * 3); // 9

console.log(8 / 2 * (2 + 2)); // 16

console.log(29 % 3 ** 3); // 2
// console.log(29 % 27);
// console.log(2);