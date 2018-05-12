function calAge(birthYear) {
  var age = 2018-birthYear;
  return age;
}

function printStatus(name,birthYear) {
  var age = calAge(birthYear);
  var retire = 65 - age;  
  console.log(name+' is '+ age + ' years old and will retire in '+retire+' years later.');
}

printStatus('John',1990);
printStatus('Mike',1983);
printStatus('Mary',1995);
