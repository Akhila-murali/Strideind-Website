import React from "react";
import { Eye, Gauge, History } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Centralized Operational Visibility",
    description: "View critical drilling parameters, live measurements, gauges, and monitoring information through a unified platform.",
  },
  {
    icon: Gauge,
    title: "Informed Operational Decisions",
    description: "Identify parameter changes, review trends, and recognize configured alarm conditions to support timely operational decisions.",
  },
  {
    icon: History,
    title: "Better Operational Understanding",
    description: "Combine real-time monitoring with historical trend analysis to better understand drilling parameter behavior over time.",
  },
];

export default function CoreBenefits() {
  return (
    <section className="relative overflow-hidden border-y border-[#10272b] bg-transparent px-[5%] py-12 font-['Manrope'] lg:py-14">
      <div className="relative mx-auto w-full max-w-[1920px]">
        <div className="flex items-center gap-4 text-[12px] font-semibold tracking-[0.12em] text-[#12cbd2]">
          <span className="grid h-[15px] w-[15px] place-items-center rounded-full border-2 border-[#11d5dc]">
            <span className="h-[5px] w-[5px] rounded-full bg-[#11d5dc]" />
          </span>
          WHY FUTUDRILL CORE
        </div>

        <h2 className="mt-6 text-[clamp(34px,3.4vw,56px)] font-extrabold leading-[1.08] tracking-[-0.035em] text-white">
          Built for Clarity. <span className="text-[#10c6ce]">Designed for Better Drilling Decisions.</span>
        </h2>

        <p className="mt-5 max-w-[900px] text-[clamp(14px,1vw,16px)] font-light leading-[1.8] text-white/50">
          FutuDrill Core brings critical drilling measurements, live monitoring, and operational analysis into a unified interface, helping teams understand changing rig conditions and respond with greater confidence.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-7">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex min-h-[130px] items-center gap-6 rounded-[8px] bg-[#061114]/35 px-7 py-5"
              style={{ border: "1px solid rgba(67, 91, 97, 0.85)" }}
            >
              <div
                className="grid h-[58px] w-[58px] shrink-0 place-items-center rounded-[10px] bg-[#06171a]"
                style={{ border: "1px solid #0dd5dc", boxShadow: "0 0 12px rgba(13, 213, 220, 0.22), inset 0 0 10px rgba(13, 213, 220, 0.05)" }}
              >
                <Icon aria-hidden="true" strokeWidth={1.8} className="h-8 w-8 text-[#19dce2] drop-shadow-[0_0_5px_rgba(25,220,226,0.32)]" />
              </div>
              <div>
                <h3 className="text-[clamp(15px,1.05vw,18px)] font-bold leading-tight text-white">{title}</h3>
                <p className="mt-2.5 max-w-[330px] text-[clamp(12px,0.9vw,15px)] font-light leading-[1.5] text-white/60">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
