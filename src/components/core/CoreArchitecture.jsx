import React from "react";
import {
  BarChart3,
  Bell,
  Cloud,
  Layers3,
  Monitor,
  RadioTower,
  Server,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "../common/Reveal";

const architectureData = {
  eyebrow: "PLATFORM ARCHITECTURE",
  title: (
    <>
      A Unified Platform<br />
      for <span className="text-[var(--teal-light)]">Complete Visibility</span>
    </>
  ),
  description:
    "FutuDrill Core integrates with rig sensors, control systems and enterprise tools to provide a seamless flow of data from acquisition to visualization, all within the FutuDrill platform.",
  inputs: [
    { icon: RadioTower, label: "Rig Sensors\n& Equipment" },
    { icon: Server, label: "Control Systems" },
    { icon: Layers3, label: "Third-Party\nSystems" },
  ],
  outputs: [
    { icon: Monitor, label: "Operator\nDashboards" },
    { icon: Bell, label: "Alerts &\nNotifications" },
    { icon: BarChart3, label: "Reports &\nAnalytics" },
    { icon: Cloud, label: "Onshore\nIntegration" },
  ],
};

export default function CoreArchitecture({ visualOnly = false }) {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const lineMotion = reduceMotion ? false : { pathLength: 0, opacity: 0.25 };

  return (
    <section className={visualOnly ? "bg-transparent font-['Manrope']" : "bg-transparent px-4 pb-0 pt-10 font-['Manrope'] sm:px-7 lg:px-8 lg:pb-0 lg:pt-12"}>
      <div className={visualOnly ? "relative w-full" : "relative mx-auto w-full max-w-[1700px] overflow-hidden rounded-[26px] border border-[#0b2428] bg-[radial-gradient(circle_at_58%_38%,rgba(0,115,124,0.14),transparent_33%),linear-gradient(115deg,#020708_0%,#031013_62%,#020708_100%)] px-6 py-12 shadow-[inset_0_0_70px_rgba(0,0,0,0.45)] sm:px-9 lg:min-h-[480px] lg:px-[4%] lg:py-[72px]"}>


        <div className={visualOnly ? "block" : "grid items-center gap-12 xl:grid-cols-[0.7fr_1.3fr] xl:gap-[3%]"}>
          <Reveal className={visualOnly ? "hidden" : "max-w-[560px]"} direction="left">
            <p className="mb-4 text-[12px] font-semibold tracking-[0.12em] text-[var(--teal-light)]">{architectureData.eyebrow}</p>
            <h2 className="m-0 text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              {architectureData.title}
            </h2>
            <p className="site-section-description mt-6 max-w-[540px]">
              {architectureData.description}
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.08}>
          <div>
            <div className={visualOnly ? "hidden" : "relative hidden overflow-hidden rounded-[24px] border border-[#0b3035] bg-[linear-gradient(180deg,#031114_0%,#020b0d_100%)] px-3 pb-5 pt-4 shadow-[inset_0_-2px_0_rgba(255,255,255,0.08),0_12px_28px_rgba(0,0,0,0.45)] max-[480px]:block"}>
              <div className="pointer-events-none absolute bottom-8 left-1/2 top-12 w-px -translate-x-1/2 bg-[var(--teal-light)]/65 shadow-[0_0_8px_var(--teal-light)]" />

              <p className="relative mb-2 text-[8px] font-semibold uppercase tracking-[0.3em] text-[var(--teal-light)]">Input Systems</p>
              <div className="relative space-y-2.5">
                {architectureData.inputs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="relative z-10 flex min-h-[46px] items-center justify-center gap-3 rounded-[8px] border border-[var(--teal)] bg-[#06171b] px-3 shadow-[inset_0_0_15px_var(--teal-dim)]">
                      <Icon aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 shrink-0 text-[var(--teal-light)]" />
                      <span className="whitespace-nowrap text-[9px] font-medium leading-[1.3] text-white/85">{item.label.replace("\n", " ")}</span>
                      <span className="absolute -bottom-[8px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--teal-light)] shadow-[0_0_8px_var(--teal-light)]" />
                    </div>
                  );
                })}
              </div>

              <div className="relative z-10 mx-auto my-5 flex min-h-[82px] w-[78%] flex-col items-center justify-center rounded-[12px] border border-[var(--teal-light)] bg-[#082028] text-center shadow-[0_0_16px_var(--teal-glow),inset_0_0_18px_var(--teal-dim)] before:absolute before:inset-[4px] before:rounded-[8px] before:border before:border-[var(--teal-dark)]/70">
                <Monitor aria-hidden="true" strokeWidth={1.7} className="relative h-8 w-8 text-[var(--teal-light)]" />
                <strong className="relative mt-1.5 text-[13px] text-white">FutuDrill Core</strong>
                <span className="absolute -bottom-[8px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--teal-light)] shadow-[0_0_8px_var(--teal-light)]" />
              </div>

              <p className="relative mb-2 text-[8px] font-semibold uppercase tracking-[0.3em] text-[var(--teal-light)]">Platform Outputs</p>
              <div className="relative space-y-2.5">
                {architectureData.outputs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="relative z-10 flex min-h-[46px] items-center justify-center gap-3 rounded-[8px] border border-[var(--teal)] bg-[#06171b] px-3 shadow-[inset_0_0_15px_var(--teal-dim)]">
                      <Icon aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 shrink-0 text-[var(--teal-light)]" />
                      <span className="whitespace-nowrap text-[9px] font-medium leading-[1.3] text-white/85">{item.label.replace("\n", " ")}</span>
                      {index < architectureData.outputs.length - 1 && <span className="absolute -bottom-[8px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--teal-light)] shadow-[0_0_8px_var(--teal-light)]" />}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={visualOnly ? "core-hero-responsive-architecture relative block px-1 py-4 sm:px-3 xl:hidden" : "hidden"}>
              <div className="relative z-10 mx-auto grid w-full max-w-[520px] grid-cols-3 gap-3">
                {architectureData.inputs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex min-w-0 flex-col items-center text-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#072126]">
                        <Icon aria-hidden="true" strokeWidth={1.7} className="h-7 w-7 text-[var(--teal-light)]" />
                      </span>
                      <span className="mt-2 whitespace-pre-line text-[10px] font-semibold leading-[1.3] text-white/90 sm:text-[11px]">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              <svg aria-hidden="true" className="relative z-0 mx-auto block h-[72px] w-full max-w-[520px] overflow-visible" viewBox="0 0 1000 120" preserveAspectRatio="none">
                <g fill="none" stroke="var(--teal-light)" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M167 0V50Q167 70 192 70H475Q500 70 500 95V120" />
                  <path d="M500 0V120" />
                  <path d="M833 0V50Q833 70 808 70H525Q500 70 500 95V120" />
                </g>
                <g fill="var(--teal-light)" className="[filter:drop-shadow(0_0_6px_var(--teal-light))]">
                  <circle cx="167" cy="2" r="6" />
                  <circle cx="500" cy="2" r="6" />
                  <circle cx="833" cy="2" r="6" />
                  <circle cx="500" cy="118" r="6" />
                </g>
              </svg>

              <div className="relative z-10 mx-auto mb-0 flex min-h-[114px] w-[210px] flex-col items-center justify-center rounded-[10px] border border-[var(--teal-light)] bg-[#082027] text-center shadow-[0_0_18px_var(--teal-glow),inset_0_0_16px_var(--teal-dim)]">
                <Monitor aria-hidden="true" strokeWidth={1.7} className="h-9 w-9 text-[var(--teal-light)]" />
                <strong className="mt-2 text-[15px] font-bold text-white">FutuDrill Core</strong>
                <span className="absolute -bottom-[8px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--teal-light)] shadow-[0_0_8px_var(--teal-light)]" />
              </div>

              <svg aria-hidden="true" className="relative z-0 mx-auto block h-[72px] w-full max-w-[520px] overflow-visible" viewBox="0 0 1000 120" preserveAspectRatio="none">
                <g fill="none" stroke="var(--teal-light)" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M500 0V22Q500 42 470 42H150Q125 42 125 68V120" />
                  <path d="M500 0V42H400Q375 42 375 68V120" />
                  <path d="M500 0V42H600Q625 42 625 68V120" />
                  <path d="M500 0V22Q500 42 530 42H850Q875 42 875 68V120" />
                </g>
                <g fill="var(--teal-light)" className="[filter:drop-shadow(0_0_6px_var(--teal-light))]">
                  <circle cx="500" cy="2" r="6" />
                  <circle cx="125" cy="118" r="6" />
                  <circle cx="375" cy="118" r="6" />
                  <circle cx="625" cy="118" r="6" />
                  <circle cx="875" cy="118" r="6" />
                </g>
              </svg>

              <div className="relative z-10 mx-auto grid w-full max-w-[520px] grid-cols-4 gap-2">
                {architectureData.outputs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="relative flex min-w-0 flex-col items-center text-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#072126]">
                        <Icon aria-hidden="true" strokeWidth={1.7} className="h-7 w-7 text-[var(--teal-light)]" />
                      </span>
                      <span className="mt-2 whitespace-pre-line text-[10px] font-semibold leading-[1.3] text-white/90 sm:text-[11px]">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={visualOnly ? "relative hidden aspect-[2.72/1] w-full xl:block" : "relative block aspect-[1.9/1] w-full max-[480px]:hidden sm:aspect-[2.2/1] md:aspect-[2.72/1]"}>
              <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 1000 368" preserveAspectRatio="none">
                <g fill="none" stroke="var(--teal-light)" strokeWidth="2">
                  {[
                    "M270 64 H290 Q320 64 320 94 V130 Q320 158 370 158",
                    "M270 186 H370",
                    "M270 307 H290 Q320 307 320 277 V238 Q320 210 370 210",
                    "M600 158 H610 Q635 158 635 128 V57 Q635 37 690 37",
                    "M600 175 H625 Q660 175 660 151 Q660 131 690 131",
                    "M600 193 H625 Q660 193 660 205 Q660 225 690 225",
                    "M600 210 H610 Q635 210 635 299 Q635 319 690 319",
                  ].map((path, index) => (
                    <React.Fragment key={path}>
                    <motion.path
                      d={path}
                      initial={lineMotion}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: false, amount: 0.4 }}
                      transition={{ duration: 0.7, delay: 0.22 + index * 0.06, ease: "easeOut" }}
                    />
                    {visualOnly && <path className="core-hero-flow" d={path} pathLength="100" style={{ animationDelay: `${index * -0.6}s` }} />}
                    </React.Fragment>
                  ))}
                </g>
              </svg>

              <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 h-full w-full" viewBox="0 0 1000 368" preserveAspectRatio="none">
                <defs>
                  <filter id="core-node-glow" x="-250%" y="-250%" width="600%" height="600%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <g fill="var(--teal-light)" filter="url(#core-node-glow)">
                  <circle cx="270" cy="64" r="6" /><circle cx="270" cy="186" r="6" /><circle cx="270" cy="307" r="6" />
                  <circle cx="370" cy="158" r="6" /><circle cx="370" cy="184" r="6" /><circle cx="370" cy="210" r="6" />
                  <circle cx="600" cy="158" r="6" /><circle cx="600" cy="175" r="6" /><circle cx="600" cy="193" r="6" /><circle cx="600" cy="210" r="6" />
                  <circle cx="690" cy="37" r="6" /><circle cx="690" cy="131" r="6" /><circle cx="690" cy="225" r="6" /><circle cx="690" cy="319" r="6" />
                </g>
              </svg>

              {architectureData.inputs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="absolute left-0 z-10 flex h-[29%] w-[27%] items-center gap-5 rounded-[10px] bg-[#071519]/80 px-2 text-white/85 sm:px-3 xl:px-5" style={{ top: `${[3, 35.5, 68][index]}%`, border: "1px solid var(--teal)" }}>
                    <Icon aria-hidden="true" strokeWidth={1.65} className="hidden h-[34px] w-[34px] shrink-0 text-[var(--teal-light)] xl:block" />
                    <span className="whitespace-pre text-[10px] font-medium leading-[1.2] sm:text-[11px] md:whitespace-normal md:text-[14px] md:leading-[1.3] xl:text-[16px] xl:leading-[1.35]">{item.label}</span>
                  </div>
                );
              })}

              <div className="absolute left-[37%] top-[27%] z-10 flex h-[46%] w-[23%] flex-col items-center justify-center rounded-[12px] bg-[#082027] text-center" style={{ border: "3px solid var(--teal-light)", boxShadow: "0 0 18px var(--teal-glow), inset 0 0 12px var(--teal-dim)" }}>
                <Monitor aria-hidden="true" strokeWidth={1.7} className="h-7 w-7 text-[var(--teal-light)] sm:h-9 sm:w-9 md:h-12 md:w-12" />
                <strong className="mt-1 whitespace-nowrap text-[8px] text-white sm:mt-2 sm:text-[11px] md:mt-3 md:text-[15px] xl:text-[18px]">FutuDrill Core</strong>
              </div>

              {architectureData.outputs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="absolute left-[69%] z-10 flex h-[22%] w-[31%] items-center gap-5 rounded-[10px] bg-[#071519]/80 px-2 text-white/85 sm:px-3 xl:px-5" style={{ top: `${index * 25.5}%`, border: "1px solid var(--teal)" }}>
                    <Icon aria-hidden="true" strokeWidth={1.65} className="hidden h-[34px] w-[34px] shrink-0 text-[var(--teal-light)] xl:block" />
                    <span className="whitespace-pre text-[10px] font-medium leading-[1.2] sm:text-[11px] md:whitespace-normal md:text-[14px] md:leading-[1.3] xl:text-[16px] xl:leading-[1.35]">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
