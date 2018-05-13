// create object instance use Function constructor
var Person = function(name,age,job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.printRetire = function() {
    console.log(65 - this.age);
  }
}

var john = new Person('John',30,'Programmer');
console.log(john);
john.printRetire();