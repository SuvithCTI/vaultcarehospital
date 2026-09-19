import React from "react";
import { HospitalProvider } from "./context/HospitalContext";
import { AuthProvider } from "./context/AuthContext";
import { ViewProvider } from "./context/ViewContext";
import { AdaptiveRouter } from "./views/AdaptiveRouter";
import { BookingWizardModal } from "./components/common/BookingWizardModal";
import { AppointmentPassModal } from "./components/common/AppointmentPassModal";
import { Toast } from "./components/common/Toast";

function App() {
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
