// ES6 String Template Demo

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2016 - year;
}

// ES5
console.log('This is '+firstName+' '+lastName+'. He was born in '+yearOfBirth+'. Today, he is '+calcAge(yearOfBirth)+' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(`${firstName} `.repeat(5));