import React from "react";
import { PhoneCall, ShieldAlert, Ambulance, Clock, Zap } from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const EmergencyBanner = () => {
  const { hospitalInfo } = useHospital();
  const phone = hospitalInfo?.emergencyHotline || "+1 (800) 789-9999";
  const ambulance = hospitalInfo?.ambulanceNumber || "911 / +1 (800) 789-HELP";

  return (
    <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white px-4 py-2 border-b border-red-500/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <span className="font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-md flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5" /> Level 1 Emergency 24/7
          </span>
          <span className="hidden sm:inline text-red-100">Zero wait-time trauma response & ICU dispatch</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-1.5 bg-black/20 hover:bg-black/40 px-3 py-1 rounded-full transition font-bold text-white border border-white/20"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
            <span>ER Hotline: {phone}</span>
          </a>
          <a
            href={`tel:${ambulance}`}
            className="hidden md:flex items-center gap-1.5 bg-white text-red-700 px-3 py-1 rounded-full font-bold shadow-md hover:bg-red-50 transition"
          >
            <Ambulance className="w-3.5 h-3.5" />
            <span>Ambulance SOS</span>
          </a>
        </div>
      </div>
    </div>
  );
};
