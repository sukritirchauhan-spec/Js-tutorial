const marvel_heros =[
  "spiderman",
  "ironman",
  "thor"
]

const dc_heros = [
  "batman",
  "superman",
  "wonderwoman"
]

marvel_heros.push(dc_heros);
console.log(marvel_heros); // output is [ 'spiderman', 'ironman', 'thor', [ 'batman', 'superman', 'wonderwoman' ] ]
// so the output is an array inside an array. It is called a nested array.

console.log(marvel_heros[3][1]); // output is superman. It is called nested array access.

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros); // output is [ 'spiderman', 'ironman', 'thor', 'batman', 'superman', 'wonderwoman' ]

// so difference between push and concat is that push creates a nested array while concat creates a single array.
//concat creates a new array by merging two or more arrays, while push adds elements to the end of an existing array.

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // output is [ 'spiderman', 'ironman', 'thor', 'batman', 'superman', 'wonderwoman' ]

//here spread operator is used to spread the elements of the array into a new array. 
// It is a more modern way of concatenating arrays. It is also more readable and easier to understand.

const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,56,7]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // output is [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 56, 7 ]

// Flat method is used to flatten an array. It removes the nested arrays and creates a single array. 
// The argument passed to the flat method is the depth of the nested arrays.
//  If we pass Infinity, it will flatten all the nested arrays.
//Depth means how many levels of nested arrays we want to flatten.For example, if we have an array like [1, 2, [3, 4, [5, 6]]], 
// the depth of the nested arrays is 2. If we pass 1 to the flat method, it will flatten only the first level of
//  nested arrays and the output will be [1, 2, 3, 4, [5, 6]]. If we pass 2 to the flat method, it will flatten
//  both levels of nested arrays and the output will be [1, 2, 3, 4, 5, 6].

Array.isArray(marvel_heros); // output is true
Array.isArray(dc_heros); // output is true
Array.isArray(all_heros); // output is true
Array.isArray(all_new_heros); // output is true
Array.isArray(real_another_array); // output is true
//used for data scraping. It is used to check if the given variable is an array or not. It returns true if the
//  variable is an array, otherwise it returns false.

console.log(Array.isArray("Hitesh")); // output is false
console.log(Array.from("Hitesh")); // output is [ 'H', 'i', 't', 'e', 's', 'h' ]
// Array.from() method is used to create a new array from an array-like or iterable object. 
// It can also be used to convert a string into an array of characters. 
// In the above example, it converts the string "Hitesh" into an array of characters ['H', 'i', 't', 'e', 's', 'h'].

console.log(Array.from({name: "Sukriti"})); // output is [ undefined ]

// In the above example, it converts the object {name: "Sukriti"} into an array of undefined 
// values [undefined] because the object does not have any iterable properties.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // output is [ 100, 200, 300 ]
// Array.of() method is used to create a new array from a variable number of arguments. 
// It creates a new array with the given arguments as its elements. 
// In the above example, it creates a new array [100, 200, 300] from the variables score1, score2 and score3.