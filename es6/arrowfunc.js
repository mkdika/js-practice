// ES6 Arrow Function

const years = [1990,1965,1982,1937];

// ES5
var ages5 = years.map(function(el) {
  return 2018 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map((el,index) => `Age element ${index+1}: ${2016-el}.`);
console.log(ages6);