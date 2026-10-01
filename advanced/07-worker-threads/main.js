/**
 * Advanced Lesson 07 – Worker Threads (concept demo)
 */

const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");

if (isMainThread) {
  const worker = new Worker(__filename, { workerData: 5 });
  worker.on("message", (msg) => console.log("From worker:", msg));
  worker.on("error", console.error);
} else {
  parentPort.postMessage(workerData * workerData);
}
