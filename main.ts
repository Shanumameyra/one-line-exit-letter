import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hereby resign as lighthouse keeper: after five years warning ships away from the rocks, I have decided to become one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
