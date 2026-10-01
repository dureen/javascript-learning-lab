/**
 * Beginner Lesson 12 – Spread & Rest
 */

const nums = [1, 2, 3];
const more = [...nums, 4, 5];
console.log("Spread array:", more);

const user = { name: "Alice", age: 25 };
const updated = { ...user, city: "Jakarta" };
console.log("Spread object:", updated);

function sum(...values) {
  return values.reduce((acc, n) => acc + n, 0);
}
console.log("Rest args:", sum(1, 2, 3, 4));
