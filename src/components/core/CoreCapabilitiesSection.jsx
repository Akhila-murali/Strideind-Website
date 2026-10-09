import React from "react";
import HorizontalScroll from "../common/HorizontalScroll";

const cards = [
  {
    category: "Live Drilling Monitoring",
    title: "Track. Monitor. Stay in Control.",
    description: "Monitor hookload, block position, drilling pressure, RPM, flow rates, and depth through configurable PLC dashboards with live values, engineering units, connection status, operating limits, and alarm indications.",
    image: "/bg3.png",
  },
  {
    category: "Operational Gauges",
    title: "Critical Drilling Parameters. Visualized in Real Time.",
    description: "View hookload, weight on bit, block position, top drive RPM, torque, casing pressure, pump SPM, flow rates, and depth through configurable gauges with adjustable ranges, tag assignment, and live-data status.",
    image: "/FutuDrill%20Drilling%20Gauges%20Dashboard.png",
  },
  {
    category: "Drilling Trend Analysis",
    title: "Track Every Change. Understand Every Trend.",
    description: "Analyze live and historical PLC measurements through interactive trend charts with multi-channel comparison, selectable time ranges, zoom controls, configurable markers, and supported data export.",
    image: "/FutuDrill%20Trend%20Analysis%20Dashboard.png",
  },
  {
    category: "Generator Power Intelligence",
    title: "Power Performance. Clear Operational Visibility.",
    description: "Observe voltage, current, frequency, active power, apparent power, and energy readings across configured generator units through centralized, configurable monitoring panels.",
    image: "/Dark%20Generator%20Monitoring%20Dashboard.png",
  },
  {
    category: "Reports & Data Export",
    title: "Turn Drilling Data into Actionable Reports.",
    description: "Select drilling parameters and historical periods, inspect configured trend views, and export supported operational data as CSV, Excel, PDF, or chart images for review and technical reporting.",
    image: "/Drilling%20Operations%20Control%20Room.png",
  },
  {
    category: "System Configuration",
    title: "Configure Monitoring Around Your Rig.",
    description: "Configure PLC tag assignments, parameter names, display settings, gauge ranges, channel arrangements, visibility, and multiple monitoring screens around the rig's operational requirements.",
    image: "/Gauge%20Dashboard%20Setup%20Interface.png",
  },
  {
    category: "User Access & Permissions",
    title: "Controlled Access. Configured for Your Team.",
    description: "Use authentication, permission-based access, and license-status handling to control supported functions, protect monitoring configurations, and authorize management activities.",
    image: "/Industrial%20Control%20Room%20Operator.png",
  },
];

export default function CoreCapabilitiesSection() {
  return (
    <section className="overflow-hidden border-y border-white/[0.08] bg-transparent pb-5 pt-16 lg:py-20">
      <div className="px-[5%] pb-12 max-lg:pb-10 max-[600px]:pb-8">
        <div className="max-w-[820px]">
          <div className="flex items-center gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">FutuDrill Capabilities</p>
            <span className="h-px w-14 bg-white/25" />
          </div>
          <h2 className="mt-4 text-[clamp(38px,4.5vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-white">
            Complete Visibility.<br /><span className="text-[#22c4c5]">Smarter Drilling Monitoring.</span>
          </h2>
          <p className="site-section-description mt-5 max-w-[760px]">
            Explore FutuDrill Core's integrated monitoring capabilities, from live drilling dashboards and operational gauges to trend analysis, recent data recording, reporting, and system configuration. Each capability is designed to help drilling teams track critical parameters, understand operational changes, and access relevant information through one centralized platform.
          </p>
        </div>
      </div>
      <HorizontalScroll cards={cards} badge="Core Capability" scrollAmount={355} />
    </section>
  );
}
