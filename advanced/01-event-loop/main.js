/**
 * Advanced Lesson 01 – Event Loop
 */

console.log("1. sync start");

setTimeout(() => console.log("4. timeout"), 0);

Promise.resolve().then(() => console.log("3. microtask"));

console.log("2. sync end");
