import React from "react";
import { Boxes, PanelsTopLeft, Settings2 } from "lucide-react";

const capabilities = [
  {
    icon: PanelsTopLeft,
    title: "Custom Control Panels",
    description: "Control panels developed around the equipment and project requirements in scope.",
  },
  {
    icon: Settings2,
    title: "Operator Interfaces",
    description: "Interfaces configured around operator requirements and defined control workflows.",
  },
  {
    icon: Boxes,
    title: "Project-Specific Control Solutions",
    description: "Custom control solutions developed around the specific requirements of the project.",
  },
];

export default function CustomControlsSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-transparent px-[5%] py-16 font-['Manrope'] lg:py-24">
      <div className="relative mx-auto w-full max-w-[1728px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-[8%]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#22c4c5]">
              Project-Specific Controls
            </p>
            <h2 className="mt-5 text-[clamp(34px,4.2vw,58px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white">
              Custom Controls.<br />
              <span className="text-[#22c4c5]">Built Around Your Requirements.</span>
            </h2>
          </div>
          <p className="site-section-description max-w-[760px]">
            FutuDrill Control develops custom control solutions around the equipment, interfaces, and control requirements defined for each project.
          </p>
        </div>

        <div className="mt-12 grid border border-[#244047]/80 bg-[#071216]/80 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <article
              className="group min-h-[280px] border-t border-white/[0.09] p-7 transition-colors first:border-t-0 hover:bg-[#22c4c5]/[0.05] sm:p-9 md:border-l md:border-t-0 md:first:border-l-0"
              key={title}
            >
              <div className="flex items-start gap-6">
                <span className="grid h-12 w-12 place-items-center border border-[#22c4c5]/30 bg-[#22c4c5]/[0.06] text-[#22c4c5]">
                  <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.65} />
                </span>
              </div>
              <h3 className="mt-10 text-[20px] font-bold text-white">{title}</h3>
              <p className="site-card-description mt-4 max-w-[420px]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
