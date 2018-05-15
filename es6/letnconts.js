// let and conts

// ES5
// variable declare with var is function scope
var name5 = 'Jane Smith'; // create mutable variable
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
// variable declare with const & let are block scope
const name6 = 'Jane Smith'; // create a final / const / immutable variable
let age6 = 23; // create a mutable variable
// name6 = 'Jane Miller'; // change immutable variable will cause error.
console.log(name6);

