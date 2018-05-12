function calAge(birthYear) {
  var age = 2018-birthYear;
  return age;
}

var ageJohn = calAge(1990);
var ageMike = calAge(1983);
var ageMary = calAge(1995);

function printStatus(name,age) {
  var retire = 65 - age;
  console.log(name+', retire: '+retire);
}

console.log('John age: '+ageJohn);
printStatus('John',ageJohn);
console.log('Mike age: '+ageMike);
printStatus('Mike',ageMike);
console.log('Mary age: '+ageMary);
printStatus('Mary',ageMary);
