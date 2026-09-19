import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, ArrowRight, HeartPulse, 
  Activity, CheckCircle2, Building2, Bed, Zap,
  PhoneCall, Stethoscope, Sparkles, MessageCircle
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";
import { useView } from "../../context/ViewContext";

// Official WhatsApp Vector Icon
const WhatsAppIcon = ({ className = "w-4 h-4", fill = "currentColor" }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="0"
    fill={fill}
    className={className}
  >
    <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.779.98-.955 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.678-1.632-.929-2.235-.245-.588-.493-.508-.678-.518-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.51c0 1.481 1.079 2.91 1.23 3.111.15.201 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.198 1.9-.12.581-.356 1.782-1.282 2.033-2.52.251-1.238.251-2.298.176-2.52-.076-.222-.276-.322-.577-.473zM12.04 2C6.516 2 2.028 6.488 2.028 12.013c0 1.83.498 3.547 1.365 5.029L2 22.041l5.148-1.348a9.96 9.96 0 0 0 4.892 1.319h.004c5.523 0 10.012-4.488 10.012-10.013C22.056 6.488 17.564 2 12.04 2zm0 18.286h-.003a8.27 8.27 0 0 1-4.218-1.154l-.302-.18-3.138.823.838-3.059-.197-.314a8.277 8.277 0 0 1-1.271-4.389c0-4.57 3.719-8.289 8.29-8.289 2.215 0 4.298.863 5.864 2.43 1.565 1.566 2.428 3.649 2.428 5.864 0 4.571-3.719 8.289-8.292 8.289z" />
  </svg>
);

export const DesktopHero = () => {
  const { setIsBookModalOpen, hospitalInfo } = useHospital();
  const { setActiveTab } = useView();

  const [activeSlide, setActiveSlide] = useState(0);

  const showcaseSlides = [
    {
      title: "Modular Robotic OT Suite",
      badge: "Da Vinci Xi 4th Gen",
      tag: "14 Modular OTs Active",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      caption: "Class-100 Ultra-Clean Laminar Airflow Surgical Bays",
    },
    {
      title: "Silent 3T MRI & 256-Slice CT",
      badge: "AI-Assisted Diagnostics",
      tag: "24/7 Rapid Diagnostics",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
      caption: "Whisper-Quiet Wide Bore Imaging for Patient Comfort",
    },
    {
      title: "Smart Intensive Care Units",
      badge: "Level-1 Critical Care",
      tag: "140 Multi-Organ Beds",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
      caption: "1:1 Dedicated Critical Care Nursing & Telemetry",
    },
  ];

  // Automatic slide transitions every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % showcaseSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [showcaseSlides.length]);

  const whatsappNumber = hospitalInfo?.whatsapp || "18007899999";

  return (
    <section className="relative overflow-hidden pt-6 pb-6 px-4 sm:px-10 lg:px-16 isolate">
      {/* 1st Section Custom Hospital Campus Background Image & Enhanced Visibility Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/banners/home.jpg"
          alt="Vault Care Hospital Campus"
          className="w-full h-full object-cover object-center scale-100 filter brightness-[1.02] opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/45 to-white/15" />
      </div>

      {/* Subtle Floating Ambient Aura Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, 25, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-tr from-teal-100/50 via-cyan-100/40 to-emerald-100/30 blur-3xl pointer-events-none z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-purple-100/40 via-indigo-100/30 to-rose-100/30 blur-3xl pointer-events-none z-0"
      />

      {/* Main Grid Container */}
      <div className="relative z-10 w-full max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-14 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-4 sm:space-y-6"
        >
          {/* Main Title with Outfit / Plus Jakarta Sans Typography */}
          <h1 className="text-3xl sm:text-6xl xl:text-7xl font-black font-heading text-slate-950 leading-[1.08] tracking-tight">
            Advanced Clinical Care with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600">
              Human Compassion.
            </span>
          </h1>

          <p className="text-slate-950 font-sans text-xs sm:text-lg leading-relaxed max-w-2xl font-medium">
            Welcome to Vault Care, where state-of-the-art robotic surgery, 24/7 Level-1 trauma response, and silent 3T MRI diagnostics converge to deliver precision medical healing.
          </p>

          {/* 4 Sleek Refined Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              className="p-3 sm:p-4 rounded-xl bg-white border border-teal-200 shadow-xs hover:shadow-md hover:border-teal-400 transition-all duration-200"
            >
              <div className="flex items-center justify-between text-teal-700">
                <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-slate-950">24+</span>
                <div className="p-1 sm:p-1.5 rounded-lg bg-teal-50 text-teal-700">
                  <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-950 font-bold mt-1 font-heading">Specialized Units</div>
              <div className="text-[10px] sm:text-[11px] text-slate-800 font-medium font-sans">Modular OTs</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              className="p-3 sm:p-4 rounded-xl bg-white border border-cyan-200 shadow-xs hover:shadow-md hover:border-cyan-400 transition-all duration-200"
            >
              <div className="flex items-center justify-between text-cyan-700">
                <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-slate-950">45K+</span>
                <div className="p-1 sm:p-1.5 rounded-lg bg-cyan-50 text-cyan-700">
                  <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-950 font-bold mt-1 font-heading">Surgeries Done</div>
              <div className="text-[10px] sm:text-[11px] text-slate-800 font-medium font-sans">99.4% Success</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              className="p-3 sm:p-4 rounded-xl bg-white border border-purple-200 shadow-xs hover:shadow-md hover:border-purple-400 transition-all duration-200"
            >
              <div className="flex items-center justify-between text-purple-700">
                <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-slate-950">650+</span>
                <div className="p-1 sm:p-1.5 rounded-lg bg-purple-50 text-purple-700">
                  <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-950 font-bold mt-1 font-heading">Inpatient Beds</div>
              <div className="text-[10px] sm:text-[11px] text-slate-800 font-medium font-sans">140 ICU Suites</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              className="p-3 sm:p-4 rounded-xl bg-white border border-rose-200 shadow-xs hover:shadow-md hover:border-rose-400 transition-all duration-200"
            >
              <div className="flex items-center justify-between text-rose-700">
                <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-slate-950">24/7</span>
                <div className="p-1 sm:p-1.5 rounded-lg bg-rose-50 text-rose-700">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-950 font-bold mt-1 font-heading">Trauma Care</div>
              <div className="text-[10px] sm:text-[11px] text-slate-800 font-medium font-sans">&lt; 8-Min Triage</div>
            </motion.div>
          </div>

          {/* Action CTAs Connected with WhatsApp */}
          <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Vault Care Hospital, I would like to book a consultation or check OPD doctor availability.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-emerald-600/25 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 active:scale-98"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" fill="white" />
              <span>Connect on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsBookModalOpen(true)}
              className="flex-1 sm:flex-none px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 border border-slate-200 shadow-sm flex items-center justify-center gap-2 hover:border-teal-400 hover:text-teal-700"
            >
              <Calendar className="w-4 h-4 text-teal-600" />
              <span>Instant OPD Pass</span>
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-[11px] sm:text-xs text-slate-950 font-semibold font-sans">
            <span className="flex items-center gap-1.5">
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" fill="#25D366" /> 24/7 WhatsApp Support
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /> Instant Token Pass
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /> Cashless Insurance TPA
            </span>
          </div>
        </motion.div>

        {/* Right Column: Interactive Multi-Slide Visual Showcase with Auto-Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Showcase Card */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-xl sm:shadow-2xl bg-white group">
            <div className="relative h-[320px] sm:h-[430px] overflow-hidden bg-slate-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSlide}
                  src={showcaseSlides[activeSlide].image}
                  alt={showcaseSlides[activeSlide].title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />

              {/* Top Floating Live Status Pill */}
              <motion.div
                initial={{ y: -6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-teal-200 shadow-xl flex items-center gap-2 sm:gap-3"
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold shrink-0">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 flex items-center gap-1.5 font-heading">
                    <span>Level-1 Trauma Active</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-teal-700 font-semibold font-sans">
                    Live ECG Telemetry • 72 BPM Normal
                  </div>
                </div>
              </motion.div>

              {/* Slide Switcher Mini Tabs on Top Right */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-1.5 bg-black/50 backdrop-blur-md p-1.5 rounded-xl border border-white/20">
                {showcaseSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === i ? "w-5 sm:w-6 bg-[#25D366]" : "w-2 bg-white/60 hover:bg-white"
                    }`}
                    title={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Bottom Caption Overlay with Direct WhatsApp Connect */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <span className="px-2 py-0.5 rounded-md bg-teal-100 text-teal-800 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wide font-heading truncate inline-block">
                    {showcaseSlides[activeSlide].badge}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 font-heading truncate">
                    {showcaseSlides[activeSlide].title}
                  </h4>
                  <p className="text-[10px] text-slate-800 font-medium line-clamp-1 font-sans hidden sm:block">
                    {showcaseSlides[activeSlide].caption}
                  </p>
                </div>
                
                {/* Connected with WhatsApp and WhatsApp Logo */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Vault Care Hospital, I would like to book a token or consultation for ${showcaseSlides[activeSlide].title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[11px] sm:text-xs shadow-md transition whitespace-nowrap font-heading flex items-center gap-1.5 shrink-0 active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" fill="white" />
                  <span>Connect</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
