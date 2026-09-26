import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Building2,
  ArrowRight,
  Sparkles,
  Bed,
  ShieldCheck,
  Zap,
  Activity,
  Calendar,
  Layers,
  HeartPulse
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

// Instant static fallback data to guarantee 0ms loading lag
const DEFAULT_FACILITIES = [
  {
    id: "fac-1",
    title: "Level-3 Multidisciplinary ICU & ECMO Suites",
    category: "Critical Care",
    capacity: "120 Advanced Beds",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    themeGradient: "from-amber-500 to-orange-600",
    image: "/services/critical-care.jpg",
    description: "120 isolation ICU cubicles with dedicated 1:1 nursing, HEPA filtration, and bedside dialysis/ECMO capabilities.",
    features: [
      "1:1 Critical Care Specialist & Dedicated Nurse Ratio",
      "Centralized Multi-Parameter AI Telemetry Hub",
      "Advanced Servo-U Mechanical Ventilators",
      "HEPA-Filtered Negative Pressure Airborne Isolation"
    ]
  },
  {
    id: "fac-2",
    title: "Modular DaVinci & Hybrid Robotic Operation Theatres",
    category: "Surgical Suites",
    capacity: "14 Ultra-Clean OTs",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    themeGradient: "from-indigo-600 to-purple-600",
    image: "/services/robotic.jpg",
    description: "Ultra-clean laminar airflow Class-100 surgical suites equipped with DaVinci XI and Mako orthopedic robotic platforms.",
    features: [
      "DaVinci 4-Arm Multi-Quadrant Robotic Surgery Suite",
      "Mako CT-Guided Robotic Joint Arthroplasty Unit",
      "Full Glass Anti-Microbial Touchless OT Walls",
      "Integrated 4K 3D Laparoscopic Live Tele-Cast"
    ]
  },
  {
    id: "fac-3",
    title: "Advanced 3T Silent MRI & 256-Slice CT Diagnostic Wing",
    category: "Radiology & Imaging",
    capacity: "24/7 Digital PACS",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    themeGradient: "from-sky-500 to-blue-600",
    image: "/departments/radiology.jpg",
    description: "State-of-the-art diagnostic imaging center offering low-dose high-speed CT scans, 3T quiet MRI, and instant cloud reporting.",
    features: [
      "Siemens 3T Silent Wide-Bore Neuro MRI",
      "GE Revolution 256-Slice Ultra-Low Dose Trauma CT",
      "Digital 3D Tomosynthesis Mammography Unit",
      "Instant 6-Hour PACS Cloud Diagnostic Reports"
    ]
  },
  {
    id: "fac-4",
    title: "24/7 Level-1 Emergency & Critical Trauma Center",
    category: "Emergency & Trauma",
    capacity: "45 Resuscitation Bays",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    themeGradient: "from-rose-500 to-red-600",
    image: "/services/emergency.jpg",
    description: "Dedicated polytrauma resuscitation center with direct emergency surgical suite connectivity and immediate surgical access.",
    features: [
      "< 4 Minute Average Door-to-Emergency Physician",
      "Dedicated Rapid-Access Emergency Surgical Elevators",
      "Dedicated On-Site Emergency Blood Transfusion Unit",
      "Mobile 5G Telemetry ICU Ambulance Fleet"
    ]
  },
  {
    id: "fac-5",
    title: "LDRP Luxury Maternity & Neonatal Intensive Care Wing",
    category: "Maternity & NICU",
    capacity: "65 Private Suites",
    badgeColor: "bg-pink-100 text-pink-800 border-pink-200",
    themeGradient: "from-pink-500 to-rose-600",
    image: "/departments/maternity.jpg",
    description: "Integrated Labor, Delivery, Recovery, and Postpartum (LDRP) private suites paired with an accredited Level-III NICU.",
    features: [
      "Private LDRP Birthing Suites with Luxury Amenities",
      "Accredited Level-III Giraffe Incubator NICU",
      "24/7 In-House Neonatal & Obstetric Emergency Coverage",
      "Continuous Wireless Maternal-Fetal Telemetry"
    ]
  },
  {
    id: "fac-6",
    title: "24/7 Automated Robotic Cold-Chain Central Pharmacy",
    category: "Pharmacy Logistics",
    capacity: "10,000+ Verified Drugs",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    themeGradient: "from-teal-500 to-emerald-600",
    image: "/services/pharmacy.jpg",
    description: "High-speed Swisslog robotic dispensing system with strict 2-8°C biological cold-chain preservation and doorstep dispatch.",
    features: [
      "100% Barcode-Verified Dispensing Accuracy",
      "Continuous 2-8°C Digital Temperature Telemetry",
      "Automated Hospital Inpatient Refill Pneumatic Tubes",
      "Same-Day Regional Doorstep Medication Delivery"
    ]
  }
];

export const PcFacilities = () => {
  const { facilities, setIsBookModalOpen, setSelectedDepartment } = useHospital();
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  // Merge context data with instant fallback data to prevent lag
  const displayFacilities = facilities && facilities.length > 0
    ? facilities.map((f, i) => ({
        ...DEFAULT_FACILITIES[i % DEFAULT_FACILITIES.length],
        ...f,
        image: DEFAULT_FACILITIES[i % DEFAULT_FACILITIES.length].image
      }))
    : DEFAULT_FACILITIES;

  const categories = [
    { id: "all", label: "All Infrastructure" },
    { id: "Critical Care", label: "Critical Care (ICU)" },
    { id: "Surgical Suites", label: "Modular OTs" },
    { id: "Radiology & Imaging", label: "Advanced Imaging" },
    { id: "Emergency & Trauma", label: "Emergency & Trauma" },
    { id: "Maternity & NICU", label: "Maternity & NICU" },
    { id: "Pharmacy Logistics", label: "Robotic Pharmacy" }
  ];

  const filteredFacilities = selectedFilter === "all"
    ? displayFacilities
    : displayFacilities.filter(f => f.category === selectedFilter);

  const handleBookConsult = () => {
    if (setSelectedDepartment) setSelectedDepartment("General Consultation");
    setIsBookModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 py-6 sm:py-10 px-4 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-6 sm:space-y-12">
      
      {/* 1. Header Hero Banner with Hybrid Robotic OT & ICU Facilities Background */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-teal-200/80 shadow-lg p-4 sm:p-10 isolate">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/banners/facilities.jpg"
            alt="Vault Care Facilities and Robotic Suites"
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
              <span>Vault Care Infrastructure</span>
            </div>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-slate-950 leading-tight">
              Hospital Infrastructure & Advanced Facilities
            </h1>
            <p className="text-slate-900 text-xs sm:text-lg font-normal leading-relaxed">
              Spanning 650+ beds across 800,000 sq.ft, Vault Care is engineered with Level-1 emergency trauma centers, robotic surgical suites, and Class-100 clean rooms.
            </p>
          </div>

          {/* Quick Infrastructure Stats */}
          <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-4 bg-white/90 backdrop-blur-md border border-teal-200/80 p-3 sm:p-4 rounded-2xl sm:rounded-3xl w-full lg:w-auto shadow-xs">
            <div className="text-center px-1 sm:px-3 border-r border-slate-200">
              <span className="text-lg sm:text-2xl font-black text-slate-950 block font-mono">650+</span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase text-slate-600 tracking-wider">Total Beds</span>
            </div>
            <div className="text-center px-1 sm:px-3 border-r border-slate-200">
              <span className="text-lg sm:text-2xl font-black text-slate-950 block font-mono">120</span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase text-slate-600 tracking-wider">ICU Beds</span>
            </div>
            <div className="text-center px-1 sm:px-3">
              <span className="text-lg sm:text-2xl font-black text-slate-950 block font-mono">14</span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase text-slate-600 tracking-wider">Robotic OTs</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Fast Filter Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all duration-150 border ${
                isSelected
                  ? "bg-slate-950 text-white border-slate-950 shadow-md scale-[1.02]"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* 3. High-Performance Facilities Grid (2-column on mobile, 3-column on desktop) */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {filteredFacilities.map((fac, idx) => (
          <div
            key={fac.id || idx}
            className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:border-slate-400 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              {/* Facility Image with Capacity Pill */}
              <div className="relative h-32 sm:h-56 overflow-hidden bg-slate-950">
                <img
                  src={fac.image}
                  alt={fac.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = "/departments/cardiology.jpg";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                
                <span className="absolute top-2 right-2 sm:top-4 sm:right-4 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-950 text-[9px] sm:text-xs font-extrabold font-heading shadow-md border border-white/50 flex items-center gap-1">
                  <Bed className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-teal-700" />
                  <span className="truncate max-w-[70px] sm:max-w-none">{fac.capacity}</span>
                </span>

                <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
                  <span className={`inline-block px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-wider border mb-1 ${fac.badgeColor || "bg-teal-100 text-teal-800 border-teal-200"}`}>
                    {fac.category}
                  </span>
                  <h3 className="text-xs sm:text-xl font-black font-heading text-white leading-tight line-clamp-2">
                    {fac.title}
                  </h3>
                </div>
              </div>

              {/* Facility Description & Key Features */}
              <div className="p-3 sm:p-6 space-y-2 sm:space-y-4">
                <p className="text-[10px] sm:text-sm text-slate-950 leading-tight sm:leading-relaxed font-medium line-clamp-2 sm:line-clamp-none">
                  {fac.description}
                </p>

                <div className="pt-2 sm:pt-3 border-t border-slate-100 space-y-1.5 sm:space-y-2">
                  <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-slate-950 block">
                    Key Infrastructure:
                  </span>
                  {fac.features?.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 sm:gap-2.5 text-[10px] sm:text-xs font-semibold text-slate-950">
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="line-clamp-1 sm:line-clamp-none">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Book/Inquire Action Button */}
            <div className="p-3 pt-0 sm:p-6 sm:pt-0">
              <button
                onClick={handleBookConsult}
                className="w-full py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-slate-900 hover:bg-teal-700 text-white font-extrabold text-[10px] sm:text-xs shadow-md transition-all duration-200 active:scale-95 flex items-center justify-center gap-1 sm:gap-2"
              >
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="truncate">Inquire / Book Tour</span>
                <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 4. NABH & International Standard Strip */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-950">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <span>All hospital wings are ISO 9001:2015 & NABH Gold certified for sterile bio-safety.</span>
        </div>
        <button
          onClick={handleBookConsult}
          className="text-slate-950 hover:text-teal-700 font-extrabold flex items-center gap-1 group"
        >
          <span>Emergency Admission Desk</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
};
export default PcFacilities;
