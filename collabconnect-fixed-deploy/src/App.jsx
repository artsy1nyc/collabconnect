const NAV_ITEMS = ["Home", "Projects", "Collaborate", "Learn"];
const SIDE_ITEMS = ["Home", "Projects", "Collaborate", "Learn", "Community"];

export default function CollabConnectHomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111110] text-[#F4EFE6]">
      <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_55%_23%,rgba(212,173,102,0.22),transparent_11%),linear-gradient(120deg,#0F0F0E_0%,#211F1C_38%,#8A8073_100%)] px-6 py-6 md:px-12 md:py-8">
        <BlueprintBackground />

        <header className="relative z-10 flex items-center justify-between">
          <a href="#home" aria-label="Collab Connect home" className="text-[1.75rem] font-semibold uppercase leading-[1.02] tracking-[0.24em]">
            <span>COLLAB</span>
            <br />
            <span className="text-[#D4AD66]">CONNECT</span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center rounded-2xl border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-md md:flex">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`rounded-xl px-8 py-3 text-xs font-medium uppercase tracking-[0.18em] transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4AD66]/70 ${
                  index === 0 ? "bg-[#D4AD66]/25 text-white" : "text-white/75"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <MoreHorizontalIcon className="h-5 w-5 text-white/70" />
            <button className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#D4AD66]/70">
              Collab Connect
            </button>
          </div>

          <button aria-label="Open menu" className="rounded-xl border border-white/10 bg-white/10 p-3 md:hidden">
            <MenuIcon className="h-5 w-5" />
          </button>
        </header>

        <div id="home" className="relative z-10 grid min-h-[calc(100vh-96px)] items-center pt-16 md:grid-cols-[1.05fr_0.95fr] md:pt-0">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-5 text-[0.9rem] uppercase tracking-[0.42em] text-[#D4AD66]/85">
              <span className="h-px w-12 bg-[#D4AD66]/35" />
              CREATIVE COLLABORATION HUB
            </div>

            <h1 className="text-[2.2rem] font-medium uppercase leading-[0.9] tracking-[-0.065em] text-white md:text-[5.2rem]">
              Where
              <br />
              Stories
              <br />
              Take Shape.
            </h1>

            <p className="mt-2 font-serif text-[4.3rem] italic leading-none tracking-[-0.05em] text-[#D4AD66] md:text-[6.5rem]">
              Together.
            </p>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/72 md:text-base">
              A cinematic workspace for creators, builders, and visionaries to collaborate, learn, and bring ideas to life.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <button className="group flex items-center justify-center gap-5 rounded-xl bg-[#D4AD66] px-8 py-5 text-sm font-bold uppercase tracking-[0.16em] text-[#191714] shadow-[0_18px_60px_rgba(212,173,102,0.22)] transition hover:-translate-y-0.5 hover:bg-[#E0BE7A] focus:outline-none focus:ring-2 focus:ring-[#F4EFE6]/80">
                Start a Project
                <span className="grid h-8 w-8 place-items-center rounded-full border border-black/20 transition group-hover:translate-x-1">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </button>

              <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4AD66]/70">
                Explore Creators
              </button>
            </div>
          </div>

          <aside className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 border-l border-white/10 md:block" aria-label="Page sections">
            {SIDE_ITEMS.map((item, index) => (
              <div key={item} className="grid h-28 grid-cols-[56px_160px] border-b border-white/10 text-white/70">
                <div className="flex items-center justify-center text-sm font-semibold text-[#F4EFE6]">0{index + 1}</div>
                <div className="flex items-center text-xs uppercase tracking-[0.28em] [writing-mode:vertical-rl]">{item}</div>
              </div>
            ))}
          </aside>
        </div>

        <button aria-label="Scroll down" className="absolute bottom-8 left-1/2 z-10 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-full border border-white/10 bg-white/80 text-[#1E1B18] shadow-2xl backdrop-blur transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#D4AD66]/70">
          <ArrowDownIcon className="h-7 w-7" />
        </button>
      </section>
    </main>
  );
}

function BlueprintBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] bg-[size:92px_92px]" />

      <div className="absolute left-[42%] top-[11%] h-48 w-48 rounded-full border border-white/10 md:h-72 md:w-72">
        <div className="absolute inset-10 rounded-full border border-white/10" />
        <div className="absolute inset-20 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,236,190,0.95)_0%,rgba(255,214,120,0.55)_26%,rgba(212,173,102,0.22)_48%,transparent_72%)] blur-2xl opacity-90" />
        <div className="absolute left-1/2 top-1/2 h-16 w-[264px] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(255,225,160,0.75)_50%,transparent_100%)] blur-xl opacity-80" />
        <div className="absolute left-1/2 top-1/2 h-[240px] w-16 -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(180deg,transparent_0%,rgba(255,225,160,0.42)_50%,transparent_100%)] blur-2xl opacity-60" />
        <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFE8B0] shadow-[0_0_90px_rgba(255,220,140,.95)]" />
      </div>

      <div className="absolute bottom-0 left-[37%] h-[54vh] w-[70vw] origin-bottom bg-[conic-gradient(from_215deg_at_50%_100%,rgba(255,255,255,.12),transparent_10deg,transparent_18deg,rgba(255,255,255,.08)_20deg,transparent_30deg)]" />

      <svg className="absolute right-0 top-0 h-[60vh] w-[48vw]" viewBox="0 0 600 520" fill="none">
        <path d="M42 108L196 43L352 140L506 66" stroke="white" strokeOpacity="0.13" />
        <path d="M196 43L272 306L506 66" stroke="white" strokeOpacity="0.08" />
        <circle cx="196" cy="43" r="5" fill="#D4AD66" fillOpacity="0.7" />
        <circle cx="352" cy="140" r="7" fill="#D4AD66" fillOpacity="0.7" />
        <circle cx="506" cy="66" r="5" fill="#D4AD66" fillOpacity="0.7" />
        <circle cx="272" cy="306" r="5" fill="#D4AD66" fillOpacity="0.55" />
      </svg>
    </div>
  );
}

function SvgIcon({ className = "", children }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function ArrowRightIcon({ className = "" }) {
  return (
    <SvgIcon className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </SvgIcon>
  );
}

function ArrowDownIcon({ className = "" }) {
  return (
    <SvgIcon className={className}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </SvgIcon>
  );
}

function MenuIcon({ className = "" }) {
  return (
    <SvgIcon className={className}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </SvgIcon>
  );
}

function MoreHorizontalIcon({ className = "" }) {
  return (
    <SvgIcon className={className}>
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </SvgIcon>
  );
}
