import React from "react";
import HorizontalScroll from "../common/HorizontalScroll";

const compatibilityCards = [
  {
    category: "Device Communication",
    title: "Serial Communication",
    image: "/Industrial%20Engineer%20Configuring%20Rig%20Controls.png",
    description: "Enables direct data exchange with instruments, controllers and legacy field equipment using serial communication interfaces commonly found in industrial environments.",
  },
  {
    category: "Industrial Fieldbus",
    title: "RS-485 / Modbus",
    image: "/Industrial%20Control%20Cabinet%20Wiring.png",
    description: "Supports reliable multi-device communication for reading operational values from PLCs, meters, drives and field instruments using widely adopted Modbus-based networks.",
  },
  {
    category: "Smart Instrumentation",
    title: "HART Protocol",
    image: "/HART%20Calibration%20in%20the%20Process%20Plant.png",
    description: "Communicates with intelligent field instruments over traditional 4–20 mA loops, providing access to process measurements, device information and diagnostic data.",
  },
  {
    category: "Industrial Ethernet",
    title: "PROFINET",
    image: "/S7-1500%20PROFINET%20Control%20Cabinet%20Close-Up.png",
    description: "Provides high-speed industrial Ethernet communication between PLCs, distributed I/O, drives and automation equipment for real-time operational data exchange.",
  },
  {
    category: "Industrial Ethernet",
    title: "EtherNet/IP",
    image: "/Siemens%20Industrial%20Ethernet%20Control%20Panel.png",
    description: "Enables industrial Ethernet communication between controllers and connected equipment using the Common Industrial Protocol for operational data, control and diagnostics.",
  },
  {
    category: "Data Interoperability",
    title: "OPC UA Server",
    image: "/1718973943-what-is-opcua.avif",
    description: "Provides a standardized and secure interface for exposing structured operational data to SCADA platforms, analytics applications and other industrial software systems.",
  },
];

export default function UnifiedIOSection() {
  return (
    <section className="overflow-hidden border-t border-white/[0.08] bg-transparent pb-5 pt-16 lg:py-20">
      <div className="flex items-end justify-between gap-10 px-[5%] pb-12 max-lg:flex-col max-lg:items-start max-lg:pb-10 max-[600px]:pb-8">
        <div className="max-w-[900px]">
          {/* <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">FutuDrill Connect</p> */}
          <h2 className="mt-4 text-[clamp(38px,4.5vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-white">
            Unified I/O <span className="text-[#22c4c5]">Compatibility.</span>
          </h2>
          <p className="site-section-description mt-5 max-w-[850px]">
            Bring data from field instruments, PLCs and automation systems into a unified environment through widely used industrial communication standards.
          </p>
        </div>
      </div>
      <HorizontalScroll cards={compatibilityCards} scrollAmount={355} />
    </section>
  );
}
