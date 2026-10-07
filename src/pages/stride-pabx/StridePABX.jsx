import React, { useLayoutEffect, useState } from "react";
import Hero from "../../components/common/Hero";
import Skeleton from "../../components/common/Skeleton";
import Overview from "../../components/common/Overview";
import StridePabxCapabilitiesSection from "../../components/stride-pabx/StridePabxCapabilitiesSection";
import Footer from "../../components/layout/Footer";

const heroData = {
  id: "stride-pabx",
  badge: "STRIDEPABX",
  image:
    process.env.PUBLIC_URL + "/Modern%20Office%20Communication%20Setup.png",
  imageAlt:
    "VoIP office workspace with an IP phone and desktop calling interface",
  imagePosition: "object-center",
  title: (
    <>
      Unified Voice Communication.
      <br />
      <span className="text-[#1a9fa0]">Built Around Your Team.</span>
    </>
  ),
  descriptions: [
    "StridePABX brings desk phones, desktop softphones, and connected extensions into one centralized communication system. It enables teams to make and receive calls across devices, simplifies internal communication, and provides a reliable voice environment for day-to-day business operations.",
  ],
  stats: [],
};

export default function StridePABX() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const loadingTimer = setTimeout(() => {
      setIsPageLoading(false);
    }, 800);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (isPageLoading) return <Skeleton />;

  return (
    <main className="min-h-screen bg-[#0a0a0a] font-['Manrope'] text-white">
      <Hero data={heroData} />
      <Overview data={{
        eyebrow: "OVERVIEW",
        title: <>
          One Voice System.<br />
          <span className="text-[#1a9fa0]">Every Team Connected.</span>
        </>,
        description:
          "StridePABX provides a centralized communication environment for day-to-day business calling. It connects desk phones, desktop-based calling, and internal extensions so employees can make and receive calls across supported devices, reach colleagues more easily, and maintain a consistent flow of communication between teams and work locations.",
        image:
          process.env.PUBLIC_URL + "/Modern%20Office%20Desk%20with%20IP%20Phone.png",
        imageAlt: "Modern office desk with an IP phone for business communication",
        showCapabilities: false,
      }} />
      <StridePabxCapabilitiesSection />
      <Footer />
    </main>
  );
}
