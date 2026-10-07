import React, { useLayoutEffect } from "react";
import Hero from "../../components/common/Hero";
import AiCamOverviewSection from "../../components/ai-cam/AiCamOverviewSection";
import AiCamFeaturesSection from "../../components/ai-cam/AiCamFeaturesSection";
import Footer from "../../components/layout/Footer";

const heroData = {
  id: "futudrill-ai-cam",
  badge: "FutuDrill AI Cam",
  image:
    process.env.PUBLIC_URL +
    "/Modern%20Dome%20Security%20Camera%20on%20Office%20Facade.png",
  imageAlt: "Modern dome security camera mounted on an office facade",
  imagePosition: "object-center",
  title: (
    <>
      Smarter Surveillance for
      <br />
      <span className="text-[#22c4c5]">Safer Operations.</span>
    </>
  ),
  descriptions: [
    "AI-powered camera systems for monitoring, safety, and automation across industrial operations.",
  ],
  stats: [
    { value: "24/7", label: "Site Monitoring" },
    { value: "AI", label: "Event Detection" },
    { value: "Instant", label: "Safety Alerts" },
    { value: "Remote", label: "Operational View" },
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
      <Footer />
    </main>
  );
}
