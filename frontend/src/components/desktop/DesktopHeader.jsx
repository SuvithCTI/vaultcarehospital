import React from "react";
import { motion } from "framer-motion";
import { 
  HeartPulse, Shield, PhoneCall, LogOut, Lock, UserCheck
} from "lucide-react";
import { useView } from "../../context/ViewContext";
import { useHospital } from "../../context/HospitalContext";
import { useAuth } from "../../context/AuthContext";

export const DesktopHeader = () => {
  const { activeTab, setActiveTab } = useView();
  const { currentUser, isAdmin, logout } = useAuth();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "departments", label: "Departments" },
    { id: "services", label: "Services" },
    { id: "facilities", label: "Facilities" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 shadow-md isolate">
      {/* Top Ambient Highlight Glow Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400" />

      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab("home")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/25 group-hover:scale-105 transition">
            <HeartPulse className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">Vault Care</span>
              <span className="px-2 py-0.5 rounded-md bg-teal-950/90 text-teal-300 font-bold text-[10px] tracking-wider uppercase border border-teal-800/80">
                Super Hospital
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">Excellence in Healthcare • 24/7 Care</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800/90 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition relative ${
                  isActive
                    ? "text-white font-bold"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/70"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktop-active-nav"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 shadow-md shadow-teal-600/30 border border-teal-400/40"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab("contact")}
            className="px-4 py-2 rounded-xl bg-teal-950/60 hover:bg-teal-900/80 text-teal-300 border border-teal-800/80 font-bold text-xs transition flex items-center gap-1.5 shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
            <span>24/7 Helpline</span>
          </button>

          {/* If Logged In as Admin, show status & logout */}
          {isAdmin && (
            <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
              <button
                onClick={() => setActiveTab("admin")}
                className="px-2.5 py-1.5 rounded-xl bg-purple-950/80 border border-purple-800/80 text-purple-300 text-[11px] font-bold flex items-center gap-1"
              >
                <UserCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Admin Portal</span>
              </button>
              <button
                onClick={logout}
                title="Log Out of Admin"
                className="p-2 rounded-xl bg-rose-950/80 hover:bg-rose-900/80 text-rose-400 border border-rose-800/80 transition"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
