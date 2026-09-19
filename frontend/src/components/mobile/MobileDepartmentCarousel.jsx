import React from "react";
import { useHospital } from "../../context/HospitalContext";
import { useView } from "../../context/ViewContext";
import { Building2, ArrowRight } from "lucide-react";

export const MobileDepartmentCarousel = () => {
  const { departments } = useHospital();
  const { setActiveTab } = useView();

  return (
    <div className="px-4 py-2 space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-sm text-slate-900 font-heading">Medical Departments</h3>
        <button
          onClick={() => setActiveTab("departments")}
          className="text-xs text-teal-700 font-bold flex items-center gap-1"
        >
          View All <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
        {departments.map((d) => (
          <div
            key={d.id}
            onClick={() => setActiveTab("departments")}
            className="flex-shrink-0 w-44 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 cursor-pointer active:scale-95 transition"
          >
            <img
              src={d.bannerImage || d.image || "/departments/cardiology.jpg"}
              alt={d.name}
              onError={(e) => { e.currentTarget.src = "/departments/cardiology.jpg"; }}
              className="w-full h-20 rounded-xl object-cover"
            />
            <h4 className="font-bold text-xs text-slate-900 line-clamp-1">{d.name}</h4>
            <p className="text-[10px] text-teal-700 font-semibold">{d.beds || "75"} Beds • 24/7 Care</p>
          </div>
        ))}
      </div>
    </div>
  );
};
