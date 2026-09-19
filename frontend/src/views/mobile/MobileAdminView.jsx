import React, { useState } from "react";
import { useHospital } from "../../context/HospitalContext";
import { useAuth } from "../../context/AuthContext";
import { Calendar, Shield, CheckCircle2, XCircle, LogOut } from "lucide-react";
import { AdminLoginCard } from "../../components/common/AdminLoginCard";

export const MobileAdminView = () => {
  const { appointments, updateAppointmentStatus } = useHospital();
  const { currentUser, isAdmin, logout } = useAuth();
  const [filter, setFilter] = useState("All");

  if (!isAdmin) {
    return (
      <div className="pb-24">
        <AdminLoginCard />
      </div>
    );
  }

  const filtered = appointments.filter((a) => filter === "All" || a.status === filter);

  return (
    <div className="p-4 pb-24 space-y-4">
      <div className="p-4 rounded-2xl bg-white border border-slate-200 flex justify-between items-center shadow-sm">
        <div>
          <span className="text-[10px] text-purple-700 uppercase font-bold">Admin Portal</span>
          <h3 className="text-sm font-bold text-slate-900">Hospital Operations</h3>
          <p className="text-[10px] text-slate-800 font-medium">{currentUser?.name}</p>
        </div>
        <button
          onClick={logout}
          className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs rounded-xl border border-rose-200 flex items-center gap-1 shadow-sm"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Logout</span>
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {["All", "Confirmed", "Pending", "Completed"].map((st) => (
          <button
            key={st}
            onClick={() => setFilter(st)}
            className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              filter === st
                ? "bg-teal-600 text-white"
                : "bg-white text-slate-900 border border-slate-200"
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((apt) => (
          <div key={apt.id} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-mono font-bold text-teal-700 text-xs">{apt.tokenNumber}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                apt.status === "Confirmed" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
              }`}>
                {apt.status}
              </span>
            </div>
            <div>
              <div className="font-bold text-xs text-slate-900">{apt.patientName}</div>
              <div className="text-[10px] text-slate-800 font-medium">{apt.departmentName} • {apt.appointmentDate} ({apt.appointmentTime})</div>
            </div>

            <div className="flex gap-2 pt-1 border-t border-slate-100">
              {apt.status !== "Confirmed" && (
                <button
                  onClick={() => updateAppointmentStatus(apt.id, "Confirmed")}
                  className="flex-1 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-[10px] border border-emerald-200"
                >
                  Confirm
                </button>
              )}
              {apt.status !== "Completed" && (
                <button
                  onClick={() => updateAppointmentStatus(apt.id, "Completed")}
                  className="flex-1 py-1 rounded-lg bg-blue-50 text-blue-800 font-bold text-[10px] border border-blue-200"
                >
                  Complete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
