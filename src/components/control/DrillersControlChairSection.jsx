import React from "react";
import { Armchair, PanelsTopLeft, PlugZap, SlidersHorizontal } from "lucide-react";

const details = [
  {
    icon: PanelsTopLeft,
    title: "Operator Interface",
    description: "Configured around operator requirements and crew workflows.",
  },
  {
    icon: PlugZap,
    title: "Equipment Interfaces",
    description: "Developed around the rig equipment interfaces included in the project.",
  },
  {
    icon: SlidersHorizontal,
    title: "Control Layout",
    description: "Arranged around the rig layout and project control requirements.",
  },
];

export default function DrillersControlChairSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-transparent px-[5%] py-16 font-['Manrope'] lg:py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] bg-[radial-gradient(circle,rgba(34,196,197,0.09),transparent_68%)]" />

      <div className="relative mx-auto grid w-full max-w-[1728px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-[8%]">
        <div>
          <div className="flex items-center gap-3 text-[#22c4c5]">
            <Armchair aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em]">
              Operator Control
            </p>
          </div>

          <h2 className="mt-5 text-[clamp(34px,4.2vw,58px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white">
            Driller's Control Chair.<br />
            <span className="text-[#22c4c5]">Built Around the Operator.</span>
          </h2>

          <p className="site-section-description mt-6 max-w-[650px]">
            FutuDrill Control provides driller's control chair solutions configured around the rig's equipment interfaces, operator requirements, and control layout.
          </p>
        </div>

        <div className="overflow-hidden rounded-[10px] border border-[#244047]/80 bg-[#08161a]/90">
          <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5 sm:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
              Control Chair Configuration
            </p>
            <span className="h-2 w-2 rounded-full bg-[#22c4c5] shadow-[0_0_14px_rgba(34,196,197,0.7)]" />
          </div>

          <div className="divide-y divide-white/[0.08]">
            {details.map(({ icon: Icon, title, description }, index) => (
              <article
                className="group grid gap-5 px-6 py-7 sm:grid-cols-[56px_1fr_auto] sm:items-center sm:px-8"
                key={title}
              >
                <span className="grid h-12 w-12 place-items-center rounded-[6px] border border-[#22c4c5]/30 bg-[#22c4c5]/[0.07] text-[#22c4c5] transition-colors group-hover:border-[#22c4c5]/60 group-hover:bg-[#22c4c5]/10">
                  <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.65} />
                </span>
                <div>
                  <h3 className="text-[18px] font-bold text-white">{title}</h3>
                  <p className="site-card-description mt-2">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
