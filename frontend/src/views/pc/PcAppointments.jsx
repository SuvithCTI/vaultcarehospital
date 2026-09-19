import React, { useEffect } from "react";
import { useHospital } from "../../context/HospitalContext";
import { Calendar, Stethoscope, Clock, ShieldCheck, UserCheck } from "lucide-react";

export const PcAppointments = () => {
  const { setIsBookModalOpen, appointments } = useHospital();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  return (
    <div className="py-4 sm:py-10 px-3.5 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-5 sm:space-y-10">
      {/* 1st Section: Digital OPD & Concierge Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-teal-500/40 shadow-2xl p-4 sm:p-12 isolate">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/banners/appointments.jpg"
            alt="Vault Care Appointment Concierge"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onError={(e) => {
              e.currentTarget.src = "/departments/cardiology.jpg";
            }}
            className="w-full h-full object-cover object-center scale-100 filter brightness-[1.05] opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-teal-950/60" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-8 relative z-10">
          <div className="space-y-2 sm:space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal-400" />
              <span>Instant OPD Token & Booking</span>
            </div>
            <h1 className="text-2xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
              Book Doctor Consultation in 3 Simple Steps
            </h1>
            <p className="text-slate-200 text-xs sm:text-base leading-relaxed font-normal">
              Reserve your consultation slot with senior consultants across 24 specialties. Get an immediate digital token pass with zero waiting time at the registration desk.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-1 text-[11px] sm:text-xs text-slate-200 font-medium">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Instant Token Pass</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-emerald-400" /> Guaranteed Slot</span>
            </div>
          </div>

          <button
            onClick={() => setIsBookModalOpen(true)}
            className="w-full sm:w-auto px-5 py-3 sm:px-8 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 text-slate-950 font-extrabold text-xs sm:text-base shadow-2xl shadow-teal-500/30 transition transform hover:scale-105 whitespace-nowrap text-center"
          >
            Book Appointment Pass ✨
          </button>
        </div>
      </div>

      {/* Active Bookings Feed - 2-column on mobile */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-950">Recent Confirmed Appointments</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
          {appointments.slice(0, 6).map((a) => (
            <div key={a.id} className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5 sm:space-y-2 hover:shadow-md transition">
              <div className="flex justify-between items-center gap-1">
                <span className="font-mono font-bold text-teal-700 text-xs sm:text-sm">{a.tokenNumber}</span>
                <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[8px] sm:text-[10px] font-bold">
                  {a.status}
                </span>
              </div>
              <h4 className="font-bold text-slate-950 text-xs sm:text-sm truncate">{a.patientName}</h4>
              <p className="text-[10px] sm:text-xs text-slate-600 font-medium truncate">{a.doctorName} • {a.departmentName}</p>
              <div className="pt-1.5 border-t border-slate-100 flex flex-col sm:flex-row sm:justify-between text-[10px] sm:text-xs text-slate-500 gap-0.5">
                <span className="truncate">{a.appointmentDate}</span>
                <span className="text-teal-700 font-semibold">{a.appointmentTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
