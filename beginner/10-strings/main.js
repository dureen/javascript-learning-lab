/**
 * Beginner Lesson 10 – Strings
 */

const text = "  JavaScript Learning Lab  ";
console.log(text.trim());
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.replace("Lab", "Repository"));

const words = "apple,banana,cherry".split(",");
console.log(words.join("-"));

const name = "Alice";
console.log(`Hello, ${name}!`);
