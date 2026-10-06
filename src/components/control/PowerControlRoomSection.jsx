import React from "react";
import { Monitor, PanelsTopLeft, Zap } from "lucide-react";

const scope = [
  {
    icon: Zap,
    title: "Electrical Equipment",
    description: "Configured around the electrical equipment included in the project.",
  },
  {
    icon: Monitor,
    title: "Operator Interfaces",
    description: "Developed around the project's operator and control requirements.",
  },
  {
    icon: PanelsTopLeft,
    title: "Room Configuration",
    description: "Arranged around the available layout and defined project scope.",
  },
];

export default function PowerControlRoomSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#071013] px-[5%] py-16 font-['Manrope'] lg:py-24">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[520px] w-[520px] bg-[radial-gradient(circle,rgba(34,196,197,0.08),transparent_68%)]" />

      <div className="relative mx-auto grid w-full max-w-[1728px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-[7%]">
        <div className="relative min-h-[430px] overflow-hidden rounded-[10px] border border-[#244047]/80 bg-[#09161a] lg:min-h-[600px]">
          <img
            src={process.env.PUBLIC_URL + "/Industrial%20Rig%20Control%20Room.png"}
            alt="Operator working inside an industrial drilling rig power control room"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061014]/65 via-transparent to-black/15" />
          <div className="absolute left-6 top-6 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
            Power Control Room
          </div>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#22c4c5]">
            Electrical Control
          </p>
          <h2 className="mt-5 text-[clamp(34px,4.2vw,58px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white">
            Power Control Room.<br />
            <span className="text-[#22c4c5]">Control for Rig Electrical Equipment.</span>
          </h2>
          <p className="mt-6 max-w-[680px] text-[14px] font-light leading-[1.8] text-white/55 sm:text-[16px]">
            FutuDrill Control provides power control room solutions designed around the rig's electrical equipment, operator interfaces, layout, and project requirements.
          </p>

          <div className="mt-10 divide-y divide-white/[0.09] border-y border-white/[0.09]">
            {scope.map(({ icon: Icon, title, description }, index) => (
              <article className="grid gap-4 py-6 sm:grid-cols-[44px_1fr_auto] sm:items-center" key={title}>
                <Icon aria-hidden="true" className="h-6 w-6 text-[#22c4c5]" strokeWidth={1.65} />
                <div>
                  <h3 className="text-[17px] font-bold text-white">{title}</h3>
                  <p className="mt-2 text-[13px] font-light leading-[1.65] text-white/45">{description}</p>
                </div>
         
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
