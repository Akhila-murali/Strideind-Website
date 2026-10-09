import React, { useLayoutEffect } from "react";
import Hero from "../../components/common/Hero";
import Overview from "../../components/common/Overview";
import { Activity, BarChart3, RadioTower } from "lucide-react";
import CoreArchitecture from "../../components/core/CoreArchitecture";
import CoreCapabilitiesSection from "../../components/core/CoreCapabilitiesSection";
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
        image: process.env.PUBLIC_URL + "/Drilling Rig Beneath Open Skies.png",
        imageAlt: "Drilling rig beneath open skies",
        imagePosition: "object-[64%_center]",
        title: <>FutuDrill <span className="text-[#1a9fa0]">Core</span></>,
        subtitle: <>Real-Time Drilling Monitoring.<br />Complete Operational Visibility.</>,
        descriptions: ["FutuDrill Core brings live PLC data, configurable dashboards, operational gauges, trend analysis, alarms, and drilling recorder views into one centralized monitoring platform. It enables drilling teams to track critical rig parameters, analyze operational trends, and make informed decisions using real-time and historical data."],
        stats: [
          { value: "Live", label: "PLC Data Monitoring" },
          { value: "Custom", label: "Rig Dashboards" },
          { value: "Trend", label: "Data Analysis" },
          { value: "Reports", label: "Data Export" },
        ],
      }} />
      <Overview data={{
        eyebrow: "OVERVIEW",
        title: <>Every Drilling Parameter<br /><span className="text-[#19aeb2]">in View.</span></>,
        description: "FutuDrill Core brings live PLC measurements, configurable dashboards, operational gauges, and drilling data visualization into one centralized platform. It enables drilling teams to monitor critical rig parameters, track operational conditions, analyze live and historical trends, and access recorded data through a single monitoring environment.",
        image: process.env.PUBLIC_URL + "/bg%20core.png",
        imageAlt: "FutuDrill Core drilling operations",
        capabilities: [
          { icon: RadioTower, title: "Acquire", description: "Receive live PLC tag measurements" },
          { icon: Activity, title: "Monitor", description: "Visualize rig parameters and alarms" },
          { icon: BarChart3, title: "Analyze", description: "Explore live and historical trends" },
        ],
      }} />
      <CoreArchitecture />
      <CoreCapabilitiesSection />
      <CoreBenefits />
      <Footer />
    </main>
  );
}
