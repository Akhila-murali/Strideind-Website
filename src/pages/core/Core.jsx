import React, { useLayoutEffect } from "react";
import Overview from "../../components/common/Overview";
import { Activity, BarChart3, RadioTower } from "lucide-react";
import CoreCapabilitiesSection from "../../components/core/CoreCapabilitiesSection";
import CoreBenefits from "../../components/core/CoreBenefits";
import CoreHero from "../../components/core/CoreHero";
import Footer from "../../components/layout/Footer";

export default function Core() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="product-detail min-h-screen bg-[#05090b] font-['Manrope'] text-white">
      <CoreHero />
      <Overview data={{
        eyebrow: "OVERVIEW",
        title: <>Every Drilling Parameter<br /><span className="text-[#19aeb2]">in View.</span></>,
        description: "FutuDrill Core brings live PLC measurements, configurable dashboards, operational gauges, and drilling data visualization into one centralized platform. It enables drilling teams to monitor critical rig parameters, track operational conditions, analyze live and historical trends, and access recorded data through a single monitoring environment.",
        image: process.env.PUBLIC_URL + "/Low-Angle%20Drilling%20Rig%20at%20Dusk.png",
        imageAlt: "Low-angle view of a drilling rig at dusk",
        capabilities: [
          { icon: RadioTower, title: "Acquire", description: "Receive live PLC tag measurements" },
          { icon: Activity, title: "Monitor", description: "Visualize rig parameters and alarms" },
          { icon: BarChart3, title: "Analyze", description: "Explore live and historical trends" },
        ],
      }} />
      {/* <CoreArchitecture /> */}
      <CoreCapabilitiesSection />
      <CoreBenefits />
      <Footer />
    </main>
  );
}
