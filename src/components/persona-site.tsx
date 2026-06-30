import { useEffect, useRef, useState } from "react";

type Track = {
  id: string;
  title: string;
  arc: string;
  era: string;
  palette: string;
  youtubeId: string;
};

// NOTE: YouTube IDs point to widely-circulated official uploads of the
// Atlus/SEGA tracks. Swap any ID below if a regional block makes one
// unavailable in your market.
const TRACKS: Track[] = [
  {
    id: "fmfl",
    title: "Full Moon Full Life",
    arc: "Arc I · Persona 3 Reload",
    era: "Midnight Hour",
    palette: "from-[#0B1733] via-[#152a55] to-[#0B1733]",
    youtubeId: "s5JfQTuVUDk",
  },
  {
    id: "primetime",
    title: "Time to Make History (Prime Time)",
    arc: "Arc II · Persona 4 Golden",
    era: "Midnight Channel",
    palette: "from-[#3a2f00] via-[#8a6b00] to-[#1a1500]",
    youtubeId: "iEd5JtP4F8I",
  },
  {
    id: "ylwc",
    title: "Your Life Will Change (Life Will Change)",
    arc: "Arc III · Persona 5 Royal",
    era: "Phantom Thieves",
    palette: "from-[#3a0008] via-[#8b0a1a] to-[#0a0000]",
    youtubeId: "BvVQjEcfvBg",
  },
];

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

function useYouTubePlayer(onReady: () => void) {
  const playerRef = useRef<any>(null);
  const containerId = "yt-hidden-player";

  useEffect(() => {
    let cancelled = false;
    const init = () => {
      if (cancelled) return;
      playerRef.current = new window.YT.Player(containerId, {
        height: "0",
        width: "0",
        playerVars: { autoplay: 0, controls: 0, modestbranding: 1, playsinline: 1 },
        events: { onReady: () => onReady() },
      });
    };
    if (window.YT && window.YT.Player) {
      init();
    } else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        init();
      };
      if (!document.getElementById("yt-iframe-api")) {
        const s = document.createElement("script");
        s.id = "yt-iframe-api";
        s.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(s);
      }
    }
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { playerRef, containerId };
}

function MusicPlayer() {
  const [ready, setReady] = useState(false);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const { playerRef, containerId } = useYouTubePlayer(() => setReady(true));

  const current = TRACKS[index];

  const load = (i: number, autoplay: boolean) => {
    if (!playerRef.current?.loadVideoById) return;
    const t = TRACKS[i];
    if (autoplay) playerRef.current.loadVideoById(t.youtubeId);
    else playerRef.current.cueVideoById(t.youtubeId);
  };

  const play = () => {
    if (!ready) return;
    if (!playing) {
      load(index, true);
      setPlaying(true);
    } else {
      playerRef.current?.pauseVideo?.();
      setPlaying(false);
    }
  };

  const skip = (delta: number) => {
    const next = (index + delta + TRACKS.length) % TRACKS.length;
    setIndex(next);
    if (playing) load(next, true);
  };

  const pick = (i: number) => {
    setIndex(i);
    setPlaying(true);
    load(i, true);
  };

  return (
    <>
      <div id={containerId} style={{ position: "fixed", left: -9999, top: -9999 }} />
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
          <div className={`hidden h-12 w-12 shrink-0 rounded-md bg-gradient-to-br ${current.palette} sm:block`} />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold text-white">{current.title}</div>
            <div className="truncate text-xs text-white/60">{current.arc} · {current.era}</div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => skip(-1)}
              className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
              aria-label="Previous track"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
            </button>
            <button
              onClick={play}
              disabled={!ready}
              className="rounded-full bg-white p-3 text-black transition hover:scale-105 disabled:opacity-40"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>
            <button
              onClick={() => skip(1)}
              className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
              aria-label="Next track"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>
            </button>
          </div>
          <div className="hidden gap-1 md:flex">
            {TRACKS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => pick(i)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  i === index
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {t.title.split(" (")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#1a2752_0%,transparent_55%),radial-gradient(circle_at_70%_60%,#7a1020_0%,transparent_55%),radial-gradient(circle_at_50%_90%,#b8961f_0%,transparent_50%)] opacity-70" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-32 pt-28 sm:pt-40">
        <div className="text-xs font-medium uppercase tracking-[0.4em] text-white/60">
          A Netflix Original Series · In Development
        </div>
        <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
          PERSONA
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-xl italic text-white/85 sm:text-2xl">
          Every mask protects you… until it becomes you.
        </p>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Six seasons. Three generations. One question. Adapted from the
          landmark Atlus saga, <span className="text-white">PERSONA</span> is a
          cinematic chronicle of teenagers who pull weapons from inside their
          own souls to face the world they're inheriting.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#arcs" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90">
            Explore the arcs
          </a>
          <a href="#deck" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Read the pitch deck
          </a>
        </div>
      </div>
    </section>
  );
}

const ARCS = [
  {
    n: "I",
    title: "Midnight Blue Death",
    game: "Persona 3 Reload",
    seasons: "Seasons 1 – 2",
    theme: "Death & Acceptance",
    blurb:
      "An hour the world forgets. A tower that grows toward the moon. A class of kids who learn that to live, you must first agree to die.",
    track: "Full Moon Full Life",
    palette: "from-[#0B1733] to-[#1a2a5a]",
    accent: "text-[#A9C6FF]",
    ring: "ring-[#A9C6FF]/30",
  },
  {
    n: "II",
    title: "Yellow Fog Truth",
    game: "Persona 4 Golden",
    seasons: "Seasons 3 – 4",
    theme: "Truth & Identity",
    blurb:
      "A rural town. A television that swallows people whole. A murder mystery whose answer is the face you refuse to see in the mirror.",
    track: "Time to Make History",
    palette: "from-[#3a2f00] to-[#8a6b00]",
    accent: "text-[#E8C547]",
    ring: "ring-[#E8C547]/30",
  },
  {
    n: "III",
    title: "Red Rebellion",
    game: "Persona 5 Royal",
    seasons: "Seasons 5 – 6",
    theme: "Rebellion & Freedom",
    blurb:
      "Tokyo, slick and rotten. A band of outcasts steals the corrupt hearts of the adults who broke them — and learns that even freedom has a price.",
    track: "Life Will Change",
    palette: "from-[#3a0008] to-[#8b0a1a]",
    accent: "text-[#FF4D5E]",
    ring: "ring-[#FF4D5E]/30",
  },
];

function Arcs() {
  return (
    <section id="arcs" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-xs font-medium uppercase tracking-[0.4em] text-white/50">
          Three Arcs · Six Seasons · 72 Episodes
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          One saga, told in three colors.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ARCS.map((a) => (
            <article
              key={a.n}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${a.palette} p-8 ring-1 ${a.ring} transition hover:-translate-y-1`}
            >
              <div className="text-[120px] font-black leading-none text-white/10">{a.n}</div>
              <div className={`mt-[-30px] text-xs font-semibold uppercase tracking-[0.3em] ${a.accent}`}>
                {a.game}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-white">{a.title}</h3>
              <div className="mt-1 text-sm text-white/60">{a.seasons} · {a.theme}</div>
              <p className="mt-5 text-sm leading-relaxed text-white/80">{a.blurb}</p>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                <span>Theme: <span className="text-white">{a.track}</span></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorldRules() {
  const rules = [
    {
      title: "The Velvet Room",
      body: "A space between dream and reality. Only those bound by contract may enter. Igor presides; a long-nosed witness to every soul that walks his blue floor.",
    },
    {
      title: "Shadows",
      body: "The repressed self made flesh. They wear the shape of whatever you refuse to admit — and they grow stronger the longer you lie.",
    },
    {
      title: "Personas",
      body: "Masks of the rebellious heart. To summon one is to accept every part of yourself, including the parts that terrify you.",
    },
  ];
  return (
    <section className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-xs font-medium uppercase tracking-[0.4em] text-white/50">World Rules</div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Three concepts. One mythology.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {rules.map((r) => (
            <div key={r.title} className="bg-neutral-950 p-8">
              <h3 className="text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Deck() {
  const slides = [
    { n: "01", t: "Logline", d: "Three teens, three decades, one question that won't stop asking itself." },
    { n: "02", t: "Why Now", d: "Prestige anime adaptations have arrived. A built-in global fandom is waiting." },
    { n: "03", t: "Tone Comps", d: "Stranger Things meets Dark meets Severance meets Euphoria." },
    { n: "04", t: "Format", d: "6 seasons × 12 eps × 50 min. Cinematic, serialized, hand-off-able between showrunners per arc." },
    { n: "05", t: "Score", d: "Hybrid orchestral/electronic. Per-arc sonic signatures. Diegetic vocal themes." },
    { n: "06", t: "Franchise", d: "Anime canon, interactive episode, Velvet Room spinoff, prequel film." },
  ];
  return (
    <section id="deck" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-xs font-medium uppercase tracking-[0.4em] text-white/50">The Pitch</div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Six slides. One series.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {slides.map((s) => (
            <div key={s.n} className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/30 hover:bg-white/[0.06]">
              <div className="font-mono text-xs text-white/40">{s.n} / 06</div>
              <h3 className="mt-3 text-lg font-semibold text-white">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black pb-32 pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-white/10 pt-10">
          <div className="font-serif text-2xl italic text-white/80">
            "I am thou, thou art I."
          </div>
          <div className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40">
            PERSONA · Netflix Original Series Pitch · Concept Site
          </div>
          <div className="mt-2 text-xs text-white/30">
            Music streamed via official YouTube uploads. © Atlus / SEGA. Fan concept; not affiliated.
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PersonaSite() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <Arcs />
      <WorldRules />
      <Deck />
      <Footer />
      <MusicPlayer />
    </div>
  );
}