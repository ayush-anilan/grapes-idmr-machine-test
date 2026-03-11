import {
  BedIcon,
  ChevronDownIcon,
  ClockIcon,
  PulseIcon,
  SparklesIcon,
  TrendIcon,
  UsersIcon,
} from "./DashboardIcons";

const iconMap = {
  users: UsersIcon,
  clock: ClockIcon,
  pulse: PulseIcon,
  bed: BedIcon,
};

function TrendCard({ card }) {
  const Icon = iconMap[card.icon] ?? TrendIcon;

  return (
    <article className="rounded-2xl border border-[#425e8a6b] bg-[#060b17] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#789cd8a8] hover:shadow-[0_14px_28px_rgba(2,9,23,0.34)]">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/50 bg-black/20 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-base text-slate-400">{card.label}</p>
      <p className="mt-2 text-4xl font-semibold text-slate-50">{card.value}</p>
      <p className="mt-1 text-base text-slate-500">{card.subLabel}</p>
      <p className={`mt-2 text-base ${card.emphasisClass}`}>{card.emphasis}</p>
    </article>
  );
}

export default function TrendsSection({ cards }) {
  return (
    <section className="rounded-2xl border border-[#43608f70] bg-[#090f1d] p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-slate-900">
            <TrendIcon className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-3xl font-semibold text-slate-100">Trends</h2>
            <p className="text-base text-slate-500">AI-powered analytics & insights</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-12 w-52 rounded-2xl border border-white/10 bg-[#101828]" />
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full bg-[#8539be2e] px-4 py-2 text-sm text-[#cc8aff]"
          >
            <SparklesIcon className="h-4 w-4" />
            <span>AI</span>
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
        {cards.map((card) => (
          <TrendCard key={card.label} card={card} />
        ))}
      </div>

      <button
        type="button"
        className="mt-5 flex w-full items-center justify-between rounded-xl border border-[#425e8a80] bg-[#060b17] px-4 py-3 text-lg text-[#eff5ff]"
      >
        <span>Weekly Overview</span>
        <ChevronDownIcon className="h-5 w-5 text-slate-400" />
      </button>
    </section>
  );
}

export const trendCards = [
  {
    icon: "users",
    label: "Expected Patient Count",
    value: "284",
    subLabel: "Today",
    emphasis: "+12%",
    emphasisClass: "text-emerald-400",
  },
  {
    icon: "clock",
    label: "Peak Time",
    value: "2:30 PM",
    subLabel: "Highest traffic",
    emphasis: "Next: 6:45 PM",
    emphasisClass: "text-sky-400",
  },
  {
    icon: "pulse",
    label: "Patient Admissions",
    value: "156",
    subLabel: "This Week",
    emphasis: "+8%",
    emphasisClass: "text-emerald-400",
  },
  {
    icon: "bed",
    label: "Total Beds",
    value: "450",
    subLabel: "156 available",
    emphasis: "65% occupied",
    emphasisClass: "text-blue-400",
  },
];
