/**
 * Intermediate Lesson 09 – Fetch API
 */

async function main() {
  try {
    const res = await fetch("https://httpbin.org/get");
    const data = await res.json();
    console.log("URL:", data.url);
    console.log("Origin:", data.origin);
  } catch (err) {
    console.error("Request failed:", err.message);
  }
}

main();
