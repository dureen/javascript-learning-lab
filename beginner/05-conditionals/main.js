/**
 * Beginner Lesson 05 – Conditionals
 */

function checkNumber(n) {
  if (n > 0) return "positive";
  if (n < 0) return "negative";
  return "zero";
}

for (const value of [5, -3, 0]) {
  console.log(`${value} is ${checkNumber(value)}`);
}

const age = 18;
const status = age >= 18 ? "adult" : "minor";
console.log(`Age ${age} → ${status}`);
