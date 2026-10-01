/**
 * Intermediate Lesson 10 – JSON
 */

const data = {
  name: "Alice",
  skills: ["JavaScript", "Git"],
  active: true,
};

const json = JSON.stringify(data, null, 2);
console.log(json);

const parsed = JSON.parse(json);
console.log(parsed.name);
