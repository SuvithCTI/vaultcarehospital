import React from "react";
import { motion } from "framer-motion";
import { Activity, ShieldAlert, Heart, Truck, Clock } from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const DesktopLiveRadar = () => {
  const { setIsBookModalOpen } = useHospital();

  const metrics = [
    {
      label: "Level-1 Trauma Center",
      value: "100% Operational",
      sub: "Bedside Triage",
      icon: <ShieldAlert className="w-5 h-5 text-red-600" />,
      color: "border-red-200 bg-gradient-to-br from-red-50/70 to-rose-50/30",
      dot: "bg-red-500",
    },
    {
      label: "Modular Surgery OTs",
      value: "14 / 14 Ready",
      sub: "Laminar Airflow",
      icon: <Activity className="w-5 h-5 text-purple-600" />,
      color: "border-purple-200 bg-gradient-to-br from-purple-50/70 to-indigo-50/30",
      dot: "bg-purple-500",
    },
    {
      label: "GPS Ambulance Fleet",
      value: "12 Units Ready",
      sub: "Avg: 7.4 Mins",
      icon: <Truck className="w-5 h-5 text-emerald-600" />,
      color: "border-emerald-200 bg-gradient-to-br from-emerald-50/70 to-teal-50/30",
      dot: "bg-emerald-500",
    },
    {
      label: "Blood Bank & Plasma",
      value: "All Groups In Stock",
      sub: "24/7 Separation",
      icon: <Heart className="w-5 h-5 text-rose-600" />,
      color: "border-rose-200 bg-gradient-to-br from-rose-50/70 to-pink-50/30",
      dot: "bg-rose-500",
    },
  ];

  return (
    <section className="py-2 px-4 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto">
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-md relative overflow-hidden">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 mb-3 pb-2.5 sm:pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-base font-black uppercase tracking-wider text-slate-950 font-heading">
              Live Hospital Status Radar
            </span>
            <span className="text-xs sm:text-sm text-slate-800 font-medium hidden md:inline font-sans">
              • Real-time clinical readiness & emergency telemetry
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 self-end sm:self-auto">
            <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-[10px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 font-heading">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
              <span>Real-Time</span>
            </span>
            <button
              onClick={() => setIsBookModalOpen(true)}
              className="px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-lg sm:rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-[10px] sm:text-xs font-bold shadow-sm transition font-heading whitespace-nowrap"
            >
              Get Instant Token
            </button>
          </div>
        </div>

        {/* 4 Cards in 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              whileHover={{ y: -2 }}
              className={`p-2 sm:p-3.5 rounded-xl border ${m.color} shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 transition-all`}
            >
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 min-w-0">
                <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-white shadow-xs shrink-0">
                  {React.cloneElement(m.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 " + m.icon.props.className.split(" ").filter(c => c.startsWith("text-")).join(" ") })}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-base font-black text-slate-950 font-heading truncate leading-snug">
                    {m.value}
                  </div>
                  <div className="text-[10px] sm:text-sm font-bold text-slate-900 truncate font-heading leading-tight">
                    {m.label}
                  </div>
                  <div className="text-[9px] sm:text-xs text-slate-700 font-medium truncate font-sans mt-0.5">
                    {m.sub}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 self-end sm:self-center pt-0.5 sm:pt-0">
                <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${m.dot} animate-pulse`} />
                <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-900 font-heading">
                  Live
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
