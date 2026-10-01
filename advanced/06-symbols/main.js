/**
 * Advanced Lesson 06 – Symbols
 */

const id = Symbol("id");
const user = {
  name: "Alice",
  [id]: 123,
};

console.log(user.name);
console.log(user[id]);
console.log(Object.keys(user)); // does not include symbol
console.log(Object.getOwnPropertySymbols(user));
