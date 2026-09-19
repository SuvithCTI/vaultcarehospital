import React from "react";
import { ShieldCheck, Target, Award, Building2, Sparkles, HeartPulse, Zap, Clock, Users } from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const MobileAboutView = () => {
  const { hospitalInfo, setIsBookModalOpen } = useHospital();

  return (
    <div className="p-4 pb-24 space-y-4">
      {/* Mobile Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-200/90 shadow-md p-5 isolate">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/banners/about.jpg"
            alt="Vault Care Hospital Grand Atrium"
            className="w-full h-full object-cover object-center brightness-[1.02] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-amber-50/40" />
        </div>

        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 text-[10px] font-bold uppercase tracking-wider">
            <Building2 className="w-3 h-3 text-amber-700" />
            <span>28+ Years of Medical Care</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-heading leading-tight">
            About Vault Care Hospital
          </h2>
          <p className="text-xs text-slate-800 leading-relaxed font-normal">
            800,000 sq.ft quaternary healthcare institution with 650+ smart beds, 14 robotic OTs, and 24/7 Level-1 trauma care.
          </p>
          <button
            onClick={() => setIsBookModalOpen(true)}
            className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold text-xs shadow-xs"
          >
            Book Consultation
          </button>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="space-y-3">
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 shadow-xs space-y-1.5">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <Target className="w-4 h-4 text-amber-700" />
            <span>Our Mission</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            To deliver ethical, high-precision healthcare with compassionate nursing and zero compromise on patient safety.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 shadow-xs space-y-1.5">
          <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
            <ShieldCheck className="w-4 h-4 text-teal-700" />
            <span>Accreditations</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            JCI Gold Seal of Approval, NABH Digital Super Hospital, and NABL 100% Diagnostic Accuracy certified.
          </p>
        </div>
      </div>
    </div>
  );
};
