import React from "react";
import { MobileHero } from "../../components/mobile/MobileHero";
import { MobileDepartmentCarousel } from "../../components/mobile/MobileDepartmentCarousel";
import { MobileEmergencyDialer } from "../../components/mobile/MobileEmergencyDialer";

export const MobileHome = () => {
  return (
    <div className="pb-24 space-y-3">
      <MobileHero />
      <MobileEmergencyDialer />
      <MobileDepartmentCarousel />
    </div>
  );
};
