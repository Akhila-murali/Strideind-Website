import React from "react";
import { Armchair, Link2, Monitor, Settings } from "lucide-react";
import Reveal from "../common/Reveal";

const features = [
  {
    icon: Settings,
    title: "Rig-Specific Configuration",
    description: "Designed for each rig's layout and control requirements.",
  },
  {
    icon: Monitor,
    title: "Operator Interfaces",
    description: "HMI, joysticks, switches, and essential information at one workstation.",
  },
  {
    icon: Link2,
    title: "Equipment Integration",
    description: "Connected to rig equipment and automation systems.",
  },
  {
    icon: Armchair,
    title: "Operator-Centered Design",
    description: "Organized for comfortable and efficient operation.",
  },
];

export default function DrillersControlChairSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-[#03090b] px-[4%] pb-4 pt-14 font-['Manrope'] sm:py-16 lg:px-[3%] lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,196,197,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.018)_1px,transparent_1px)] bg-[size:54px_54px]" />

      <div className="relative mx-auto w-full max-w-[1728px]">
        <div className="grid items-center gap-8 lg:min-h-[465px] lg:grid-cols-[38%_62%] lg:items-start lg:gap-0">
          <Reveal>
            <div className="relative z-10 lg:pl-[5%]">
              <div className="flex items-center gap-3 text-[#22c4c5]">
                <Armchair aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                <p className="text-[12px] font-bold uppercase tracking-[0.16em]">
                  Driller's Control Chair
                </p>
              </div>

              <h2 className="mt-5 text-[clamp(36px,4vw,56px)] font-extrabold leading-[1.08] tracking-[-0.035em] text-white">
                Configured for<br />
                <span className="text-[#22c4c5]">Real Rig Operations.</span>
              </h2>

              <p className="site-section-description mt-6 max-w-[540px] text-white/60">
                We design and integrate driller's control chair solutions that bring together operator interfaces, equipment controls, and essential information into a unified workstation — tailored for each rig's layout, equipment configuration, and operational requirements.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative mx-auto w-full max-w-[850px] lg:w-[84%]">
              <div className="pointer-events-none absolute inset-[10%] rounded-full bg-[#087a8e]/15 blur-[70px]" />
              <div
                className="relative"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 88% 88% at 54% 48%, black 62%, transparent 100%)",
                  maskImage:
                    "radial-gradient(ellipse 88% 88% at 54% 48%, black 62%, transparent 100%)",
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/Futuristic%20Dual-Monitor%20Operator%20Workstation.png"}
                  alt="Industrial operator workstation with dual monitors and integrated control consoles"
                  className="h-auto w-full object-contain"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(3,9,11,0.5),transparent_18%,transparent_82%,rgba(3,9,11,0.42))]" />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="relative z-20 mt-8 grid overflow-hidden rounded-[8px] border border-[#22c4c5]/35 bg-[#041115]/95 shadow-[0_20px_55px_rgba(0,0,0,0.32)] sm:grid-cols-2 lg:mt-0 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }, index) => (
              <article
                className={`group flex min-h-[150px] gap-5 p-6 transition-colors hover:bg-[#07191d] sm:p-7 ${
                  index > 0 ? "border-t border-white/[0.08] sm:border-t-0 sm:border-l" : ""
                } ${index === 2 ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0" : ""}`}
                key={title}
              >
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 h-7 w-7 shrink-0 text-[#22c4c5]"
                  strokeWidth={1.7}
                />
                <div>
                  <h3 className="site-card-title text-white">{title}</h3>
                  <p className="site-card-description mt-2 text-white/55">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
