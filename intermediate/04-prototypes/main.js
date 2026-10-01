/**
 * Intermediate Lesson 04 – Prototypes
 */

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

const cat = new Animal("Whiskers");
console.log(cat.speak());
console.log(Object.getPrototypeOf(cat) === Animal.prototype);
