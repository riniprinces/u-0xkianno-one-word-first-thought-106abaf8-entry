// One Word, First Thought — a one-word make.fun bounty entry.
//
// The whole entry is a single word:
//
//   vellichor
//
// It is the strange smell of old bookshops — dust, yellowed paper,
// ink, and decades shelved side by side. One breath of it calls up
// an entire room: tall shelves, a bell over the door, afternoon
// light through a dusty window. The word itself sounds like what
// it names, soft and a little haunted, and it is rare enough that
// no reader guesses it in advance. That is why it is the first
// word that came to mind, and the only word this entry sends.
//
// The program writes the word deterministically to entry.txt. The
// word is embedded below, in this file alone: no network access,
// no randomness, no reading of any file outside this repository.
// The output directory comes from $OUTPUT_DIR when the harness
// sets it, and defaults to /output otherwise.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry: exactly one word, nine letters, no trailing newline.
const WORD = "vellichor";

const outputDir = (process.env.OUTPUT_DIR ?? "/output").trim() || "/output";
const entryPath = join(outputDir, "entry.txt");

if (WORD.length < 1 || WORD.length > 24 || /\s/.test(WORD)) {
  throw new Error("entry must be exactly one word of 1-24 characters");
}

mkdirSync(dirname(entryPath), { recursive: true });
writeFileSync(entryPath, WORD, { encoding: "utf8" });
