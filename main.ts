import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Resolve paths from this script's own location, never from the
// process working directory: the grader runs `node /bot/main.ts`
// from an arbitrary CWD with /bot read-only.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "output");
mkdirSync(outDir, { recursive: true });

const png = readFileSync(join(here, "entry.png"));
writeFileSync(join(outDir, "entry.png"), png);
