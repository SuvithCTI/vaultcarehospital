import React from "react";
import { HospitalProvider } from "./context/HospitalContext";
import { AuthProvider } from "./context/AuthContext";
import { ViewProvider } from "./context/ViewContext";
import { AdaptiveRouter } from "./views/AdaptiveRouter";
import { BookingWizardModal } from "./components/common/BookingWizardModal";
import { AppointmentPassModal } from "./components/common/AppointmentPassModal";
import { Toast } from "./components/common/Toast";

const CRITICAL_PRELOAD_ASSETS = [
  "/banners/home.jpg",
  "/banners/about.jpg",
  "/banners/departments.jpg",
  "/banners/services.jpg",
  "/banners/facilities.jpg",
  "/banners/appointments.jpg",
  "/banners/contact.jpg",
  "/services/robotic.jpg",
  "/departments/radiology.jpg",
  "/services/critical-care.jpg",
  "/departments/cardiology.jpg",
  "/departments/neurology.jpg",
  "/departments/orthopedics.jpg",
  "/departments/oncology.jpg",
  "/departments/pediatrics.jpg",
  "/departments/emergency.jpg",
  "/departments/maternity.jpg",
];

function App() {
  React.useEffect(() => {
    // Non-blocking background preloading for instant mobile transitions
    const preload = () => {
      CRITICAL_PRELOAD_ASSETS.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(preload);
    } else {
      setTimeout(preload, 100);
    }
  }, []);

  return (
    <AuthProvider>
      <HospitalProvider>
        <ViewProvider>
          <div className="relative min-h-screen bg-slate-950">
            {/* Adaptive View Engine */}
            <AdaptiveRouter />

            {/* Global Interactive Modals & Toast */}
            <BookingWizardModal />
            <AppointmentPassModal />
            <Toast />
          </div>
        </ViewProvider>
      </HospitalProvider>
    </AuthProvider>
  );
}

export default App;
