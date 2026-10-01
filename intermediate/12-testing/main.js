/**
 * Intermediate Lesson 12 – Testing helpers
 */

function add(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

module.exports = { add, isEven };

if (require.main === module) {
  console.log(add(2, 3));
  console.log(isEven(4));
}
