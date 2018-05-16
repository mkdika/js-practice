// CLOSURE DEMO

function getFunc() {
  var greeting = 'Hello';
  return function(name) {
    console.log(greeting+' '+name);
  }
}

var abc = getFunc();
abc('Maikel');