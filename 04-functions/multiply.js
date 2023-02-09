// 3. Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.
// Get two numbers as input from the user ==> getNumber()
// Multipy two numbers, return result ==> multiply()
// output our equation with the result

function getNumber(prompt) {
	let rlSync = require("readline-sync");
	return parseFloat(rlSync.question(prompt));
}

function multiply(num1, num2) {
	return num1 * num2;
}

let first = getNumber('Enter the first number: ');
let second = getNumber('Enter the second number: ');

console.log(`${first} * ${second} = ${multiply(first, second)}`);
