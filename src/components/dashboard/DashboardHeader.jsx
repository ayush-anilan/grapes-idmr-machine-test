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
    <header className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{title}</h1>
          <p className="mt-2 text-xl text-slate-400">{formatToday()} • Real-time hospital insights</p>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#47618d8c] bg-[#101828] text-[#d4def4]"
          aria-label="Switch theme"
        >
          <SunIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-[#425e8a99] bg-[#090f1d] px-4 py-3">
        <SearchIcon className="h-6 w-6 text-slate-500" />
        <input
          type="text"
          className="w-full border-none bg-transparent text-lg text-[#dbe6f8] outline-none placeholder:text-[#6e7f9f]"
          placeholder="Ask AI anything... (e.g., 'Show me ICU bed status' or 'Patient wait times')"
        />
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-[#2f7dff] to-[#8d28de] px-4 py-2 text-sm font-bold text-white"
        >
          <SparklesIcon className="h-4 w-4" />
          <span>AI</span>
        </button>
      </div>
    </header>
  );
}
