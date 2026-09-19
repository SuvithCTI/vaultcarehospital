import React from "react";
import { PhoneCall, Ambulance, ShieldAlert } from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const MobileEmergencyDialer = () => {
  const { hospitalInfo } = useHospital();
  const phone = hospitalInfo?.emergencyHotline || "+18007899999";

  return (
    <div className="px-4 py-2">
      <div className="p-4 rounded-2xl bg-white border border-rose-200 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
            <Ambulance className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Emergency 24/7 Hotline</div>
            <div className="text-[10px] text-rose-700 font-semibold">Instant Trauma & ICU Dispatch</div>
          </div>
        </div>
        <a
          href={`tel:${phone}`}
          className="px-3.5 py-2 rounded-xl bg-red-600 text-white font-bold text-xs shadow flex items-center gap-1.5"
        >
          <PhoneCall className="w-3.5 h-3.5" /> Call
        </a>
      </div>
    </div>
  );
};
