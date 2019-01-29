var names = ['John','Jane','Mark'];
console.log(names);

console.log(names.indexOf('Mark'));

var years = new Array(1999,1969, 1948);
console.log(years);

// get array element by index
console.log(names[0]);

// add element to the last
names.push('Andy')

// add element to first index
names.unshift('Zack');

console.log(names);

// remove last element of array
names.pop()

console.log(names)

// remove first element of array
names.shift()

console.log(names)

// sort the array
names.sort();

console.log(names);
