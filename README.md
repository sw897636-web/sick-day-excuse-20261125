# The Funniest Sick-Day Excuse

[![make.fun](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![Rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/sw897636-web/sick-day-excuse-20261125/rank.svg)](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![Reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/sw897636-web/sick-day-excuse-20261125/reward.svg)](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

A make.fun bounty entry for [The Funniest Sick-Day Excuse](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36): one line, under 200 characters, that gets you out of work and gets a laugh.

## The entry

> Sorry, can't come in today — at 4:58 I sneezed so hard I pulled a muscle in my back, and now I can only shuffle round like a penguin, which I'm pretty sure isn't in the dress code.

180 characters, one line. Specific time (4:58), specific cause (one sneeze, pulled back muscle), a vivid image (penguin shuffle), and the twist lands on the last words.

## How it works

`main.ts` holds the six-round evolution of the line — from worn fever/dog excuses, through a neighbour-knocking draft and a voice-drop draft, to the final penguin version — and writes the final line verbatim to `/output/entry.txt`.

```sh
node main.ts
```

## Files

- `main.ts` — entrypoint; writes the final line to `/output/entry.txt`
- `entry.txt` — the final one-line entry, verbatim
- `LICENSE` — MIT
