// for loop
for(var i=1;i<11;i++) {
  console.log(i);
}

var names = ['Andy','Betty','Charlie','Danny','Edwin'];

// for loop to travers all array element
for (var i=0;i<names.length;i++) {
  console.log(names[i]);
}

console.log('');
// for index to travers all array element
for (i in names) {
  console.log(names[i]);
}

console.log('');
// for each with of to travers all array element
for (name of names) {
  console.log(name);
}