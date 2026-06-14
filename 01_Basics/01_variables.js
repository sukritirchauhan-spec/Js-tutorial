const accounId = 144553 //intially we can not change the value of accounId because it is a constant variable
let accountEmail = "sukriti.chauhan@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState // we can declare a variable without assigning a value to it. It will be undefined by default.

//accountId = 2 // it will give an error because we can not change the value of accounId

/*
Prefer not to ise Var because of issue in block scope and functional scope. 
It is better to use let and const. We can change the value of let but we can not change the value of const.
*/
accountEmail = "newemail@gmail.com"
accountPassword = "67890"
accountCity = "Delhi"

console.log(accounId)
console.table([accounId, accountEmail, accountPassword, accountCity, accountState])