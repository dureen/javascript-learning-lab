/**
 * Simple API client project
 */

async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function main() {
  try {
    const data = await getJson("https://httpbin.org/ip");
    console.log("Origin:", data.origin);
  } catch (err) {
    console.error(err.message);
  }
}

main();
