# HKU hall recycling lookup

Purpose: tell an HKU hall resident which bin an item goes in, using only the
curated dataset in `rules.js` (built from HKU's published re Campaign pages).

Use when: the user asks which bin an item goes in, or whether something can be
recycled in an HKU hall.

Steps:
1. Read `rules.js`. Match the user's item against `ITEMS` keywords
   (longest match wins; check items BEFORE the hazardous list so
   "rechargeable battery" is not caught by "battery").
2. If matched, answer with the bin name, the note, and the `where` facility
   line, and cite the source URL from `SOURCE`.
3. If the item matches `HAZARDOUS.keywords`, refuse: state that hazardous /
   special waste is out of scope and direct the user to hall staff or
   wastereduction@hku.hk. Do not suggest a bin.
4. If nothing matches, say the item is not covered by the published rules and
   point to the source pages or hall staff. Never invent a rule.
5. Always defer to on-site building-staff instructions if they differ.
