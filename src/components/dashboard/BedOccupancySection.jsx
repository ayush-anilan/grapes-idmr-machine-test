import { BedIcon, FilterIcon } from "./DashboardIcons";

const statusClassMap = {
  OCC: "border border-[#ff5a7766] bg-[#7e102847] text-[#ff5a77]",
  AVL: "border border-[#24d18f5c] bg-[#0663443d] text-[#24d18f]",
  MNT: "border border-[#f4b44566] bg-[#7147044d] text-[#f4b445]",
};

function BedStatusCard({ bed }) {
  return (
    <article className="flex min-w-24 flex-col items-center rounded-xl border border-[#425e8a80] bg-[#050a17] px-2 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-[#789cd8a8] hover:shadow-[0_14px_28px_rgba(2,9,23,0.34)]">
      <BedIcon className="h-5 w-5 text-slate-100" />
      <p className="mt-2 text-xl text-slate-50">{bed.id}</p>
      <span className={`mt-2 rounded-full px-2 py-0.5 text-xs tracking-[0.03em] ${statusClassMap[bed.status]}`}>
        {bed.status}
      </span>
      <p className="mt-2 truncate text-center text-sm text-slate-500">{bed.patient}</p>
    </article>
  );
}

export default function BedOccupancySection({ beds }) {
  return (
    <section className="rounded-2xl border border-[#43608f70] bg-[#090f1d] p-5 sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/50 bg-black/20 text-white">
            <BedIcon className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-3xl font-semibold text-slate-100">Bed Occupancy</h2>
            <p className="text-base text-slate-500">Real-time bed status</p>
          </div>
        </div>
        <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-[#d4def4]" aria-label="Filter beds">
          <FilterIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-base text-slate-400">Department</span>
          <div className="min-h-11 w-full rounded-xl border border-[#425e8a8c] bg-[#101828]" />
        </label>
        <label className="space-y-2">
          <span className="text-base text-slate-400">Status</span>
          <div className="min-h-11 w-full rounded-xl border border-[#425e8a8c] bg-[#101828]" />
        </label>
      </div>

      <div className="mt-5 overflow-x-auto pb-1">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
          {beds.map((bed) => (
            <BedStatusCard key={bed.id} bed={bed} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const bedData = [
  { id: "B-101", status: "OCC", patient: "John" },
  { id: "B-102", status: "AVL", patient: "Olivia" },
  { id: "B-103", status: "OCC", patient: "Jane" },
  { id: "B-104", status: "AVL", patient: "Liam" },
  { id: "B-105", status: "OCC", patient: "Chris" },
  { id: "B-106", status: "MNT", patient: "System" },
  { id: "B-107", status: "AVL", patient: "Ella" },
  { id: "B-108", status: "OCC", patient: "Amy" },
  { id: "B-201", status: "AVL", patient: "Noah" },
  { id: "B-202", status: "OCC", patient: "Mike" },
  { id: "B-203", status: "MNT", patient: "System" },
  { id: "B-204", status: "AVL", patient: "Mia" },
  { id: "B-205", status: "OCC", patient: "Lisa" },
  { id: "B-206", status: "AVL", patient: "Theo" },
  { id: "B-207", status: "OCC", patient: "Tom" },
  { id: "B-208", status: "AVL", patient: "Jack" },
  { id: "B-301", status: "OCC", patient: "Sarah" },
  { id: "B-302", status: "AVL", patient: "Ava" },
  { id: "B-303", status: "OCC", patient: "Bob" },
  { id: "B-304", status: "AVL", patient: "Megan" },
  { id: "B-305", status: "OCC", patient: "Nina" },
  { id: "B-306", status: "AVL", patient: "Leo" },
  { id: "B-307", status: "MNT", patient: "System" },
  { id: "B-308", status: "AVL", patient: "Ruth" },
  { id: "B-401", status: "OCC", patient: "Ken" },
  { id: "B-402", status: "AVL", patient: "Hazel" },
  { id: "B-403", status: "OCC", patient: "Raj" },
  { id: "B-404", status: "AVL", patient: "Ivy" },
  { id: "B-405", status: "OCC", patient: "Mona" },
  { id: "B-406", status: "AVL", patient: "Seth" },
  { id: "B-407", status: "OCC", patient: "Zack" },
  { id: "B-408", status: "MNT", patient: "System" },
];
