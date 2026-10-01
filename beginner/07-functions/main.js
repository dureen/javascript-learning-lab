/**
 * Beginner Lesson 07 – Functions
 */

function greet(name = "World") {
  return `Hello, ${name}!`;
}

const add = function (a, b) {
  return a + b;
};

const multiply = (a, b) => a * b;

console.log(greet());
console.log(greet("JavaScript"));
console.log(add(3, 5));
console.log(multiply(4, 6));
