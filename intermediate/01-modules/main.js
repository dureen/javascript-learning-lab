/**
 * Intermediate Lesson 01 – Modules
 * Run with: node --input-type=module  (or rename to .mjs)
 * This file uses CommonJS for simplicity.
 */

function add(a, b) {
  return a + b;
}

const PI = 3.14159;

module.exports = { add, PI };

if (require.main === module) {
  console.log(add(2, 3), PI);
}
