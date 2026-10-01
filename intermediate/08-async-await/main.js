/**
 * Intermediate Lesson 08 – Async / Await
 */

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData(name) {
  console.log(`Fetching ${name}...`);
  await delay(200);
  return `Data from ${name}`;
}

async function main() {
  const results = await Promise.all([fetchData("API-A"), fetchData("API-B")]);
  results.forEach((r) => console.log(r));
}

main();
