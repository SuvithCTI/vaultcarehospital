import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Award, HeartHandshake, Eye, Target, 
  Building2, CheckCircle2, Sparkles, Stethoscope, UserCheck, 
  Activity, Users, Zap, HeartPulse, Microscope, ArrowRight,
  BadgeCheck, Clock, FileText, PhoneCall, Calendar
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";
import { useView } from "../../context/ViewContext";

export const PcAbout = () => {
  const { hospitalInfo, setIsBookModalOpen } = useHospital();
  const { setActiveTab } = useView();
  const [activeLeaderTab, setActiveLeaderTab] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  const leadership = [
    {
      name: "Dr. Arvind V. Nambiar",
      role: "Chief Medical Officer & Senior Cardiologist",
      qual: "MD, DM (Cardiology), FACC (USA), FSCAI",
      exp: "32+ Years Experience",
      specialty: "Complex Coronary Angioplasty & Structural Heart Interventions",
      quote: "Our mission is to combine pioneering clinical precision with deep, unwavering empathy for every patient who walks through our doors."
    },
    {
      name: "Dr. Sarah Jenkins-Taylor",
      role: "Director of Robotic Surgery & Minimal Access",
      qual: "MS, MCh (Surgical Oncology), FRCS (Eng), FACS",
      exp: "24+ Years Experience",
      specialty: "DaVinci Robotic Oncology & Multi-Quadrant Precision Resections",
      quote: "Robotic surgical innovation allows us to deliver millimeter-level precision, zero-blood-loss surgeries, and rapid next-day patient recovery."
    },
    {
      name: "Dr. Rajeshwar K. Sharma",
      role: "Head of Critical Care & Emergency Medicine",
      qual: "MD (Anaesth), EDIC (Europe), FCCM, FICCM",
      exp: "26+ Years Experience",
      specialty: "Level-1 Polytrauma, ECMO Life Support & Neuro-Intensive Care",
      quote: "In critical care, every second counts. Our synchronized emergency trauma network guarantees immediate triage and life-saving interventions."
    },
    {
      name: "Sister Margaret Chen",
      role: "Chief Nursing Officer & Quality Director",
      qual: "M.Sc Nursing, Certified Healthcare Quality Specialist (CPHQ)",
      exp: "22+ Years Experience",
      specialty: "Infection Control, Patient-Centric Compassionate Care & JCI Compliance",
      quote: "Exceptional clinical outcomes begin with dedicated, empathetic nursing care and round-the-clock bedside vigilance."
    }
  ];

  const clinicalPillars = [
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50 border-amber-200",
      iconBg: "bg-amber-100 text-amber-700",
      title: "Robotic Precision & AI Diagnostics",
      desc: "DaVinci Xi 4-arm surgical robots, 3T silent wide-bore MRI, and AI-assisted radiology reporting delivering sub-millimeter diagnostic accuracy."
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-rose-600" />,
      bg: "bg-rose-50 border-rose-200",
      iconBg: "bg-rose-100 text-rose-700",
      title: "24/7 Level-1 Emergency & Trauma",
      desc: "5G GPS mobile ICU ambulances, zero-wait trauma resuscitation, and a sub-8-minute emergency triage door-to-doctor protocol."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
      bg: "bg-teal-50 border-teal-200",
      iconBg: "bg-teal-100 text-teal-700",
      title: "Ethical & Transparent Care",
      desc: "100% cashless TPA insurance empanelment across 40+ partners with zero hidden costs, instant pre-authorizations, and digital billing."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50 border-indigo-200",
      iconBg: "bg-indigo-100 text-indigo-700",
      title: "Compassionate Nursing Vigilance",
      desc: "1:1 dedicated critical care nurse-to-patient ratio, continuous biometric telemetry monitoring, and warm patient rehabilitation programs."
    }
  ];

  const accreditations = [
    { title: "JCI Gold Seal of Approval", org: "Joint Commission International (USA)", tag: "International Quality Standard", color: "border-amber-300 bg-amber-50/50" },
    { title: "NABH Digital Super Hospital", org: "National Accreditation Board for Hospitals", tag: "Apex Healthcare Accreditation", color: "border-teal-300 bg-teal-50/50" },
    { title: "NABL Certified Laboratories", org: "National Board for Testing & Calibration", tag: "100% Diagnostic Accuracy", color: "border-indigo-300 bg-indigo-50/50" },
    { title: "Green Hospital Platinum Award", org: "Global Healthcare Green Building Council", tag: "100% Eco-Sustainable Campus", color: "border-emerald-300 bg-emerald-50/50" }
  ];

  return (
    <div className="py-6 px-4 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-6 sm:space-y-8">
      
      {/* 1. Grand Atrium Hero Banner (Sleek Compact Height) */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-200/80 shadow-md p-6 sm:p-7 isolate">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/banners/about.jpg"
            alt="Vault Care Hospital Grand Atrium"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onError={(e) => {
              e.currentTarget.src = "/departments/cardiology.jpg";
            }}
            className="w-full h-full object-cover object-center scale-100 filter brightness-[1.02] opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/65 to-amber-50/40" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100/90 text-amber-950 text-[11px] font-bold uppercase tracking-wider border border-amber-300/80 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>28+ Years of Medical Excellence • Quaternary Care</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-extrabold font-heading tracking-tight text-slate-950 leading-tight">
            Healing Lives with <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 via-orange-600 to-teal-700">Pioneering Medicine</span> & Compassion
          </h1>
          
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal max-w-2xl">
            Vault Care Hospital is a world-class quaternary healthcare institution spanning 800,000 sq.ft with 650+ smart beds, 14 robotic OTs, and 24/7 Level-1 trauma response delivering precision patient healing.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => setIsBookModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-xs shadow-xs transition flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
            <button
              onClick={() => setActiveTab("departments")}
              className="px-4 py-2.5 rounded-xl bg-white/90 hover:bg-white text-slate-900 font-bold text-xs border border-slate-200 shadow-xs transition flex items-center gap-2"
            >
              <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
              <span>Explore 24 Specialities</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mission, Vision, Core Values (2-Column Mobile Grid) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
        
        {/* Mission Card */}
        <motion.div
          whileHover={{ y: -4, scale: 1.015 }}
          transition={{ duration: 0.25 }}
          className="relative overflow-hidden p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-amber-200/90 shadow-xs hover:shadow-lg hover:border-amber-400 transition-all isolate space-y-2.5 sm:space-y-3 group"
        >
          {/* Animated Background Aura */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 10, 0],
              y: [0, -8, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 w-28 sm:w-36 h-28 sm:h-36 rounded-full bg-gradient-to-br from-amber-200/50 via-orange-200/30 to-yellow-100/20 blur-xl pointer-events-none z-0"
          />

          <div className="relative z-10 space-y-2 sm:space-y-3">
            {/* Real-Time Animated 3D Logo */}
            <div className="flex items-center justify-between">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-amber-300/80 shadow-md shadow-amber-500/15 group-hover:scale-105 group-hover:border-amber-400 transition-all duration-200 bg-white">
                <img
                  src="/logos/mission.jpg"
                  alt="Vault Care Mission 3D Logo"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = "/departments/cardiology.jpg";
                  }}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-ping" />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500" />
              </div>
              <span className="px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[9px] sm:text-[10px] font-black uppercase tracking-wider font-mono">
                Pillar 01
              </span>
            </div>

            <div>
              <h3 className="text-sm sm:text-xl font-bold text-slate-950 font-heading">Our Mission</h3>
              <div className="w-6 sm:w-8 h-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 mt-1" />
            </div>

            <p className="text-[11px] sm:text-sm text-slate-700 leading-snug sm:leading-normal font-normal">
              Accessible, high-precision healthcare upholding the highest global clinical standards.
            </p>
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          whileHover={{ y: -4, scale: 1.015 }}
          transition={{ duration: 0.25 }}
          className="relative overflow-hidden p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-orange-200/90 shadow-xs hover:shadow-lg hover:border-orange-400 transition-all isolate space-y-2.5 sm:space-y-3 group"
        >
          {/* Animated Background Aura */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.55, 0.3],
              x: [0, -10, 0],
              y: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 w-28 sm:w-36 h-28 sm:h-36 rounded-full bg-gradient-to-br from-orange-200/50 via-amber-200/30 to-rose-100/20 blur-xl pointer-events-none z-0"
          />

          <div className="relative z-10 space-y-2 sm:space-y-3">
            {/* Real-Time Animated 3D Logo */}
            <div className="flex items-center justify-between">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-orange-300/80 shadow-md shadow-orange-500/15 group-hover:scale-105 group-hover:border-orange-400 transition-all duration-200 bg-white">
                <img
                  src="/logos/vision.jpg"
                  alt="Vault Care Vision 3D Logo"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = "/departments/cardiology.jpg";
                  }}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400 animate-ping" />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500" />
              </div>
              <span className="px-2 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-[9px] sm:text-[10px] font-black uppercase tracking-wider font-mono">
                Pillar 02
              </span>
            </div>

            <div>
              <h3 className="text-sm sm:text-xl font-bold text-slate-950 font-heading">Our Vision</h3>
              <div className="w-6 sm:w-8 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 mt-1" />
            </div>

            <p className="text-[11px] sm:text-sm text-slate-700 leading-snug sm:leading-normal font-normal">
              Apex benchmark for robotic surgical breakthroughs and humane patient-first care.
            </p>
          </div>
        </motion.div>

        {/* Core Values Card */}
        <motion.div
          whileHover={{ y: -4, scale: 1.015 }}
          transition={{ duration: 0.25 }}
          className="col-span-2 md:col-span-1 relative overflow-hidden p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-teal-200/90 shadow-xs hover:shadow-lg hover:border-teal-400 transition-all isolate space-y-2.5 sm:space-y-3 group"
        >
          {/* Animated Background Aura */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 10, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 w-28 sm:w-36 h-28 sm:h-36 rounded-full bg-gradient-to-br from-teal-200/50 via-emerald-200/30 to-cyan-100/20 blur-xl pointer-events-none z-0"
          />

          <div className="relative z-10 space-y-2 sm:space-y-3">
            {/* Real-Time Animated 3D Logo */}
            <div className="flex items-center justify-between">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-emerald-300/80 shadow-md shadow-teal-500/15 group-hover:scale-105 group-hover:border-emerald-400 transition-all duration-200 bg-white">
                <img
                  src="/logos/values.jpg"
                  alt="Vault Care Core Values 3D Logo"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = "/departments/cardiology.jpg";
                  }}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500" />
              </div>
              <span className="px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-[9px] sm:text-[10px] font-black uppercase tracking-wider font-mono">
                Pillar 03
              </span>
            </div>

            <div>
              <h3 className="text-sm sm:text-xl font-bold text-slate-950 font-heading">Core Values</h3>
              <div className="w-6 sm:w-8 h-1 rounded-full bg-gradient-to-r from-teal-600 to-emerald-400 mt-1" />
            </div>

            <p className="text-[11px] sm:text-sm text-slate-700 leading-snug sm:leading-normal font-normal">
              Precision clinical ethics, transparent billing, and zero-compromise patient bio-safety.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 4. Four Pillars of Clinical Distinction with Real-Time Animated Logos & Background Glows */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-teal-700" />
            <span>Why Patients Trust Vault Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
            Four Pillars of Medical Distinction
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          
          {/* Pillar 1: Robotic Precision */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative overflow-hidden p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-amber-200 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all isolate space-y-2.5 sm:space-y-3 group"
          >
            {/* Background Animated Orb */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.25, 0.5, 0.25],
                x: [0, 10, 0],
                y: [0, -10, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-28 sm:w-32 h-28 sm:h-32 rounded-full bg-amber-200/40 blur-xl pointer-events-none z-0"
            />
            
            <div className="relative z-10 space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-amber-300/80 shadow-md shadow-amber-500/15 group-hover:scale-105 group-hover:border-amber-400 transition-all duration-200 bg-white">
                  <img
                    src="/logos/pillar_robotic.jpg"
                    alt="Robotic Precision & AI Diagnostics Logo"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = "/departments/cardiology.jpg";
                    }}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-ping" />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[9px] sm:text-[10px] font-black uppercase tracking-wider font-mono">
                  Robotics
                </span>
              </div>
              <h4 className="text-xs sm:text-base font-bold text-slate-950 font-heading">Robotic Precision & AI</h4>
              <p className="text-[11px] sm:text-xs text-slate-700 leading-snug sm:leading-relaxed">
                DaVinci Xi 4-arm robots & 3T MRI delivering sub-millimeter surgical accuracy.
              </p>
            </div>
          </motion.div>

          {/* Pillar 2: 24/7 Level-1 Trauma */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative overflow-hidden p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-rose-200 shadow-xs hover:shadow-xl hover:border-rose-400 transition-all isolate space-y-2.5 sm:space-y-3 group"
          >
            {/* Background Animated Orb */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.25, 0.5, 0.25],
                x: [0, -10, 0],
                y: [0, 10, 0]
              }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-28 sm:w-32 h-28 sm:h-32 rounded-full bg-rose-200/40 blur-xl pointer-events-none z-0"
            />
            
            <div className="relative z-10 space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-rose-300/80 shadow-md shadow-rose-500/15 group-hover:scale-105 group-hover:border-rose-400 transition-all duration-200 bg-white">
                  <img
                    src="/logos/pillar_trauma.jpg"
                    alt="24/7 Level-1 Emergency & Trauma Logo"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = "/departments/cardiology.jpg";
                    }}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-400 animate-ping" />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-500" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-900 text-[9px] sm:text-[10px] font-black uppercase tracking-wider font-mono">
                  Level-1
                </span>
              </div>
              <h4 className="text-xs sm:text-base font-bold text-slate-950 font-heading">Level-1 Trauma & ICU</h4>
              <p className="text-[11px] sm:text-xs text-slate-700 leading-snug sm:leading-relaxed">
                5G mobile ICU fleet & sub-8-min emergency triage protocol.
              </p>
            </div>
          </motion.div>

          {/* Pillar 3: Ethical & Transparent */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative overflow-hidden p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-teal-200 shadow-xs hover:shadow-xl hover:border-teal-400 transition-all isolate space-y-2.5 sm:space-y-3 group"
          >
            {/* Background Animated Orb */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.25, 0.5, 0.25],
                x: [0, 8, 0],
                y: [0, -8, 0]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-28 sm:w-32 h-28 sm:h-32 rounded-full bg-teal-200/40 blur-xl pointer-events-none z-0"
            />
            
            <div className="relative z-10 space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-teal-300/80 shadow-md shadow-teal-500/15 group-hover:scale-105 group-hover:border-teal-400 transition-all duration-200 bg-white">
                  <img
                    src="/logos/pillar_ethical.jpg"
                    alt="Ethical & Transparent Care Logo"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = "/departments/cardiology.jpg";
                    }}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-teal-400 animate-ping" />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-teal-500" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-[9px] sm:text-[10px] font-black uppercase tracking-wider font-mono">
                  Cashless
                </span>
              </div>
              <h4 className="text-xs sm:text-base font-bold text-slate-950 font-heading">Ethical & Transparent</h4>
              <p className="text-[11px] sm:text-xs text-slate-700 leading-snug sm:leading-relaxed">
                100% cashless insurance with zero hidden costs & instant pre-auth.
              </p>
            </div>
          </motion.div>

          {/* Pillar 4: Compassionate Nursing */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative overflow-hidden p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-indigo-200 shadow-xs hover:shadow-xl hover:border-indigo-400 transition-all isolate space-y-2.5 sm:space-y-3 group"
          >
            {/* Background Animated Orb */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.25, 0.5, 0.25],
                x: [0, -8, 0],
                y: [0, 8, 0]
              }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-28 sm:w-32 h-28 sm:h-32 rounded-full bg-indigo-200/40 blur-xl pointer-events-none z-0"
            />
            
            <div className="relative z-10 space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-indigo-300/80 shadow-md shadow-indigo-500/15 group-hover:scale-105 group-hover:border-indigo-400 transition-all duration-200 bg-white">
                  <img
                    src="/logos/pillar_nursing.jpg"
                    alt="Compassionate Nursing Vigilance Logo"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = "/departments/cardiology.jpg";
                    }}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-400 animate-ping" />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-500" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-[9px] sm:text-[10px] font-black uppercase tracking-wider font-mono">
                  1:1 Ratio
                </span>
              </div>
              <h4 className="text-xs sm:text-base font-bold text-slate-950 font-heading">Nursing Vigilance</h4>
              <p className="text-[11px] sm:text-xs text-slate-700 leading-snug sm:leading-relaxed">
                1:1 dedicated critical care nurse ratio & continuous telemetry.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 5. Medical Advisory & Senior Clinical Leadership */}
      <div className="p-3.5 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3.5 sm:space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2.5 sm:gap-4">
          <div className="space-y-1 sm:space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-900 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <Stethoscope className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-700" />
              <span>Medical Leadership</span>
            </div>
            <h2 className="text-xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Senior Clinical Advisory
            </h2>
            <p className="text-[11px] sm:text-sm text-slate-600">
              Led by globally acclaimed surgeons and department chairs.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
            {leadership.map((leader, i) => (
              <button
                key={i}
                onClick={() => setActiveLeaderTab(i)}
                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-bold transition border whitespace-nowrap ${
                  activeLeaderTab === i
                    ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                {leader.name.split(" ")[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Leader Feature Card - Compact on Mobile */}
        <div className="p-3 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-3 sm:gap-8 items-center sm:items-center">
          <div className="w-12 h-12 sm:w-28 sm:h-28 rounded-xl sm:rounded-3xl bg-gradient-to-tr from-teal-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold shadow-md sm:shadow-xl shrink-0">
            <UserCheck className="w-6 h-6 sm:w-12 sm:h-12" />
          </div>
          
          <div className="space-y-1 sm:space-y-3 flex-1 text-center sm:text-left min-w-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-3">
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-teal-100 text-teal-900 text-[10px] sm:text-xs font-bold font-mono">
                {leadership[activeLeaderTab].exp}
              </span>
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-indigo-100 text-indigo-900 text-[10px] sm:text-xs font-semibold">
                {leadership[activeLeaderTab].qual}
              </span>
            </div>
            
            <h3 className="text-base sm:text-2xl font-bold font-heading text-slate-900">
              {leadership[activeLeaderTab].name}
            </h3>
            
            <p className="text-[11px] sm:text-sm font-semibold text-teal-700 font-sans leading-tight">
              {leadership[activeLeaderTab].role} • {leadership[activeLeaderTab].specialty}
            </p>
            
            <blockquote className="text-[10px] sm:text-sm text-slate-700 italic border-l-0 sm:border-l-4 border-teal-500 pl-0 sm:pl-4 py-0.5 sm:py-1 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
              "{leadership[activeLeaderTab].quote}"
            </blockquote>
          </div>
        </div>
      </div>

      {/* 5. Accreditations & Quality Certifications */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <BadgeCheck className="w-3.5 h-3.5 text-teal-700" />
            <span>Global Benchmarks</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900">
            Accreditations & Quality Recognitions
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {accreditations.map((acc, idx) => (
            <div key={idx} className={`p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border ${acc.color} shadow-xs space-y-1.5 sm:space-y-2`}>
              <div className="flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-500 truncate max-w-[100px]">{acc.tag}</span>
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0" />
              </div>
              <h4 className="text-xs sm:text-base font-bold text-slate-900 font-heading">{acc.title}</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 sm:line-clamp-none">{acc.org}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
