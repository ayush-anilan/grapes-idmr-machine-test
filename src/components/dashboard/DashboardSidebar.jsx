import Logo from "../../assets/grapeslogo.png";
import {
  AlertIcon,
  BellIcon,
  CalendarIcon,
  ClockIcon,
  DashboardIcon,
  SettingsIcon,
  UserIcon,
  BedIcon,
} from "./DashboardIcons";

const navItems = [{ label: "Dashboard", icon: DashboardIcon, active: true }];
const actionItems = [
  { label: "Notifications", icon: BellIcon, badge: "3" },
  { label: "Settings", icon: SettingsIcon },
];

const navItemClass =
  "flex w-full items-center gap-3 rounded-[0.9rem] px-4 py-3 text-base text-slate-300 transition hover:bg-white/5";

function LiveMetricCard({ metric }) {
  return (
    <article className="rounded-2xl border border-[#4d6fa45c] bg-[#090f1d] p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-400/95">
          <metric.icon className="h-4 w-4" />
          <span>{metric.label}</span>
        </div>
        <span className={metric.delta.startsWith("-") ? "text-red-500" : "text-emerald-400"}>
          {metric.delta}
        </span>
      </div>
      <p className="mt-2 text-4xl font-semibold text-slate-100">{metric.value}</p>
      {metric.meta ? <p className="mt-2 text-base text-violet-400">{metric.meta}</p> : null}
    </article>
  );
}

export default function DashboardSidebar({ liveMetrics, userName, userRole }) {
  return (
    <aside className="flex w-full flex-col border-r border-white/10 bg-[#030712] xl:sticky xl:top-0 xl:min-h-screen xl:w-80">
      <div className="border-b border-white/10 px-6 py-6">
        <img src={Logo} alt="Grapes IDMR" className="h-14 w-auto rounded-lg bg-white p-2" />
      </div>

      <div className="border-b border-white/10 px-4 py-5">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`${navItemClass} bg-[#030712] text-slate-50`}
            aria-current={item.active ? "page" : undefined}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="border-b border-white/10 px-4 py-6">
        <p className="mb-3 px-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Live Metrics
        </p>
        <div className="space-y-3">
          {liveMetrics.map((metric) => (
            <LiveMetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </div>

      <div className="mt-auto px-4 py-5">
        <div className="space-y-2">
          {actionItems.map((item) => (
            <button key={item.label} type="button" className={navItemClass}>
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
              {item.badge ? (
                <span className="ml-auto rounded-full bg-[#ff3558] px-2 py-0.5 text-xs font-bold text-white">
                  {item.badge}
                </span>
              ) : null}
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#475e8859] bg-[#101e3a80] p-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[radial-gradient(circle_at_25%_25%,#4c9dff_3%,#6651ff_50%,#7f2ee8_100%)] text-white">
            <UserIcon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xl leading-none text-slate-100">{userName}</p>
            <p className="mt-1 text-base text-slate-400">{userRole}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export const sidebarLiveMetrics = [
  { label: "Today's Appointments", value: "42", delta: "+5", icon: CalendarIcon },
  { label: "Pending Appointments", value: "28", delta: "-3", icon: ClockIcon },
  { label: "Available Beds", value: "156", delta: "+12", icon: BedIcon, meta: "AI: 85% by EOD" },
  { label: "Insurance Pending", value: "34", delta: "+8", icon: AlertIcon, meta: "AI: High priority" },
];
