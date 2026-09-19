import React, { useState } from "react";
import { useHospital } from "../../context/HospitalContext";
import { Building2, Bed, Activity, CheckCircle2, ArrowRight } from "lucide-react";

export const MobileDepartmentsView = () => {
  const { departments, setIsBookModalOpen } = useHospital();
  const [selectedDeptId, setSelectedDeptId] = useState(departments[0]?.id || "");

  const activeDept = departments.find((d) => d.id === selectedDeptId) || departments[0];

  return (
    <div className="p-4 pb-24 space-y-4">
      <h2 className="text-lg font-bold font-heading text-slate-900">Medical Departments</h2>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {departments.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDeptId(d.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              selectedDeptId === d.id
                ? "bg-teal-600 text-white font-bold shadow-sm"
                : "bg-white text-slate-900 border border-slate-200"
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      {activeDept && (
        <div className="p-4 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <img
            src={activeDept.bannerImage || activeDept.image || "/departments/cardiology.jpg"}
            alt={activeDept.name}
            onError={(e) => { e.currentTarget.src = "/departments/cardiology.jpg"; }}
            className="w-full h-36 rounded-2xl object-cover"
          />
          <div>
            <h3 className="text-base font-bold text-slate-900">{activeDept.name}</h3>
            <p className="text-[11px] text-teal-700 font-semibold mt-0.5">Head: {activeDept.head || activeDept.headOfDepartment || "Senior Specialist"}</p>
            <p className="text-xs text-slate-900 mt-2 leading-relaxed">{activeDept.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100">
              <span className="text-[10px] text-slate-800 font-medium font-medium">Beds</span>
              <div className="font-bold text-slate-900">{activeDept.beds || "75"} Beds</div>
            </div>
            <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-100">
              <span className="text-[10px] text-slate-800 font-medium font-medium">ICU Care</span>
              <div className="font-bold text-slate-900">24/7 On Floor</div>
            </div>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
            <h4 className="font-bold text-slate-900 text-xs">Key Treatments:</h4>
            {activeDept.services?.map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-950 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsBookModalOpen(true)}
            className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition"
          >
            Book Appointment in {activeDept.name}
          </button>
        </div>
      )}
    </div>
  );
};
