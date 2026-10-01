/**
 * Intermediate Lesson 02 – Classes
 */

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    return `${this.name} says woof!`;
  }
}

const dog = new Dog("Buddy", 3);
console.log(dog.bark());
