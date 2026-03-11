import { SearchIcon, SparklesIcon, SunIcon } from "./DashboardIcons";

function formatToday() {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());
}

export default function DashboardHeader({ title }) {
  return (
    <header className="space-y-6 rounded-3xl border border-white/10 bg-white/3 p-4 backdrop-blur-sm sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{title}</h1>
          <p className="mt-2 text-base text-slate-400 sm:text-lg">{formatToday()} • Real-time hospital insights</p>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#47618d8c] bg-[#101828] text-[#d4def4] transition hover:bg-[#18243c]"
          aria-label="Switch theme"
        >
          <SunIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-[#4c6ea3a3] bg-[#090f1d]/80 px-4 py-3 shadow-[0_10px_30px_rgba(3,7,18,0.35)]">
        <SearchIcon className="h-6 w-6 text-slate-500" />
        <input
          type="text"
          className="w-full border-none bg-transparent text-base text-[#dbe6f8] outline-none placeholder:text-[#6e7f9f] sm:text-lg"
          placeholder="Ask AI anything... (e.g., 'Show me ICU bed status' or 'Patient wait times')"
        />
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-xl bg-linear-to-r from-[#2f7dff] to-[#8d28de] px-4 py-2 text-sm font-bold text-white shadow-[0_8px_20px_rgba(47,125,255,0.35)] transition hover:brightness-110"
        >
          <SparklesIcon className="h-4 w-4" />
          <span>AI</span>
        </button>
      </div>
    </header>
  );
}
