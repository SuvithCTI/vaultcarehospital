import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle, Download, Calendar, Clock, User, Phone, Building2, X, ShieldCheck } from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const AppointmentPassModal = () => {
  const { lastBookedPass, setLastBookedPass } = useHospital();

  useEffect(() => {
    if (lastBookedPass) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [lastBookedPass]);

  if (!lastBookedPass) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 15 }}
          className="relative w-full max-w-lg bg-white border border-teal-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 overflow-hidden"
        >
          <button
            onClick={() => setLastBookedPass(null)}
            className="absolute top-4 right-4 p-2 text-slate-800 hover:text-slate-950 rounded-full hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            <div className="inline-flex p-3 rounded-full bg-teal-100 text-teal-700 mb-2 border border-teal-200">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900">Appointment Confirmed!</h3>
            <p className="text-slate-800 font-medium text-xs mt-0.5">Your official digital consultation pass is ready.</p>
          </div>

          <div className="mt-5 p-5 rounded-2xl bg-gradient-to-br from-teal-50/80 to-cyan-50/50 border border-teal-200">
            <div className="flex justify-between items-center pb-3 border-b border-teal-200/80">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-teal-800 font-bold">TOKEN NUMBER</span>
                <div className="text-3xl font-extrabold text-teal-900 font-mono">
                  {lastBookedPass.tokenNumber}
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
              <div>
                <span className="text-[11px] text-slate-800 font-medium flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-teal-600" /> Patient Name
                </span>
                <p className="font-bold text-slate-900 mt-0.5">{lastBookedPass.patientName}</p>
              </div>
              <div>
                <span className="text-[11px] text-slate-800 font-medium flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-teal-600" /> Phone
                </span>
                <p className="font-bold text-slate-900 mt-0.5">{lastBookedPass.patientPhone}</p>
              </div>
              <div>
                <span className="text-[11px] text-slate-800 font-medium flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-teal-600" /> Department
                </span>
                <p className="font-bold text-slate-900 mt-0.5">{lastBookedPass.departmentName}</p>
              </div>
              <div>
                <span className="text-[11px] text-slate-800 font-medium flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-teal-600" /> Date & Slot
                </span>
                <p className="font-bold text-slate-900 mt-0.5">{lastBookedPass.appointmentDate} ({lastBookedPass.appointmentTime})</p>
              </div>
            </div>

            {lastBookedPass.symptoms && (
              <div className="mt-3 pt-3 border-t border-teal-200/80 text-[11px] text-slate-900">
                <span className="font-bold text-slate-950">Chief Symptoms:</span> {lastBookedPass.symptoms}
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => window.print()}
              className="flex-1 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition"
            >
              <Download className="w-4 h-4" /> Print / Save Pass
            </button>
            <button
              onClick={() => setLastBookedPass(null)}
              className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-950 font-semibold text-xs transition"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
