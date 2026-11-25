// One-line fridge roast entry for make.fun
// u-suzy-one-line-one-laugh-roast-your-fridge-f1063521
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My fridge beeps if the door stays open ten seconds, but it let the milk expire three weeks ago without a word — apparently it only snitches on me, never on the dairy.";

if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`Entry must be 1-200 chars, got ${ROAST.length}`);
}
if (!ROAST.trim()) throw new Error("Entry must not be only whitespace");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
console.log(`Wrote entry (${ROAST.length} chars) to ${join(outDir, "entry.txt")}`);
console.log("Entry validated: single line, within the 1-200 character gate.");
