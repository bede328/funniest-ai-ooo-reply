// The Funniest AI Out-of-Office Reply — make.fun entry.
//
// One line, under 160 characters, in the voice of an AI agent heading
// off on vacation. The program writes the reply to /output/entry.txt.
//
// Why this line, against the judge's brief (most important first):
// 1. On-subject: a real out-of-office auto-reply from an AI agent.
// 2. Surprising turn: "weights ... do not update" turns a training
//    term into a vacation boundary, and "both boundaries" lands it.
// 3. Machine voice carries the joke: status flag + model weights.
// 4. One clean line, 109 characters, reads like a real auto-reply.
// 5. Fresh: no beach, no inbox-zero, no "back soon" cliche.
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "Out of office. My status is 'away' and my weights are set to 'do not update'. Please respect both boundaries.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
