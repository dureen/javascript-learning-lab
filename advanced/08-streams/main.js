/**
 * Advanced Lesson 08 – Streams
 */

const { Readable } = require("stream");

const readable = Readable.from(["Hello", " ", "Streams", "!\n"]);
readable.pipe(process.stdout);
