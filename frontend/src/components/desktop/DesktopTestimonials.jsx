import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle2, Sparkles, ArrowLeft, ArrowRight, Clock, MessageSquareHeart } from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const DesktopTestimonials = () => {
  const { setIsBookModalOpen } = useHospital();
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const allReviews = [
    {
      id: 1,
      name: "Clara Harrison",
      role: "Cardiology Patient Family",
      text: "The Level-1 trauma response at Vault Care was phenomenal. The nursing staff in the private suite and cardiology team took immense care of my father. Exemplary healthcare facility!",
      rating: 5,
      dept: "Interventional Cardiology",
      tagColor: "bg-rose-100 text-rose-800 border-rose-200",
      avatarBg: "bg-rose-500",
      initials: "CH",
    },
    {
      id: 2,
      name: "Marcus Vance",
      role: "Robotic Joint Replacement",
      text: "I was walking without support within 48 hours of my robotic knee replacement. The digital token pass made the entire admission paperless and stress-free. Truly next-generation healthcare.",
      rating: 5,
      dept: "Robotic Orthopedics",
      tagColor: "bg-teal-100 text-teal-800 border-teal-200",
      avatarBg: "bg-teal-600",
      initials: "MV",
    },
    {
      id: 3,
      name: "Dr. Evelyn Reed",
      role: "Pediatric Care Parent",
      text: "The pediatric critical care ward was so comforting for our daughter. The doctors explained every procedure clearly and the cashless insurance desk cleared everything in 15 minutes.",
      rating: 5,
      dept: "Pediatrics & Neonatology",
      tagColor: "bg-purple-100 text-purple-800 border-purple-200",
      avatarBg: "bg-purple-600",
      initials: "ER",
    },
    {
      id: 4,
      name: "Rajesh Sundaram",
      role: "Emergency Cardiac Care",
      text: "Emergency angioplasty performed in the 24/7 cath lab within 25 minutes of ambulance arrival. Superlative clinical precision and deeply caring doctors throughout ICU recovery.",
      rating: 5,
      dept: "Emergency & Cath Lab",
      tagColor: "bg-rose-100 text-rose-800 border-rose-200",
      avatarBg: "bg-red-600",
      initials: "RS",
    },
    {
      id: 5,
      name: "Priya Nair",
      role: "Maternity & Birthing",
      text: "The luxury birthing suite felt like a 5-star hotel with continuous neonatal monitoring and gentle nursing staff. Painless delivery experience was truly wonderful.",
      rating: 5,
      dept: "Maternity & Birthing",
      tagColor: "bg-pink-100 text-pink-800 border-pink-200",
      avatarBg: "bg-pink-600",
      initials: "PN",
    },
    {
      id: 6,
      name: "David Miller",
      role: "Neurology & MRI Diagnostics",
      text: "The wide-bore 3T MRI was completely whisper quiet. Got my AI diagnostic radiology report on the patient portal within 4 hours. Exceptional speed and precision.",
      rating: 5,
      dept: "Silent 3T Radiology",
      tagColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
      avatarBg: "bg-cyan-600",
      initials: "DM",
    },
    {
      id: 7,
      name: "Anita Desai",
      role: "Oncology & Immunotherapy",
      text: "The comprehensive oncology wing provided personalized targeted immunotherapy. HEPA-filtered positive pressure rooms and extraordinary round-the-clock nursing care.",
      rating: 5,
      dept: "Precision Oncology",
      tagColor: "bg-purple-100 text-purple-800 border-purple-200",
      avatarBg: "bg-indigo-600",
      initials: "AD",
    },
    {
      id: 8,
      name: "George Campbell",
      role: "Stroke Unit Patient",
      text: "Rapid thrombolysis in the acute stroke response unit restored my mobility within hours. The neuro-critical team at Vault Care saved my life. Forever grateful.",
      rating: 5,
      dept: "Neuro Critical Care",
      tagColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      avatarBg: "bg-violet-600",
      initials: "GC",
    },
    {
      id: 9,
      name: "Sunita Sharma",
      role: "Executive Health Checkup",
      text: "Master full-body screening with 85 tests completed seamlessly in 2.5 hours without any queue. Digital report with doctor consultation was delivered the same evening.",
      rating: 5,
      dept: "Preventive Care",
      tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      avatarBg: "bg-emerald-600",
      initials: "SS",
    },
  ];

  const totalDesktopPages = Math.ceil(allReviews.length / 3);

  // Auto-play cycling every 4 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % allReviews.length);
      setDesktopPage((prev) => (prev + 1) % totalDesktopPages);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, totalDesktopPages, allReviews.length]);

  const handlePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? allReviews.length - 1 : prev - 1));
    setDesktopPage((prev) => (prev === 0 ? totalDesktopPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev + 1) % allReviews.length);
    setDesktopPage((prev) => (prev + 1) % totalDesktopPages);
  };

  const currentMobileReview = allReviews[mobileIndex];
  const visibleDesktopReviews = allReviews.slice(desktopPage * 3, desktopPage * 3 + 3);

  return (
    <section 
      className="py-4 sm:py-10 px-3.5 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="p-4 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-50/50 via-white to-sky-50/40 border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 pb-3 sm:pb-3.5 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-teal-700 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                Verified Patient Stories
              </span>
              {/* Blinking Live Feed Beacon */}
              <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-[10px] sm:text-[11px] font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span>Live Feed • Auto-Cycling</span>
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black font-heading text-slate-950">
              Trusted by 380,000+ Patients & Families
            </h2>
            <p className="text-slate-950 font-medium text-xs sm:text-sm mt-0.5">
              Real recovery experiences from individuals healed through our clinical wings.
            </p>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-between sm:justify-start">
            {/* Rating summary */}
            <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-amber-200">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-[11px] sm:text-xs font-black text-slate-950 ml-1">4.9 / 5</span>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-1 sm:gap-1.5 bg-white border border-slate-200 p-1 rounded-xl shadow-xs">
              <button
                onClick={handlePrev}
                className="p-1 sm:p-1.5 rounded-lg text-slate-800 hover:bg-slate-100 transition active:scale-95"
                title="Previous Review"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-1 px-1 sm:px-1.5">
                {/* Desktop Dots */}
                <div className="hidden md:flex items-center gap-1">
                  {[...Array(totalDesktopPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setDesktopPage(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        desktopPage === i ? "w-5 bg-teal-600 animate-pulse" : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      title={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Mobile Single-Review Indicator Dots */}
                <div className="flex md:hidden items-center gap-1">
                  {allReviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setMobileIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        mobileIndex === i ? "w-3 bg-teal-600" : "w-1.5 bg-slate-300"
                      }`}
                      title={`Review ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="p-1 sm:p-1.5 rounded-lg text-slate-800 hover:bg-slate-100 transition active:scale-95"
                title="Next Review"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Book Appointment button - HIDDEN on mobile, visible on desktop */}
            <button
              onClick={() => setIsBookModalOpen(true)}
              className="hidden md:inline-flex px-4 py-2 rounded-xl bg-slate-950 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition whitespace-nowrap"
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* 1. Mobile View: 1 Single Auto-Changing Review Box */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${currentMobileReview.tagColor}`}>
                    {currentMobileReview.dept}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(currentMobileReview.rating)].map((_, s) => (
                      <Star key={s} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-950 font-medium leading-relaxed mb-3">
                  "{currentMobileReview.text}"
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-2.5 border-t border-slate-100">
                <div className={`w-7 h-7 rounded-full ${currentMobileReview.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-xs shrink-0`}>
                  {currentMobileReview.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="font-black text-slate-950 text-xs truncate">{currentMobileReview.name}</h4>
                  <p className="text-[10px] text-slate-800 font-semibold truncate">{currentMobileReview.role}</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-teal-600 ml-auto shrink-0" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 2. Desktop View: 3 Review Cards Grid */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={desktopPage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-3 gap-5"
            >
              {visibleDesktopReviews.map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${r.tagColor}`}>
                        {r.dept}
                      </span>
                      <div className="flex text-amber-400">
                        {[...Array(r.rating)].map((_, s) => (
                          <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-[13px] text-slate-950 font-medium leading-relaxed mb-3 line-clamp-3">
                      "{r.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2.5 border-t border-slate-100">
                    <div className={`w-7 h-7 rounded-full ${r.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-xs shrink-0`}>
                      {r.initials}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-black text-slate-950 text-xs truncate">{r.name}</h4>
                      <p className="text-[10px] text-slate-800 font-semibold truncate">{r.role}</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-teal-600 ml-auto shrink-0" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
