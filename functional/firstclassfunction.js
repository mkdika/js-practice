// First class function demo
// passing functions as arguments

var years = [1990,1965,1937,2005,1998,1983];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (i of arr) {
    arrRes.push(fn(i));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}

// pass the function 'calculationAge' as an arguments in other function
var ages = arrayCalc(years,calculateAge);
console.log(ages);