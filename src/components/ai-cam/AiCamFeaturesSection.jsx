import React from "react";
import { BellRing, Cctv, ScanSearch, Video } from "lucide-react";

import Reveal from "../common/Reveal";

const features = [
  {
    number: "01",
    title: "AI Event Detection",
    description: "Identifies unusual activity within monitored areas.",
    icon: ScanSearch,
  },
  {
    number: "02",
    title: "Continuous Monitoring",
    description: "Maintains ongoing visibility across critical site areas.",
    icon: Cctv,
  },
  {
    number: "03",
    title: "Instant Alerts",
    description: "Notifies teams when detected events require attention.",
    icon: BellRing,
  },
  {
    number: "04",
    title: "Remote Operational View",
    description:
      "Provides live visibility of monitored areas from remote locations.",
    icon: Video,
  },
];

export default function AiCamFeaturesSection() {
  return (
    <section className="relative overflow-hidden px-[4%] py-16 sm:py-20 lg:px-[5%] lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,196,197,0.08),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,196,197,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.02)_1px,transparent_1px)] bg-[size:58px_58px]" />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal>
        <div className="grid gap-7 lg:grid-cols-[1fr_0.78fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">
              Key Features
            </p>
            <h2 className="mt-4 text-[clamp(32px,4vw,56px)] font-extrabold leading-[1.04] tracking-[-0.035em] text-white">
              Built for Continuous
              <br />
              Site Awareness.
            </h2>
          </div>

          <p className="max-w-[570px] border-l border-white/10 pl-5 text-[14px] font-light leading-[1.8] text-white/60 sm:text-[15px] lg:justify-self-end">
            FutuDrill AI CAM combines continuous monitoring, AI-based event
            detection, instant alerts, and remote visibility to support
            day-to-day site operations.
          </p>
        </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {features.map(({ number, title, description, icon: Icon }, index) => (
            <Reveal key={number} delay={index * 0.07}>
            <article
              className="group min-h-[230px] rounded-sm border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#22c4c5]/40 hover:bg-[#22c4c5]/[0.045] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="h-8 w-8 text-[#22c4c5]"
                />
              </div>

              <h3 className="mt-10 text-[17px] font-semibold leading-tight text-white">
                {title}
              </h3>
              <p className="mt-3 max-w-[260px] text-[13px] font-light leading-[1.65] text-white/55">
                {description}
              </p>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
