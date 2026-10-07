import React, { useState } from "react";
import { ArrowRight, Gauge, Image, RadioTower, Waypoints } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const controls = [
  {
    id: "tds",
    number: "01",
    shortTitle: "TDS Control",
    title: "Top Drive System (TDS) Control",
    icon: Gauge,
    description:
      "FutuDrill Control provides a dedicated control solution for top drive equipment, developed around the top drive interfaces and control requirements included in the project.",
    scope: [
      ["Top Drive Interface", "Configured around the top drive control requirements defined for the project."],
      ["Equipment Integration", "Developed around the top drive interfaces included in the project scope."],
      ["Rig Configuration", "Aligned with operator requirements, rig layout, and the defined control scope."],
    ],
    image:
      process.env.PUBLIC_URL +
      "/Oil%20Rig%20Machinery%20Under%20Blue%20Skies.png",
    imageAlt: "Top drive system suspended above the drilling rig floor",
  },
  {
    id: "catwalk",
    number: "02",
    shortTitle: "Catwalk Control",
    title: "Catwalk Control",
    icon: Waypoints,
    description:
      "FutuDrill Control provides a dedicated control solution for catwalk equipment, developed around tubular-transfer operation, operator requirements, and the catwalk interfaces included in the project.",
    scope: [
      ["Catwalk Operator Control", "Configured around the operator requirements defined for catwalk operation."],
      ["Pipe-Transfer Interface", "Developed around the catwalk equipment interfaces included in the project."],
      ["Layout Configuration", "Aligned with the rig layout and the defined catwalk control scope."],
    ],
    image:
      process.env.PUBLIC_URL +
      "/Oilfield%20Pipe%20Ramp%20Operations.png",
    imageAlt: "Drilling catwalk transferring tubulars toward the rig floor",
  },
  {
    id: "ir",
    number: "03",
    shortTitle: "IR Controls",
    title: "IR Controls",
    icon: RadioTower,
    description:
      "FutuDrill Control provides dedicated control solutions for IR equipment, configured around the equipment interfaces and control requirements defined within the project scope.",
    scope: [
      ["IR Control Interface", "Configured around the operator and IR control requirements in scope."],
      ["Defined Interfaces", "Developed around the IR equipment interfaces included in the project."],
      ["Project-Specific Setup", "Aligned with the rig layout and the defined IR control scope."],
    ],
    image:
      process.env.PUBLIC_URL +
      "/Drilling%20Rig%20Console%20in%20Action.png",
    imageAlt: "Operator using an industrial control console on the drilling rig floor",
  },
];

export default function RigEquipmentControlsSection() {
  const [activeId, setActiveId] = useState("tds");
  const activeControl = controls.find((control) => control.id === activeId);
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-y border-white/[0.08] bg-[#03080a] px-[5%] py-16 font-['Manrope'] lg:py-20">
      <div className="relative mx-auto w-full max-w-[1728px] overflow-hidden border border-[#244047]/80 bg-[#061014] lg:min-h-[560px]">
        <div
          className="absolute inset-0 hidden lg:block lg:left-[42%]"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 24%, black 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 24%, black 100%)",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
          {activeControl.image ? (
            <motion.img
              key={activeControl.id}
              src={activeControl.image}
              alt={activeControl.imageAlt}
              className="h-full w-full object-cover object-center"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-[linear-gradient(rgba(34,196,197,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.035)_1px,transparent_1px)] bg-[size:40px_40px]">
              <div className="text-center">
                <Image aria-hidden="true" className="mx-auto h-9 w-9 text-[#22c4c5]/70" strokeWidth={1.5} />
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  {activeControl.shortTitle} Image
                </p>
              </div>
            </div>
          )}
          </AnimatePresence>
        </div>

        <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#061014_0%,#061014_34%,rgba(6,16,20,0.96)_43%,rgba(6,16,20,0.55)_54%,rgba(6,16,20,0.14)_66%,transparent_78%)] lg:block" />

        <div className="relative z-10 px-6 py-10 sm:px-10 lg:min-h-[560px] lg:px-[4%] lg:py-10">
          <div className="lg:max-w-[520px]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#22c4c5]">
                Rig Equipment Controls
              </p>
              <h2 className="mt-4 text-[clamp(32px,3.2vw,46px)] font-extrabold leading-[1.05] tracking-[-0.025em] text-white">
                <span className="lg:whitespace-nowrap">Control Solutions</span><br />
                for <span className="text-[#22c4c5]">Key Rig Equipment.</span>
              </h2>
              <p className="mt-4 max-w-[500px] text-[15px] font-light leading-[1.75] text-white/55 sm:text-[16px]">
               FutuDrill Control provides project-configured control solutions for TDS, catwalk, and IR equipment, developed around equipment interfaces, operator requirements, and rig layout.
              </p>
            </div>

            <div className="mt-9 grid w-full grid-cols-3 overflow-hidden border border-[#24535a] bg-[#061014]/90 lg:absolute lg:bottom-10 lg:left-[4%] lg:block lg:w-[20%] lg:max-w-none">
              {controls.map(({ id, shortTitle, icon: Icon }) => {
                const isActive = id === activeId;

                return (
                  <button
                    type="button"
                    key={id}
                    onClick={() => setActiveId(id)}
                    className={`group flex min-w-0 items-center justify-center gap-2 border-0 border-r border-white/[0.09] px-2 py-3 text-center font-['Manrope'] transition-all last:border-r-0 lg:w-full lg:justify-start lg:gap-4 lg:border-b lg:border-r-0 lg:px-5 lg:py-4 lg:text-left lg:last:border-b-0 ${
                      isActive
                        ? "bg-[#08333a]/90 text-white shadow-[inset_3px_0_0_#22c4c5,0_0_24px_rgba(34,196,197,0.1)]"
                        : "bg-[#061014]/85 text-white/65 hover:bg-white/[0.035] hover:text-white"
                    }`}
                  >
                    <Icon aria-hidden="true" className={`hidden h-5 w-5 shrink-0 sm:block ${isActive ? "text-[#22c4c5]" : "text-white/35"}`} strokeWidth={1.6} />
                    <span className="min-w-0 text-[10px] font-bold leading-tight sm:text-[12px] lg:flex-1 lg:text-[14px]">{shortTitle}</span>
                    <span className={`hidden h-6 w-6 place-items-center rounded-full border lg:grid ${isActive ? "border-[#22c4c5] text-[#22c4c5]" : "border-white/15 text-white/30"}`}>
                      <ArrowRight aria-hidden="true" className="h-3 w-3" strokeWidth={1.7} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
          <motion.div
              key={activeControl.id}
              initial={reduceMotion ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="mt-8 w-full border border-[#2a5960]/65 bg-[linear-gradient(90deg,rgba(6,18,22,0.97)_0%,rgba(6,18,22,0.9)_60%,rgba(6,18,22,0.58)_100%)] p-6 sm:p-7 lg:absolute lg:bottom-0 lg:left-[25%] lg:mt-0 lg:w-[53%] lg:max-w-none"
          >
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#22c4c5]">
                {activeControl.number} / 03
              </p>
              <h3 className="mt-3 text-[clamp(22px,1.8vw,30px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
                {activeControl.title}
              </h3>
              <p className="mt-3 max-w-[680px] text-[13px] font-light leading-[1.65] text-white/60 sm:text-[14px]">
                {activeControl.description}
              </p>

              <div className="mt-5 grid gap-5 border-t border-white/[0.09] pt-5 sm:grid-cols-3">
                {activeControl.scope.map(([title, description], index) => (
                  <div key={title}>
                    <span className="text-[10px] font-semibold tracking-[0.12em] text-[#1a9fa0]">0{index + 1}</span>
                    <p className="mt-2 text-[13px] font-bold text-white/90">{title}</p>
                    <p className="mt-1.5 text-[11px] font-light leading-[1.5] text-white/45">{description}</p>
                  </div>
                ))}
              </div>
          </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
