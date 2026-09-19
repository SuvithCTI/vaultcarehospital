import React from "react";
import { 
  HeartPulse, PhoneCall, Calendar, 
  ShieldAlert, Sparkles, Building2, Activity 
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";
import { useView } from "../../context/ViewContext";

export const MobileHero = () => {
  const { setIsBookModalOpen, hospitalInfo } = useHospital();
  const { setActiveTab } = useView();

  return (
    <div className="p-4 space-y-4">
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-white border border-teal-200 p-5 shadow-sm">
        <h1 className="text-2xl font-extrabold font-heading text-slate-900 leading-tight">
          Vault Care Hospital
        </h1>
        <p className="text-xs text-slate-900 mt-2 leading-relaxed">
          24/7 Level-1 Trauma Care • 650 Beds • Instant Digital Consultation Pass
        </p>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setIsBookModalOpen(true)}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>
          <a
            href={`tel:${hospitalInfo?.emergencyHotline || "+18007899999"}`}
            className="px-4 py-3 rounded-xl bg-red-600 text-white font-bold text-xs flex items-center justify-center gap-1 shadow"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>ER 24/7</span>
          </a>
        </div>
      </div>

      {/* Quick Action Grid (No Doctors) */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          onClick={() => setActiveTab("departments")}
          className="p-3.5 rounded-2xl bg-white border border-slate-200 text-left flex flex-col justify-between hover:border-emerald-400 transition active:scale-98 shadow-sm"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
            <Building2 className="w-4 h-4" />
          </div>
          <span className="font-bold text-slate-900 text-xs">Departments</span>
          <span className="text-[10px] text-slate-800 font-medium mt-0.5">24 Medical Units</span>
        </button>

        <button
          onClick={() => setActiveTab("services")}
          className="p-3.5 rounded-2xl bg-white border border-slate-200 text-left flex flex-col justify-between hover:border-sky-400 transition active:scale-98 shadow-sm"
        >
          <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
            <Activity className="w-4 h-4" />
          </div>
          <span className="font-bold text-slate-900 text-xs">Services</span>
          <span className="text-[10px] text-slate-800 font-medium mt-0.5">Robotic Surgery</span>
        </button>

        <button
          onClick={() => setActiveTab("facilities")}
          className="p-3.5 rounded-2xl bg-white border border-slate-200 text-left flex flex-col justify-between hover:border-purple-400 transition active:scale-98 shadow-sm"
        >
          <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-2">
            <HeartPulse className="w-4 h-4" />
          </div>
          <span className="font-bold text-slate-900 text-xs">Facilities</span>
          <span className="text-[10px] text-slate-800 font-medium mt-0.5">650 Inpatient Beds</span>
        </button>

        <button
          onClick={() => setActiveTab("contact")}
          className="p-3.5 rounded-2xl bg-white border border-slate-200 text-left flex flex-col justify-between hover:border-rose-400 transition active:scale-98 shadow-sm"
        >
          <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-2">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <span className="font-bold text-slate-900 text-xs">Contact</span>
          <span className="text-[10px] text-slate-800 font-medium mt-0.5">Ambulance Dispatch</span>
        </button>
      </div>
    </div>
  );
};
