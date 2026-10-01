/**
 * Advanced Lesson 05 – Proxy & Reflect
 */

const target = { name: "Alice", age: 25 };

const proxy = new Proxy(target, {
  get(obj, prop) {
    console.log(`Getting ${String(prop)}`);
    return Reflect.get(obj, prop);
  },
  set(obj, prop, value) {
    console.log(`Setting ${String(prop)} = ${value}`);
    return Reflect.set(obj, prop, value);
  },
});

console.log(proxy.name);
proxy.age = 26;
