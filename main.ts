// One Word, First Thought — entry program.
//
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The word: psithurism — the sound of wind moving through trees,
// from Greek psithuros, "whispering". Ten letters, one word, no
// explanation. Deterministic: same bytes on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "psithurism";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate: exactly one word, 1-24 characters, no whitespace inside.
if (!/^[^\s]{1,24}$/.test(WORD)) {
  throw new Error(`word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, WORD + "\n", "utf8");

// Self-check: what landed on disk must be exactly the one word.
const back = readFileSync(outPath, "utf8");
if (back !== WORD + "\n") {
  throw new Error(`entry.txt mismatch: ${JSON.stringify(back)}`);
}
