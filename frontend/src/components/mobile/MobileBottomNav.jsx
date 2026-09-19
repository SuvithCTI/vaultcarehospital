import React from "react";
import { Home, Calendar, Activity, Building2, PhoneCall, Sparkles, Stethoscope, Layers, Phone } from "lucide-react";
import { useView } from "../../context/ViewContext";
import { useHospital } from "../../context/HospitalContext";

export const MobileBottomNav = () => {
  const { activeTab, setActiveTab } = useView();
  const { setIsBookModalOpen } = useHospital();

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "about", label: "About", icon: <Sparkles className="w-5 h-5" /> },
    { id: "appointments", label: "Book", icon: <Calendar className="w-5 h-5" />, isPrimary: true },
    { id: "departments", label: "Wings", icon: <Building2 className="w-5 h-5" /> },
    { id: "contact", label: "Contact", icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800 px-3 py-2 flex items-center justify-around shadow-2xl">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        if (item.isPrimary) {
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab("appointments");
                setIsBookModalOpen(true);
              }}
              className="-mt-5 p-3.5 rounded-full bg-gradient-to-tr from-teal-500 via-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-teal-500/30 flex flex-col items-center justify-center transform active:scale-95 transition"
            >
              <Calendar className="w-5 h-5" />
            </button>
          );
        }

        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-2.5 rounded-xl transition ${
              isActive ? "text-teal-400 font-bold" : "text-slate-400 font-medium hover:text-slate-200"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
