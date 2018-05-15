// First class function demo
// passing functions as arguments

var years = [2010,1965,1937,2015,1998,1983];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (i of arr) {
    arrRes.push(fn(i));
  }
  return arrRes;
}

// a Unary Operator type function (input an return same types of argument)
function calculateAge(el) {
  return 2018 - el;
}

// a Predicate operator type of function (return boolean)
function isAdult(el) {
  return el >= 18;
}

// pass the function 'calculationAge' as an arguments in other function
var ages = arrayCalc(years,calculateAge);
console.log(ages);

// pass the function 'isAdult' as an arguments in other function
var adults = arrayCalc(ages,isAdult);
console.log(adults);