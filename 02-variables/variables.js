// 3. What happens when you run the following program? Why do we get that result?
{
  let foo = 'bar';
}

console.log(foo);
/* error foo is not defined is logged to the console.
This is because foo is within a block scope but trying to be
accessed outside of it's scope. */

// 4.  What happens when you run the following code? Why?
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
// An error occurs because you cannot reassign a constant variable

// 5. What does this program log to the console? Why?
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
// 'bar' is logged to the console because it is within the global scope.

// 6. Will this program produce an error when run? Why or why not?
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
// This program doesn't give an error, and it logs bar.
// Since the two const variables are separate entities -- that is, the declaration on line 3 declares a completely new constant.

