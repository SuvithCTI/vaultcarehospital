import React, { useEffect } from "react";
import { DesktopHero } from "../../components/desktop/DesktopHero";
import { DesktopLiveRadar } from "../../components/desktop/DesktopLiveRadar";
import { DesktopHomeHighlights } from "../../components/desktop/DesktopHomeHighlights";
import { DesktopDepartments } from "../../components/desktop/DesktopDepartments";
import { DesktopTestimonials } from "../../components/desktop/DesktopTestimonials";
import { DesktopCtaBanner } from "../../components/desktop/DesktopCtaBanner";

export const PcHome = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  return (
    <div className="space-y-6">
      <DesktopHero />
      <DesktopLiveRadar />
      <DesktopHomeHighlights />
      <DesktopDepartments />
      <DesktopTestimonials />
      <DesktopCtaBanner />
    </div>
  );
};
