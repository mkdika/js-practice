// declare object with JSON notation
var john = {
  name: 'John',
  lastName: 'Travolta',
  birthYear: 1999,
  job: 'Teacher',
  isMarried: false,
  sayHi: function() {
    console.log('Hello World from '+this.name);
  }
};

// print all attribute/property inside john
console.log(john);

// access the lastName property with dot notation
console.log(john.lastName);

// access the lastName property with key
console.log(john['lastName']);

// access function inside object
console.log(john.sayHi());

// declare object with Object class
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Miller';
jane['job'] = 'Software Engineer';
jane.skillset = ['Java','MySQL','JS'];

console.log(jane.lastName);
console.log(jane['job']);
console.log(jane.skillset);