import React from "react";
import HorizontalScroll from "./HorizontalScroll";
import Reveal from "./Reveal";

export default function ScrollSection({
  label,
  heading,
  description,
  capabilities,
  sectionClassName = "py-16 lg:py-24",
  scrollAmount = 390,
}) {
  return (
    <section className={`relative overflow-hidden bg-[#0a0a0a] font-['Manrope'] ${sectionClassName}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(34,196,197,0.07),transparent_32%)]" />
      <div className="relative mx-auto w-full max-w-[1920px] px-[5%]">
        <Reveal>
          <div className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">{label}</p>
              <h2 className="mt-5 text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">{heading}</h2>
            </div>
            <p className="site-section-description max-w-[620px] lg:justify-self-end lg:border-l lg:border-white/10 lg:pl-5">{description}</p>
          </div>
        </Reveal>
      </div>
      <div className="relative mt-12">
        <HorizontalScroll scrollAmount={scrollAmount}>
          {capabilities.map(({ icon: Icon, title, description: cardDescription, features }) => (
            <article className="group flex min-h-[470px] w-[370px] shrink-0 flex-col border border-white/[0.09] bg-[#0d1214] p-7 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[#1a9fa0]/55 hover:bg-[#10191b] max-sm:min-h-[450px] max-sm:w-[310px] max-sm:p-6" key={title}>
              <div className="flex h-12 w-12 items-center justify-center border border-[#1a9fa0]/30 bg-[#1a9fa0]/[0.08] text-[#22c4c5] transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(34,196,197,0.2)]">
                <Icon aria-hidden="true" size={23} strokeWidth={1.7} />
              </div>
              <h3 className="site-card-title mt-7">{title}</h3>
              <p className="site-card-description mt-4">{cardDescription}</p>
              <div className="mt-8 border-t border-white/[0.08] pt-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">Key Capabilities</p>
                <ul className="space-y-2.5">
                  {features.map((feature) => (
                    <li className="flex items-start gap-3 text-[13px] leading-[1.6] text-white/75" key={feature}>
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-[#1a9fa0]" />{feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
