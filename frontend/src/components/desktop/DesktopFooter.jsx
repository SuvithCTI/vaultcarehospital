import React from "react";
import { HeartPulse, PhoneCall, Mail, MapPin, ShieldCheck, Award } from "lucide-react";
import { useHospital } from "../../context/HospitalContext";
import { useView } from "../../context/ViewContext";

export const DesktopFooter = () => {
  const { hospitalInfo, departments } = useHospital();
  const { setActiveTab, openLegalModal } = useView();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 text-slate-300 text-sm overflow-hidden isolate">
      {/* Top Ambient Glow Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-400" />

      {/* Subtle Background Glow Mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-teal-950/30 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-cyan-950/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1700px] w-full mx-auto pt-9 pb-6 px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-8">
          
          {/* Col 1: Brand & Institutional Overview */}
          <div className="col-span-2 lg:col-span-2 space-y-3">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab("home")}>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg shadow-teal-500/25 shrink-0">
                <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight">Vault Care Hospital</span>
                <p className="text-[10px] sm:text-xs text-teal-400 font-bold tracking-wide uppercase">Super Multi-Speciality Medical Hub</p>
              </div>
            </div>

            <p className="leading-relaxed max-w-sm text-slate-400 text-xs sm:text-[13px]">
              Delivering robotic precision surgeries, 24/7 Level-1 trauma rescue, and compassionate patient care with world-class tertiary medical infrastructure.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-span-1 space-y-2.5 sm:space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-[13px]">Navigation</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-[13px]">
              {["home", "about", "departments", "services", "facilities", "contact"].map((tab) => (
                <li key={tab}>
                  <button 
                    onClick={() => setActiveTab(tab)} 
                    className="hover:text-teal-300 capitalize transition text-slate-400 hover:translate-x-0.5 inline-block font-medium"
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Departments */}
          <div className="col-span-1 space-y-2.5 sm:space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-[13px]">Centers</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-[13px]">
              {departments.slice(0, 5).map((d) => (
                <li key={d.id}>
                  <button 
                    onClick={() => setActiveTab("departments")} 
                    className="hover:text-teal-300 transition text-slate-400 hover:translate-x-0.5 inline-block font-medium truncate max-w-full text-left"
                  >
                    {d.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: 24/7 Emergency & Contact Hub */}
          <div className="col-span-2 lg:col-span-1 space-y-3 pt-2 sm:pt-0">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-[13px]">24/7 Emergency Hub</h4>
            
            {/* Glowing Emergency Hotline Card */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-rose-950/60 to-red-950/30 border border-rose-900/60 shadow-lg space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
                </div>
                <div>
                  <span className="text-white font-black text-xs sm:text-sm block tracking-tight">{hospitalInfo?.emergencyHotline || "+1 (800) 789-9999"}</span>
                  <span className="text-[9px] sm:text-[10px] text-rose-400 font-bold uppercase tracking-wider">Level-1 Emergency & Trauma</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-[13px] pt-1">
              <div className="flex items-start gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium truncate">{hospitalInfo?.email || "care@vaultcarehospital.org"}</span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-300 font-medium">{hospitalInfo?.address || "742 Healthcare Blvd, Medical District, NY"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© 2026 Vault Care Hospital. All rights reserved. Quaternary Healthcare Excellence.</div>
          <div className="flex items-center gap-5 text-slate-400">
            <button
              onClick={() => openLegalModal("privacy")}
              className="hover:text-teal-400 transition font-medium"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openLegalModal("terms")}
              className="hover:text-teal-400 transition font-medium"
            >
              Terms of Care
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
