import React from "react";
import { BadgeCheck, ClipboardCheck, ScanFace, TimerReset } from "lucide-react";
import Reveal from "../common/Reveal";

const features = [
  {
    icon: ClipboardCheck,
    title: "AI-Based Task Recognition",
    description: "Identify physical maintenance actions, including valve operation, lubrication, and equipment inspections.",
  },
  {
    icon: ScanFace,
    title: "Technician Identity Verification",
    description: "Support verification of the technician associated with a maintenance activity.",
  },
  {
    icon: TimerReset,
    title: "Time-Stamped Work Evidence",
    description: "Maintain camera-based evidence of recognized maintenance activities for review and verification.",
  },
  {
    icon: BadgeCheck,
    title: "Skipped Task & Deviation Alerts",
    description: "Highlight tasks that are skipped, unverified, or inconsistent with scheduled maintenance requirements.",
  },
];

export default function AiMaintenanceVerificationSection() {
  return (
    <section className="border-b border-white/[0.08] bg-[#0a0a0a] px-[5%] pb-16 pt-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1728px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-[8%]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a9fa0]">
            AI-Based Maintenance Verification
          </p>
          <h2 className="mt-4 text-[clamp(36px,4.7vw,56px)] font-extrabold leading-[1.08] tracking-[-0.025em] text-white">
            Beyond Maintenance Logs. <span className="text-[#1a9fa0]">Verify the Work That Matters.</span>
          </h2>
          <p className="site-section-description mt-6 max-w-[680px]">
            Move beyond self-reported maintenance records with camera-based verification of physical maintenance activities. The proposed AI system recognizes performed tasks, associates them with time-stamped evidence, and supports verification against scheduled maintenance requirements.
          </p>
        </div>

        <div className="grid gap-px bg-white/[0.08] sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <article className="min-h-[210px] bg-[#0d1213] p-6 transition-colors duration-300 hover:bg-[#10191a] sm:p-7">
                <Icon aria-hidden="true" className="h-6 w-6 text-[#22c4c5]" strokeWidth={1.7} />
                <h3 className="site-card-title mt-6">{title}</h3>
                <p className="site-card-description mt-3">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
