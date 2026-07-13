//array

const myArr = [0 , 111, 888, 999, "sukriti" , 'abc', 'xyz', true , false , null , undefined , NaN ]
 //Array methods
// 1. push() - adds an element to the end of the array
myArr.push(1000);
console.log(myArr); // output is [ 0, 111, 888, 999, 'sukriti', 'abc', 'xyz', true, false, null, undefined, NaN, 1000 ]

// 2. pop() - removes the last element from the array
myArr.pop();
console.log(myArr); // output is [ 0, 111, 888, 999, 'sukriti', 'abc', 'xyz', true, false, null, undefined, NaN ]

// 3. shift() - removes the first element from the array
myArr.shift();
console.log(myArr);// output is [ 111, 888, 999, 'sukriti', 'abc', 'xyz', true, false, null, undefined, NaN ]

// 4. unshift() - adds an element to the beginning of the array
myArr.unshift(-1);
console.log(myArr); // output is [ -1, 111, 888, 999, 'sukriti', 'abc', 'xyz', true, false, null, undefined, NaN ]
// it is time complexity O(n) because it has to shift all the elements to the right

console.log(myArr.includes(999)); // output is true
console.log(myArr.indexOf(999)); // output is 3

const newArr = myArr.join();
console.log(newArr); // output is -1,111,888,999,sukriti,abc,xyz,true,false,null,undefined,NaN
console.log(typeof newArr); // output is string
console.log(myArr) // output is [ -1, 111, 888, 999, 'sukriti', 'abc', 'xyz', true, false, null, undefined, NaN ]

// slice , splice

const myn1 = myArr.slice(2, 5);
console.log(myn1); // output is [ 888, 999, 'sukriti' ]
console.log(myArr); // output is [ -1, 111, 888, 999, 'sukriti', 'abc', 'xyz', true, false, null, undefined, NaN ]

const myn2 = myArr.splice(2, 5);
console.log(myn2); // output is [ 888, 999, 'sukriti', 'abc', 'xyz' ]
console.log(myArr); // output is [ -1, 111, 'abc', 'xyz', true, false, null, undefined, NaN ]
// so difference between slice and splice is that slice does not modify the original array but
//  splice does modify the original array. Splice is used to add or remove elements from an array, while slice is used to create a new array from a portion of an existing array.
// we can have any datype in an array. 
// It can be a number, string, boolean, null, undefined, NaN, object, array, function, etc.
//  It can also be a mix of different datatypes. 
 // Array copy is usually a shallow copy.
// A shallow copy creates a new array, but nested objects or arrays still
// reference the same memory.

// If the array contains only primitive values (number, string, boolean),
// changing an element in the copied array will NOT affect the original array.

// If the array contains objects or nested arrays, changing those nested
// objects through the copied array WILL also affect the original array.

// A deep copy creates completely independent copies of all nested objects.
// Changes made to the copied array do NOT affect the original array.

//primitive values .

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

arr2[0] = 100;

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [100, 2, 3]

//non primitive values -Shallow copy example

const arr3 = [{ name: "John" }];
const arr4 = [...arr3];

arr4[0].name = "Hitesh";

console.log(arr3); // [{ name: "Hitesh" }]
console.log(arr4); // [{ name: "Hitesh" }]


// ===================== SHALLOW COPY vs DEEP COPY =====================

// ⭐ Interview Question:
// Q. When we copy an array using the spread operator (...), is it a
//    shallow copy or a deep copy?
//
// Answer:
// It creates a SHALLOW COPY.

// What does "Shallow Copy" mean?
// - A new array is created.
// - The elements inside the array are copied only one level deep.
// - If the elements are primitive values (number, string, boolean),
//   they are copied by value.
// - If the elements are objects or arrays, only their references (memory
//   addresses) are copied.

// --------------------------------------------------------------------
// Example 1 : Array of Primitive Values
// --------------------------------------------------------------------

const arr1 = [10, 20, 30];
const arr2 = [...arr1];

// Memory Diagram:
//
// arr1 ─────► [10][20][30]
//
// arr2 ─────► [10][20][30]
//
// Both are DIFFERENT arrays.

arr2[0] = 100;

// Memory becomes:
//
// arr1 ─────► [10][20][30]
//
// arr2 ─────► [100][20][30]
//
// ✅ Changing arr2 does NOT affect arr1 because primitive values
// are copied by value.

// --------------------------------------------------------------------
// Example 2 : Array of Objects
// --------------------------------------------------------------------

const users1 = [{ name: "John" }];
const users2 = [...users1];

// Memory Diagram:
//
//                 Object
//            { name: "John" }
//                   ▲
//                   │
// users1 ───► [  ● ]
//                   ▲
//                   │
// users2 ───► [  ● ]
//
// users1 and users2 are DIFFERENT arrays,
// but both point to the SAME object.

users2[0].name = "Hitesh";

// Memory becomes:
//
//                Object
//          { name: "Hitesh" }
//                  ▲
//                  │
// users1 ───► [ ● ]
//                  ▲
//                  │
// users2 ───► [ ● ]
//
// ❌ Changing the object through users2 also changes users1,
// because both arrays reference the SAME object.

// ====================================================================
// Easy way to remember:
//
// Shallow Copy:
// ✔ Copies the OUTER array/object.
// ❌ Does NOT copy nested objects or nested arrays.
//
// Deep Copy:
// ✔ Copies the OUTER array.
// ✔ Also copies ALL nested objects and arrays.
// ✔ Original and copied data are completely independent.
//
// One-line interview answer:
// "The spread operator (...) creates a shallow copy. The outer array is
// new, but nested objects/arrays are still shared by reference."
// ====================================================================
