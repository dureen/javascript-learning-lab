/**
 * Intermediate Lesson 07 – Promises
 */

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

wait(200)
  .then(() => "done")
  .then((value) => console.log(value))
  .catch((err) => console.error(err));

Promise.all([wait(100), wait(150)]).then(() => console.log("All finished"));
