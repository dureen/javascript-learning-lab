/**
 * Beginner Lesson 09 – Objects
 */

const person = {
  name: "Bob",
  age: 30,
  city: "Jakarta",
};

console.log(person.name);
person.job = "Developer";

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
