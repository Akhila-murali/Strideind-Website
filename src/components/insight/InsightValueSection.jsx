import React from "react";
import { CheckCircle2 } from "lucide-react";

import Reveal from "../common/Reveal";

const capabilities = [
  {
    number: "01",
    title: "Equipment Health & Reliability",
    image: process.env.PUBLIC_URL + "/Industrial%20Rig%20Inspection%20with%20Tablet.png",
    imageAlt: "Maintenance engineer inspecting drilling equipment with a rugged monitoring tablet",
    description:
      "Connect operating history, utilization, downtime, and equipment condition to build a clearer maintenance picture for each asset.",
    points: [
      "Equipment running-hour analysis",
      "Performance deviation and anomaly detection",
      "Maintenance trend analysis",
      "Equipment utilization and downtime reports",
      "Condition-based maintenance insights",
    ],
  },
  {
    number: "02",
    title: "Intelligent Reports & Data Visualization",
    image: process.env.PUBLIC_URL + "/Drilling%20Control%20Room%20Workstation.png",
    imageAlt: "Drilling control room workstation displaying reports, historical trends, alarms, and KPI dashboards",
    description:
      "Turn operational records into scheduled reports, interactive visualizations, and management-ready performance summaries.",
    points: [
      "Automated daily, weekly and monthly reports",
      "Interactive charts and historical trends",
      "Custom KPI dashboards",
      "Data export and management summaries",
      "Operational event and alarm history",
    ],
  },
  {
    number: "03",
    title: "Advanced Analytics & AI Integration",
    image: process.env.PUBLIC_URL + "/Industrial%20Control%20Room%20Operator.png",
    imageAlt: "Industrial control room operator monitoring analytics across multiple displays",
    description:
      "Correlate current and historical operating data to identify deviations earlier and support performance optimization.",
    points: [
      "Data-driven performance optimization",
      "Anomaly detection and early-warning insights",
      "Predictive analytics capabilities",
      "Historical data correlation",
      "Integration with FutuDrill monitoring and control systems",
    ],
  },
];

export default function InsightValueSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#0a0a0a] px-[5%] py-16 font-['Manrope'] lg:py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] bg-[radial-gradient(circle,rgba(26,159,160,0.08),transparent_68%)]" />

      <div className="relative mx-auto w-full max-w-[1728px]">
        <Reveal className="max-w-[920px]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#22c4c5]">
            Key Capabilities
          </p>
          <h2 className="mt-4 text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Intelligence Across Every Layer of
            <br className="hidden sm:block" />
            <span className="text-[#1a9fa0]"> Drilling Performance.</span>
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-white/[0.1] lg:mt-16">
          {capabilities.map(({ number, title, image, imageAlt, description, points }, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                className="grid gap-8 border-b border-white/[0.1] py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-[7%] lg:py-14"
                key={number}
              >
                <Reveal
                  className={`relative min-h-[260px] overflow-hidden border border-white/[0.09] bg-[#111111] sm:min-h-[330px] lg:min-h-[380px] ${reverse ? "lg:order-2" : ""}`}
                  direction={reverse ? "right" : "left"}
                  variant="image"
                >
                  <img
                    src={image}
                    alt={imageAlt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </Reveal>

                <Reveal
                  className={`lg:max-w-[650px] ${reverse ? "lg:order-1 lg:justify-self-end" : ""}`}
                  direction={reverse ? "left" : "right"}
                  delay={0.08}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[12px] font-bold tracking-[0.18em] text-[#22c4c5]">{number}</span>
                    <span className="h-px w-12 bg-[#1a9fa0]/60" />
                  </div>

                  <h3 className="mt-5 text-[clamp(28px,3.2vw,44px)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
                    {title}
                  </h3>

                  <p className="site-section-description mt-5 max-w-[620px]">
                    {description}
                  </p>

                  <ul className="mt-7 grid max-w-[650px] gap-3.5">
                    {points.map((point) => (
                      <li className="site-card-description flex items-start gap-3 border-l border-white/[0.08] pl-4" key={point}>
                        <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#22c4c5]" strokeWidth={1.7} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
