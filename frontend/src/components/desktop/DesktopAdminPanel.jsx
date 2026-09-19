import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, Calendar, Activity, DollarSign, Clock, CheckCircle2, 
  XCircle, AlertCircle, Phone, Mail, Shield, Search, RefreshCw, Building2, LogOut, Lock
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";
import { useAuth } from "../../context/AuthContext";
import { AdminLoginCard } from "../common/AdminLoginCard";

export const DesktopAdminPanel = () => {
  const { 
    appointments, 
    enquiries, 
    departments, 
    stats, 
    updateAppointmentStatus, 
    refreshData 
  } = useHospital();
  const { currentUser, isAdmin, logout } = useAuth();

  const [activeAdminTab, setActiveAdminTab] = useState("appointments");
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchApt, setSearchApt] = useState("");

  if (!isAdmin) {
    return <AdminLoginCard />;
  }

  const filteredAppointments = (appointments || []).filter((apt) => {
    if (!apt) return false;
    const matchesStatus = filterStatus === "All" || apt.status === filterStatus;
    const searchLower = (searchApt || "").trim().toLowerCase();
    const matchesSearch =
      !searchLower ||
      apt.patientName?.toLowerCase().includes(searchLower) ||
      apt.tokenNumber?.toLowerCase().includes(searchLower) ||
      apt.departmentName?.toLowerCase().includes(searchLower);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="py-6 sm:py-10 px-4 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-6 sm:space-y-8">
      {/* Top Header */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-bold text-xs uppercase border border-purple-200">
              Hospital Admin Portal
            </span>
            <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Authenticated Session
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-1">
            Clinical Operations & Appointments Dashboard
          </h1>
          <p className="text-xs text-slate-800 font-medium mt-1">
            Logged in as: <strong className="text-slate-800">{currentUser?.name}</strong> ({currentUser?.email})
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-200">
          <button
            onClick={refreshData}
            title="Refresh Data"
            className="p-2 text-slate-900 hover:text-slate-900 rounded-xl hover:bg-white transition border border-transparent hover:border-slate-200 flex items-center gap-1 text-xs font-semibold"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Sync</span>
          </button>
          
          <button
            onClick={logout}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-sm transition flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl bg-white border border-teal-200 shadow-sm">
          <div className="flex justify-between items-center text-teal-700">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-800 font-medium">Total Bookings</span>
            <Calendar className="w-5 h-5" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">{appointments.length}</div>
          <div className="text-xs text-teal-600 mt-1 font-semibold">Active digital passes</div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-emerald-200 shadow-sm">
          <div className="flex justify-between items-center text-emerald-700">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-800 font-medium">Departments</span>
            <Building2 className="w-5 h-5" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">{departments.length}</div>
          <div className="text-xs text-emerald-600 mt-1 font-semibold">Specialized medical units</div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-purple-200 shadow-sm">
          <div className="flex justify-between items-center text-purple-700">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-800 font-medium">Patient Satisfaction</span>
            <Activity className="w-5 h-5" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">98.4%</div>
          <div className="text-xs text-purple-600 mt-1 font-semibold">JCI Gold Rating</div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-cyan-200 shadow-sm">
          <div className="flex justify-between items-center text-cyan-700">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-800 font-medium">Patient Queries</span>
            <Mail className="w-5 h-5" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">{enquiries.length}</div>
          <div className="text-xs text-cyan-600 mt-1 font-semibold">Active help queries</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200 pb-3">
        {[
          { id: "appointments", label: `Appointments (${appointments.length})` },
          { id: "enquiries", label: `Patient Enquiries (${enquiries.length})` }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveAdminTab(tab.id)}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition ${
              activeAdminTab === tab.id
                ? "bg-teal-600 text-white shadow-md"
                : "bg-white text-slate-900 hover:text-slate-900 border border-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Appointments Management */}
      {activeAdminTab === "appointments" && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-800 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by Token, Patient, or Dept..."
                value={searchApt}
                onChange={(e) => setSearchApt(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="flex gap-2 w-full sm:w-auto overflow-x-auto">
              {["All", "Confirmed", "Pending", "Completed", "Cancelled"].map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    filterStatus === st
                      ? "bg-slate-800 text-white"
                      : "bg-white text-slate-900 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-900 uppercase tracking-wider font-bold border-b border-slate-200">
                <tr>
                  <th className="p-4">Token & Patient</th>
                  <th className="p-4">Department & Symptoms</th>
                  <th className="p-4">Date & Slot</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredAppointments.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-slate-800 font-medium">
                      No appointments matching the current filter or search criteria.
                    </td>
                  </tr>
                ) : (
                  filteredAppointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-slate-50/80 transition">
                      <td className="p-4">
                        <div className="font-mono font-bold text-teal-700 text-sm">{apt.tokenNumber}</div>
                        <div className="font-semibold text-slate-900 mt-0.5">{apt.patientName}</div>
                        <div className="text-[11px] text-slate-800 font-medium">{apt.patientPhone}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900">{apt.departmentName}</div>
                        {apt.symptoms && (
                          <div className="text-[11px] text-slate-800 font-medium line-clamp-1 mt-0.5 italic">"{apt.symptoms}"</div>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="font-semibold text-slate-900">{apt.appointmentDate}</div>
                        <div className="text-teal-700 text-[11px] font-bold">{apt.appointmentTime}</div>
                        <div className="text-slate-800 font-medium text-[10px]">{apt.consultationType}</div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          apt.status === "Confirmed"
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                            : apt.status === "Pending"
                            ? "bg-amber-100 text-amber-800 border border-amber-200"
                            : apt.status === "Completed"
                            ? "bg-blue-100 text-blue-800 border border-blue-200"
                            : "bg-rose-100 text-rose-800 border border-rose-200"
                        }`}>
                          {apt.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {apt.status !== "Confirmed" && (
                            <button
                              onClick={() => updateAppointmentStatus(apt.id, "Confirmed")}
                              className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-bold text-[11px] border border-emerald-200 transition"
                            >
                              Approve
                            </button>
                          )}
                          {apt.status !== "Completed" && (
                            <button
                              onClick={() => updateAppointmentStatus(apt.id, "Completed")}
                              className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-bold text-[11px] border border-blue-200 transition"
                            >
                              Complete
                            </button>
                          )}
                          {apt.status !== "Cancelled" && (
                            <button
                              onClick={() => updateAppointmentStatus(apt.id, "Cancelled")}
                              className="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white font-bold text-[11px] border border-rose-200 transition"
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Enquiries Management */}
      {activeAdminTab === "enquiries" && (
        enquiries.length === 0 ? (
          <div className="p-12 rounded-3xl bg-white border border-slate-200 text-center text-slate-800 font-medium shadow-sm">
            <Mail className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="font-bold text-slate-900 text-sm">No Enquiries Logged Yet</p>
            <p className="text-xs text-slate-800 font-medium mt-1">Patient inquiries submitted from the Contact page will show up here automatically.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {enquiries.map((enq) => (
              <div key={enq.id} className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{enq.name}</h4>
                    <p className="text-xs text-teal-700 font-medium">{enq.phone} • {enq.email || "No email"}</p>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    enq.status === "Resolved"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}>
                    {enq.status}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 text-xs text-slate-950 leading-relaxed border border-slate-100">
                  <span className="font-bold text-slate-900 block mb-1">{enq.subject || "Patient Query"}:</span>
                  {enq.message}
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};
