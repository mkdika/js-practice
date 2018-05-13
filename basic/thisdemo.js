// this will print global window object
console.log(this);

var john = {
  name: 'John',
  age: 30,
  myage: function() {
    
    // this will print the john object
    console.log(this);

    innerFun();

    function innerFun() {
      // this will print global window object since not registered 
      // and own by particular object.
      console.log(this);
    }

    var innerFun2 = function() {
      // this also will print the global window object.
      console.log(this);
    }

    innerFun2();
  }
}

john.myage();