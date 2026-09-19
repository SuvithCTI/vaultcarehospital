import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HeartPulse, PhoneCall, Menu, X, Calendar, 
  Sparkles, Building2, Activity, Layers, Phone, ArrowRight, ShieldCheck 
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";
import { useView } from "../../context/ViewContext";

export const MobileHeader = () => {
  const { hospitalInfo, setIsBookModalOpen } = useHospital();
  const { activeTab, setActiveTab } = useView();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", icon: <HeartPulse className="w-4 h-4 text-teal-400" /> },
    { id: "about", label: "About Us", icon: <Sparkles className="w-4 h-4 text-amber-400" /> },
    { id: "departments", label: "Departments", icon: <Building2 className="w-4 h-4 text-cyan-400" /> },
    { id: "services", label: "Services", icon: <Activity className="w-4 h-4 text-indigo-400" /> },
    { id: "facilities", label: "Facilities", icon: <Layers className="w-4 h-4 text-purple-400" /> },
    { id: "contact", label: "Contact & Helpdesk", icon: <Phone className="w-4 h-4 text-rose-400" /> },
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-md">
      {/* Top Ambient Glow Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400" />

      <div className="px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-md shadow-teal-500/20">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div>
            <span className="font-heading font-extrabold text-base text-white tracking-tight">Vault Care</span>
            <span className="block text-[9px] text-teal-400 font-bold uppercase tracking-wider">Super Hospital 24/7</span>
          </div>
        </div>

        {/* Action Buttons: Emergency & Hamburger Toggle */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${hospitalInfo?.emergencyHotline || "+18007899999"}`}
            className="p-2 rounded-xl bg-rose-950/60 text-rose-400 border border-rose-800/80 flex items-center justify-center shadow-xs active:scale-95 transition"
            title="Emergency Hotline"
          >
            <PhoneCall className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white active:scale-95 transition"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5 text-teal-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expandable Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden bg-slate-950 border-t border-slate-800/90 px-4 py-4 space-y-3"
          >
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                      isActive
                        ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold shadow-md shadow-teal-600/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-ping" />}
                  </button>
                );
              })}
            </div>

            {/* Quick Action Consultation Button */}
            <div className="pt-2 border-t border-slate-900 space-y-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsBookModalOpen(true);
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 font-black text-xs shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Book Instant Consultation Pass</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </button>

              <div className="flex items-center justify-between text-[10px] text-slate-400 px-1 pt-1 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  NABH & JCI Accredited
                </span>
                <span className="text-teal-400 font-bold">24/7 Level-1 Trauma</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
