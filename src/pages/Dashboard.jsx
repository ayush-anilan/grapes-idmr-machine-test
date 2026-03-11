import { Navigate } from "react-router";
import BedOccupancySection, { bedData } from "../components/dashboard/BedOccupancySection";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardSidebar, { sidebarLiveMetrics } from "../components/dashboard/DashboardSidebar";
import PatientQueueSection, { queueData } from "../components/dashboard/PatientQueueSection";
import TrendsSection, { trendCards } from "../components/dashboard/TrendsSection";

function Dashboard() {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("username") || "Dr. Sarah Chen";
  const hospitalName = "Admission Discharge Desk";

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-480 flex-col xl:flex-row">
        <DashboardSidebar liveMetrics={sidebarLiveMetrics} userName={userName} userRole="Administrator" />

        <main className="flex-1 px-4 py-4 sm:px-6 sm:py-6 xl:px-8 xl:py-6">
          <DashboardHeader title={hospitalName} />

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
