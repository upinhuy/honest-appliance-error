// Honest Appliance Error — make.fun bounty entry.
// A washing machine reports, in its own flat voice, the one fault every
// household knows: a sock went in and never came back, and the dryer
// watched it happen without saying a word.
// The program writes exactly one line (1-200 chars, the competition's gate)
// to entry.txt, and refuses to write anything that would fail that gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Error E47: I ate your sock. The dryer saw everything and said nothing.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Check here so a bad line fails loudly, never silently.
const length = [...LINE].length;
if (length < 1 || length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${length} characters, outside the 1-200 gate`);
}

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
