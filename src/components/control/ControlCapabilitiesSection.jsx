import React from "react";
import { BellRing, Radar, RefreshCw, ShieldCheck } from "lucide-react";
import Reveal from "../common/Reveal";

const capabilities = [
  {
    icon: RefreshCw,
    title: "Re-Programmable Protection",
    description:
      "Configure the system for different rig layouts, equipment movements, and operational requirements.",
  },
  {
    icon: Radar,
    title: "Configurable Detection Zones",
    description:
      "Define monitored zones around moving equipment and critical operating areas to identify collision risks.",
  },
  {
    icon: BellRing,
    title: "Immediate Operator Alerts",
    description:
      "Notify crews when equipment approaches a configured safety boundary so they can respond quickly.",
  },
];

export default function ControlCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-[#05090b] px-[5%] py-16 font-['Manrope'] lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,196,197,0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,196,197,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.025)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="relative mx-auto w-full max-w-[1728px]">
        <Reveal>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[8%]">
          <div>
            <div className="flex items-center gap-3 text-[#22c4c5]">
              <ShieldCheck aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Surveillance & Safety</p>
            </div>
            <h2 className="mt-5 text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.06] tracking-[-0.025em] text-white">
              Collision Avoidance<br />
              <span className="text-[#22c4c5]">Built for Rig Operations.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-[780px] text-[15px] font-light leading-[1.85] text-white/55 sm:text-[17px]">
              FutuDrill Control supports a re-programmable collision avoidance system designed for safe operation across different rig types and operational environments. Configurable detection zones help identify unsafe equipment proximity, while immediate alerts give operators time to respond before a potential collision develops.
            </p>
          </div>
        </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.1}>
            <article key={title} className="group rounded-[8px] border border-[#244047]/80 bg-[#071216]/80 p-7 transition-[border-color,background-color] duration-300 hover:border-[#22c4c5]/55 hover:bg-[#091a1f]">
              <div className="flex items-start justify-between gap-5">
                <Icon aria-hidden="true" className="h-9 w-9 text-[#22c4c5]" strokeWidth={1.65} />
              </div>
              <h3 className="mt-8 text-[18px] font-bold text-white">{title}</h3>
              <p className="mt-3 text-[13px] font-light leading-[1.75] text-white/50">{description}</p>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
