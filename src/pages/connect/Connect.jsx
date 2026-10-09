import React, { useLayoutEffect } from "react";
import Hero from "../../components/common/Hero";
import Overview from "../../components/common/Overview";
import GlobalConnectivitySection from "../../components/connect/GlobalConnectivitySection";
import UnifiedIOSection from "../../components/connect/UnifiedIOSection";
import ThirdPartyIntegrationsSection from "../../components/connect/ThirdPartyIntegrationsSection";
import Footer from "../../components/layout/Footer";
import { Cable, Database, Network } from "lucide-react";

const heroData = {
  badge: "Industrial Connectivity",
  image:
    process.env.PUBLIC_URL +
    "/Futuristic%20Global%20Network%20Over%20Earth.png",
  imageAlt: "Connected global network over Earth",
  title: (
    <>
      Connecting Industrial Systems. <span className="text-[#22c4c5]">Simplifying Data Integration</span>
    </>
  ),
  descriptions: [
    "FutuDrill Connect is an industrial data connectivity platform designed to simplify communication between PLCs, controllers, and field devices. It enables teams to configure industrial connections, organize device information, transform raw register values into meaningful operational tags, and prepare structured data for downstream monitoring and drilling systems through configurable WITS Level 0 workflows.",
  ],
  stats: [
    { value: "PLC", label: "Connectivity" },
    { value: "Modbus", label: "TCP Configuration" },
    { value: "WITS", label: "Level 0 Data Exchange" },
    { value: "Tags", label: "Data Mapping" },
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
          Industrial Connectivity.<br />
          <span className="text-[#19aeb2]">Structured Data Integration.</span>
        </>,
        description:
          "FutuDrill Connect simplifies industrial data communication by bringing PLC connections, device configuration, and operational tag management into one centralized platform. It enables industrial teams to configure Modbus TCP and serial communication interfaces, register field devices, and transform raw register values into meaningful data points with defined data types, scaling factors, and engineering units. With configurable WITS Level 0 workflows, the platform also supports mapping operational measurements to standardized WITS codes, preparing structured output, and managing serial data transmission for downstream drilling and monitoring systems.",
        image:
          process.env.PUBLIC_URL +
          "/Field%20Automation%20at%20Sunset.png",
        imageAlt: "Field automation equipment operating at a drilling site at sunset",
        capabilities: [
          {
            icon: Cable,
            title: "Industrial Communication",
            description:
              "Configure Modbus TCP connections and serial communication settings for supported PLCs and field devices.",
          },
          {
            icon: Database,
            title: "Device & Tag Management",
            description:
              "Define register addresses and convert raw measurements into operational tags with units and scaling.",
          },
          {
            icon: Network,
            title: "WITS Level 0 Integration",
            description:
              "Map source tags to WITS codes, configure output profiles, preview messages, and manage serial transmission.",
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
