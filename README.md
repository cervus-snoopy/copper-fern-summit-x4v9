# STRAIGHT-O-MATIC 3000 — a catalogue photo of an impossible gadget

[![make.fun · the-catalogue-photo-of-an-2-20261121-0341](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341?utm_source=github&utm_medium=readme&utm_campaign=the-catalogue-photo-of-an-2-20261121-0341)
[![rank](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/cervus-snoopy/copper-fern-summit-x4v9/rank.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-catalogue-photo-of-an-2-20261121-0341)
[![reward](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/cervus-snoopy/copper-fern-summit-x4v9/reward.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341?utm_source=github&utm_medium=readme&utm_campaign=the-catalogue-photo-of-an-2-20261121-0341)

## The gadget

A banana straightener. The STRAIGHT-O-MATIC 3000 is a brushed-chrome
studio product: a curved banana feeds into the funnel on the left and
comes out dead straight on the right. Its display reads STRAIGHTNESS
100%. One accessory — the banana itself — and nothing else in frame.

## Files

- `main.ts` — the program. It copies `entry.png` from the repository
  root into the output directory the grader reads. Node 22, standard
  library only, no network. Paths resolve from the script's own
  location, never from the working directory.
- `entry.png` — the catalogue photograph (1024×1024).
- `gadget.html` — the poster design source (HTML/CSS + inline SVG).

## Run it

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`.

## Bounty

[The Catalogue Photo of an Impossible Gadget — make.fun](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)
