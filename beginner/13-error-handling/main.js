/**
 * Beginner Lesson 13 – Error Handling
 */

function safeDivide(a, b) {
  try {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  } catch (err) {
    console.log("Caught:", err.message);
    return null;
  } finally {
    console.log("Division attempt finished");
  }
}

console.log(safeDivide(10, 2));
console.log(safeDivide(10, 0));
