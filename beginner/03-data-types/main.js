/**
 * Beginner Lesson 03 – Data Types
 */

const count = 42;
const price = 19.99;
const message = "JavaScript is fun";
const isActive = false;
const nothing = null;
let notDefined;
const unique = Symbol("id");
const big = 9007199254740993n;

console.log(typeof count, count);
console.log(typeof price, price);
console.log(typeof message, message);
console.log(typeof isActive, isActive);
console.log(typeof nothing, nothing); // object (quirk)
console.log(typeof notDefined, notDefined);
console.log(typeof unique, unique.toString());
console.log(typeof big, big);
