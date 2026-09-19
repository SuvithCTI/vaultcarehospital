import React from "react";
import { Monitor, Smartphone, Cpu, Shield, Stethoscope, Users, UserCheck } from "lucide-react";
import { useView } from "../../context/ViewContext";
import { useAuth } from "../../context/AuthContext";

export const ViewSwitcherToolbar = () => {
  const { viewMode, setViewMode, isMobileView } = useView();
  const { currentUser, switchRole, availableUsers } = useAuth();

  return (
    <aside aria-label="Demo Controls" className="fixed top-3 right-3 z-50 flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-xl shadow-2xl text-xs">
      {/* Viewport Modes */}
      <div className="flex items-center bg-slate-800/80 rounded-xl p-0.5 border border-slate-700/50">
        <button
          onClick={() => setViewMode("auto")}
          title="Auto Responsive View"
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-medium transition ${
            viewMode === "auto" ? "bg-teal-500 text-slate-950 font-bold shadow" : "text-slate-800 hover:text-white"
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Auto</span>
        </button>
        <button
          onClick={() => setViewMode("pc")}
          title="Force Dedicated PC View"
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-medium transition ${
            viewMode === "pc" ? "bg-teal-500 text-slate-950 font-bold shadow" : "text-slate-800 hover:text-white"
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">PC View</span>
        </button>
        <button
          onClick={() => setViewMode("mobile")}
          title="Force Dedicated Mobile View"
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-medium transition ${
            viewMode === "mobile" ? "bg-teal-500 text-slate-950 font-bold shadow" : "text-slate-800 hover:text-white"
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Mobile View</span>
        </button>
      </div>

      {/* Role Switcher */}
      <div className="hidden md:flex items-center gap-1.5 pl-2 border-l border-slate-700/60">
        <span className="text-[11px] text-slate-800 font-medium flex items-center gap-1">
          <Shield className="w-3 h-3 text-teal-400" /> Role:
        </span>
        <select
          value={currentUser.role}
          onChange={(e) => switchRole(e.target.value)}
          className="bg-slate-800 text-teal-300 font-semibold rounded-lg px-2 py-1 text-xs border border-teal-500/30 focus:outline-none focus:border-teal-400"
        >
          {availableUsers.map((u) => (
            <option key={u.id} value={u.role}>
              {u.role} ({u.badge})
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
};
