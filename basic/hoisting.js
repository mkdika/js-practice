// call the function before the function is declare
calculateAge(1983);

// function declaration
function calculateAge(year) {
  console.log(2018 - year);
}

// to call the function expression first before 
// function expression declarasion.
// hoisting does not work here, it will cause error
// on JS console.
// retirement(1990); // remark to prevent console error.

// function expression
var retirement = function (year) {
  console.log(65 - (2018 - year));
}

retirement(1983); // this will not cause error