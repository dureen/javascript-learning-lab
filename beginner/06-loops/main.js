/**
 * Beginner Lesson 06 – Loops
 */

console.log("For loop:");
for (let i = 1; i <= 5; i++) {
  process.stdout.write(i + " ");
}
console.log();

console.log("\nWhile loop:");
let n = 5;
while (n > 0) {
  process.stdout.write(n + " ");
  n--;
}
console.log();

console.log("\nFor...of:");
for (const fruit of ["apple", "banana", "cherry"]) {
  process.stdout.write(fruit + " ");
}
console.log();
