import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Brain,
  Bone,
  Activity,
  Baby,
  ShieldAlert,
  HeartHandshake,
  Scan,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Calendar,
  Cpu,
  ShieldCheck,
  Bed,
  Clock,
  Zap
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const PcDepartments = () => {
  const { departments, setIsBookModalOpen, setSelectedDepartment } = useHospital();
  const [activeId, setActiveId] = useState(departments[0]?.id || "cardio");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  // 8 completely distinct, photorealistic, specialty-specific images & clinical data
  const baseDeptData = {
    "dept-1": {
      num: "01",
      name: "Cardiology & Heart Care",
      tagline: "Cardiac Sciences & Cath Lab",
      floor: "Wing A • Level 3",
      headline: "Robotic Bypass Surgery, Interventional Angioplasty & 24/7 Digital Cath Lab",
      description: "Comprehensive cardiac care including robotic bypass surgery, interventional angioplasty, pacemaker implants, and 24/7 catheterization laboratory.",
      bannerImage: "/departments/cardiology.jpg",
      icon: <HeartPulse className="w-5 h-5 text-rose-500" />,
      equipment: "3D Optical Coherence Tomography (OCT) • Dual Source 128-Slice CT • Artis Zee Digital Cath Lab • Hybrid Cardiac OT",
      metrics: [
        { label: "Stent Precision", value: "99.4%" },
        { label: "Door-to-Balloon", value: "< 12 min" },
        { label: "Cardiac CCU Beds", value: "85 Beds" }
      ],
      services: [
        "Coronary Angioplasty & Stenting",
        "CABG Open Heart Surgery",
        "Pacemaker Implantation",
        "Heart Failure Clinic"
      ]
    },
    "dept-2": {
      num: "02",
      name: "Neurology & Brain Spine",
      tagline: "Neurosciences & Stroke Rescue Hub",
      floor: "Wing B • Level 4",
      headline: "State-of-the-Art Neurological Diagnostics, Stroke Rescue & Spinal Decompression",
      description: "Comprehensive neurological diagnostics, rapid stroke rescue unit, stereotactic radio-surgery, and minimally invasive spinal decompression.",
      bannerImage: "/departments/neurology.jpg",
      icon: <Brain className="w-5 h-5 text-indigo-500" />,
      equipment: "StealthStation Neuro Navigation • 3T Intraoperative MRI • Stereotactic Radiosurgery • Digital 24-Ch EEG/EMG",
      metrics: [
        { label: "Navigation Accuracy", value: "99.8%" },
        { label: "Stroke Triage Protocol", value: "< 15 min" },
        { label: "Neuro-ICU Beds", value: "60 Beds" }
      ],
      services: [
        "Stroke Triage Unit",
        "Brain Tumor Surgery",
        "Spine Micro-Discectomy",
        "Epilepsy Management"
      ]
    },
    "dept-3": {
      num: "03",
      name: "Orthopedics & Joint Surgery",
      tagline: "Robotic Joint & Sports Surgery",
      floor: "Wing C • Level 2",
      headline: "Robotic Knee and Hip Replacements, 4K Arthroscopy & Polytrauma Care",
      description: "Robotic knee and hip replacements, arthroscopic sports injury treatments, complex polytrauma surgery, and comprehensive bone wellness.",
      bannerImage: "/departments/orthopedics.jpg",
      icon: <Bone className="w-5 h-5 text-teal-500" />,
      equipment: "Mako Robotic Arm Joint Surgery • High-Definition 4K Arthroscopy • Bone Mineral Densitometry (DEXA) • Computer Gait Analyzer",
      metrics: [
        { label: "Implant Longevity", value: "99.9%" },
        { label: "Patient Mobilization", value: "Same-Day" },
        { label: "Orthopedic Beds", value: "70 Beds" }
      ],
      services: [
        "Robotic Knee Replacement",
        "Total Hip Arthroplasty",
        "Sports Ligament Reconstruction",
        "Spine Decompression"
      ]
    },
    "dept-4": {
      num: "04",
      name: "Oncology & Cancer Care",
      tagline: "Comprehensive Precision Oncology",
      floor: "Wing D • Level 5",
      headline: "Multidisciplinary Targeted Immunotherapy, TrueBeam Radiotherapy & Tumor Resection",
      description: "Comprehensive multidisciplinary oncology center offering targeted immunotherapy, TrueBeam precision radiotherapy, and robotic tumor resection.",
      bannerImage: "/departments/oncology.jpg",
      icon: <Activity className="w-5 h-5 text-purple-500" />,
      equipment: "Varian TrueBeam Linear Accelerator • Digital PET-CT Scanner • Daycare Chemotherapy Pods • Next-Gen Gene Sequencer",
      metrics: [
        { label: "Tumor Board Protocol", value: "100%" },
        { label: "Genomic Profiling", value: "< 24 hrs" },
        { label: "Oncology Daycare Beds", value: "90 Beds" }
      ],
      services: [
        "Medical Oncology & Immunotherapy",
        "Surgical Tumor Resection",
        "Targeted Radiation Therapy",
        "Bone Marrow Transplant"
      ]
    },
    "dept-5": {
      num: "05",
      name: "Pediatrics & Child Care",
      tagline: "Child Care & Level-III NICU",
      floor: "Wing E • Level 1",
      headline: "Child-Centric Healthcare, Level-III NICU Newborn Critical Care & Pediatric Surgery",
      description: "Child-centric healthcare from newborn intensive care (Level III NICU) to pediatric surgery, vaccinations, and adolescent wellness.",
      bannerImage: "/departments/pediatrics.jpg",
      icon: <Baby className="w-5 h-5 text-amber-500" />,
      equipment: "Giraffe Incubator Workstations • Nitric Oxide Therapy Units • Pediatric Fiberoptic Bronchoscope • Mobile Transport Shuttle",
      metrics: [
        { label: "Preterm Survival", value: "99.1%" },
        { label: "Emergency Readiness", value: "24/7 Live" },
        { label: "Level-3 NICU Units", value: "65 Beds" }
      ],
      services: [
        "Level III NICU & PICU",
        "Pediatric Surgery",
        "Childhood Immunization",
        "Pediatric Emergency 24/7"
      ]
    },
    "dept-6": {
      num: "06",
      name: "Emergency & Trauma 24/7",
      tagline: "Level-1 Trauma Center & Helipad Link",
      floor: "Ground Floor (Red Rapid Bay)",
      headline: "Accredited Level-1 Golden Hour Polytrauma Management & 24/7 Resuscitation",
      description: "Accredited Level 1 Trauma Center with mobile ICU fleet, stroke code triage, acute cardiac catheterization, and emergency surgical teams.",
      bannerImage: "/departments/emergency.jpg",
      icon: <ShieldAlert className="w-5 h-5 text-red-500" />,
      equipment: "Point-of-Care Ultrasound (POCUS) • Portable 128-Slice Trauma CT • High-Tech Cardiac Defibrillators • Rooftop Helipad Link",
      metrics: [
        { label: "Door-to-Doctor", value: "< 4 min" },
        { label: "Triage Readiness", value: "100% Ready" },
        { label: "Emergency Bays", value: "45 Bays" }
      ],
      services: [
        "Golden Hour Polytrauma Management",
        "Acute Stroke & STEMI Protocol",
        "Burn Care & Resuscitation",
        "Disaster Response"
      ]
    },
    "dept-7": {
      num: "07",
      name: "Women Health & Maternity",
      tagline: "Obstetrics & Luxury Birthing Suites",
      floor: "Wing E • Level 2",
      headline: "Luxury LDRP Natural Birth Suites, High-Risk Pregnancy & Laparoscopic Care",
      description: "LDRP natural birth suites, high-risk pregnancy management, advanced laparoscopic gynecological surgeries, and fertility consultations.",
      bannerImage: "/departments/maternity.jpg",
      icon: <HeartHandshake className="w-5 h-5 text-pink-500" />,
      equipment: "Voluson E10 4D HD Live Ultrasound • Laparoscopic Modular Surgery Tower • Fetal Telemetry Monitors • LDRP Birthing Beds",
      metrics: [
        { label: "Emergency C-Section Prep", value: "< 15 min" },
        { label: "Obstetricians On Floor", value: "24/7 Active" },
        { label: "Private Maternity Suites", value: "55 Beds" }
      ],
      services: [
        "LDRP Luxury Birth Suites",
        "High Risk Pregnancy Care",
        "Laparoscopic Hysterectomy",
        "Fertility & IVF Consultations"
      ]
    },
    "dept-8": {
      num: "08",
      name: "Advanced Radiology & Scans",
      tagline: "Digital Diagnostic Imaging & 3T MRI",
      floor: "Basement Level 1",
      headline: "Ultra-Low Dose CT Scans, 3T Silent Wide-Bore MRI & AI High-Precision Diagnostics",
      description: "Ultra-low dose CT scans, 3T silent wide-bore MRI, digital 3D mammography, and AI-accelerated high-precision diagnostics.",
      bannerImage: "/departments/radiology.jpg",
      icon: <Scan className="w-5 h-5 text-cyan-500" />,
      equipment: "Siemens 3T Magnetom Vida MRI • GE Revolution 128-Slice CT • Hologic 3D Digital Mammography • Philips Ultrasound",
      metrics: [
        { label: "Spatial Resolution", value: "Sub-mm" },
        { label: "Emergency PACS Reports", value: "< 20 min" },
        { label: "Diagnostic Suites", value: "20 Suites" }
      ],
      services: [
        "Silent 3T Wide-Bore MRI",
        "Low-Dose 128-Slice Cardiac CT",
        "Digital 3D Mammography",
        "Image-Guided Precision Biopsies"
      ]
    }
  };

  const deptData = {
    ...baseDeptData,
    cardio: baseDeptData["dept-1"],
    neuro: baseDeptData["dept-2"],
    ortho: baseDeptData["dept-3"],
    onco: baseDeptData["dept-4"],
    pediatrics: baseDeptData["dept-5"],
    trauma: baseDeptData["dept-6"],
    maternity: baseDeptData["dept-7"],
    radiology: baseDeptData["dept-8"],
  };

  const handleBook = (deptName) => {
    if (setSelectedDepartment) setSelectedDepartment(deptName);
    setIsBookModalOpen(true);
  };

  const activeDeptObject = departments.find((d) => d.id === activeId) || departments[0] || { id: activeId, name: deptData[activeId]?.name };
  const currentData = deptData[activeDeptObject?.id] || deptData["dept-1"];
  const currentImage = currentData.bannerImage || activeDeptObject.bannerImage || activeDeptObject.image || "/departments/cardiology.jpg";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 py-6 sm:py-10 px-4 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-6 sm:space-y-10">
      
      {/* 1. Header Hero Banner with Custom Departments Corridor Background */}
      <div className="relative overflow-hidden rounded-3xl border border-teal-200/80 shadow-lg p-6 sm:p-10 isolate">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/banners/departments.jpg"
            alt="Vault Care Medical Wings"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onError={(e) => {
              e.currentTarget.src = "/departments/cardiology.jpg";
            }}
            className="w-full h-full object-cover object-center scale-100 filter brightness-[1.02] opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-teal-50/40" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-700 animate-pulse" />
              <span>Vault Care Centers of Clinical Excellence</span>
            </div>
            <h1 className="text-3xl sm:text-6xl font-black font-heading tracking-tight text-slate-950 leading-tight">
              Specialized Medical Wings
            </h1>
            <p className="text-slate-900 text-sm sm:text-lg font-normal leading-relaxed">
              Explore dedicated surgical capabilities, high-precision equipment, and instant consultation scheduling across all 8 clinical wings.
            </p>
          </div>

          {/* Live Facility Ticker */}
          <div className="flex items-center gap-3 text-xs font-extrabold text-slate-950 self-start lg:self-auto bg-white/90 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-teal-200/80 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>8 Wings Active</span>
            </div>
            <span className="text-slate-300">•</span>
            <span>650+ Smart Beds</span>
            <span className="text-slate-300">•</span>
            <span className="text-teal-700">100% NABH Certified</span>
          </div>
        </div>
      </div>

      {/* 2A. Mobile View: Horizontal Scroll Wings + Rich Active Card (< md) */}
      <div className="md:hidden space-y-4">
        {/* Horizontal Wing Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {departments.map((dept, i) => {
            const itemData = deptData[dept.id] || deptData[`dept-${i + 1}`] || deptData["dept-1"];
            const isSelected = activeId === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setActiveId(dept.id)}
                className={`px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isSelected
                    ? "bg-slate-950 text-white border-slate-950 shadow-md"
                    : "bg-white text-slate-700 border-slate-200"
                }`}
              >
                <span>{itemData.num}</span>
                <span>{dept.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Department Mobile Card */}
        {(() => {
          const activeIndex = departments.findIndex(d => d.id === activeId);
          const itemData = deptData[activeId] || deptData[`dept-${activeIndex + 1}`] || deptData["dept-1"];
          const dept = departments.find(d => d.id === activeId) || departments[0];
          const bannerUrl = itemData.bannerImage || dept.bannerImage || dept.image || "/departments/cardiology.jpg";

          return (
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl isolate">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={bannerUrl}
                  alt={dept.name}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.src = "/departments/cardiology.jpg"; }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                  {itemData.num} • {itemData.floor}
                </div>
              </div>

              <div className="p-5 space-y-4 -mt-6 relative z-10">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-teal-400 block">{itemData.tagline}</span>
                  <h3 className="text-2xl font-black font-heading text-white">{dept.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{itemData.description}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center">
                  {itemData.metrics.map((m, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="text-base font-black font-mono text-emerald-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400 font-semibold">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Equipment */}
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-teal-300">Equipped Infrastructure:</span>
                  <p className="text-xs text-slate-300">{itemData.equipment}</p>
                </div>

                {/* Key Procedures */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-teal-300">Key Treatments:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {itemData.services.map((p, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-semibold text-white flex items-center gap-1 border border-white/10">
                        <CheckCircle2 className="w-3 text-teal-400" />
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Book Consultation */}
                <button
                  onClick={() => handleBook(dept.name)}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 font-black text-xs shadow-lg flex items-center justify-center gap-2 mt-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment in {dept.name}</span>
                </button>
              </div>
            </div>
          );
        })()}
      </div>

      {/* 2B. Desktop View: Interactive Expanding Horizontal Curtain (>= md) */}
      <div className="hidden md:flex h-[600px] sm:h-[650px] w-full flex-row gap-2 sm:gap-3 overflow-hidden rounded-3xl p-1">
        {departments.map((dept, i) => {
          const itemData = deptData[dept.id] || deptData[`dept-${i + 1}`] || deptData["dept-1"];
          const isActive = activeId === dept.id;
          const bannerUrl = itemData.bannerImage || dept.bannerImage || dept.image || "/departments/cardiology.jpg";

          return (
            <motion.div
              key={dept.id}
              onClick={() => setActiveId(dept.id)}
              onMouseEnter={() => setActiveId(dept.id)}
              layout
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className={`relative h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
                isActive
                  ? "flex-[6] shadow-2xl"
                  : "flex-1 hover:flex-[1.4] opacity-85 hover:opacity-100"
              }`}
            >
              {/* Background Image with Cinematic Gradient */}
              <img
                src={bannerUrl}
                alt={dept.name}
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.src = "/departments/cardiology.jpg"; }}
                className="absolute inset-0 w-full h-full object-cover object-center scale-105"
              />
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/20"
                    : "bg-slate-950/75 hover:bg-slate-950/60"
                }`}
              />

              {/* Collapsed State: Sleek Vertical Strip */}
              {!isActive && (
                <div className="absolute inset-0 p-4 flex flex-col justify-between items-center z-10 select-none">
                  <span className="text-base font-mono font-black text-white/70">
                    {itemData.num}
                  </span>

                  {/* Vertical Rotated Department Name */}
                  <div className="rotate-180 [writing-mode:vertical-lr] text-sm sm:text-base font-black tracking-wider text-white whitespace-nowrap">
                    {dept.name}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                    {itemData.icon}
                  </div>
                </div>
              )}

              {/* Expanded State: Full Verified Clinical Content */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.25 }}
                  className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between z-20 text-white"
                >
                  {/* Top Bar inside Active Curtain */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1.5 rounded-full bg-white text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                        {itemData.num} • {itemData.floor}
                      </span>
                      <span className="text-xs font-bold text-teal-300 hidden sm:inline-flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {itemData.tagline}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBook(dept.name);
                      }}
                      className="py-2.5 px-5 rounded-full bg-white hover:bg-teal-50 text-slate-950 font-extrabold text-xs shadow-lg transition active:scale-95 flex items-center gap-2"
                    >
                      <Calendar className="w-3.5 h-3.5 text-teal-700" />
                      <span>Book Token in {dept.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-teal-700" />
                    </button>
                  </div>

                  {/* Center Content: Exact Verified Title, Headline & Description */}
                  <div className="space-y-3 max-w-2xl my-auto">
                    <div className="flex items-center gap-2 text-teal-300 text-xs font-black uppercase tracking-widest">
                      {itemData.icon}
                      <span>{itemData.tagline}</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-none text-white">
                      {dept.name}
                    </h2>

                    <p className="text-slate-200 text-sm sm:text-base font-medium leading-relaxed">
                      {itemData.description}
                    </p>

                    {/* Integrated Fluid Clinical Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                      {itemData.metrics.map((m, i) => (
                        <div key={i} className="space-y-0.5">
                          <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-slate-300 font-semibold">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Strip: Exact Medical Equipment & Procedures */}
                  <div className="pt-4 border-t border-white/15 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-black uppercase tracking-widest text-teal-300">
                          Equipped Medical Infrastructure:
                        </span>
                        <p className="text-xs text-slate-200 font-semibold truncate max-w-xl">
                          {itemData.equipment}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>NABH & JCI Certified Care</span>
                      </div>
                    </div>

                    {/* Key Procedure Pills */}
                    <div className="hidden sm:flex flex-wrap gap-2">
                      {itemData.services.map((p, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-semibold text-white border border-white/10 flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-teal-400" />
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

    </div>
  );
};
