import React from "react";
import { useHospital } from "../../context/HospitalContext";
import { Activity, CheckCircle2 } from "lucide-react";

export const MobileServicesView = () => {
  const { services, setIsBookModalOpen } = useHospital();

  return (
    <div className="p-4 pb-24 space-y-4">
      <h2 className="text-lg font-bold font-heading text-slate-900">Services</h2>

      <div className="space-y-3">
        {services.map((srv) => (
          <div key={srv.id} className="p-4 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-950 text-[10px] font-bold">
                  {srv.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-1">{srv.title}</h3>
              </div>
              <span className="text-xs font-bold text-teal-700">{srv.priceRange}</span>
            </div>

            <p className="text-xs text-slate-900 leading-relaxed">{srv.description}</p>

            <button
              onClick={() => setIsBookModalOpen(true)}
              className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-sm transition"
            >
              Book Service
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
