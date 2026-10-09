import React from "react";
import { Boxes, Building2, Factory, Flag, MapPinned, Network, Settings } from "lucide-react";

const organizationLevels = [
  { label: "Company", detail: "Organization", icon: Building2 },
  { label: "Region", detail: "Operating region", icon: MapPinned },
  { label: "Country", detail: "Country record", icon: Flag },
];

const assetLevels = [
  { label: "Rig", detail: "Rig location", icon: Factory },
  { label: "Equipment", detail: "Managed asset", icon: Settings },
  { label: "Component", detail: "Equipment component", icon: Boxes },
];

function HierarchyGroup({ eyebrow, title, levels }) {
  return (
    <div className="border border-white/[0.08] bg-[#0e1112] p-5 sm:p-6">
      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#1a9fa0]">{eyebrow}</p>
      <h3 className="mt-2 text-[17px] font-bold text-white">{title}</h3>

      <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
        <div className="pointer-events-none absolute left-6 right-6 top-6 hidden h-px bg-[#1a9fa0]/30 sm:block" />
        {levels.map(({ label, detail, icon: Icon }) => (
          <div className="group relative border border-white/[0.07] bg-[#0a0d0e] p-4 transition-[border-color,background-color] duration-300 hover:border-[#1a9fa0]/45 hover:bg-[#101718]" key={label}>
            <div className="relative z-[1] flex h-8 w-8 items-center justify-center border border-[#1a9fa0]/25 bg-[#0d181a] text-[#22c4c5] transition-shadow duration-300 group-hover:shadow-[0_0_14px_rgba(34,196,197,0.18)]">
              <Icon aria-hidden="true" size={16} strokeWidth={1.7} />
            </div>
            <h4 className="mt-4 text-[13px] font-bold text-white">{label}</h4>
            <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.09em] text-white/35">{detail}</p>
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
              Organizational Hierarchy
            </p>
            <h2 className="mt-4 max-w-[720px] text-[clamp(34px,4.2vw,50px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              Structured Management <span className="text-[#1a9fa0]">Across Every Level.</span>
            </h2>
          </div>

          <p className="site-section-description max-w-[720px] lg:justify-self-end lg:border-l lg:border-white/[0.09] lg:pl-5">
            Organize companies, regions, countries, rigs, equipment, and components within a structured hierarchy. Navigate organizational levels and access associated equipment and component records through one centralized ERP platform.
          </p>
        </div>

        <div className="mt-11 grid items-stretch gap-4 lg:grid-cols-[1fr_54px_1fr] lg:gap-5">
          <HierarchyGroup
            eyebrow="Organizational Masters"
            title="Business Structure"
            levels={organizationLevels}
          />

          <div className="relative flex min-h-12 items-center justify-center" aria-hidden="true">
            <span className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#1a9fa0]/35 to-transparent lg:h-px lg:w-full lg:bg-gradient-to-r" />
            <span className="relative grid h-9 w-9 place-items-center rounded-full border border-[#1a9fa0]/35 bg-[#0a1112] text-[#22c4c5] shadow-[0_0_16px_rgba(26,159,160,0.12)]">
              <Network size={16} strokeWidth={1.7} />
            </span>
          </div>

          <HierarchyGroup
            eyebrow="Operational Assets"
            title="Equipment Structure"
            levels={assetLevels}
          />
        </div>
      </div>
    </section>
  );
}
