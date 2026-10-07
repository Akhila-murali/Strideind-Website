import React from "react";
import { CheckCircle2, Gauge, Activity, Clock3 } from "lucide-react";

import Reveal from "../common/Reveal";

const insightCapabilities = [
  {
    eyebrow: "WELL CONTEXT",
    title: (
      <>
        Understand Every Well
        <br />
        in Context.
      </>
    ),
    description:
      "Bring well details, rig information, operational state, and associated drilling data together so teams can clearly understand what is happening at each well.",
    icon: Gauge,
    points: [
      "Well and rig context",
      "Current operational activity",
      "Historical operation records",
    ],
  },
  {
    eyebrow: "DEPTH & PERFORMANCE",
    title: (
      <>
        See How Performance
        <br />
        Changes With Depth.
      </>
    ),
    description:
      "Relate drilling readings and operational behaviour to depth progression, helping teams understand how performance changes through different sections of the hole.",
    icon: Activity,
    points: [
      "Depth-based parameter tracking",
      "Performance across drilling intervals",
      "Compare behaviour at different depths",
    ],
  },
  {
    eyebrow: "OPERATION TIMELINE",
    title: (
      <>
        Follow the Operation
        <br />
        as It Happens.
      </>
    ),
    description:
      "Track drilling activities such as drilling, connections, tripping, and other operational events in sequence to provide clearer context around performance changes.",
    icon: Clock3,
    points: [
      "Activity and connection events",
      "Operational sequence history",
      "Time-based event correlation",
    ],
  },
];

export default function InsightCapabilities() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-[#05090b] px-[5%] py-14 font-['Manrope'] lg:py-[72px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#19aeb2]/45 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-3/4 -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(25,174,178,0.08),transparent_68%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,196,197,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.02)_1px,transparent_1px)] bg-[size:58px_58px]" />

      <div className="relative mx-auto grid w-full max-w-[1728px] gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-0">
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/3 top-0 z-10 hidden w-px bg-[#1b3d43] xl:block" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-2/3 top-0 z-10 hidden w-px bg-[#1b3d43] xl:block" />

        {insightCapabilities.map(({ eyebrow, title, description, icon: Icon, points }, index) => (
          <Reveal key={eyebrow} delay={index * 0.1} className={index === 2 ? "md:col-span-2 xl:col-span-1" : ""}>
          <article
            className="relative h-full border border-[#1b3d43]/70 bg-[#071013]/65 px-6 py-8 sm:px-8 sm:py-10 xl:border-0 xl:bg-transparent xl:px-10 xl:py-0"
          >
            <div className="flex items-center gap-3 text-[#22c4c5]">
              <Icon aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 shrink-0" />
              <p className="m-0 text-[10px] font-bold tracking-[0.18em]">{eyebrow}</p>
            </div>

            <h2 className="mt-5 text-[clamp(26px,2.4vw,40px)] font-bold leading-[1.02] tracking-[-0.025em] text-white">
              {title}
            </h2>
            <p className="mt-5 text-[15px] font-light leading-[1.8] text-white/55 sm:text-base xl:max-w-[440px]">
              {description}
            </p>

            <ul className="mt-6 space-y-2.5">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-[12px] leading-relaxed text-white/65 sm:text-[13px]">
                  <CheckCircle2 aria-hidden="true" strokeWidth={1.7} className="h-4 w-4 shrink-0 text-[#22c4c5]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

