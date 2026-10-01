/**
 * Calculator project
 */

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

console.log("2 + 3 =", add(2, 3));
console.log("10 / 2 =", divide(10, 2));
