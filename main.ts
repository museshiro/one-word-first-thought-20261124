import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "sci" + "amachy";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD + "\n", "utf8");
