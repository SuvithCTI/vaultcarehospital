import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HeartPulse, Brain, Bone, Activity, Baby, ShieldAlert, 
  HeartHandshake, Scan, ArrowRight, ArrowLeft, CheckCircle2, Bed, Sparkles, Zap
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const DesktopDepartments = () => {
  const { departments, setIsBookModalOpen, setSelectedDepartment } = useHospital();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeDept = departments[selectedIndex] || departments[0];

  const imageMap = {
    cardio: "/departments/cardiology.jpg",
    "dept-1": "/departments/cardiology.jpg",
    neuro: "/departments/neurology.jpg",
    "dept-2": "/departments/neurology.jpg",
    ortho: "/departments/orthopedics.jpg",
    "dept-3": "/departments/orthopedics.jpg",
    onco: "/departments/oncology.jpg",
    "dept-4": "/departments/oncology.jpg",
    pediatrics: "/departments/pediatrics.jpg",
    "dept-5": "/departments/pediatrics.jpg",
    trauma: "/departments/emergency.jpg",
    "dept-6": "/departments/emergency.jpg",
    maternity: "/departments/maternity.jpg",
    "dept-7": "/departments/maternity.jpg",
    radiology: "/departments/radiology.jpg",
    "dept-8": "/departments/radiology.jpg",
  };

  const deptTheme = {
    cardio: {
      accent: "from-rose-600 via-rose-500 to-red-600",
      pillActive: "bg-rose-600 text-white border-rose-600 shadow-md",
      icon: <HeartPulse className="w-4 h-4" />,
      tag: "Level-1 Cardiac Wing",
      highlight: "99.8% Stent Precision",
    },
    "dept-1": {
      accent: "from-rose-600 via-rose-500 to-red-600",
      pillActive: "bg-rose-600 text-white border-rose-600 shadow-md",
      icon: <HeartPulse className="w-4 h-4" />,
      tag: "Level-1 Cardiac Wing",
      highlight: "99.8% Stent Precision",
    },
    neuro: {
      accent: "from-indigo-600 via-indigo-500 to-violet-600",
      pillActive: "bg-indigo-600 text-white border-indigo-600 shadow-md",
      icon: <Brain className="w-4 h-4" />,
      tag: "Advanced Neuro Wing",
      highlight: "Sub-mm Neuro Navigation",
    },
    "dept-2": {
      accent: "from-indigo-600 via-indigo-500 to-violet-600",
      pillActive: "bg-indigo-600 text-white border-indigo-600 shadow-md",
      icon: <Brain className="w-4 h-4" />,
      tag: "Advanced Neuro Wing",
      highlight: "Sub-mm Neuro Navigation",
    },
    ortho: {
      accent: "from-teal-600 via-emerald-500 to-teal-600",
      pillActive: "bg-teal-600 text-white border-teal-600 shadow-md",
      icon: <Bone className="w-4 h-4" />,
      tag: "Robotic Joint Center",
      highlight: "Robotic Joint Replacement",
    },
    "dept-3": {
      accent: "from-teal-600 via-emerald-500 to-teal-600",
      pillActive: "bg-teal-600 text-white border-teal-600 shadow-md",
      icon: <Bone className="w-4 h-4" />,
      tag: "Robotic Joint Center",
      highlight: "Robotic Joint Replacement",
    },
    onco: {
      accent: "from-purple-600 via-fuchsia-500 to-purple-600",
      pillActive: "bg-purple-600 text-white border-purple-600 shadow-md",
      icon: <Activity className="w-4 h-4" />,
      tag: "Comprehensive Oncology",
      highlight: "Targeted Immunotherapy",
    },
    "dept-4": {
      accent: "from-purple-600 via-fuchsia-500 to-purple-600",
      pillActive: "bg-purple-600 text-white border-purple-600 shadow-md",
      icon: <Activity className="w-4 h-4" />,
      tag: "Comprehensive Oncology",
      highlight: "Targeted Immunotherapy",
    },
    pediatrics: {
      accent: "from-amber-500 via-orange-500 to-amber-600",
      pillActive: "bg-amber-600 text-white border-amber-600 shadow-md",
      icon: <Baby className="w-4 h-4" />,
      tag: "24/7 NICU Pediatrics",
      highlight: "24/7 Level-3 NICU",
    },
    "dept-5": {
      accent: "from-amber-500 via-orange-500 to-amber-600",
      pillActive: "bg-amber-600 text-white border-amber-600 shadow-md",
      icon: <Baby className="w-4 h-4" />,
      tag: "24/7 NICU Pediatrics",
      highlight: "24/7 Level-3 NICU",
    },
    trauma: {
      accent: "from-red-600 via-rose-600 to-red-700",
      pillActive: "bg-red-600 text-white border-red-600 shadow-md",
      icon: <ShieldAlert className="w-4 h-4" />,
      tag: "Level-1 Trauma Hub",
      highlight: "< 4 Min Door-to-Doctor",
    },
    "dept-6": {
      accent: "from-red-600 via-rose-600 to-red-700",
      pillActive: "bg-red-600 text-white border-red-600 shadow-md",
      icon: <ShieldAlert className="w-4 h-4" />,
      tag: "Level-1 Trauma Hub",
      highlight: "< 4 Min Door-to-Doctor",
    },
    maternity: {
      accent: "from-pink-600 via-rose-500 to-pink-600",
      pillActive: "bg-pink-600 text-white border-pink-600 shadow-md",
      icon: <HeartHandshake className="w-4 h-4" />,
      tag: "Maternity & Birthing",
      highlight: "Painless Birthing Suites",
    },
    "dept-7": {
      accent: "from-pink-600 via-rose-500 to-pink-600",
      pillActive: "bg-pink-600 text-white border-pink-600 shadow-md",
      icon: <HeartHandshake className="w-4 h-4" />,
      tag: "Maternity & Birthing",
      highlight: "Painless Birthing Suites",
    },
    radiology: {
      accent: "from-cyan-600 via-sky-500 to-blue-600",
      pillActive: "bg-cyan-600 text-white border-cyan-600 shadow-md",
      icon: <Scan className="w-4 h-4" />,
      tag: "Digital Precision Imaging",
      highlight: "Silent 3T Wide-Bore MRI",
    },
    "dept-8": {
      accent: "from-cyan-600 via-sky-500 to-blue-600",
      pillActive: "bg-cyan-600 text-white border-cyan-600 shadow-md",
      icon: <Scan className="w-4 h-4" />,
      tag: "Digital Precision Imaging",
      highlight: "Silent 3T Wide-Bore MRI",
    },
  };

  const currentTheme = deptTheme[activeDept?.id] || deptTheme["cardio"] || deptTheme["dept-1"];
  const currentBanner = activeDept?.bannerImage || activeDept?.image || imageMap[activeDept?.id] || "/departments/cardiology.jpg";

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? departments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === departments.length - 1 ? 0 : prev + 1));
  };

  const handleBook = () => {
    if (setSelectedDepartment) setSelectedDepartment(activeDept.name);
    setIsBookModalOpen(true);
  };

  return (
    <section className="py-6 sm:py-10 px-4 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 pb-2.5 border-b border-slate-200">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-teal-700 font-bold flex items-center gap-1.5 mb-0.5">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Centers of Clinical Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-950 tracking-tight">
            Specialized Medical Wings
          </h2>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2.5 mt-2 md:mt-0">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white border border-slate-200 text-slate-950 hover:bg-slate-50 hover:border-slate-300 shadow-xs transition active:scale-95"
            title="Previous Department"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs font-bold text-slate-950">
            {selectedIndex + 1} / {departments.length}
          </span>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white border border-slate-200 text-slate-950 hover:bg-slate-50 hover:border-slate-300 shadow-xs transition active:scale-95"
            title="Next Department"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Department Capsule Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-5">
        {departments.map((d, i) => {
          const isSelected = selectedIndex === i;
          const itemTheme = deptTheme[d.id] || deptTheme["dept-1"];

          return (
            <button
              key={d.id}
              onClick={() => setSelectedIndex(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 border flex-shrink-0 ${
                isSelected
                  ? itemTheme.pillActive
                  : "bg-white text-slate-950 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs"
              }`}
            >
              <span>{itemTheme.icon}</span>
              <span>{d.name}</span>
            </button>
          );
        })}
      </div>

      {/* Panoramic Dual Stage Showcase */}
      {activeDept && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDept.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center"
          >
            {/* Left Side: Panoramic Visual Stage */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg bg-slate-950 h-52 sm:h-64 group">
              <img
                src={currentBanner}
                alt={activeDept.name}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = "/departments/cardiology.jpg";
                }}
                className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-between p-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                    {currentTheme.tag}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-emerald-300 border border-emerald-500/30 text-[11px] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    24/7 Active
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-teal-300 flex items-center gap-1 mb-0.5">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    {currentTheme.highlight}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                    {activeDept.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Side: Clinical Command & Action Center */}
            <div className="lg:col-span-7 space-y-3">
              <div>
                <span className="text-[10px] font-bold text-teal-700 uppercase tracking-widest block mb-0.5">
                  Clinical Overview
                </span>
                <h4 className="text-lg sm:text-xl font-black font-heading text-slate-950 leading-tight">
                  Comprehensive Specialty Care in {activeDept.name}
                </h4>
                <p className="text-slate-950 font-medium text-xs sm:text-[13px] mt-1 leading-relaxed line-clamp-2">
                  {activeDept.description}
                </p>
              </div>

              {/* 3 Inline Hospital Capacity Metrics */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-black text-slate-950 flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 text-emerald-600" />
                    {activeDept.beds || "75"} Beds
                  </div>
                  <div className="text-[10px] text-slate-700 font-medium">Inpatient Capacity</div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-black text-slate-950 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-teal-600" />
                    Modular ICU
                  </div>
                  <div className="text-[10px] text-slate-700 font-medium">Dedicated Suites</div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-black text-slate-950 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-600" />
                    Zero-Wait
                  </div>
                  <div className="text-[10px] text-slate-700 font-medium">Digital Token Pass</div>
                </div>
              </div>

              {/* Key Treatments Chips */}
              <div>
                <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider block mb-1">
                  Specialized Procedures & Technology
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(activeDept.services || activeDept.specialties || []).slice(0, 4).map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white text-slate-950 text-[11px] font-semibold border border-slate-200 shadow-xs truncate max-w-[200px]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-teal-600 flex-shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Booking Action Button */}
              <div className="pt-1">
                <button
                  onClick={handleBook}
                  className={`w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r ${currentTheme.accent} hover:opacity-95 text-white font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2 group active:scale-98`}
                >
                  <span>Book Consultation Token in {activeDept.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};
