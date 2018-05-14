// Object.create
var personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1998;
john.job = 'Teacher';

console.log(john);

// another way to create object using Object.create
var jane = Object.create(personProto,{
  name: {value: 'Jane'},
  yearOfBirth: {value: 1969},
  job: {value: 'designer'}
});

console.log(jane);