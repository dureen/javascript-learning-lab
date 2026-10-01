/**
 * Advanced Lesson 09 – Performance
 */

console.time("concat");
let s = "";
for (let i = 0; i < 10000; i++) s += i;
console.timeEnd("concat");

console.time("array-join");
const parts = [];
for (let i = 0; i < 10000; i++) parts.push(i);
parts.join("");
console.timeEnd("array-join");
