import React, { useLayoutEffect } from "react";
import Hero from "../../components/common/Hero";
import Overview from "../../components/common/Overview";
import GlobalConnectivitySection from "../../components/connect/GlobalConnectivitySection";
import UnifiedIOSection from "../../components/connect/UnifiedIOSection";
import ThirdPartyIntegrationsSection from "../../components/connect/ThirdPartyIntegrationsSection";
import Footer from "../../components/layout/Footer";
import { Database, MonitorCheck, ShieldCheck } from "lucide-react";

const heroData = {
  badge: "FutuDrill Connect",
  image:
    process.env.PUBLIC_URL +
    "/Futuristic%20Global%20Network%20Over%20Earth.png",
  imageAlt: "Connected global network over Earth",
  title: (
    <>
      One Connection.
      <br />
      Multiple <span className="text-[#22c4c5]">Possibilities.</span>
    </>
  ),
  descriptions: [
    "FutuDrill Connect brings together site information, drilling parameters, and service data from field systems in a secure connected environment, enabling reliable data exchange between rig equipment, remote teams, and enterprise platforms wherever critical information is needed.",
  ],
  stats: [
    { value: "Secure", label: "Data Flow" },
    { value: "Remote", label: "Connectivity" },
    { value: "Unified", label: "Integration" },
    { value: "Real-Time", label: "Access" },
  ],
};

export default function Connect() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="product-detail min-h-screen bg-[#05090b] font-['Manrope'] text-white">
      <Hero data={heroData} />
      <Overview variant="connect" data={{
        eyebrow: "OVERVIEW",
        title: <>
          Connected Operations.<br />
          <span className="text-[#19aeb2]">Clearer Visibility.</span>
        </>,
        description:
          "FutuDrill Connect provides a reliable communication layer between field equipment, operational systems, and remote teams. It brings data from multiple sources into one connected environment, helping teams maintain consistent access to operational information, improve coordination, and support faster response across drilling activities.",
        image:
          process.env.PUBLIC_URL +
          "/Connected%20Drilling%20Site%20at%20Dusk.png",
        imageAlt: "Connected drilling site at dusk",
        capabilities: [
          {
            icon: Database,
            title: "Field Data Access",
            description:
              "Access drilling, site, and service information from connected field systems in real time.",
          },
          {
            icon: ShieldCheck,
            title: "Secure System Integration",
            description:
              "Exchange data reliably between instruments, control systems, third-party platforms, and enterprise applications.",
          },
          {
            icon: MonitorCheck,
            title: "Remote Operational Support",
            description:
              "Enable remote teams to monitor activity, review information, and support field operations from anywhere.",
          },
        ],
      }} />
      <GlobalConnectivitySection />
      <UnifiedIOSection />
      <ThirdPartyIntegrationsSection />
      <Footer />
    </main>
  );
}
