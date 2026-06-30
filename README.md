# PERSONA — Netflix Original Series Pitch

A cinematic, single-page website presenting a speculative Netflix-style investor pitch for a six-season adaptation of Atlus's *Persona* saga (Persona 3, 4, and 5). Built with **TanStack Start**, **React 19**, and **Tailwind CSS v4**.

---

## Live Site

**Preview:** [https://id-preview--32cd73f0-8878-444c-98bd-2d50e32ad5b3.lovable.app](https://id-preview--32cd73f0-8878-444c-98bd-2d50e32ad5b3.lovable.app)

---

## What This Is

This project is a **fan-made pitch presentation** — not an official production — imagining what a prestige streaming adaptation of the *Persona* games could look like. It includes:

- **Hero section** with the series tagline and high-concept pitch
- **Three Arcs breakdown** covering all six planned seasons
- **World Rules** glossary (Velvet Room, Shadows, Personas)
- **Pitch Deck** section summarizing the 20-page investor PDF
- **Sticky music player** streaming iconic themes from each game

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) (v1) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 with CSS `@theme` tokens |
| Components | Radix UI primitives + shadcn/ui patterns |
| Routing | File-based (`src/routes/`) via TanStack Router |
| State | React hooks (no external state library) |
| Music | YouTube IFrame API + Web Audio API fallback |

---

## Project Structure

```
src/
├── components/
│   ├── persona-site.tsx      # Main landing page (Hero, Arcs, World Rules, Deck)
│   └── ui/                   # shadcn/ui primitive components (Sheet, Select, etc.)
├── routes/
│   ├── __root.tsx            # Root layout + error/404 boundaries
│   └── index.tsx             # Home route — renders PersonaSite
├── styles.css                # Tailwind v4 entry + design tokens
├── router.tsx                # Router factory with QueryClient
├── server.ts                 # Edge-compatible SSR entry
└── start.ts                  # App bootstrap
```

---

## Music Player

The site features a sticky bottom music bar that streams three iconic Atlus/SEGA tracks:

| Track | Arc | Source |
|-------|-----|--------|
| *Full Moon Full Life* | Persona 3 Reload | YouTube embed |
| *Time to Make History* | Persona 4 Golden | YouTube embed |
| *Life Will Change* | Persona 5 Royal | YouTube embed |

### How it works

1. **YouTube IFrame API** loads a hidden player (200x120px — required for playback).
2. If an embed is **region-blocked or disabled**, the player automatically rotates through backup IDs.
3. If **all IDs fail**, a **Web Audio API synthesizer** kicks in — a site-safe melodic fallback built from oscillators and gain nodes, tailored to each track's BPM and mood.
4. Each track has a direct **YouTube link** as a final fallback.

---

## The Pitch Deck (PDF)

A 20-page Netflix-style investor deck was also generated as a downloadable PDF artifact:

- **Location:** `/mnt/documents/persona-netflix-pitch-deck.pdf`
- **Pages:** Cover, High Concept, Series Snapshot, Market, 3-Arc Structure, World Rules, 6 arc detail spreads, Episode Map (72 episodes), Cast Vision, Visual Language, Sound & Score, Comps, Franchise Potential, Closing
- **Design:** US Letter landscape (11x8.5"), arc-specific palettes (Midnight Blue / Fog Yellow / Crimson Red), AI-generated key visuals

---

## Design System

### Arc Palettes

| Arc | Primary | Accent | Mood |
|-----|---------|--------|------|
| **I — Persona 3** | `#0B1733` (deep indigo) | `#A9C6FF` (ice blue) | Death & Acceptance |
| **II — Persona 4** | `#3a2f00` / `#8a6b00` (fog yellow) | `#E8C547` (gold) | Truth & Identity |
| **III — Persona 5** | `#3a0008` / `#8b0a1a` (crimson) | `#FF4D5E` (hot red) | Rebellion & Freedom |

### Typography

- **Headlines:** Sans-serif, bold, tight tracking (`uppercase tracking-[0.4em]` for labels)
- **Body:** System sans stack via Tailwind
- **Tagline:** Serif italic (`font-serif italic`) for editorial weight

---

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

---

## Notes

- This is a **fan project** with no affiliation to Atlus, SEGA, or Netflix.
- All music streams via official YouTube uploads; rights belong to Atlus/SEGA.
- The site is optimized for desktop and tablet viewing; mobile layouts are functional but Head> minimum viable product.
- PDF generation was handled offline via Python/reportlab and is not part of the web build.

---

## License

This project's code is open for reference. *Persona* characters, music, and trademarks are property of Atlus and SEGA.