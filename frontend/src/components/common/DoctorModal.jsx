import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Star, Calendar, Clock, DollarSign, Globe2, Stethoscope, CheckCircle2 } from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const DoctorModal = ({ doctor, onClose }) => {
  const { openBookingForDoctor } = useHospital();
  if (!doctor) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl bg-slate-900 border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-800 hover:text-white rounded-full hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-teal-500/40 shadow-xl"
            />
            <div className="flex-1">
              <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-400 text-xs font-semibold">
                {doctor.departmentName}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1.5">{doctor.name}</h3>
              <p className="text-sm text-cyan-300 font-medium">{doctor.title}</p>
              <p className="text-xs text-slate-800 mt-1">{doctor.education}</p>

              <div className="flex items-center gap-3 mt-3 text-xs text-slate-300">
                <span className="flex items-center gap-1 font-bold text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" /> {doctor.rating} ({doctor.reviewsCount} reviews)
                </span>
                <span>•</span>
                <span>{doctor.experienceYears}+ Years Exp</span>
                <span>•</span>
                <span className="text-teal-400 font-bold">${doctor.fee} Fee</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-300">
            <div>
              <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-1">About Specialist</h4>
              <p className="leading-relaxed text-slate-800">{doctor.about}</p>
            </div>

            {doctor.awards && doctor.awards.length > 0 && (
              <div>
                <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" /> Honors & Awards
                </h4>
                <div className="flex flex-wrap gap-2">
                  {doctor.awards.map((a, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-amber-200 text-xs">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
              <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-400" /> Clinic Timings & Schedule
              </h4>
              <div className="flex flex-wrap gap-2 mb-2">
                {doctor.availabilityDays?.map((day) => (
                  <span key={day} className="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 font-semibold text-xs">
                    {day}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {doctor.availableSlots?.map((slot) => (
                  <span key={slot} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 text-xs">
                    {slot}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => {
                onClose();
                openBookingForDoctor(doctor);
              }}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 text-slate-950 font-bold shadow-lg shadow-teal-500/20 transition flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Appointment (${doctor.fee})
            </button>
            <button
              onClick={onClose}
              className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
