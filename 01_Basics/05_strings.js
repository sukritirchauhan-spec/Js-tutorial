const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value") //hitesh50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // writing this way is 
// better because it is more readable and we can use variables inside the string without concatenation. 
// It is called template literals. It is introduced in ES6. We can use backticks `` to create template literals.
//  We can also use expressions inside ${}.

const gameName = new String("Pubg") // it is not recommended to use String object because it is slower than string primitive. It is used to create string object.
//  It is rarely used in real world applications. It is used in some libraries and frameworks.    
// writing same in devtools console will give you a string object .like  Pubg {0: "P", 1: "u", 2: "b", 3: "g", length: 4, [[PrimitiveValue]]: "Pubg"}.
//Don't missunderstood this as array. It is not an array. It is a string object. It has some properties and methods like length, charAt(), indexOf(), etc.
//  It is not recommended to use String object because it is slower than string primitive. 
// It is used to create string object. It is rarely used in real world applications. 
// It is used in some libraries and frameworks.

console.log(gameName[1]) // u
console.log(gameName.__proto__) // String {constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, bold: ƒ, …}
//this is prototype of string object. It has some properties and methods like length, charAt(), indexOf(), etc.
console.log(gameName.length) // 4
console.log(gameName.charAt(2)) // b
console.log(gameName.toUpperCase()) // PUBG

const newString = gameName.substring(0,3);
console.log(newString) // Pub

const anotherString = gameName.slice(-4,2);
console.log(anotherString) // Pu

const newstringOne = "     Sukriti  ";
console.log(newstringOne) //      Sukriti
console.log(newstringOne.trim()) // Sukriti

//trimstart() and trimEnd() are used to remove whitespace from the start and end of the string respectively.

const url = "https://hitesh.com/hitesh%20choudhary"; // suppose webpade name is given hitesh choudhary but 
//browser will convert it to hitesh%20choudhary because space is not allowed in url. 
// It will be converted to %20.

console.log(url.replace("%20", "-")) // it will replace %20 with -. It will return new string. It will not change the original string.   

const str = "the quick brown fox jumps over the lazy dog. the dog barked.";

console.log(str.split(" ")) 
    // it will split the string into an array of words. It will return an array of words. It will not change the original string.

    const str1 = str;

    console.log(str1);

    str1 = "Hi my name is hitesh"; // it will give error because str1 is a constant variable. We cannot reassign a constant variable.   
    //The error is not because it's a string. It's because str1 was declared with const, and const variables cannot be reassigned.   

   
let str1 = str;

str1 = "Hi my name is Hitesh"; // Works fine because str1 is declared with let, which allows reassignment.

console.log(str);  // Hello my name is John
console.log(str1); // Hi my name is Hitesh
//Notice that changing str1 does not change str, because strings are primitive values. A copy of the value is assigned.

    