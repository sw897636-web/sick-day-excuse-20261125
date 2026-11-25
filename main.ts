import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Sick-Day Excuse — one line, under 200 characters.
// Evolution of the line, round by round. Each draft was judged on:
// half-believable, fresh idea, twist near the end, real-person voice,
// no wasted words. The final draft is the one that survives all five.
const drafts: { round: number; text: string; verdict: string }[] = [
  {
    round: 1,
    text: "Sorry, I woke up with a bad fever and a sore throat, so I need to take today off sick.",
    verdict: "REJECTED — worn excuse (fever/sore throat), no twist, no specific detail, forgettable.",
  },
  {
    round: 2,
    text: "Can't come in today — my dog ate my alarm clock and then I caught a cold from the vet waiting room.",
    verdict: "REJECTED — dog joke is explicitly worn, and the cold is an afterthought; nothing lands at the end.",
  },
  {
    round: 3,
    text: "At 4:58 I woke up coughing so hard my neighbour knocked to check on me, so I'm staying home today.",
    verdict: "BETTER — specific time 4:58 and a real neighbour, but the ending just stops; the laugh never arrives.",
  },
  {
    round: 4,
    text: "Woke at 4:58 with a throat so sore my voice dropped two octaves, and my kid just asked why Dad sounds like a stranger, so I'm off.",
    verdict: "CLOSE — warm, specific, believable, twist near the end, but 'sounds like a stranger' is soft; the punch needs a sharper image.",
  },
  {
    round: 5,
    text: "Sorry, can't come in today — at 4:58 I sneezed so hard I pulled a muscle in my back, and now I can only shuffle round like a penguin, which I'm pretty sure isn't in the dress code.",
    verdict: "KEPT — specific time (4:58), specific cause (one sneeze, pulled back muscle), a vivid physical image (penguin shuffle), and the twist lands on the last words: the dress code.",
  },
  {
    round: 6,
    text: "Sorry, can't come in today — at 4:58 I sneezed so hard I pulled a muscle in my back, and now I can only shuffle round like a penguin, which I'm pretty sure isn't in the dress code.",
    verdict: "FINAL — re-read round 5 aloud: every clause does work, nothing to cut, twist at the very end. Ship it unchanged.",
  },
];

// The final entry: the last draft, verbatim. Guard the gate: one line,
// under 200 characters, not only whitespace.
const entry = drafts[drafts.length - 1].text;
if (entry.length >= 200 || entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error(`entry fails the gate: ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
console.log(entry);
