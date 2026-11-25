// The Meeting That Should Have Been an Email — program/v1 entry (Node 22).
// Writes a single one-line joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). The file holds exactly the joke: one line,
// under 200 characters, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "The meeting ended the way it began: with someone saying 'per my last email' — the email this meeting was supposed to replace.";

const chars = [...joke].length;
if (chars < 1 || chars > 199) {
  throw new Error(`entry must be 1-199 characters, got ${chars}`);
}
// Gate: one line only, no newlines, no leading/trailing whitespace.
if (joke.includes("\n") || joke.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (joke !== joke.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
