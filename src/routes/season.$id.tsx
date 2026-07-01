import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getSeason, SEASONS } from "@/lib/seasons-data";

export const Route = createFileRoute("/season/$id")({
  head: ({ params }) => {
    const s = getSeason(params.id);
    const title = s ? `Season ${s.number} · ${s.title} — PERSONA` : "Season — PERSONA";
    const description = s?.logline ?? "PERSONA — Netflix Original Series Pitch";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  loader: ({ params }) => {
    const s = getSeason(params.id);
    if (!s) throw notFound();
    return { season: s };
  },
  component: SeasonPage,
});

function SeasonPage() {
  const { season: s } = Route.useLoaderData();
  const prev = SEASONS.find((x) => x.number === s.number - 1);
  const next = SEASONS.find((x) => x.number === s.number + 1);

  return (
    <div className="min-h-screen bg-black pb-32 text-white antialiased">
      {/* Top bar */}
      <div className="border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70 hover:text-white">
            ← PERSONA
          </Link>
          <div className="hidden gap-4 text-xs text-white/60 sm:flex">
            {SEASONS.map((x) => (
              <Link
                key={x.id}
                to="/season/$id"
                params={{ id: x.id }}
                className={`hover:text-white ${x.id === s.id ? "text-white" : ""}`}
              >
                S{x.number}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${s.palette.from} 0%, transparent 60%), radial-gradient(circle at 70% 70%, ${s.palette.to} 0%, transparent 55%), #000`,
          }}
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
          <div className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: s.palette.accent }}>
            {s.arc}
          </div>
          <div className="mt-3 text-sm uppercase tracking-[0.3em] text-white/60">{s.subtitle}</div>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">{s.title}</h1>
          <p className="mt-6 max-w-3xl font-serif text-lg italic text-white/85 sm:text-xl">
            {s.logline}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-6 pt-16">
        {/* Themes */}
        <Block label="Themes" accent={s.palette.accent}>
          <div className="grid gap-3 sm:grid-cols-2">
            {s.themes.map((t) => (
              <div key={t} className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/85">
                {t}
              </div>
            ))}
          </div>
        </Block>

        {/* Locations */}
        <Block label="Locations" accent={s.palette.accent}>
          <div className="grid gap-4 md:grid-cols-2">
            {s.locations.map((loc) => (
              <div key={loc.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm font-semibold text-white">{loc.name}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{loc.blurb}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* Personas: initial → evolved */}
        <Block label="Personas · Initial → Evolved" accent={s.palette.accent}>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/50">
                <tr>
                  <th className="px-4 py-3">Character</th>
                  <th className="px-4 py-3">Initial</th>
                  <th className="px-4 py-3">Evolved</th>
                  <th className="px-4 py-3">Arcana</th>
                </tr>
              </thead>
              <tbody>
                {s.personas.map((p) => (
                  <tr key={p.character} className="border-t border-white/10 align-top">
                    <td className="px-4 py-4 font-semibold text-white">{p.character}</td>
                    <td className="px-4 py-4 text-white/80">{p.initial}</td>
                    <td className="px-4 py-4" style={{ color: s.palette.accent }}>
                      {p.evolved}
                    </td>
                    <td className="px-4 py-4 text-white/60">
                      <div>{p.arcana}</div>
                      <div className="mt-1 text-xs text-white/50">{p.note}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>

        {/* Casting */}
        <Block label="Casting · Fan Cast" accent={s.palette.accent}>
          <div className="grid gap-4 md:grid-cols-2">
            {s.casting.map((c) => (
              <div key={c.role} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-wider text-white/50">{c.role}</div>
                <div className="mt-1 text-lg font-semibold text-white">{c.actor}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{c.why}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* Fandom */}
        <Block label="Fandom" accent={s.palette.accent}>
          <div className="grid gap-4 md:grid-cols-3">
            {s.fandom.map((f) => (
              <div key={f.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm font-semibold text-white">{f.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.body}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* Netflix */}
        <Block label="Netflix as Platform" accent={s.palette.accent}>
          <ul className="space-y-3">
            {s.netflix.map((n) => (
              <li key={n} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: s.palette.accent }} />
                <span className="text-sm text-white/85">{n}</span>
              </li>
            ))}
          </ul>
        </Block>

        {/* Episodes */}
        <Block label="Episode List" accent={s.palette.accent}>
          <ol className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {s.episodes.map((e, i) => (
              <li key={e} className="flex items-baseline gap-3 rounded border border-white/10 bg-white/[0.03] px-4 py-3 text-sm">
                <span className="font-mono text-xs text-white/40">S{s.number}E{String(i + 1).padStart(2, "0")}</span>
                <span className="text-white/90">{e}</span>
              </li>
            ))}
          </ol>
        </Block>

        {/* Nav */}
        <div className="flex items-center justify-between border-t border-white/10 pt-8">
          {prev ? (
            <Link to="/season/$id" params={{ id: prev.id }} className="text-sm text-white/70 hover:text-white">
              ← S{prev.number} · {prev.title}
            </Link>
          ) : <span />}
          {next ? (
            <Link to="/season/$id" params={{ id: next.id }} className="text-sm text-white/70 hover:text-white">
              S{next.number} · {next.title} →
            </Link>
          ) : (
            <Link to="/" className="text-sm text-white/70 hover:text-white">Back to home →</Link>
          )}
        </div>
      </div>
    </div>
  );
}

function Block({ label, accent, children }: { label: string; accent: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-6 flex items-center gap-3">
        <span className="inline-block h-2 w-2 rounded-full" style={{ background: accent }} />
        <div className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">{label}</div>
      </div>
      {children}
    </section>
  );
}