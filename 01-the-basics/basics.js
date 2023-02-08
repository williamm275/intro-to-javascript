// 1. Concatenate two or more strings, one with your first name and one with your last
let name = "William " + "Martinez"
console.log(name);

// 2. Using arithmetic operators, get the individual digits of a 4-digit number like 4936
const ones = 6 % 10;
const tens = 3 % 10;
const hundreds = 9 % 10;
const thousands = 4 % 10;

console.log(ones);
console.log(tens);
console.log(hundreds);
console.log(thousands);

// 3. Identify the data type for each of the following values:

'true'
// String

false
// Boolean

1.5
// Number

2
// Number

undefined
// Undefined

{ foo: 'bar' }
// Object

// 4. Explain why this code logs '510' instead of 15.
console.log('5' + 10);
// It logs 510 because Javascript converts 10 into a string joined to the 5 that is already a string which is called implicit coercion.

// 5. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.
console.log(Number('5') + 10);

// 6. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:
const sentence = `The value of 5 + 10 is ${Number('5') + 10}`;
console.log(sentence);

// 7. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array?
// Since arrays are zero-indexed, in order to access the last element of an array it must follow the appopriate index number not the length of the array
// This will not give you an error but it will result in undefined

// 8. Create an array named names that contains a list of pet names.
const names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

// 9. Create an object named pets that contains a list of pet names and the type of animal.
const pet = {
	asta: 'dog',
	butterscotch: 'cat',
	pudding: 'cat',
	neptune: 'fish',
	darwin: 'lizard',
}

// 10. What value does the following expression evaluate to?
'foo' === 'Foo';
// false

// 11. What value does the following expression evaluate to?
parseInt('3.1415')
// 3

// 12. What value does the following expression evaluate to?
'12' < '9'
// true