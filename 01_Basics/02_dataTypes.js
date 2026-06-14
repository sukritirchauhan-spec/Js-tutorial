"use strict";// "use strict" is a directive that enables strict mode in JavaScript. It helps catch common coding mistakes and "unsafe" actions, such as defining global variables unintentionally.
//treat all js code as new version of js

//alert(3 + 3) // we are using node.js so we can not use alert function because it is a browser specific function. It will give an error if we use it in node.js

let name = "Sukriti"
let age = 22
let isLoggedIn = false

//number => 2 to power 53 - 1
//bigint
//string => " ", ' ', ` `
//boolean => true or false
//null => it is standalone value that represents the absence of any value. It is intentionally assigned to a variable to indicate that it has no value. It is different from undefined, which means that a variable has been declared but has not been assigned a value yet.
//undefined => it is a value that is not defined
//symbol => it is a unique and immutable primitive value that can be used as an identifier for object properties. It is often used to create private properties or to avoid naming collisions in objects.

//object => it is a collection of key-value pairs, where each key is a string (or symbol) and each value can be any data type, including other objects. Objects are used to represent complex data structures and can be created using object literals, constructors, or classes.
console.log(typeof name) //string
console.log(typeof age) //number
console.log(typeof isLoggedIn) //boolean
console.log(typeof null) //object
console.log(typeof undefined) //undefined
console.log(typeof Symbol("id")) //symbol
console.log(typeof { name: "Sukriti", age: 22 }) //object