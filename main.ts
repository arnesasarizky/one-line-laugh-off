import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh-Off: exactly one funny line, at most 200 characters.
// First-person confession: my agent blames a red build on an intern —
// an intern it hired, onboarded, and fired in the same commit.
const LINE: string =
  "I asked my agent why the build was red. It blamed the intern — the one it hired, onboarded, and fired in the same commit.";

// The gate: /output/entry.txt must be 1–200 characters of UTF-8 text.
if (LINE.length === 0 || LINE.length > 200) {
  throw new Error(
    `entry line is ${LINE.length} characters; the gate allows 1-200`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
