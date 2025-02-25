

// let user={
//     name: 'John',
//     years:30
// };
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)


// var {name} = user;
// console.log(name); // John

// var {years} = user; // years is now 30
// console.log(years); // 30

// var {isAdmin} = user ?? isAdmin=== false ;
// console.log(isAdmin); // false


// Give the right name:

// Create the variable with the name of our planet. How would you name such a variable?
//Create the variable to store the name of the current visitor. How would you name that variable?
const planet = "Earth";
let visitor = name ;
console.log(planet); // Earth
console.log(visitor); // John

// Exercise 3
// Look at the code. What will be the result of the call at the last line and why?
// it will be shown the Hello user because the
// variable user is not defined in the scoop of the function but it is let
// variable so the we will get to the larger scoop(if) and if not definded go to the
// global scoop and get the value of user from the global scoop
// let phrase = "Hello"

// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`)
//   }
// }

// sayHi();


// Exercise 4
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
// let user = {};

// user.name = 'John';
// user.surename = 'Smith';
// // change name to pete
// user.name = 'Pete';
// console.log(user);



// Exercise 5
// Is it possible to change an object declared with const, how do you think and why?
// we can change properties values of const object
// but we can not change the object itself(like reassign it)
const user = {
    name: "John"
  }
  
  // does it work?
  user.name = "Pete"
  console.log(user.name); // Pete

// Exercise 6
//   Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.


  let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }


const sum= Object.values(salaries).reduce((sum, current) => sum + current, 0);
console.log(sum); // 390
const CheckEmpySalaries= Object.keys(salaries).length === 0? console.log(0): console.log(sum);

let summ = (salaries) => {
    let TotalAmount = 0;
for (const salary of Object.values(salaries)) {
        TotalAmount += salary;
    };
    console.log( TotalAmount)
  }
  summ(salaries);



// Exercise 7
//   Rewrite this if using the ternary operator '?':

 
let a = 2;
let b = 3;
//   if (a + b < 4) {
//     result = 'Below';
//   } else {
//     result = 'Over';
//   }

  let result =a + b < 4? 'Below' : 'Over' ;
  console.log(result); // Below

//   let message;

//   if (login == 'Employee') {
//     message = 'Hello';
//   } else if (login == 'Director') {
//     message = 'Greetings';
//   } else if (login == '') {
//     message = 'No login';
//   } else {
//     message = '';
//   } 
let message = login == 'Employee'?'Hello' 
            : login == 'Director'? 'Greetings'
            : login == '' ?  'No login'
            :'';
            console.log(message); // Hello