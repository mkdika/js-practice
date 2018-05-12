var age = prompt('How old are you?');

if (age < 20) {
  console.log("You are teenager");
}else {
  console.log("You are adult");
}

var str;
switch (age) {
  case '1': 
    str = "first anniversary.";
    break;    
  case '10': 
    str = "one decade!";  
    break;
  default:
    str = "ok ok aja";
}

console.log(str);