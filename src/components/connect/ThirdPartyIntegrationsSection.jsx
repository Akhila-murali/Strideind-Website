import React from "react";
import { Braces, Database, MonitorUp, Wrench } from "lucide-react";

const integrations = [
  {
    title: "SCADA",
    description: "Connects with supervisory control systems to access operational measurements, equipment status and process data.",
    status: "Connected",
    icon: MonitorUp,
  },
  {
    title: "WITS / WITSML",
    description: "Supports industry-standard exchange of real-time and structured wellsite data between drilling systems and external applications.",
    status: "Streaming",
    icon: Database,
  },
  {
    title: "SAP PM Module",
    description: "Integrates operational equipment data with SAP Plant Maintenance workflows to support asset monitoring, maintenance planning and service activities.",
    status: "Synced",
    icon: Wrench,
  },
  {
    title: "Custom REST API",
    description: "Provides configurable API access for exchanging operational data with external applications, enterprise platforms and custom software solutions.",
    status: "Available",
    icon: Braces,
  },
];

export default function ThirdPartyIntegrationsSection() {
  return (
    <section className="border-y border-white/[0.08] bg-[#161616] px-[3%] py-10 font-['Manrope'] lg:py-12">
      <div className="mx-auto w-full max-w-[1728px]">
        <div className="grid items-end gap-6 pb-5 md:grid-cols-[1.25fr_0.9fr] lg:gap-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#22c4c5]"></p>
            <h2 className="mt-2 max-w-[650px] text-[clamp(30px,3.35vw,52px)] font-bold leading-[1.04] tracking-[-0.035em] text-white">
              Third-Party <span className="text-[#22c4c5]">Integrations.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {integrations.map(({ title, description, status, icon: Icon }, index) => (
            <article key={title} className="group relative flex min-h-[260px] flex-col rounded-[3px] border border-[#18363b] bg-[#071114] p-5 transition-colors duration-300 hover:border-[#22515a] hover:bg-[#0a171b]">
              <span aria-hidden="true" className="absolute -top-px left-5 h-[2px] w-7 bg-[#22c4c5]" />
              <div className="flex items-start justify-between">
                <span className="text-[30px] font-light leading-none text-white/25">{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" className="h-7 w-7 text-[#22c4c5]" strokeWidth={1.6} />
              </div>

              <h3 className="mt-5 text-[19px] font-bold uppercase leading-[1.18] tracking-[0.02em] text-white">{title}</h3>
              <p className="mt-4 text-[13px] font-light leading-[1.65] text-white/70">{description}</p>

              <div className="mt-auto flex items-center justify-between pt-5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#22c4c5]">
                <span className="flex items-center gap-2"><i className="h-1.5 w-1.5 rounded-full bg-[#23e968]" />{status}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
