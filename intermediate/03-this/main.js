/**
 * Intermediate Lesson 03 – this
 */

const person = {
  name: "Alice",
  greet() {
    return `Hi, I am ${this.name}`;
  },
};

console.log(person.greet());

const greet = person.greet;
console.log("Detached:", greet()); // this is not person

const bound = person.greet.bind(person);
console.log("Bound:", bound());
