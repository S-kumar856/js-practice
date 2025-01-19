// variables

// using let 

let studentName = "Shiva";
let studentAge = 22;
studentName = "Kumar";
studentAge = 23;

console.log(studentName) // output : Kumar
console.log(studentAge) // output : 23

// using var 
var sName = "Kumar";
var sAge = 22;
sName = "shiva";
sAge = 23
console.log(sName); //shiva
console.log(sAge); // 23


// using const
const Name = "Shiva";
const Age = 22;
Name = "Kumar"; // error
Age = 23; // error
console.log(Name) // output : TypeError: Assignment to constant variable.
console.log(Age) // output : TypeError: Assignment to constant variable.

