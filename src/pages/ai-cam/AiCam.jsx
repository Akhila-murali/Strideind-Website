import React, { useLayoutEffect } from "react";
import Hero from "../../components/common/Hero";
import AiCamOverviewSection from "../../components/ai-cam/AiCamOverviewSection";
import AiCamFeaturesSection from "../../components/ai-cam/AiCamFeaturesSection";
import AiMaintenanceVerificationSection from "../../components/ai-cam/AiMaintenanceVerificationSection";
import Footer from "../../components/layout/Footer";

const heroData = {
  id: "futudrill-ai-cam",
  badge: "FutuDrill AI Cam",
  image:
    process.env.PUBLIC_URL +
    "/PTZ%20Dome%20Camera%20at%20Dusk.png",
  imageAlt: "PTZ dome camera monitoring an industrial site at dusk",
  imagePosition: "object-center",
  title: (
    <>
      AI-Powered CCTV
      <br />
      <span className="text-[#22c4c5]">Safety &amp; Intelligence.</span>
    </>
  ),
  descriptions: [
    "FutuDrill AI CAM combines ten integrated monitoring modules for PPE, access control, driver and driller behavior, inventory activity, falling objects, thermal conditions, speed and movement, drilling assistance, and maintenance verification through AI-powered visual monitoring and event-based alerts.",
  ],
  stats: [
    { value: "24/7", label: "Site Monitoring" },
    { value: "10", label: "Integrated Modules" },
    { value: "AI", label: "Vision Monitoring" },
    { value: "Event", label: "Based Alerts" },
  ],
};

export default function AiCam() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#05090b] font-['Manrope'] text-white">
      <Hero data={heroData} />
      <AiCamOverviewSection />
      <AiCamFeaturesSection />
      <AiMaintenanceVerificationSection />
      <Footer />
    </main>
  );
}
