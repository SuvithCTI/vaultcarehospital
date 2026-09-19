import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { useView } from "../context/ViewContext";
import { useHospital } from "../context/HospitalContext";

// PC Views & Components
import { DesktopHeader } from "../components/desktop/DesktopHeader";
import { DesktopFooter } from "../components/desktop/DesktopFooter";
import { PcHome } from "./pc/PcHome";
import { PcAbout } from "./pc/PcAbout";
import { PcDepartments } from "./pc/PcDepartments";
import { PcServices } from "./pc/PcServices";
import { DesktopDepartments } from "../components/desktop/DesktopDepartments";
import { DesktopServices } from "../components/desktop/DesktopServices";
import { PcFacilities } from "./pc/PcFacilities";
import { PcAppointments } from "./pc/PcAppointments";
import { PcContact } from "./pc/PcContact";
import { DesktopAdminPanel } from "../components/desktop/DesktopAdminPanel";

// Mobile Views & Components
import { MobileHeader } from "../components/mobile/MobileHeader";
import { MobileHome } from "./mobile/MobileHome";
import { MobileAboutView } from "./mobile/MobileAboutView";
import { MobileDepartmentsView } from "./mobile/MobileDepartmentsView";
import { MobileServicesView } from "./mobile/MobileServicesView";
import { PcFacilities as MobileFacilitiesView } from "./pc/PcFacilities";
import { PcAppointments as MobileAppointmentsView } from "./pc/PcAppointments";
import { MobileContactView } from "./mobile/MobileContactView";
import { MobileAdminView } from "./mobile/MobileAdminView";

// Legal and Governance Modal
import { LegalModal } from "../components/common/LegalModal";

// Floating Fast Action Buttons: Only Logos by default, Tooltip content reveals on touch/hover
const FloatingActionButtons = () => {
  const { setIsBookModalOpen } = useHospital();
  const [activeTooltip, setActiveTooltip] = React.useState(null);

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Book Now Floating Action Button */}
      <div
        className="relative flex items-center group"
        onMouseEnter={() => setActiveTooltip("book")}
        onMouseLeave={() => setActiveTooltip(null)}
      >
        <div
          className={`pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-2xl bg-slate-900/95 backdrop-blur-md px-3.5 py-2 text-white shadow-2xl transition-all duration-300 border border-slate-700/80 ${
            activeTooltip === "book"
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-95 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-active:opacity-100 group-active:scale-100 group-active:translate-x-0"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <div className="text-left">
              <p className="text-xs font-bold text-white tracking-wide">Click to Book Appointment</p>
              <p className="text-[10px] text-cyan-300 font-medium">Instant OPD & Doctor Consultation</p>
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-slate-900/95 border-t border-r border-slate-700/80 rotate-45 pointer-events-none"></div>
        </div>

        <button
          onClick={() => setIsBookModalOpen(true)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-teal-500 via-cyan-500 to-emerald-500 hover:from-teal-400 hover:to-cyan-400 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-white/80 focus:outline-none ring-4 ring-cyan-500/20"
          aria-label="Click to Book Appointment"
          title="Click to Book Appointment"
        >
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
        </button>
      </div>

      {/* Official WhatsApp Floating Action Button */}
      <div
        className="relative flex items-center group"
        onMouseEnter={() => setActiveTooltip("whatsapp")}
        onMouseLeave={() => setActiveTooltip(null)}
      >
        <div
          className={`pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-2xl bg-slate-900/95 backdrop-blur-md px-3.5 py-2 text-white shadow-2xl transition-all duration-300 border border-slate-700/80 ${
            activeTooltip === "whatsapp"
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-95 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-active:opacity-100 group-active:scale-100 group-active:translate-x-0"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <div className="text-left">
              <p className="text-xs font-bold text-white tracking-wide">Click on WhatsApp</p>
              <p className="text-[10px] text-emerald-300 font-medium">24/7 Live Medical & Help Desk</p>
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-slate-900/95 border-t border-r border-slate-700/80 rotate-45 pointer-events-none"></div>
        </div>

        <a
          href="https://wa.me/18007899999?text=Hello%20Vault%20Care%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20doctor%20appointments%20and%20emergency%20care."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-white/80 focus:outline-none ring-4 ring-emerald-500/20"
          aria-label="Click on WhatsApp"
          title="Click on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.779.98-.955 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.678-1.632-.929-2.235-.245-.588-.493-.508-.678-.518-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.51c0 1.481 1.079 2.91 1.23 3.111.15.201 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.198 1.9-.12.581-.356 1.782-1.282 2.033-2.52.251-1.238.251-2.298.176-2.52-.076-.222-.276-.322-.577-.473zM12.04 2C6.516 2 2.028 6.488 2.028 12.013c0 1.83.498 3.547 1.365 5.029L2 22.041l5.148-1.348a9.96 9.96 0 0 0 4.892 1.319h.004c5.523 0 10.012-4.488 10.012-10.013C22.056 6.488 17.564 2 12.04 2zm0 18.286h-.003a8.27 8.27 0 0 1-4.218-1.154l-.302-.18-3.138.823.838-3.059-.197-.314a8.277 8.277 0 0 1-1.271-4.389c0-4.57 3.719-8.289 8.29-8.289 2.215 0 4.298.863 5.864 2.43 1.565 1.566 2.428 3.649 2.428 5.864 0 4.571-3.719 8.289-8.292 8.289z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export const AdaptiveRouter = () => {
  const { isMobileView, activeTab, isLegalModalOpen, setIsLegalModalOpen, legalModalTab } = useView();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, [activeTab]);

  if (isMobileView) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
        <MobileHeader />
        <main className="flex-1 bg-slate-50 pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`m-${activeTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "home" && <PcHome />}
              {activeTab === "about" && <PcAbout />}
              {activeTab === "departments" && <PcDepartments />}
              {activeTab === "services" && <PcServices />}
              {activeTab === "facilities" && <PcFacilities />}
              {activeTab === "appointments" && <PcAppointments />}
              {activeTab === "contact" && <PcContact />}
              {activeTab === "admin" && <DesktopAdminPanel />}
            </motion.div>
          </AnimatePresence>
        </main>
        <DesktopFooter />
        <FloatingActionButtons />
        <LegalModal
          isOpen={isLegalModalOpen}
          onClose={() => setIsLegalModalOpen(false)}
          initialTab={legalModalTab}
        />
      </div>
    );
  }

  // Dedicated Desktop / PC View
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <DesktopHeader />
      <main className="flex-1 bg-slate-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={`pc-${activeTab}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === "home" && <PcHome />}
            {activeTab === "about" && <PcAbout />}
            {activeTab === "departments" && <PcDepartments />}
            {activeTab === "services" && <PcServices />}
            {activeTab === "facilities" && <PcFacilities />}
            {activeTab === "appointments" && <PcAppointments />}
            {activeTab === "contact" && <PcContact />}
            {activeTab === "admin" && <DesktopAdminPanel />}
          </motion.div>
        </AnimatePresence>
      </main>
      <DesktopFooter />
      <FloatingActionButtons />
      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        initialTab={legalModalTab}
      />
    </div>
  );
};

