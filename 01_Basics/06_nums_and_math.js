const score = 400 //javascript is a loosely typed language, so we can assign a number to a variable without 
// specifying its type.It will aoutomatically detect the type of variable. It is called type inference. 
// It is introduced in ES6. It is also called dynamic typing.
//JavaScript variables (let, const, var) are dynamically typed, meaning the type of the value a variable holds can change (except that a const variable cannot be reassigned).

const balance = new Number(100) // it is not recommended to use Number object because it is slower than number primitive. It is used to create number object. It is rarely used in real world applications. It is used in some libraries and frameworks. Writing same in devtools console will give you a number object like Number {100, [[PrimitiveValue]]: 100}. Don't missunderstood this as array. It is not an array. It is a number object. It has some properties and methods like toFixed(), toExponential(), toPrecision(), etc.

console.log(balance.toFixed(2)) // 100.00 - use this while making a payment gateway because it will give you 2 decimal points. It will return a string. It will not change the original number.
console.log(balance.toExponential(2)) // 1.00e+2
console.log(balance.toPrecision(4)) // 100.0

console.log(score) // 400
console.log(balance)// Number {100, [[PrimitiveValue]]: 100} 
//both score and balance are numbers but score is a number primitive and balance is a number object. Number primitive is faster than number object. Number primitive is used in most of the cases. Number object is rarely used in real world applications. 
// It is used in some libraries and frameworks. Writing same in devtools console will give you a number object like Number {100, [[PrimitiveValue]]: 100}. 
// Don't missunderstood this as array. It is not an array. It is a number object. It has some properties and methods like toFixed(), toExponential(), toPrecision(), etc.

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)) // 23.9 - it will round the number to 3 significant digits and return a string. It will not change the original number.

const anotherNumber = 123.8966
console.log(anotherNumber.toPrecision(3)) // 124 - it will round the number to 3 significant digits and return a string. It will not change the original number.

const hundred = 1000000

console.log(hundred.toLocaleString("en-IN")) // 10,00,000 - it will format the number according to the locale. It will return a string. It will not change the original number.
//  It is used to format the number according to the locale. It is introduced in ES6. It is also called internationalization. It is used in some libraries and frameworks. Writing same in devtools console will give you a string like "10,00,000". Don't missunderstood this as array. It is not an array. It is a string.
//  It has some properties and methods like length, charAt(), indexOf(), etc.

console.log(hundred.toLocaleString()) // 1,000,000 - it will format the number according to the locale. 
// It will return a string. It will not change the original number.


//************************************Maths************************************//
//Math is a built-in object that has properties and methods for mathematical constants and functions. It is not a function object. It is a static object. It is used to perform mathematical operations. It is introduced in ES6. It is also called Math object. It is used in some libraries and frameworks. Writing same in devtools console will give you a Math object like Math {…}. Don't missunderstood this as array. It is not an array. It is a Math object. It has some properties and methods like PI, E, abs(), ceil(), floor(), round(), random(), etc.

console.log(Math.PI) // 3.141592653589793 - it will return the value of PI.
console.log(Math.E) // 2.718281828459045 - it will return the value of E.
console.log(Math.abs(-5)) // 5 - it will return the absolute value of the number.
console.log(Math.ceil(4.2)) // 5 - it will return the smallest integer greater than or equal to the number.
console.log(Math.floor(4.8)) // 4 - it will return the largest integer less than or equal to the number.
console.log(Math.round(4.5)) // 5 - it will return the value of the number rounded to the nearest integer.
console.log(Math.random()) // 0.123456789 - it will return a random number between 0 and 1. It will return a different number every time you run the code.
console.log(Math.random() * 10) // 0.123456789 - it will return a random number between 0 and 10. 
// It will return a different number every time you run the code.

console.log((Math.random() * 10)+1) 

const min = 10 
const max = 20
Math.random()
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
// it will return a random number between min and max.
//// 🎲 Rolling a Dice (Random number from 1 to 6)

// Step 1: Math.random()
// Returns a random decimal number between 0 (inclusive) and 1 (exclusive).
// Example outputs:
// 0.12
// 0.45
// 0.73
// 0.99

// Step 2: Multiply by 6
// Math.random() * 6
// Range becomes: 0 to 5.999999...
// Example:
// 0.73 * 6 = 4.38

// Step 3: Math.floor()
// Removes the decimal part.
// Example:
// Math.floor(4.38) = 4
// Now the possible values are: 0, 1, 2, 3, 4, 5

// Step 4: Add 1
// 4 + 1 = 5
// Final possible values become: 1, 2, 3, 4, 5, 6

const dice = Math.floor(Math.random() * 6) + 1;

// Why +1?
// Without +1, the output would be: 0, 1, 2, 3, 4, 5
// But a dice has numbers: 1, 2, 3, 4, 5, 6
// Adding 1 shifts the range from:
// 0 → 1
// 1 → 2
// 2 → 3
// 3 → 4
// 4 → 5
// 5 → 6

// ⭐ Formula to remember:
// Random number from 1 to N:
// Math.floor(Math.random() * N) + 1

// Examples:
// Dice (1-6):    Math.floor(Math.random() * 6) + 1
// Month (1-12):  Math.floor(Math.random() * 12) + 1
// Card (1-13):   Math.floor(Math.random() * 13) + 1

