import React, { useLayoutEffect } from "react";
import Hero from "../../components/common/Hero";
import Overview from "../../components/common/Overview";
import { ClipboardCheck, Monitor, UserRound } from "lucide-react";
import CoreArchitecture from "../../components/core/CoreArchitecture";
import CoreBenefits from "../../components/core/CoreBenefits";
import Footer from "../../components/layout/Footer";

export default function Core() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="product-detail min-h-screen bg-[#05090b] font-['Manrope'] text-white">
      <Hero data={{
        badge: "FutuDrill Platform",
        image: process.env.PUBLIC_URL + "/Core_hero.png",
        imageAlt: "Offshore drilling platform at dusk",
        imagePosition: "object-[64%_center]",
        title: <>FutuDrill <span className="text-[#1a9fa0]">Core</span></>,
        subtitle: <>Real-Time Intelligence<br />for Smarter Drilling Operations.</>,
        descriptions: ["FutuDrill Core brings together data acquisition, real-time monitoring, trending and reporting into a unified platform, helping you make faster, safer and more informed decisions across your drilling operations."],
        stats: [
          { value: "24/7", label: "Live Monitoring" },
          { value: "Real-Time", label: "Data Acquisition" },
          { value: "Improved", label: "Operational Safety" },
          { value: "Higher", label: "Drilling Efficiency" },
        ],
      }} />
      <Overview data={{
        eyebrow: "OVERVIEW",
        title: <>A Unified Platform<br />for <span className="text-[#19aeb2]">Drilling Operations.</span></>,
        description: "FutuDrill Core is a comprehensive data acquisition, monitoring, and analytics platform designed for modern drilling operations. It collects real-time data from rig sensors, visualizes critical parameters, and provides actionable insights to improve operational efficiency, safety, and decision-making.",
        image: process.env.PUBLIC_URL + "/bg%20core.png",
        imageAlt: "FutuDrill Core drilling operations",
        capabilities: [
          { icon: UserRound, title: "Acquire", description: "Collect data from multiple rig systems" },
          { icon: Monitor, title: "Monitor", description: "Real-time visualization and alerts" },
          { icon: ClipboardCheck, title: "Optimize", description: "Actionable insights for better decisions" },
        ],
      }} />
      <CoreArchitecture />
      <CoreBenefits />
      <Footer />
    </main>
  );
}
