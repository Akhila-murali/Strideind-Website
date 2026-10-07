import React from "react";
import { Building2, Headphones, Laptop, PhoneForwarded } from "lucide-react";
import Reveal from "../common/Reveal";

const capabilities = [
  {
    icon: PhoneForwarded,
    number: "01",
    title: "Connected Business Calling",
    description:
      "Make and receive business calls through a shared communication environment built around the team's daily workflow.",
  },
  {
    icon: Headphones,
    number: "02",
    title: "Desk Phone Access",
    description:
      "Keep familiar desk-phone communication available for employees, departments, and fixed work locations.",
  },
  {
    icon: Laptop,
    number: "03",
    title: "Desktop Calling",
    description:
      "Extend voice communication to supported desktop calling applications for greater device flexibility.",
  },
  {
    icon: Building2,
    number: "04",
    title: "Internal Extension Network",
    description:
      "Organize team communication through connected extensions that make colleagues and departments easier to reach.",
  },
];

export default function StridePabxCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-[5%] py-16 font-['Manrope'] lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(34,196,197,0.07),transparent_32%)]" />

      <div className="relative mx-auto w-full max-w-[1728px]">
        <Reveal>
          <div className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">
                Communication Capabilities
              </p>
              <h2 className="mt-5 text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
                Everyday Communication.<br />
                <span className="text-[#1a9fa0]">One Connected System.</span>
              </h2>
            </div>

            <p className="max-w-[620px] border-l border-white/10 pl-5 text-[14px] font-light leading-[1.8] text-white/55 sm:text-[16px] lg:justify-self-end">
              StridePABX creates a consistent calling experience across the
              devices and extensions teams use throughout the working day,
              helping communication remain organized, accessible, and easier
              to manage.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid border-l border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, number, title, description }, index) => (
            <Reveal key={number} delay={index * 0.08}>
              <article className="min-h-[245px] border-b border-r border-white/[0.08] bg-[#0d1214] p-7 transition-colors duration-300 hover:bg-[#0f191c] sm:p-8">
                <Icon aria-hidden="true" className="h-7 w-7 text-[#22c4c5]" strokeWidth={1.6} />
                <h3 className="mt-10 text-[17px] font-bold leading-tight text-white">{title}</h3>
                <p className="mt-4 text-[13px] font-light leading-[1.7] text-white/50">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
