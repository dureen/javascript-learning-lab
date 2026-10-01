/**
 * Todo CLI project
 */

const fs = require("fs");
const path = require("path");

const TODO_FILE = path.join(__dirname, "todos.json");

function loadTodos() {
  if (!fs.existsSync(TODO_FILE)) return [];
  return JSON.parse(fs.readFileSync(TODO_FILE, "utf8"));
}

function saveTodos(todos) {
  fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
}

const todos = loadTodos();
console.log("Current todos:");
todos.forEach((t, i) => console.log(`${i + 1}. ${t}`));

todos.push("Learn JavaScript");
saveTodos(todos);
console.log("\nAdded 'Learn JavaScript'");
