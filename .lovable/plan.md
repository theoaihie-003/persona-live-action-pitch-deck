## Deliverable

A cinematic, designed **Netflix-style investor pitch deck PDF** for *PERSONA — Every Mask Protects You… Until It Becomes You*, generated as a downloadable artifact at `/mnt/documents/persona-netflix-pitch-deck.pdf`. No changes to the live app — this is a one-off document.

## Structure (≈20 pages, US Letter landscape, 11×8.5")

1. **Cover** — Title, tagline, "Netflix Original Series", logline pull-quote. Full-bleed key visual.
2. **High Concept** — One-line hook + 3-sentence series premise. Mask-fracture visual.
3. **Series Snapshot** — Format, genre, episode count, comps, partners (sidebar facts).
4. **Why Now / Market** — 4 bullets on prestige adaptation demand + built-in fandom.
5. **Three-Arc Structure** — Timeline ribbon: Arc I/II/III with seasons, themes.
6. **World Rules** — Velvet Room / Shadows / Personas (3-column glossary).
7. **Arc I title page** — Persona 3 "Midnight Blue Death" — full-bleed P3 key visual.
8. **Arc I detail** — S1 Midnight Hour + S2 Nyx Approaches. Themes, engine, climax.
9. **Arc II title page** — Persona 4 "Yellow Fog Truth" — full-bleed P4 key visual.
10. **Arc II detail** — S3 + S4 breakdown.
11. **Arc III title page** — Persona 5 "Red Rebellion" — full-bleed P5 key visual.
12. **Arc III detail** — S5 + S6 breakdown.
13. **Episode Map** — Compact 6×12 grid showing all 72 episode titles.
14. **Character Strategy** — 3 protagonists across generations (silhouette portrait row).
15. **Cast Vision** — Selected fan-cast names per arc (grid).
16. **Visual Language** — Real world vs Other world vs Persona summon (3 panels).
17. **Sound & Score** — Hybrid orchestral/electronic motifs, per-character themes.
18. **Tone Comps** — Stranger Things / Dark / Severance / Euphoria block.
19. **Franchise Potential** — Spinoffs, prequel, interactive episode, anime canon.
20. **Closing** — Tagline + final mask visual, fade to black.

## Generated visuals (6 total, AI image gen)

- **Cover hero** — fractured mask splitting into 3 colored realities (blue/yellow/red).
- **Arc I key visual** — Tartarus tower under split moon, midnight blue palette.
- **Arc II key visual** — Inaba in yellow fog, CRT-TV reflection, distorted face.
- **Arc III key visual** — Joker silhouette on Tokyo rooftop, red mask cracking.
- **Section ornament** — abstract tarot/velvet-room motif (reused as divider).
- **Closing visual** — single mask closing over black with glowing eye.

All saved to `/tmp/persona-deck/assets/` and embedded base64 into the PDF.

## Design system

- **Palette per arc:** P3 deep indigo `#0B1733` + ice `#A9C6FF`; P4 fog yellow `#E8C547` + ink `#1A1A1A`; P5 crimson `#C8102E` + jet black `#0A0A0A` + cream `#F2EAD3`. Cover/global uses tri-color split.
- **Typography:** Headlines in a heavy condensed display face (Anton or Bebas Neue substitute via ReportLab built-in Helvetica-Bold at extreme size + tight tracking); body in Helvetica; accent tagline italic Georgia for editorial weight.
- **Motif:** Thin vertical hairline rule + section number in top-right corner ("03 / 20"). Bottom-left footer: "PERSONA — Netflix Original Series Pitch". No AI-trope accent lines under titles.
- **Layout:** Bold full-bleed hero pages alternating with structured 2-column content pages. Generous margins (0.6"), big silent zones.

## Technical approach

1. `mkdir -p /tmp/persona-deck/assets`.
2. Generate 6 images in parallel via `imagegen--generate_image` (standard/premium model, JPG photographic, PNG for closing mask).
3. Write `build_deck.py` using **reportlab** (Platypus + canvas) for the PDF.
4. Build PDF → convert to images via `pdftoppm` → visually QA every page (overlap, clipping, contrast, palette consistency) → iterate.
5. Copy final to `/mnt/documents/persona-netflix-pitch-deck.pdf` and present with `<presentation-artifact>`.

## Out of scope

- No web pitch site, no PPTX, no trailer script, no interactive episode flow. Those remain available as follow-ups.
