import { Navigate } from "react-router";
import BedOccupancySection, { bedData } from "../components/dashboard/BedOccupancySection";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardSidebar, { sidebarLiveMetrics } from "../components/dashboard/DashboardSidebar";
import PatientQueueSection, { queueData } from "../components/dashboard/PatientQueueSection";
import TrendsSection, { trendCards } from "../components/dashboard/TrendsSection";

function Dashboard() {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("username") || "Dr. Sarah Chen";
  const hospitalName ="Admission Discharge Desk";

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-480 flex-col xl:flex-row">
        <DashboardSidebar liveMetrics={sidebarLiveMetrics} userName={userName} userRole="Administrator" />

        <main className="flex-1 px-4 py-4 sm:px-6 sm:py-6 xl:px-8 xl:py-6">
          <DashboardHeader title={hospitalName} />

          <section className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Today Admissions</p>
              <p className="mt-2 text-2xl font-semibold text-slate-100">42</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Avg Wait Time</p>
              <p className="mt-2 text-2xl font-semibold text-slate-100">18 min</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Critical Alerts</p>
              <p className="mt-2 text-2xl font-semibold text-rose-400">3</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Bed Utilization</p>
              <p className="mt-2 text-2xl font-semibold text-emerald-400">65%</p>
            </article>
          </section>

          <div className="mt-6 space-y-6">
            <TrendsSection cards={trendCards} />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
              <BedOccupancySection beds={bedData} />
              <PatientQueueSection patients={queueData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
