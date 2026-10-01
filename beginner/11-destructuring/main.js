/**
 * Beginner Lesson 11 – Destructuring
 */

const person = { name: "Alice", age: 25, city: "Jakarta" };
const { name, age } = person;
console.log(name, age);

const fruits = ["apple", "banana", "cherry"];
const [first, second] = fruits;
console.log(first, second);

function printUser({ name, age }) {
  console.log(`${name} is ${age}`);
}
printUser(person);
