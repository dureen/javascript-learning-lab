/**
 * Advanced Lesson 10 – Design Patterns (Singleton & Factory)
 */

const Singleton = (function () {
  let instance;
  return {
    getInstance() {
      if (!instance) instance = { id: Math.random() };
      return instance;
    },
  };
})();

function createShape(type) {
  if (type === "circle") return { type, area: (r) => Math.PI * r * r };
  if (type === "square") return { type, area: (s) => s * s };
  throw new Error("Unknown shape");
}

const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log(a === b);

console.log(createShape("circle").area(5));
