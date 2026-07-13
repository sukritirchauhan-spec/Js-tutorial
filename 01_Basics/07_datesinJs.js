let myDate = new Date() // it will create a new date object with the current date and time. It will return a date object. It will not change the original date. It is used to get the current date and time. It is introduced in ES6. It is also called Date object. It is used in some libraries and frameworks. Writing same in devtools console will give you a date object like Fri Jun 14 2024 12:34:56 GMT+0530 (India Standard Time). Don't missunderstood this as array. It is not an array. It is a date object. It has some properties and methods like getDate(), getDay(), getFullYear(), getHours(), getMilliseconds(), getMinutes(), getMonth(), getSeconds(), getTime(), getTimezoneOffset(), etc.

console.log(myDate) // 2026-07-13T10:21:17.085Z
console.log(myDate.getDate()) // 13 - it will return the day of the month (1-31).
console.log(myDate.getDay()) // 1 - it will return the day of the week (0-6). 0 is Sunday, 1 is Monday, and so on.
console.log(myDate.toDateString()) // Mon Jul 13 2026 - it will return the date in a human-readable format.
console.log(myDate.toTimeString()) // 10:21:17 GMT+0530 (India Standard Time) - it will return the time in a human-readable format.
console.log(myDate.toISOString()) // 2026-07-13T10:21:17.085Z - it will return the date in ISO format.
console.log(myDate.toLocaleDateString()) // 7/13/2026 - it will return the date in a locale-specific format.
console.log(myDate.toLocaleTimeString()) // 10:21:17 AM - it will return the time in a locale-specific format.

console.log(typeof myDate) // object - it will return the type of the date object. It will return 'object' because date is an object.

let myCreateDate = new Date(2023 , 0 , 23) // it will create a new date object with the specified date. It will return a date object. It will not change the original date. It is used to create a date object with a specific date. It is introduced in ES6. It is also called Date object. It is used in some libraries and frameworks. Writing same in devtools console will give you a date object like Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time). Don't missunderstood this as array. It is not an array. It is a date object. It has some properties and methods like getDate(), getDay(), getFullYear(), getHours(), getMilliseconds(), getMinutes(), getMonth(), getSeconds(), getTime(), getTimezoneOffset(), etc.

console.log(myCreateDate) // 2023-01-22T18:30:00.000Z

let myCreatedDate1 =  new Date(2023 , 0, 23, 5,3)

console.log(myCreatedDate1.toLocaleDateString()) // 2023-01-23 - it will create a new date object with the specified date and time. It will return a date object. It will not change the original date. It is used to create a date object with a specific date and time. It is introduced in ES6. It is also called Date object. It is used in some libraries and frameworks. Writing same in devtools console will give you a date object like Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time). Don't missunderstood this as array. It is not an array. It is a date object. It has some properties and methods like getDate(), getDay(), getFullYear(), getHours(), getMilliseconds(), getMinutes(), getMonth(), getSeconds(), getTime(), getTimezoneOffset(), etc.

let myCreatedDate2 =  new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleDateString()) // 2023-01-14 - it will create a new date object with the specified date. It will return a date object. It will not change the original date. It is used to create a date object with a specific date. It is introduced in ES6. It is also called Date object. It is used in some libraries and frameworks. Writing same in devtools console will give you a date object like Mon Jan 14 2023 00:00:00 GMT+0530 (India Standard Time). Don't missunderstood this as array. It is not an array. It is a date object. It has some properties and methods like getDate(), getDay(), getFullYear(), getHours(), getMilliseconds(), getMinutes(), getMonth(), getSeconds(), getTime(), getTimezoneOffset(), etc.    

let myTimeStamp = Date.now() // it will return the number of milliseconds since January 1, 1970, 00:00:00 UTC. It will return a number. It will not change the original date. It is used to get the current timestamp. It is introduced in ES6. It is also called Date object. It is used in some libraries and frameworks. Writing same in devtools console will give you a number like 1672531199000. Don't missunderstood this as array. It is not an array. It is a number.
console.log(myTimeStamp) // 1672531199000 - it will return the number of milliseconds since January 1, 1970, 00:00:00 UTC. It will return a number. It will not change the original date. It is used to get the current timestamp. It is introduced in ES6. It is also called Date object. It is used in some libraries and frameworks. Writing same in devtools console will give you a number like 1672531199000. Don't missunderstood this as array. It is not an array. It is a number.

console.log(myCreatedDate1.getTime()) // 1674441780000 - it will return the number of milliseconds since January 1, 1970, 00:00:00 UTC for the specified date. It will return a number. It will not change the original date. It is used to get the timestamp of a specific date. It is introduced in ES6. It is also called Date object. It is used in some libraries and frameworks. Writing same in devtools console will give you a number like 1674441780000. Don't missunderstood this as array. It is not an array. It is a number.

// we can also use the getTime() method to compare two dates. It will return the number of milliseconds since January 1, 1970, 00:00:00 UTC for the specified date. It will return a number. It will not change the original date. It is used to get the timestamp of a specific date. It is introduced in ES6. It is also called Date object. It is used in some libraries and frameworks. Writing same in devtools console will give you a number like 1674441780000. Don't missunderstood this as array. It is not an array. It is a number.

let date1 = new Date("2023-01-14")
let date2 = new Date("2023-01-15")

if(date1.getTime() < date2.getTime()){
    console.log("date1 is earlier than date2") // date1 is earlier than date2
}else if(date1.getTime() > date2.getTime()){
    console.log("date1 is later than date2")
}else{
    console.log("date1 is same as date2")
}

console.log(Math.floor(Date.now()/1000)) // 1672531199 - it will return the number of seconds since January 1, 1970, 00:00:00 UTC. It will return a number. 

//math.floor will help in removing the decimal part of the number. It will return a number. It will not change the original number. It is used to round down a number to the nearest integer. 

newDate.toLocaleDateString('default' , { weekday: 'long' }) // it will return the day of the week in a human-readable format. 