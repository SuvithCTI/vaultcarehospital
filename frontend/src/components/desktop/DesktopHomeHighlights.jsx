import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, Zap, Microscope, BedDouble, ShieldCheck, 
  Truck, Sparkles, ArrowRight, HeartPulse, CheckCircle2 
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";
import { useView } from "../../context/ViewContext";

export const DesktopHomeHighlights = () => {
  const { setIsBookModalOpen } = useHospital();
  const { setActiveTab } = useView();

  const highlights = [
    {
      id: "robotics",
      icon: <Cpu className="w-7 h-7 text-purple-600" />,
      title: "Next-Gen Robotic Surgery",
      badge: "Da Vinci Xi 4th Gen",
      description: "Sub-millimeter surgical precision, minimal blood loss, and 3x faster recovery times with computerized robotic assistance.",
      bg: "bg-gradient-to-br from-purple-50 to-indigo-50/50",
      border: "border-purple-200 hover:border-purple-400",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      stat: "4,500+ Robotic Cases",
      delay: 0.1,
    },
    {
      id: "emergency",
      icon: <Zap className="w-7 h-7 text-rose-600" />,
      title: "Zero-Wait Emergency Triage",
      badge: "Level-1 Trauma Center",
      description: "Immediate bedside triage, dedicated resuscitation suites, and prioritized digital queue routing for critical emergencies.",
      bg: "bg-gradient-to-br from-rose-50 to-orange-50/50",
      border: "border-rose-200 hover:border-rose-400",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
      stat: "< 8 Min Avg Response",
      delay: 0.2,
    },
    {
      id: "imaging",
      icon: <Microscope className="w-7 h-7 text-cyan-600" />,
      title: "Silent 3T MRI & AI Diagnostics",
      badge: "Next-Day Digital Reports",
      description: "Whisper-quiet wide-bore 3T MRI, 256-slice dual-source cardiac CT, and automated precision molecular pathology.",
      bg: "bg-gradient-to-br from-cyan-50 to-sky-50/50",
      border: "border-cyan-200 hover:border-cyan-400",
      badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
      stat: "99.8% Diagnostic Accuracy",
      delay: 0.3,
    },
    {
      id: "icu",
      icon: <BedDouble className="w-7 h-7 text-emerald-600" />,
      title: "Smart Modular ICU Suites",
      badge: "1:1 Dedicated Nursing",
      description: "HEPA-filtered positive pressure isolation rooms, continuous automated hemodynamic telemetry, and luxury family rooms.",
      bg: "bg-gradient-to-br from-emerald-50 to-teal-50/50",
      border: "border-emerald-200 hover:border-emerald-400",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      stat: "140 Dedicated ICU Beds",
      delay: 0.4,
    },
    {
      id: "insurance",
      icon: <ShieldCheck className="w-7 h-7 text-amber-600" />,
      title: "100% Cashless Insurance Desk",
      badge: "40+ TPA Partners",
      description: "Instant paperless pre-authorizations, dedicated insurance desks on every floor, and hassle-free cashless hospitalization.",
      bg: "bg-gradient-to-br from-amber-50 to-yellow-50/50",
      border: "border-amber-200 hover:border-amber-400",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      stat: "15-Min Fast Approval",
      delay: 0.5,
    },
    {
      id: "icu-ambulance",
      icon: <Truck className="w-7 h-7 text-blue-600" />,
      title: "5G Smart ICU Ambulance Fleet",
      badge: "24/7 Rapid Response",
      description: "Mobile intensive care units equipped with advanced ventilators, telemetry, and live doctor connectivity en route.",
      bg: "bg-gradient-to-br from-blue-50 to-indigo-50/50",
      border: "border-blue-200 hover:border-blue-400",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      stat: "< 8 Min Avg Response",
      delay: 0.6,
    },
  ];

  return (
    <section className="py-6 sm:py-10 px-4 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-950 tracking-tight"
        >
          World-Class Medical Excellence, <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600">Built Around You</span>
        </motion.h2>
        <p className="text-slate-950 font-medium text-sm sm:text-base mt-2.5 leading-relaxed">
          Combining cutting-edge medical technology with human empathy to deliver superlative clinical outcomes.
        </p>
      </div>

      {/* Colorful Bento Cards Grid - 2 columns on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
        {highlights.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: item.delay }}
            whileHover={{ y: -4, scale: 1.01 }}
            className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl ${item.bg} border ${item.border} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/50 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between gap-1 mb-2 sm:mb-3">
                <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-white shadow-sm border border-slate-200/80 group-hover:scale-110 transition duration-300 shrink-0">
                  {React.cloneElement(item.icon, { className: "w-4 h-4 sm:w-6 sm:h-6 " + item.icon.props.className.split(" ").filter(c => c.startsWith("text-")).join(" ") })}
                </div>
                <span className={`px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full text-[9px] sm:text-xs font-bold border text-right truncate max-w-[100px] sm:max-w-none ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xs sm:text-lg lg:text-xl font-black font-heading text-slate-950 group-hover:text-teal-950 transition line-clamp-2">
                {item.title}
              </h3>
              <p className="text-[10px] sm:text-[13px] text-slate-950 mt-1 sm:mt-2 leading-tight sm:leading-relaxed font-semibold line-clamp-3 sm:line-clamp-none">
                {item.description}
              </p>
            </div>

            <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-300/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <span className="text-[10px] sm:text-xs font-bold text-slate-900 flex items-center gap-1 truncate">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-teal-700 shrink-0" />
                <span className="truncate">{item.stat}</span>
              </span>
              <button
                onClick={() => setIsBookModalOpen(true)}
                className="text-[10px] sm:text-xs font-bold text-teal-800 hover:text-teal-950 flex items-center gap-0.5 group-hover:translate-x-1 transition self-start sm:self-auto"
              >
                <span>Book Token</span>
                <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
