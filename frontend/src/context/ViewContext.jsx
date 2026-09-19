import React, { createContext, useContext, useState, useEffect } from "react";

const ViewContext = createContext(null);

export const ViewProvider = ({ children }) => {
  // mode: "auto" | "pc" | "mobile"
  const [viewMode, setViewMode] = useState("auto");
  const [screenIsMobile, setScreenIsMobile] = useState(false);
  const [activeTab, setActiveTabState] = useState("home"); // home, about, doctors, departments, services, facilities, appointments, contact, admin
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState("privacy");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  };

  const setActiveTab = (tab) => {
    setActiveTabState(tab);
    scrollToTop();
  };

  const openLegalModal = (tab = "privacy") => {
    setLegalModalTab(tab);
    setIsLegalModalOpen(true);
  };

  useEffect(() => {
    scrollToTop();
  }, [activeTab]);

  useEffect(() => {
    const checkScreen = () => {
      setScreenIsMobile(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Is effective mobile view?
  const isMobileView = viewMode === "mobile" || (viewMode === "auto" && screenIsMobile);

  return (
    <ViewContext.Provider
      value={{
        viewMode,
        setViewMode,
        screenIsMobile,
        isMobileView,
        activeTab,
        setActiveTab,
        scrollToTop,
        isLegalModalOpen,
        setIsLegalModalOpen,
        legalModalTab,
        setLegalModalTab,
        openLegalModal,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => useContext(ViewContext);
