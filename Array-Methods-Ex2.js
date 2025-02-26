
// Exercise 1
// Write a function filterRange(arr, a, b)
//  that gets an array arr, looks for elements between a and b in it and returns an array of them.

// first we define a function filterRange that takes three parameters: arr, a, and b
// and return the range of elements from the array that meet the condition 
// which filter the eleemnt between the range of a and b
// log the result to the console
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);}
let arrNumbers = [31, 10, 180, 64, 77, 2, 1, 11, 23 , 44]
console.log(filterRange(arrNumbers, 1, 10)); // [10, 1]


// Exercises 2
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.


let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }
let users = [];
users.push(john , pete , mary);
console.log(users);  

let names = users.map(user => user.name);
console.log(names); // ["John", "Pete", "Mary"]


// Exercise 3
// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.
// If the array is empty, it should return 0.
// log the result to the console
console.log(users); 
let ages = users.filter(user => user.age !== undefined).map(user => user.age);
let getAverageAge = users => users.length ? users.reduce((sum, user) => sum + user.age , 0) / users.length  : 0;
console.log(getAverageAge(users)); 




