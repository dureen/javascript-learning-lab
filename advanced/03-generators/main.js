/**
 * Advanced Lesson 03 – Generators
 */

function* countdown(n) {
  while (n > 0) {
    yield n;
    n -= 1;
  }
}

for (const value of countdown(5)) {
  process.stdout.write(value + " ");
}
console.log();
