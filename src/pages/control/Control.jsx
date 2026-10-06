import React, { useLayoutEffect } from "react";
import Hero from "../../components/common/Hero";
import Overview from "../../components/common/Overview";
import DrillersControlChairSection from "../../components/control/DrillersControlChairSection";
import RigEquipmentControlsSection from "../../components/control/RigEquipmentControlsSection";
import ControlCapabilitiesSection from "../../components/control/ControlCapabilitiesSection";
import PowerControlRoomSection from "../../components/control/PowerControlRoomSection";
import CustomControlsSection from "../../components/control/CustomControlsSection";
import Footer from "../../components/layout/Footer";
import { Box, PanelsTopLeft, SlidersHorizontal } from "lucide-react";

export default function Control() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroData = {
    id: "futudrill-control",
    image:
      process.env.PUBLIC_URL +
      "/Sunset%20Drilling%20Rig%20Control%20Cabin.png",
    imageAlt:
      "Integrated driller's control chair overlooking drilling rig equipment",
    imagePosition: "object-center",

    badge: "FutuDrill Control",

    title: (
      <>
        Integrated Rig Control.
        <br />
        <span className="text-[#1a9fa0]">Built Around the Driller.</span>
      </>
    ),

    descriptions: [
      "FutuDrill Control delivers integrated control solutions for critical rig equipment, from the driller's control chair and top drive to catwalk, iron roughneck, power systems, and collision avoidance. Each system is engineered around the rig's equipment, operating requirements, and crew workflows.",
    ],

    stats: [],
  };

  return (
    <main className="product-detail min-h-screen bg-[#05090b] font-['Manrope'] text-white">
      <Hero data={heroData} />
      <Overview variant="connect" data={{
        eyebrow: "OVERVIEW",
        title: <>
          Purpose-Built Control.<br />
          <span className="text-[#22c4c5]">Across Rig Operations.</span>
        </>,
        description:
          "FutuDrill Control provides purpose-built control solutions for drilling equipment and rig operations. Each solution is configured around the rig layout, equipment interfaces, operator requirements, and crew workflows.",
        image:
          process.env.PUBLIC_URL +
          "/Gritty%20Drilling%20Rig%20Control%20Cabin.png",
        imageAlt:
          "Rugged drilling rig control console with touchscreen and physical controls",
        capabilities: [
          {
            icon: Box,
            title: "Equipment-Focused Control",
            description:
              "Dedicated control solutions for critical rig equipment.",
          },
          {
            icon: PanelsTopLeft,
            title: "Operator-Focused Interfaces",
            description:
              "Control interfaces designed around operator requirements and crew workflows.",
          },
          {
            icon: SlidersHorizontal,
            title: "Configured for the Rig",
            description:
              "Solutions aligned with the rig layout, equipment interfaces, and operational requirements.",
          },
        ],
      }} />
      <DrillersControlChairSection />
      <RigEquipmentControlsSection />
      <ControlCapabilitiesSection />
      <PowerControlRoomSection />
      <CustomControlsSection />
      <Footer />
    </main>
  );
}
