import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Cpu,
  Stethoscope,
  Video,
  Activity,
  Pill,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  PhoneCall,
  Calendar,
  Clock,
  Zap,
  ShieldCheck,
  CreditCard,
  FileText,
  BadgePercent,
  Check
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const PcServices = () => {
  const { services, setIsBookModalOpen, setSelectedDepartment } = useHospital();
  const [selectedServiceId, setSelectedServiceId] = useState("srv-1");
  const [activePackageTab, setActivePackageTab] = useState("cardiac");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  // Streamlined, compact, colorful clinical services data
  const serviceCatalog = {
    "srv-1": {
      num: "01",
      title: "24/7 Emergency & Level-1 Trauma",
      category: "Emergency & Critical Care",
      badge: "Level-1 Trauma Certified",
      tagline: "< 4 Min Door-to-Doctor • Direct Helipad Link",
      headline: "Golden-Hour Polytrauma & Emergency Critical Care",
      description: "24/7 emergency surgical teams, mobile ICU ambulance dispatch, and instant trauma CT.",
      image: "/services/emergency.jpg",
      pricing: "Instant Triage • 100% Cashless TPA Insurance Covered",
      themeColor: "rose",
      accentGradient: "from-rose-500 to-red-600",
      activeBg: "bg-gradient-to-r from-rose-500 to-red-600",
      activeShadow: "shadow-rose-500/25",
      badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
      iconBg: "bg-rose-100 text-rose-700",
      featureBg: "bg-rose-50/50 hover:bg-rose-50 border-rose-100",
      btnGradient: "from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 shadow-rose-500/25",
      features: [
        "Dedicated Polytrauma Surgical Team & Intensivists on Floor",
        "Instant Bedside Ultrasound (POCUS) & 128-Slice Trauma CT",
        "On-Site 24/7 Blood Bank & Massive Transfusion Protocol",
        "GPS-Tracked Mobile ICU Ambulances with Live Telemetry"
      ]
    },
    "srv-2": {
      num: "02",
      title: "Robotic & Minimally Invasive Surgery",
      category: "Robotic Surgical Sciences",
      badge: "Sub-Millimeter Navigation",
      tagline: "DaVinci XI & Mako Robotic Arm Suites",
      headline: "Robotic Joint Replacement & Precision Keyhole Surgery",
      description: "DaVinci XI & Mako robotic systems with sub-millimeter surgical precision.",
      image: "/services/robotic.jpg",
      pricing: "Transparent Fixed Packages • Cashless Pre-Auth Assistance",
      themeColor: "indigo",
      accentGradient: "from-indigo-600 to-purple-600",
      activeBg: "bg-gradient-to-r from-indigo-600 to-purple-600",
      activeShadow: "shadow-indigo-500/25",
      badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      iconBg: "bg-indigo-100 text-indigo-700",
      featureBg: "bg-indigo-50/50 hover:bg-indigo-50 border-indigo-100",
      btnGradient: "from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-indigo-500/25",
      features: [
        "Mako Robotic Total Knee & Hip Arthroplasty (99.9% Accuracy)",
        "DaVinci Robotic Urology, Thoracic & Oncology Keyhole Surgery",
        "Ultra-Clean Laminar Airflow Operation Theatres with HEPA Filtering",
        "Faster Hospital Discharge with 24-48 Hour Average Recovery"
      ]
    },
    "srv-3": {
      num: "03",
      title: "Master Preventive Health & Screenings",
      category: "Preventive Care & Labs",
      badge: "6-Hour Digital PACS Report",
      tagline: "85+ Diagnostic Biomarkers • Full Organ Profiling",
      headline: "Executive Full-Body & Comprehensive Organ Profiling",
      description: "Personalized preventive diagnostic screenings with digital reports delivered in 6 hours.",
      image: "/services/preventive.jpg",
      pricing: "Packages from ₹4,999 • Tax-Exempt Healthcare",
      themeColor: "emerald",
      accentGradient: "from-emerald-600 to-teal-600",
      activeBg: "bg-gradient-to-r from-emerald-600 to-teal-600",
      activeShadow: "shadow-emerald-500/25",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      iconBg: "bg-emerald-100 text-emerald-700",
      featureBg: "bg-emerald-50/50 hover:bg-emerald-50 border-emerald-100",
      btnGradient: "from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-500/25",
      features: [
        "Comprehensive 85+ Blood Biomarkers & Metabolic Diagnostic Panels",
        "3D Transthoracic Echocardiography & Treadmill Stress Test (TMT)",
        "High-Resolution 3T Silent MRI & Low-Dose CT Diagnostic Scans",
        "Detailed One-on-One Senior Physician Lifestyle & Health Review"
      ]
    },
    "srv-4": {
      num: "04",
      title: "Tele-Consultation & Virtual Clinic",
      category: "Digital Healthcare",
      badge: "Instant Video OPD",
      tagline: "Encrypted HD Video Calls • Digital Prescriptions",
      headline: "Encrypted HD Video Consultation & Virtual Clinic",
      description: "Connect directly with top medical specialists from home with instant digital prescriptions.",
      image: "/services/teleconsult.jpg",
      pricing: "₹499 - ₹999 Fixed Consultation • No Hidden Fees",
      themeColor: "sky",
      accentGradient: "from-sky-500 to-blue-600",
      activeBg: "bg-gradient-to-r from-sky-500 to-blue-600",
      activeShadow: "shadow-sky-500/25",
      badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
      iconBg: "bg-sky-100 text-sky-700",
      featureBg: "bg-sky-50/50 hover:bg-sky-50 border-sky-100",
      btnGradient: "from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-sky-500/25",
      features: [
        "End-to-End Encrypted HD Video Call with Senior Specialists",
        "Digitally Signed Prescriptions & Scheduled Medication Reminders",
        "Home Blood Sample Collection & Diagnostic Pickup Coordination",
        "Multi-Lingual Specialist Consultations Available 7 Days/Week"
      ]
    },
    "srv-5": {
      num: "05",
      title: "Critical Care (ICU / NICU / CCU / PICU)",
      category: "Critical Care Units",
      badge: "1:1 Dedicated Nursing",
      tagline: "120 Advanced Isolation Beds • AI Tele-ICU",
      headline: "24/7 Intensivist-Led Multidisciplinary Critical Care",
      description: "120 Level-3 ICU isolation beds with advanced mechanical ventilation and ECMO support.",
      image: "/services/critical-care.jpg",
      pricing: "Direct Cashless TPA Billing • Transparent Daily Breakdown",
      themeColor: "amber",
      accentGradient: "from-amber-500 to-orange-600",
      activeBg: "bg-gradient-to-r from-amber-500 to-orange-600",
      activeShadow: "shadow-amber-500/25",
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
      iconBg: "bg-amber-100 text-amber-700",
      featureBg: "bg-amber-50/50 hover:bg-amber-50 border-amber-100",
      btnGradient: "from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-amber-500/25",
      features: [
        "Board-Certified Intensivists & 1:1 Dedicated Nursing on Floor 24/7",
        "HEPA-Filtered Positive & Negative Pressure Isolation Suites",
        "Extracorporeal Membrane Oxygenation (ECMO) & Bedside Dialysis",
        "Centralized Real-Time Continuous Telemetry & Patient Monitoring"
      ]
    },
    "srv-6": {
      num: "06",
      title: "24/7 Automated Robotic Pharmacy",
      category: "Pharmacy Logistics",
      badge: "100% Genuine Barcoded Drugs",
      tagline: "Cold-Chain Maintained • Emergency Home Delivery",
      headline: "Zero-Error Robotic Dispensing & Doorstep Delivery",
      description: "10,000+ genuine life-saving medications with 2-8°C cold-chain maintenance.",
      image: "/services/pharmacy.jpg",
      pricing: "Transparent MRP Discounts • Insurance Reimbursable",
      themeColor: "teal",
      accentGradient: "from-teal-500 to-emerald-600",
      activeBg: "bg-gradient-to-r from-teal-500 to-emerald-600",
      activeShadow: "shadow-teal-500/25",
      badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
      iconBg: "bg-teal-100 text-teal-700",
      featureBg: "bg-teal-50/50 hover:bg-teal-50 border-teal-100",
      btnGradient: "from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 shadow-teal-500/25",
      features: [
        "Barcode Robotic Verification for 100% Dispensing Accuracy",
        "Strict 2-8°C Cold-Chain Storage for Biologicals, Vaccines & Insulin",
        "Automated Refill Reminders for Chronic Health Maintenance",
        "Fast Same-Day Doorstep Medication Delivery Across the Region"
      ]
    }
  };

  // Preventive Health Packages with Colorful Themes
  const packages = [
    {
      id: "cardiac",
      name: "Executive Heart Checkup",
      tag: "Cardiac Sciences Priority",
      testsCount: "72 Diagnostic Tests",
      price: "₹4,999",
      originalPrice: "₹8,999",
      discount: "Save 45%",
      image: "/departments/cardiology.jpg",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
      tabActive: "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-md shadow-rose-500/25 border-transparent",
      btnGradient: "bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 shadow-rose-500/20",
      checkBg: "bg-rose-100 text-rose-700",
      turnaround: "6 Hours",
      inclusions: [
        "3D Transthoracic Echocardiography (Echo)",
        "Treadmill Exercise Stress Test (TMT)",
        "Complete Lipid & Apolipoprotein Profile",
        "High-Sensitivity C-Reactive Protein (hs-CRP)",
        "Glycated Hemoglobin (HbA1c) & Fasting Glucose",
        "Resting 12-Lead Electrocardiogram (ECG)",
        "Consultation with Senior Cardiologist"
      ]
    },
    {
      id: "neuro",
      name: "Comprehensive Stroke & Brain Screen",
      tag: "Neurosciences Priority",
      testsCount: "58 Diagnostic Tests",
      price: "₹6,999",
      originalPrice: "₹12,000",
      discount: "Save 42%",
      image: "/departments/neurology.jpg",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      tabActive: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25 border-transparent",
      btnGradient: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-indigo-500/20",
      checkBg: "bg-indigo-100 text-indigo-700",
      turnaround: "Same-Day",
      inclusions: [
        "3T Silent MRI Brain & Vascular Angiography",
        "Bilateral Carotid & Vertebral Color Doppler",
        "Complete Hemogram & Coagulation Profile",
        "Serum Homocysteine & Vitamin B12 Levels",
        "24-Channel Video EEG Assessment",
        "Cognitive Function & Stroke Risk Score",
        "Consultation with Senior Neuro-Physician"
      ]
    },
    {
      id: "master",
      name: "Vault Care Master Wellness Profile",
      tag: "Full Body Master Check",
      testsCount: "88 Diagnostic Tests",
      price: "₹5,999",
      originalPrice: "₹10,500",
      discount: "Save 43%",
      image: "/services/preventive.jpg",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      tabActive: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/25 border-transparent",
      btnGradient: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-500/20",
      checkBg: "bg-emerald-100 text-emerald-700",
      turnaround: "6 Hours",
      inclusions: [
        "Liver Function & Renal Function Biomarkers",
        "Thyroid Profile (Total T3, T4 & Ultra-TSH)",
        "Abdominal & Pelvic Ultrasound Screening",
        "Chest Digital X-Ray & Pulmonary Function (PFT)",
        "Vitamin D3, Calcium & Iron Binding Capacity",
        "Urine Microalbumin & Stool Occult Blood",
        "Full Lifestyle & Dietitian Counseling"
      ]
    },
    {
      id: "women",
      name: "Women's Comprehensive Wellness",
      tag: "Maternal & Cancer Screen",
      testsCount: "64 Diagnostic Tests",
      price: "₹5,499",
      originalPrice: "₹9,800",
      discount: "Save 44%",
      image: "/departments/maternity.jpg",
      badgeColor: "bg-pink-100 text-pink-800 border-pink-200",
      tabActive: "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md shadow-pink-500/25 border-transparent",
      btnGradient: "bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 shadow-pink-500/20",
      checkBg: "bg-pink-100 text-pink-700",
      turnaround: "6 Hours",
      inclusions: [
        "Digital 3D Tomosynthesis Mammography",
        "Liquid-Based ThinPrep Pap Smear Screening",
        "4D Pelvic & Transvaginal Ultrasound (TVS)",
        "Bone Mineral Densitometry (DEXA Scan)",
        "Comprehensive Hormone & Thyroid Panel",
        "Cancer Antigen CA-125 Biomarker Test",
        "Consultation with Senior Gynecologist"
      ]
    }
  ];

  const activeService = serviceCatalog[selectedServiceId] || serviceCatalog["srv-1"];

  const handleBookService = (title) => {
    if (setSelectedDepartment) setSelectedDepartment("General Consultation");
    setIsBookModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 py-6 sm:py-10 px-4 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-6 sm:space-y-12">
      
      {/* 1. Header Hero Banner with Diagnostic Checkup Lab Background */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-teal-200/80 shadow-lg p-4 sm:p-10 isolate">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/banners/services.jpg"
            alt="Vault Care Clinical Services"
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

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 relative z-10">
          <div className="space-y-2 sm:space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-teal-100 text-teal-900 text-[10px] sm:text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal-700 animate-pulse" />
              <span>Vault Care Clinical Offerings</span>
            </div>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-slate-950 leading-tight">
              Comprehensive Clinical Services
            </h1>
            <p className="text-slate-900 text-xs sm:text-lg font-normal leading-relaxed">
              From Level-1 emergency trauma care and robotic surgeries to master preventive checkup packages and encrypted virtual consultations.
            </p>
          </div>

          {/* Emergency Ticker */}
          <div className="flex items-center gap-3 p-2.5 sm:p-3 px-3 sm:px-4 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-rose-200 text-slate-950 self-start lg:self-auto shadow-xs">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center font-bold shadow-md shadow-rose-500/20 shrink-0">
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-rose-700 block">24/7 Emergency Dispatch</span>
              <a href="tel:+18007899999" className="text-xs sm:text-sm font-black text-slate-950 font-mono hover:text-rose-600 transition">
                +1 (800) 789-9999
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Fluid Colorful Horizontal Service Selector Stream */}
      <div className="pb-3 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-3 min-w-max p-1">
          {Object.keys(serviceCatalog).map((srvId) => {
            const item = serviceCatalog[srvId];
            const isSelected = selectedServiceId === srvId;

            return (
              <button
                key={srvId}
                onClick={() => setSelectedServiceId(srvId)}
                className={`group relative px-4 py-2.5 rounded-2xl flex items-center gap-2.5 transition-all duration-200 border font-extrabold text-xs sm:text-sm ${
                  isSelected
                    ? `${item.activeBg} text-white ${item.activeShadow} shadow-lg border-transparent scale-[1.02]`
                    : "bg-slate-50/90 hover:bg-slate-100 text-slate-700 hover:text-slate-950 border-slate-200"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-lg text-[11px] font-mono font-bold flex items-center justify-center transition ${
                    isSelected
                      ? "bg-white/25 text-white"
                      : "bg-white text-slate-600 border border-slate-200 group-hover:border-slate-300"
                  }`}
                >
                  {item.num}
                </span>
                <span>{item.title.split("&")[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Perfectly Sized & Symmetrically Aligned Showcase Stage */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedServiceId}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 xl:gap-10 items-stretch"
        >
          {/* Left Canvas: Identical Height & Aligned Bottom Strip */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full min-h-0 lg:min-h-[460px] space-y-2.5 sm:space-y-3">
            <div className="relative flex-1 w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 shadow-md sm:shadow-xl min-h-[220px] sm:min-h-[380px]">
              <img
                src={activeService.image}
                alt={activeService.title}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = "/departments/cardiology.jpg";
                }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-between p-3.5 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-950 text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-md">
                    {activeService.badge}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/60 backdrop-blur-md text-emerald-300 border border-emerald-500/30 text-[10px] sm:text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>24/7 Available</span>
                  </div>
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <span className="text-[11px] sm:text-xs font-bold text-teal-300 block">
                    {activeService.tagline}
                  </span>
                  <h2 className="text-lg sm:text-3xl font-black font-heading text-white leading-tight">
                    {activeService.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Insurance & TPA Cashless Strip */}
            <div className="flex items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-700 shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold text-slate-950 truncate">
                  {activeService.pricing}
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-extrabold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-md shrink-0">
                Cashless Active
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full min-h-0 lg:min-h-[460px] space-y-2.5 sm:space-y-4">
            <div className="space-y-1 sm:space-y-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full ${activeService.badgeBg} text-[10px] sm:text-xs font-black uppercase tracking-wider border`}>
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{activeService.category}</span>
              </span>
              <h3 className="text-base sm:text-3xl font-black font-heading text-slate-950 leading-tight">
                {activeService.headline}
              </h3>
              <p className="text-slate-950 font-medium text-[11px] sm:text-sm leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                {activeService.description}
              </p>
            </div>

            {/* Key Clinical Inclusions */}
            <div className="space-y-1.5 sm:space-y-2 flex-1 flex flex-col justify-center">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-slate-950 block mb-0.5 sm:mb-1">
                Key Inclusions & Capabilities:
              </span>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-1.5 sm:gap-2">
                {activeService.features.map((f, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start sm:items-center gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl ${activeService.featureBg} border transition-all duration-200 hover:scale-[1.01] hover:shadow-xs`}
                  >
                    <div className={`w-4 h-4 sm:w-6 sm:h-6 rounded-md sm:rounded-lg ${activeService.iconBg} flex items-center justify-center shrink-0 shadow-xs mt-0.5 sm:mt-0`}>
                      <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[10px] sm:text-sm font-bold text-slate-950 leading-tight">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-1 sm:pt-2 flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => handleBookService(activeService.title)}
                className={`flex-1 sm:flex-none py-2.5 sm:py-3.5 px-5 sm:px-8 rounded-full bg-gradient-to-r ${activeService.btnGradient} text-white font-extrabold text-[11px] sm:text-xs shadow-md sm:shadow-lg transition active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book This Service</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  const keys = Object.keys(serviceCatalog);
                  const nextIdx = (keys.indexOf(selectedServiceId) + 1) % keys.length;
                  setSelectedServiceId(keys[nextIdx]);
                }}
                className="py-2.5 sm:py-3.5 px-3.5 sm:px-5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-950 font-bold text-[11px] sm:text-xs transition flex items-center gap-1"
              >
                <span>Next</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 4. Interactive Master Preventive Packages Explorer */}
      <div className="pt-6 sm:pt-10 border-t border-slate-200 space-y-4 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal-700 mb-0.5 sm:mb-1">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Evidence-Based Screening</span>
            </div>
            <h3 className="text-xl sm:text-4xl font-black font-heading text-slate-950">
              Master Preventive Health Packages
            </h3>
          </div>
          <span className="text-[11px] sm:text-xs font-semibold text-slate-950">
            Digital reports ready within 6 hours with physician consultation
          </span>
        </div>

        {/* Package Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1.5 scrollbar-none">
          {packages.map((pkg) => {
            const isSelected = activePackageTab === pkg.id;
            return (
              <button
                key={pkg.id}
                onClick={() => setActivePackageTab(pkg.id)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-extrabold whitespace-nowrap transition-all duration-150 border ${
                  isSelected
                    ? `${pkg.tabActive} scale-[1.02]`
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                {pkg.name}
              </button>
            );
          })}
        </div>

        {/* Active Package Showcase Details - Compact Height on Mobile */}
        {(() => {
          const activePkg = packages.find((p) => p.id === activePackageTab) || packages[0];
          return (
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden p-3.5 sm:p-10 shadow-sm transition-all duration-300">
              {/* Content-Related Background Image with Increased Opacity/Visibility */}
              <img
                src={activePkg.image}
                alt={activePkg.name}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = "/departments/cardiology.jpg";
                }}
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-100 contrast-[1.04] transition-all duration-500 scale-100 hover:scale-[1.02]"
              />
              {/* Refined Frosted Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-white/60 backdrop-blur-[2px]" />

              {/* Package Content */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-8 items-center">
                <div className="lg:col-span-5 space-y-2.5 sm:space-y-4 bg-white/90 backdrop-blur-md p-3.5 sm:p-7 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-xs">
                  <span className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full ${activePkg.badgeColor} text-[10px] sm:text-[11px] font-black uppercase tracking-wider inline-block border`}>
                    {activePkg.tag}
                  </span>

                  <h4 className="text-lg sm:text-3xl font-black font-heading text-slate-950 leading-tight">
                    {activePkg.name}
                  </h4>

                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-4xl font-black font-mono text-slate-950">
                      {activePkg.price}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-400 line-through">
                      {activePkg.originalPrice}
                    </span>
                    <span className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] sm:text-xs font-bold">
                      {activePkg.discount}
                    </span>
                  </div>

                  <div className="space-y-1 text-[11px] sm:text-xs font-semibold text-slate-950 pt-1 sm:pt-2">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-700 shrink-0" />
                      <span>Turnaround: {activePkg.turnaround}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-700 shrink-0" />
                      <span>Includes {activePkg.testsCount}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookService(activePkg.name)}
                    className={`w-full sm:w-auto py-2.5 sm:py-3.5 px-6 sm:px-8 rounded-full ${activePkg.btnGradient} text-white font-extrabold text-[11px] sm:text-xs shadow-md transition active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 mt-1 sm:mt-2`}
                  >
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Book {activePkg.name}</span>
                  </button>
                </div>

                {/* Inclusions Checklist - Compact 2 columns on mobile */}
                <div className="lg:col-span-7 space-y-2 sm:space-y-3 bg-white/90 backdrop-blur-md p-3 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-xs">
                  <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-slate-950 block">
                    Package Inclusions & Diagnostic Investigations:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
                    {activePkg.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1 sm:gap-2.5 text-[9.5px] sm:text-xs font-semibold text-slate-950">
                        <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${activePkg.checkBg} flex items-center justify-center shrink-0 mt-0.5`}>
                          <Check className="w-2 h-2 sm:w-3 sm:h-3 stroke-[3]" />
                        </div>
                        <span className="line-clamp-2 sm:line-clamp-none leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* 5. Minimalist Quality & NABH Assurance */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-950">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <span>All clinical services comply with international NABH & JCI patient safety guidelines.</span>
        </div>
        <button
          onClick={() => setIsBookModalOpen(true)}
          className="text-slate-950 hover:text-teal-700 font-extrabold flex items-center gap-1 group"
        >
          <span>Instant General OPD Pass</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
};
