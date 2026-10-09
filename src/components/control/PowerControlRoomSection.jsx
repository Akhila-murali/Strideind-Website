import React from "react";
import { Monitor, PanelsTopLeft, Zap } from "lucide-react";
import Reveal from "../common/Reveal";

const scope = [
  {
    icon: Zap,
    title: "Electrical Equipment",
    description: "The control-room scope is developed around the rig power systems and electrical equipment identified for the project, keeping equipment coverage aligned with defined operating requirements.",
  },
  {
    icon: Monitor,
    title: "Operator Interfaces",
    description: "Operator interfaces are configured around the included equipment, defined control requirements, and crew workflows so personnel can work within a project-specific control environment.",
  },
  {
    icon: PanelsTopLeft,
    title: "Room Configuration",
    description: "The control environment is arranged around the available room layout, equipment interfaces, operator requirements, and the boundaries established within the project scope.",
  },
];

export default function PowerControlRoomSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#071013] px-[5%] py-14 font-['Manrope'] lg:py-16">
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 bg-[radial-gradient(circle,rgba(34,196,197,0.04),transparent_68%)]" />

      <div className="relative mx-auto w-full max-w-[1728px]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-[8%]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#22c4c5]">Electrical Control</p>
              <h2 className="mt-5 text-[clamp(36px,4.2vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
                Power Control Room.<br />
                <span className="text-[#22c4c5]">Control for Rig Electrical Equipment.</span>
              </h2>
            </div>
            <div>
              <p className="site-section-description max-w-[680px]">
                FutuDrill Control provides project-configured power control room solutions for the rig's included electrical equipment and power systems. The control environment is developed around equipment interfaces, operator requirements, crew workflows, available room layout, and the defined project scope.
              </p>
              <div className="mt-8 grid border-y border-white/[0.1] md:grid-cols-3 md:divide-x md:divide-white/[0.1]">
                {scope.map(({ icon: Icon, title, description }) => (
                  <article className="border-b border-white/[0.1] px-4 py-5 last:border-b-0 md:border-b-0 md:px-5 md:first:pl-0 md:last:pr-0" key={title}>
                    <Icon aria-hidden="true" className="h-6 w-6 text-[#22c4c5]" strokeWidth={1.65} />
                    <h3 className="site-card-title mt-4">{title}</h3>
                    <p className="site-card-description mt-2">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
