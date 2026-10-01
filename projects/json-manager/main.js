/**
 * JSON Manager project
 */

const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "data.json");

function write(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

function read() {
  if (!fs.existsSync(FILE)) return {};
  return JSON.parse(fs.readFileSync(FILE, "utf8"));
}

write({ name: "Alice", score: 90 });
const loaded = read();
loaded.score += 5;
write(loaded);
console.log(read());
