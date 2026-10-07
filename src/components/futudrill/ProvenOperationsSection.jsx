import React from "react";
import Reveal from "../common/Reveal";

const stats = [
  { value: "24/7", label: "Monitoring" },
  { value: "100+", label: "Parameters" },
  { value: "Multiple", label: "Rig Types" },
  { value: "High", label: "Reliability" },
];

export default function ProvenOperationsSection() {
  return (
    <section className="bg-transparent px-[5%] py-16 lg:py-20">
      <div className="relative mx-auto w-full max-w-[1728px] overflow-hidden bg-transparent lg:min-h-[430px]">
        <img
          src={`${process.env.PUBLIC_URL}/Twilight%20Oil%20Rig%20Over%20Mountain%20Horizon.png`}
          alt="Oil rig at twilight over a mountain horizon"
          className="absolute inset-y-0 right-0 hidden h-full w-[46%] object-cover object-center lg:block lg:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.35)_18%,black_42%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.35)_18%,black_42%)]"
        />
        <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#0a0a0a_0%,#0a0a0a_47%,rgba(10,10,10,0.88)_58%,rgba(10,10,10,0.12)_100%)] lg:block" />

        <div className="relative z-10 grid items-center gap-10 px-0 pb-8 lg:min-h-[430px] lg:grid-cols-[1fr_0.78fr_1fr] lg:px-[4%] lg:py-12">
          <Reveal className="max-w-[570px]" direction="left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">Trusted in the Field</p>
            <h2 className="mt-4 text-[clamp(36px,4vw,56px)] font-extrabold leading-[1.06] tracking-[-0.025em] text-white">
              Proven in Real<br /><span className="text-[#22c4c5]">Operations</span>
            </h2>
            <p className="mt-6 max-w-[550px] text-[14px] font-light leading-[1.8] text-white/55 sm:text-[16px]">
   FutuDrill is an integrated digital drilling platform that brings monitoring, connectivity, analytics, automation, and operational intelligence into one connected environment. It helps drilling teams access critical data, connect field systems, monitor performance, improve coordination between field and office operations, and make faster, more informed decisions across the drilling lifecycle.
            </p>
          </Reveal>

          <Reveal className="hidden grid-cols-2 gap-3 lg:grid" delay={0.1}>
            {stats.map((stat) => (
              <div key={stat.label} className="flex min-h-[108px] flex-col justify-center rounded-[5px] border border-white/[0.05] bg-[#10191d]/95 px-6 backdrop-blur-md">
                <strong className="text-[clamp(22px,2vw,30px)] font-extrabold leading-none text-[#22c4c5]">{stat.value}</strong>
                <span className="mt-3 text-[12px] font-light text-white/55 sm:text-[14px]">{stat.label}</span>
              </div>
            ))}
          </Reveal>

          <div className="hidden min-h-[330px] lg:block" aria-label="Drilling rig image placeholder" />
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/Twilight%20Oil%20Rig%20Over%20Mountain%20Horizon.png`}
          alt="Oil rig at twilight over a mountain horizon"
          className="h-[300px] w-full object-cover object-center lg:hidden"
        />
      </div>
    </section>
  );
}
