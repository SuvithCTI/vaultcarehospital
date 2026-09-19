import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, Cpu, Stethoscope, Video, Activity, Pill, 
  CheckCircle2, ArrowRight, Sparkles 
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const DesktopServices = () => {
  const { services, setIsBookModalOpen } = useHospital();

  const colorThemes = {
    "srv-1": {
      bg: "bg-gradient-to-br from-rose-50/80 to-red-50/40",
      border: "border-rose-200 hover:border-rose-400",
      badge: "bg-rose-100 text-rose-800 border-rose-200",
      iconBg: "bg-white text-rose-600 shadow-sm",
      btn: "bg-rose-600 hover:bg-rose-700 text-white",
      check: "text-rose-600",
      price: "text-rose-700",
    },
    "srv-2": {
      bg: "bg-gradient-to-br from-purple-50/80 to-indigo-50/40",
      border: "border-purple-200 hover:border-purple-400",
      badge: "bg-purple-100 text-purple-800 border-purple-200",
      iconBg: "bg-white text-purple-600 shadow-sm",
      btn: "bg-purple-600 hover:bg-purple-700 text-white",
      check: "text-purple-600",
      price: "text-purple-700",
    },
    "srv-3": {
      bg: "bg-gradient-to-br from-emerald-50/80 to-teal-50/40",
      border: "border-emerald-200 hover:border-emerald-400",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      iconBg: "bg-white text-emerald-600 shadow-sm",
      btn: "bg-emerald-600 hover:bg-emerald-700 text-white",
      check: "text-emerald-600",
      price: "text-emerald-700",
    },
    "srv-4": {
      bg: "bg-gradient-to-br from-blue-50/80 to-sky-50/40",
      border: "border-blue-200 hover:border-blue-400",
      badge: "bg-blue-100 text-blue-800 border-blue-200",
      iconBg: "bg-white text-blue-600 shadow-sm",
      btn: "bg-blue-600 hover:bg-blue-700 text-white",
      check: "text-blue-600",
      price: "text-blue-700",
    },
    "srv-5": {
      bg: "bg-gradient-to-br from-amber-50/80 to-yellow-50/40",
      border: "border-amber-200 hover:border-amber-400",
      badge: "bg-amber-100 text-amber-800 border-amber-200",
      iconBg: "bg-white text-amber-600 shadow-sm",
      btn: "bg-amber-600 hover:bg-amber-700 text-white",
      check: "text-amber-600",
      price: "text-amber-700",
    },
    "srv-6": {
      bg: "bg-gradient-to-br from-cyan-50/80 to-teal-50/40",
      border: "border-cyan-200 hover:border-cyan-400",
      badge: "bg-cyan-100 text-cyan-800 border-cyan-200",
      iconBg: "bg-white text-cyan-600 shadow-sm",
      btn: "bg-cyan-600 hover:bg-cyan-700 text-white",
      check: "text-cyan-600",
      price: "text-cyan-700",
    },
  };

  const iconMap = {
    ShieldAlert: <ShieldAlert className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    Stethoscope: <Stethoscope className="w-6 h-6" />,
    Video: <Video className="w-6 h-6" />,
    Activity: <Activity className="w-6 h-6" />,
    Pill: <Pill className="w-6 h-6" />,
  };

  return (
    <section className="py-12 px-6 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-widest text-sky-700 font-bold">24/7 Clinical Excellence</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 mt-1">
          Comprehensive Healthcare Services
        </h2>
        <p className="text-slate-900 text-sm mt-3 font-sans">
          From Level-1 emergency trauma care to robotic surgeries, automated dispensing, and preventive health screenings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv, index) => {
          const theme = colorThemes[srv.id] || colorThemes["srv-1"];
          return (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`rounded-3xl ${theme.bg} border ${theme.border} p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${theme.iconBg}`}>
                    {iconMap[srv.icon] || <Activity className="w-6 h-6 text-teal-600" />}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${theme.badge}`}>
                    {srv.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-slate-950 transition">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-900 mt-2 leading-relaxed font-sans font-normal">
                  {srv.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200/70 space-y-2">
                  {srv.features?.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-950 font-medium font-sans">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${theme.check} flex-shrink-0`} />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <span className={`text-xs font-bold font-heading ${theme.price}`}>{srv.priceRange}</span>
                <button
                  onClick={() => setIsBookModalOpen(true)}
                  className={`px-3.5 py-2 rounded-xl ${theme.btn} text-xs font-bold font-heading transition flex items-center gap-1.5 shadow-sm active:scale-98`}
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
