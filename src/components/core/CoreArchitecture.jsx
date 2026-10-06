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

const architectureData = {
  eyebrow: "PLATFORM ARCHITECTURE",
  title: (
    <>
      A Unified Platform<br />
      for <span className="text-[#13c6cc]">Complete Visibility</span>
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

export default function CoreArchitecture() {
  const navigate = useNavigate();

  return (
    <section className="bg-transparent px-4 pb-0 pt-10 font-['Manrope'] sm:px-7 lg:px-8 lg:pb-0 lg:pt-12">
      <div className="relative mx-auto w-full max-w-[1700px] overflow-hidden rounded-[26px] border border-[#0b2428] bg-[radial-gradient(circle_at_58%_38%,rgba(0,115,124,0.14),transparent_33%),linear-gradient(115deg,#020708_0%,#031013_62%,#020708_100%)] px-6 py-12 shadow-[inset_0_0_70px_rgba(0,0,0,0.45)] sm:px-9 lg:min-h-[480px] lg:px-[4%] lg:py-[72px]">


        <div className="grid items-center gap-12 xl:grid-cols-[0.7fr_1.3fr] xl:gap-[3%]">
          <div className="max-w-[560px]">
            <p className="mb-4 text-[12px] font-semibold tracking-[0.12em] text-[#12bdc4]">{architectureData.eyebrow}</p>
            <h2 className="m-0 text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              {architectureData.title}
            </h2>
            <p className="mt-6 max-w-[540px] text-[13px] font-light leading-[1.85] text-white/50 sm:text-[15px]">
              {architectureData.description}
            </p>
          </div>

          <div>
            <div className="relative hidden overflow-hidden rounded-[24px] border border-[#0b3035] bg-[linear-gradient(180deg,#031114_0%,#020b0d_100%)] px-3 pb-5 pt-4 shadow-[inset_0_-2px_0_rgba(255,255,255,0.08),0_12px_28px_rgba(0,0,0,0.45)] max-[480px]:block">
              <div className="pointer-events-none absolute bottom-8 left-1/2 top-12 w-px -translate-x-1/2 bg-[#12dbe1]/65 shadow-[0_0_8px_#12dbe1]" />

              <p className="relative mb-2 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#36dce1]">Input Systems</p>
              <div className="relative space-y-2.5">
                {architectureData.inputs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="relative z-10 flex min-h-[46px] items-center justify-center gap-3 rounded-[8px] border border-[#08aeb7] bg-[#06171b] px-3 shadow-[inset_0_0_15px_rgba(0,165,175,0.04)]">
                      <Icon aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 shrink-0 text-[#12dbe1]" />
                      <span className="whitespace-nowrap text-[9px] font-medium leading-[1.3] text-white/85">{item.label.replace("\n", " ")}</span>
                      <span className="absolute -bottom-[8px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#4cf5f7] shadow-[0_0_8px_#27e7eb]" />
                    </div>
                  );
                })}
              </div>

              <div className="relative z-10 mx-auto my-5 flex min-h-[82px] w-[78%] flex-col items-center justify-center rounded-[12px] border border-[#15e5eb] bg-[#082028] text-center shadow-[0_0_16px_rgba(16,212,218,0.38),inset_0_0_18px_rgba(16,212,218,0.12)] before:absolute before:inset-[4px] before:rounded-[8px] before:border before:border-[#127b84]/70">
                <Monitor aria-hidden="true" strokeWidth={1.7} className="relative h-8 w-8 text-[#15e8ed]" />
                <strong className="relative mt-1.5 text-[13px] text-white">FutuDrill Core</strong>
                <span className="absolute -bottom-[8px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#4cf5f7] shadow-[0_0_8px_#27e7eb]" />
              </div>

              <p className="relative mb-2 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#36dce1]">Platform Outputs</p>
              <div className="relative space-y-2.5">
                {architectureData.outputs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="relative z-10 flex min-h-[46px] items-center justify-center gap-3 rounded-[8px] border border-[#08aeb7] bg-[#06171b] px-3 shadow-[inset_0_0_15px_rgba(0,165,175,0.04)]">
                      <Icon aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 shrink-0 text-[#12dbe1]" />
                      <span className="whitespace-nowrap text-[9px] font-medium leading-[1.3] text-white/85">{item.label.replace("\n", " ")}</span>
                      {index < architectureData.outputs.length - 1 && <span className="absolute -bottom-[8px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#4cf5f7] shadow-[0_0_8px_#27e7eb]" />}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative block aspect-[1.9/1] w-full max-[480px]:hidden sm:aspect-[2.2/1] md:aspect-[2.72/1]">
              <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 1000 368" preserveAspectRatio="none">
                <g fill="none" stroke="#0ed6dd" strokeWidth="2">
                  <path d="M270 64 H290 Q320 64 320 94 V130 Q320 158 370 158" />
                  <path d="M270 186 H370" />
                  <path d="M270 307 H290 Q320 307 320 277 V238 Q320 210 370 210" />
                  <path d="M600 158 H610 Q635 158 635 128 V57 Q635 37 690 37" />
                  <path d="M600 175 H625 Q660 175 660 151 Q660 131 690 131" />
                  <path d="M600 193 H625 Q660 193 660 205 Q660 225 690 225" />
                  <path d="M600 210 H610 Q635 210 635 299 Q635 319 690 319" />
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
                <g fill="#18e7ed" filter="url(#core-node-glow)">
                  <circle cx="270" cy="64" r="6" /><circle cx="270" cy="186" r="6" /><circle cx="270" cy="307" r="6" />
                  <circle cx="370" cy="158" r="6" /><circle cx="370" cy="184" r="6" /><circle cx="370" cy="210" r="6" />
                  <circle cx="600" cy="158" r="6" /><circle cx="600" cy="175" r="6" /><circle cx="600" cy="193" r="6" /><circle cx="600" cy="210" r="6" />
                  <circle cx="690" cy="37" r="6" /><circle cx="690" cy="131" r="6" /><circle cx="690" cy="225" r="6" /><circle cx="690" cy="319" r="6" />
                </g>
              </svg>

              {architectureData.inputs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="absolute left-0 z-10 flex h-[27%] w-[27%] items-center gap-5 rounded-[10px] bg-[#071519]/80 px-2 text-white/85 sm:px-3 xl:px-5" style={{ top: `${[4, 37, 70][index]}%`, border: "1px solid #08bdc5" }}>
                    <Icon aria-hidden="true" strokeWidth={1.65} className="hidden h-[34px] w-[34px] shrink-0 text-[#13d0d6] xl:block" />
                    <span className="whitespace-pre text-[10px] font-medium leading-[1.2] sm:text-[11px] md:whitespace-normal md:text-[14px] md:leading-[1.3] xl:text-[16px] xl:leading-[1.35]">{item.label}</span>
                  </div>
                );
              })}

              <div className="absolute left-[37%] top-[27%] z-10 flex h-[46%] w-[23%] flex-col items-center justify-center rounded-[12px] bg-[#082027] text-center" style={{ border: "3px solid #10d4da", boxShadow: "0 0 18px rgba(16, 212, 218, 0.32), inset 0 0 12px rgba(16, 212, 218, 0.08)" }}>
                <Monitor aria-hidden="true" strokeWidth={1.7} className="h-7 w-7 text-[#15d7dd] sm:h-9 sm:w-9 md:h-12 md:w-12" />
                <strong className="mt-1 whitespace-nowrap text-[8px] text-white sm:mt-2 sm:text-[11px] md:mt-3 md:text-[15px] xl:text-[18px]">FutuDrill Core</strong>
              </div>

              {architectureData.outputs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="absolute left-[69%] z-10 flex h-[20%] w-[31%] items-center gap-5 rounded-[10px] bg-[#071519]/80 px-2 text-white/85 sm:px-3 xl:px-5" style={{ top: `${index * 25.5}%`, border: "1px solid #08bdc5" }}>
                    <Icon aria-hidden="true" strokeWidth={1.65} className="hidden h-[34px] w-[34px] shrink-0 text-[#13d0d6] xl:block" />
                    <span className="whitespace-pre text-[10px] font-medium leading-[1.2] sm:text-[11px] md:whitespace-normal md:text-[14px] md:leading-[1.3] xl:text-[16px] xl:leading-[1.35]">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
