import React from "react";
import { motion } from "framer-motion";
import { Calendar, PhoneCall, ShieldCheck, Sparkles, ArrowRight, HeartPulse } from "lucide-react";
import { useHospital } from "../../context/HospitalContext";
import { useView } from "../../context/ViewContext";

export const DesktopCtaBanner = () => {
  const { hospitalInfo, setIsBookModalOpen } = useHospital();
  const { setActiveTab } = useView();

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-teal-800 via-cyan-800 to-indigo-900 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6"
      >
        {/* Animated Glow Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-2 max-w-2xl relative z-10 text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading tracking-tight leading-tight">
            Prioritize Your Health With Advanced Medical Healing.
          </h2>

          <p className="text-teal-100 text-xs sm:text-sm leading-relaxed font-normal">
            Skip long hospital waiting queues. Generate your verified digital consultation pass online in under 2 minutes.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-[11px] text-teal-200 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-300" /> Instant Token Pass
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-300" /> 100% Cashless TPA
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-300" /> 24/7 Level-1 Emergency
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full lg:w-auto flex-shrink-0">
          <button
            onClick={() => setIsBookModalOpen(true)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-teal-900 hover:bg-teal-50 font-black text-xs shadow-md transition transform hover:scale-102 flex items-center justify-center gap-1.5 whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-teal-700" />
            <span>Book Consultation Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={`tel:${hospitalInfo?.emergencyHotline || "+18007899999"}`}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold text-xs transition flex items-center justify-center gap-1.5 whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5 text-red-300 animate-pulse" />
            <span>24/7 Helpline</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
