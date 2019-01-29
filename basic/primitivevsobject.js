/*
  THIS TO DEMO DIFFERENT BETWEEN PASS BY VALUE AND PASS BY REFERENCE
  IN JAVASCRIPT.
*/

// primitives demo
var a = 23;
var b = a; // copy value from a to b

// mutate a to other value, b still 23 because of primitive types pass
// by value. changes of a not effect to b.
a = 46;

console.log(a); // 46
console.log(b); // 23;


// object demo
var obj1 = {
  name: 'John',
  age:36
}

var obj2 = obj1;

obj1.age = 38; // mutate obj1 age

console.log(obj1.age); // both hold the same reference
console.log(obj2.age);


// function demo
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a,b) {
  a = 30;
  b.city = 'San Fransisco';  
}

change(age,obj); // age will pass by value, not reference

console.log(age); // 27, age still same
console.log(obj.city); // obj city change to 'San Fransisco'

age = 45  // change a value

console.log(age)

var age = 66 // change a value

console.log(age)

