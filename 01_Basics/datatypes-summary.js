//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive) - varible declared in stack memeory we get copy of the value when we assign it to
//  another variable. It is faster than heap memory. It is used for storing primitive data types.
//  It has a limited size and is automatically managed by the JavaScript engine.

//  Heap(Reference -Non primitive) --variable declared in heap memory we get reference of the value when we 
// assign it to another variable. It is slower than stack memory. It is used for storing non-primitive data types.
//  It has a larger size and is managed by the JavaScript engine's garbage collector.


let myYouTubename = "sukritichauhandotcom"

let anothername = myYouTubename


console.log(myYouTubename);
console.log(anothername);

anothername ="sukriti"
console.log(anothername);
console.log(myYouTubename);

let userOne = {
    email: "hitesh@ai.com",
    upi : "hitesh@upi"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);