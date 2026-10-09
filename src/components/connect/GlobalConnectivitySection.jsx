import React from "react";
import { Cable, Database, Tags } from "lucide-react";
import Reveal from "../common/Reveal";

const stages = [
  {
    number: "01",
    icon: Cable,
    title: "Connection Configuration",
    shortTitle: "PLC / Device",
    description: "Configure Modbus TCP endpoints and serial communication settings for supported industrial devices.",
  },
  {
    number: "02",
    icon: Tags,
    title: "Device & Tag Mapping",
    shortTitle: "Structured Tags",
    description: "Register devices and define tags using register addresses, data types, engineering units, and scaling factors.",
  },
  {
    number: "03",
    icon: Database,
    title: "WITS Level 0 Output",
    shortTitle: "Downstream Output",
    description: "Map measurements to WITS codes, configure output profiles, preview messages, and manage serial transmission.",
  },
];

export default function GlobalConnectivitySection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-[#071013] px-[5%] py-16 font-['Manrope'] lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,196,197,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.018)_1px,transparent_1px)] bg-[size:58px_58px]" />
      <div className="relative mx-auto w-full max-w-[1728px]">
        <Reveal>
          <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">Industrial Data Workflow</p>
              <h2 className="mt-5 text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
                From Field Devices to<br /><span className="text-[#22c4c5]">Structured Data.</span>
              </h2>
            </div>
            <div className="site-section-description space-y-4 lg:border-l lg:border-white/10 lg:pl-8">
              <p>FutuDrill Connect organizes the workflow from PLC connection and device registration to operational tag mapping and structured downstream data.</p>
              <p>Configurable WITS Level 0 profiles can format mapped measurements and transmit them through supported serial communication workflows.</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14" delay={0.08}>
          <div className="relative border border-white/[0.09] bg-[#091417] px-6 py-9 sm:px-9 lg:px-12 lg:py-11">
            <div className="relative grid gap-8 lg:grid-cols-3 lg:gap-0">
              <div className="absolute left-[16.666%] right-[16.666%] top-6 hidden h-px bg-gradient-to-r from-[#22c4c5]/70 via-[#22c4c5]/35 to-[#22c4c5]/70 lg:block" />
              {stages.map(({ number, icon: Icon, title, shortTitle, description }, index) => (
                <article className="relative grid grid-cols-[48px_1fr] gap-x-5 lg:block lg:px-6" key={title}>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#22c4c5]/65 bg-[#071013] text-[#22c4c5] lg:mx-auto">
                    <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
                  </div>
                  {index < stages.length - 1 && <div className="absolute bottom-[-32px] left-6 top-12 w-px bg-[#22c4c5]/30 lg:hidden" />}
                  <div className="lg:mt-7">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#22c4c5]">{shortTitle}</p>
                      <span className="text-[22px] font-light text-white/15">{number}</span>
                    </div>
                    <h3 className="site-card-title mt-3">{title}</h3>
                    <p className="site-card-description mt-3 max-w-[420px]">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
