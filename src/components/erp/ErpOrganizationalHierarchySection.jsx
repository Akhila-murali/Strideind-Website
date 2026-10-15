import React from "react";
import { Boxes, Factory, Gauge, MapPinned, Network, Settings, Zap } from "lucide-react";

const organizationLevels = [
  { label: "Region", detail: "Level 01", icon: MapPinned },
  { label: "Rig", detail: "Level 02", icon: Factory },
  { label: "System", detail: "Level 03", icon: Network },
];

const assetLevels = [
  { label: "Equipment", detail: "Level 04", icon: Settings },
  { label: "Component", detail: "Level 05", icon: Boxes },
  { label: "Sensor", detail: "Level 06", icon: Gauge },
];

const architectureLayers = [
  {
    number: "01",
    title: "Edge Layer",
    icon: Network,
    description:
      "The Edge Layer connects field-level inputs across equipment and maintenance zones. It uses Modbus-connected sensors and IP cameras positioned at operational points to capture equipment and maintenance-related data at the source.",
  },
  {
    number: "02",
    title: "Intelligence Layer",
    icon: Zap,
    description:
      "The Intelligence Layer applies LSTM and Random Forest ML models for failure prediction, while computer vision supports maintenance task verification. This layer is responsible for analyzing incoming data and identifying operational patterns for intelligent decision support.",
  },
  {
    number: "03",
    title: "Management Layer",
    icon: Settings,
    description:
      "The Management Layer provides an on-premise unified dashboard for work orders, asset tracking, compliance reports, and full CMMS integration. It acts as the centralized layer for managing maintenance, asset, and reporting workflows across the platform.",
  },
];

function HierarchyGroup({ eyebrow, levels }) {
  return (
    <div className="border border-white/[0.08] bg-[#0e1112] p-3 sm:p-6">
      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#1a9fa0]">{eyebrow}</p>

      <div className="relative mt-5 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
        <div className="pointer-events-none absolute left-[10%] right-[10%] top-7 h-[2px] bg-[#22c4c5]/60 sm:top-8" />
        {levels.map(({ label, detail, icon: Icon }) => (
          <div className="group relative min-w-0 border border-white/[0.07] bg-[#0a0d0e] p-2.5 transition-[border-color,background-color] duration-300 hover:border-[#1a9fa0]/45 hover:bg-[#101718] sm:p-4" key={label}>
            <div className="relative z-[1] flex h-8 w-8 items-center justify-center border border-[#1a9fa0]/35 bg-[#0d181a] text-[#22c4c5] transition-shadow duration-300 group-hover:shadow-[0_0_14px_rgba(34,196,197,0.18)]">
              <Icon aria-hidden="true" size={16} strokeWidth={1.7} />
            </div>
            <h4 className="mt-3 text-[11px] font-bold leading-tight text-white sm:mt-4 sm:text-[13px]">{label}</h4>
            <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.06em] text-white/40 sm:text-[9px] sm:tracking-[0.09em]">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ErpOrganizationalHierarchySection() {
  return (
    <section className="border-b border-white/[0.08] bg-[#0a0a0a] px-[5%] pb-16 pt-10 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1920px]">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-[8%]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a9fa0]">
              Asset Registry &amp; Hierarchy
            </p>
            <h2 className="mt-4 max-w-[720px] text-[clamp(34px,4.2vw,50px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              6-Level Asset <span className="text-[#1a9fa0]">Hierarchy.</span>
            </h2>
          </div>

          <p className="site-section-description max-w-[720px] lg:justify-self-end lg:border-l lg:border-white/[0.09] lg:pl-5">
            A structured, six-level asset hierarchy forms the foundation of the entire platform — linking every sensor reading, work order, spare part, and inspection record to the exact equipment node it relates to.
          </p>
        </div>

        <div className="mt-11 grid items-stretch gap-4 lg:grid-cols-[1fr_54px_1fr] lg:gap-5">
          <HierarchyGroup
            eyebrow="Levels 01–03"
            levels={organizationLevels}
          />

          <div className="relative flex min-h-12 items-center justify-center" aria-hidden="true">
            <span className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-[#22c4c5]/65 to-transparent lg:h-[2px] lg:w-full lg:bg-gradient-to-r" />
            <span className="relative grid h-9 w-9 place-items-center rounded-full border border-[#22c4c5]/55 bg-[#0a1112] text-[#22c4c5] shadow-[0_0_18px_rgba(26,159,160,0.2)]">
              <Network size={16} strokeWidth={1.7} />
            </span>
          </div>

          <HierarchyGroup
            eyebrow="Levels 04–06"
            levels={assetLevels}
          />
        </div>
      </div>
    </section>
  );
}

export function ErpPlatformArchitectureSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#050809] px-[5%] pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
      <div className="relative mx-auto w-full max-w-[1920px]">
        <div className="max-w-[860px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a9fa0]">
            Platform Architecture
          </p>
          <h2 className="mt-4 text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
            Modular, Scalable <span className="text-[#1a9fa0]">Platform Architecture.</span>
          </h2>
          <p className="site-section-description mt-6 max-w-[720px]">
            The FutuDrill AI platform is built on a modular, scalable architecture deployable across drilling rigs, yards, and support facilities. The platform combines field-connected sensing, intelligence-driven analysis, and centralized management workflows into one structured architecture for industrial operations.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14">
          {architectureLayers.map(({ number, title, icon: Icon, description }) => (
            <article
              className="group relative flex flex-col overflow-hidden border border-white/[0.09] bg-[#0b1113] p-6 transition-[border-color,transform,background-color] duration-300 hover:-translate-y-1 hover:border-[#1a9fa0]/45 hover:bg-[#0d1517] sm:p-7 lg:p-8"
              key={title}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#1a9fa0] via-[#1a9fa0]/45 to-transparent" />
              <div className="flex items-center justify-between gap-5">
                <span className="grid h-11 w-11 place-items-center border border-[#1a9fa0]/30 bg-[#0d1a1c] text-[#22c4c5] transition-colors duration-300 group-hover:border-[#22c4c5]/60">
                  <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
                </span>
                <span className="text-[11px] font-bold tracking-[0.18em] text-white/25">{number}</span>
              </div>
              <h3 className="site-card-title mt-8">{title}</h3>
              <p className="site-card-description mt-3">{description}</p>
              <p className="mt-auto pt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1a9fa0]">Layer {number}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
