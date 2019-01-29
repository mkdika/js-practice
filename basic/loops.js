var names = ['Andy', 'Betty', 'Charlie', 'Danny', 'Edwin'];
console.log(names);

console.log('Use for index:');
// for loop to travers all array element
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log('Use in:');
// for index to travers all array element
for (i in names) {
  console.log(names[i]);
}

console.log('Use of:');
// for each with of to travers all array element
// work since ES6
for (name of names) {
  console.log(name);
}

console.log('Use do..while:');
// use do..while to travers all array element
var i = 0;
do {
  console.log(names[i]);
  i++;
}while(i<names.length);