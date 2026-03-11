import { ClockIcon, UsersIcon } from "./DashboardIcons";

const severityClass = {
  high: "border border-[#ff5a7761] bg-[#7e10283d] text-[#ff5a77]",
  medium: "border border-[#f2b34161] bg-[#774c093d] text-[#f2b341]",
  low: "border border-[#24d18f61] bg-[#0663443d] text-[#24d18f]",
};

function QueueCard({ patient }) {
  return (
    <article className="rounded-2xl border border-[#425e8a80] bg-[#050a17] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#789cd8a8] hover:shadow-[0_14px_28px_rgba(2,9,23,0.34)]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-semibold text-slate-100">{patient.name}</h3>
          <span className={`rounded-full px-2 py-0.5 text-xs ${severityClass[patient.priority]}`}>
            {patient.priority}
          </span>
        </div>
        <p className="flex items-center gap-1 text-base text-amber-400">
          <ClockIcon className="h-4 w-4" />
          <span>{patient.waitTime}</span>
        </p>
      </div>

      <p className="mt-1 text-base text-slate-500">{patient.id} • Age {patient.age}</p>
      <div className="my-3 h-px w-full bg-white/10" />
      <div className="flex items-center justify-between text-base text-slate-300">
        <span>{patient.department}</span>
        <span>{patient.reason}</span>
      </div>
    </article>
  );
}

export default function PatientQueueSection({ patients }) {
  return (
    <section className="rounded-2xl border border-[#43608f70] bg-[#090f1d] p-5 sm:p-6">
      <div className="mb-5 flex items-center gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/50 bg-black/20 text-white">
          <UsersIcon className="h-6 w-6" />
        </span>
        <div>
          <h2 className="text-3xl font-semibold text-slate-100">Patient Queue</h2>
          <p className="text-base text-slate-500">6 patients waiting</p>
        </div>
      </div>

      <div className="space-y-3">
        {patients.map((patient) => (
          <QueueCard key={patient.id} patient={patient} />
        ))}
      </div>
    </section>
  );
}

export const queueData = [
  {
    id: "P-1024",
    name: "Robert Martinez",
    age: 45,
    priority: "high",
    waitTime: "15 min",
    department: "Emergency",
    reason: "Chest pain",
  },
  {
    id: "P-1025",
    name: "Emily Chen",
    age: 32,
    priority: "medium",
    waitTime: "28 min",
    department: "General",
    reason: "Fever",
  },
  {
    id: "P-1026",
    name: "David Wilson",
    age: 58,
    priority: "high",
    waitTime: "8 min",
    department: "Cardiology",
    reason: "Follow-up",
  },
];
