# Which Bin? — HKU Hall Recycling Helper

A tiny local prototype for the AILT9019 Week 2 build task (topic idea #2:
*Recycling rules helper*).

**One sentence:** Hall residents who need to know which bin an item goes in
under published campus recycling rules.

## How to run

No installation, no server, no internet needed:

1. Open this folder.
2. Double-click `index.html` — it opens in your browser.

Type an item (or click an example chip) and the page tells you which bin it
goes in, where the facility is, and the published source the answer came from.

## What it does NOT do

- It does **not** handle hazardous-waste disposal (paint, chemicals, ordinary
  batteries, medicine, sharps…). It refuses and points to hall staff / the
  Sustainability Unit.
- It does **not** override building-staff instructions. On-site instructions
  always win.
- It does **not** invent rules. Anything missing from the published source
  gets an honest "not covered" answer.

## Data source & permission

All rules come from HKU Estates Office's public *re Campaign* pages:

- Recycling facilities: <https://www.wastereduction.hku.hk/re-facilities>
- Recycling 101 guide: <https://www.wastereduction.hku.hk/recycling-101>

Public web pages, curated by hand into `rules.js` (last checked 10 Sep 2026).
Every answer shown in the app links back to the source.

## File map

| File | Role |
|---|---|
| `index.html` | The whole app (page + logic). No build step. |
| `rules.js` | The only place rules live. Edit this to add items — after checking the published source. |
| `SKILL.md` | Lets an AI coding agent answer the same questions using this dataset. |
| `README.md` | This file. |

## Test walkthrough (how to tell it works)

| Type this | Expected behaviour |
|---|---|
| `plastic bottle` | Plastic recycling + note about the Central Podium / Pine Court exception |
| `rechargeable battery` | re Kiosk ONLY — never in hall bins |
| `pizza box` | "Not recyclable" — greasy cardboard is contaminated |
| `paint thinner` | Refusal: hazardous waste is out of scope, contact staff |
| `glass jar` | Honest "not covered" (source lists glass *bottles* only) — no guessing |

The last two rows are the deliberate safe-failure cases: the prototype would
rather refuse or admit ignorance than make up a rule.

## How to extend

1. Check the published source first.
2. Add one entry to `ITEMS` in `rules.js` (keywords, label, bin, note).
3. Refresh the page and test the new item plus one refusal case.
