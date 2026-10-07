import React, { useState } from "react";
import { Activity, ChevronRight, Gauge, LayoutDashboard, Monitor, SlidersHorizontal } from "lucide-react";
import Reveal from "../common/Reveal";

const screens = [
  {
    id: "editor",
    icon: LayoutDashboard,
    label: "HMI Editor",
    description:
      "A dedicated visual workspace for creating and configuring operator screens before they are used at runtime.",
    cards: [
      {
        title: "Visual Screen Design",
        description:
          "Create HMI layouts by placing and arranging controls on the workspace, with configurable position, size, text, font, colours, and behaviour.",
        items: ["Button", "Label / Text Field", "Gauge", "Image"],
      },
      {
        title: "Reusable Screen Definitions",
        description:
          "Save the complete screen configuration as structured design data so the same interface can be reconstructed and used by the runtime application.",
        items: ["Layout", "Properties", "Control Configuration", "Screen Data"],
      },
    ],
  },
  {
    id: "runtime",
    icon: Activity,
    label: "Runtime Operation",
    description:
      "Loads saved HMI screens, rebuilds their configured controls, and provides the live operator interface.",
    cards: [
      {
        title: "Live Process Visualization",
        description:
          "Display PLC-connected values, machine or process states, button conditions, and numeric gauge information through the loaded HMI screen.",
        preview: "visualization",
      },
      {
        title: "Operator Interaction",
        description:
          "Use configured buttons and supported read/write fields to interact with the PLC-controlled system directly from the runtime interface.",
        preview: "interaction",
      },
    ],
  },
  {
    id: "plc",
    icon: SlidersHorizontal,
    label: "PLC Integration",
    description:
      "Connect configured HMI controls with PLC tags so the interface reflects live industrial process information.",
    cards: [
      {
        title: "Live PLC Data",
        description:
          "Read configured PLC values and display them through text fields, gauges, button states, and visual indicators.",
        preview: "plc-data",
      },
      {
        title: "Configured PLC Actions",
        description:
          "Send supported operator commands and write configured values back to the PLC where controls are set up for interaction.",
        preview: "plc-actions",
      },
    ],
  },
];

export default function HmiScreenDesignSection() {
  const [activeId, setActiveId] = useState("editor");
  const activeScreen = screens.find((screen) => screen.id === activeId);

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#05090b] px-[5%] py-16 font-['Manrope'] lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,196,197,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="relative mx-auto w-full max-w-[1728px]">
        <Reveal>
          <div className="grid gap-7 border-l-2 border-[#22c4c5] pl-6 sm:pl-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-[8%]">
            <div>
              <div className="flex items-center gap-3 text-[#22c4c5]">
                <Monitor aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
                <p className="text-[10px] font-bold uppercase tracking-[0.22em]">HMI Screen Design</p>
              </div>
              <h2 className="mt-5 text-[clamp(34px,4.2vw,58px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white">
                Design Visually.<br />
                <span className="text-[#22c4c5]">Operate in Real Time.</span>
              </h2>
            </div>
            <p className="max-w-[760px] text-[14px] font-light leading-[1.8] text-white/55 sm:text-[16px]">
              Create and configure HMI screens in the Editor, save them as reusable screen definitions, and load them in the Operation application for live PLC monitoring and configured operator interaction.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-12 border border-[#315058] bg-[#080d0f] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.38)] sm:p-3 lg:mt-16">
            <span className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-[#22c4c5]" />
            <span className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-[#22c4c5]" />
            <div className="flex items-center justify-between border border-white/[0.08] bg-[#101719] px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 bg-[#22c4c5]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">HMI Application / Operator Workspace</p>
              </div>
              <div className="hidden items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/35 sm:flex">
                <span>Interface Active</span><span className="h-1.5 w-1.5 rounded-full bg-[#22c4c5]" />
              </div>
            </div>

            <div className="grid min-h-[480px] border-x border-b border-white/[0.08] lg:grid-cols-[270px_1fr]">
              <aside className="border-b border-white/[0.08] bg-[#0c1214] p-4 lg:border-b-0 lg:border-r lg:p-5">
                <p className="px-3 pb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">Screen Selection</p>
                <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1" role="tablist" aria-label="HMI application areas">
                  {screens.map(({ id, icon: Icon, label }) => {
                    const isActive = id === activeId;
                    return (
                      <button
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="hmi-screen-panel"
                        key={id}
                        onClick={() => setActiveId(id)}
                        className={`flex items-center gap-3 border px-4 py-4 text-left font-['Manrope'] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22c4c5] ${isActive ? "border-[#22c4c5]/50 bg-[#0b292d] text-white" : "border-white/[0.07] bg-[#11191b] text-white/50 hover:border-[#22c4c5]/30 hover:text-white"}`}
                      >
                        <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-[#22c4c5]" strokeWidth={1.6} />
                        <span className="flex-1 text-[12px] font-bold sm:text-[13px]">{label}</span>
                        <ChevronRight aria-hidden="true" className="hidden h-4 w-4 text-[#22c4c5]/60 lg:block" />
                      </button>
                    );
                  })}
                </div>
                <div className="mt-5 hidden border-t border-white/[0.08] pt-5 lg:block">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">Designed around</p>
                  <p className="mt-2 text-[12px] leading-[1.6] text-white/55">Visual screen creation, reusable HMI controls, saved screen definitions, and PLC-connected runtime operation.</p>
                </div>
              </aside>

              <div id="hmi-screen-panel" role="tabpanel" className="relative overflow-hidden bg-[#071013] p-5 sm:p-7 lg:p-9">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,196,197,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="relative flex flex-col gap-5" key={activeScreen.id}>
                  <div className="flex flex-col justify-between gap-4 border-b border-white/[0.09] pb-5 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#22c4c5]">Selected Screen</p>
                      <h3 className="mt-2 text-[clamp(24px,2.4vw,36px)] font-extrabold tracking-[-0.025em] text-white">{activeScreen.label}</h3>
                    </div>
                    <p className="max-w-[500px] text-[12px] font-light leading-[1.65] text-white/45 sm:text-right sm:text-[13px]">{activeScreen.description}</p>
                  </div>

                  <div className="grid flex-1 gap-4 md:grid-cols-2">
                    {activeScreen.cards.map(({ title, description, items, preview }) => (
                      <article key={title} className="relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-[#29464d] bg-[#0b171a]/95 p-6 sm:p-7">
                        <div className="absolute right-0 top-0 h-24 w-24 bg-[radial-gradient(circle_at_top_right,rgba(34,196,197,0.13),transparent_68%)]" />
                        <div className="relative">
                          <span className="block h-1 w-12 bg-[#22c4c5]" />
                          <h4 className="mt-6 text-[20px] font-bold text-white">{title}</h4>
                          <p className="mt-3 max-w-[520px] text-[13px] font-light leading-[1.7] text-white/50 sm:text-[14px]">{description}</p>
                        </div>
                        {items ? (
                          <div className="mt-8 flex flex-wrap gap-2">
                            {items.map((item) => (
                              <span key={item} className="border border-white/[0.09] bg-white/[0.025] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.1em] text-white/45">{item}</span>
                            ))}
                          </div>
                        ) : preview === "visualization" ? (
                          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label="Supported runtime visualizations">
                            <div className="border border-white/[0.09] bg-[#081114] p-3">
                              <span className="block h-2 w-10 bg-[#22c4c5]/45" />
                              <span className="mt-3 block text-[9px] font-bold uppercase tracking-[0.1em] text-white/45">Text Value</span>
                            </div>
                            <div className="border border-white/[0.09] bg-[#081114] p-3">
                              <Gauge aria-hidden="true" className="h-5 w-5 text-[#22c4c5]" strokeWidth={1.6} />
                              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.1em] text-white/45">Gauge</span>
                            </div>
                            <div className="border border-white/[0.09] bg-[#081114] p-3">
                              <span className="flex h-5 items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#4da66d]" /><span className="h-1 w-6 bg-white/15" /></span>
                              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.1em] text-white/45">Button State</span>
                            </div>
                            <div className="border border-white/[0.09] bg-[#081114] p-3">
                              <span className="flex h-5 items-center gap-1"><span className="h-2 w-2 rounded-full bg-white/30" /><span className="h-2 w-2 rounded-full bg-[#22c4c5]" /><span className="h-2 w-2 rounded-full bg-white/30" /></span>
                              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.1em] text-white/45">Process Status</span>
                            </div>
                          </div>
                        ) : preview === "interaction" ? (
                          <div className="mt-8 flex flex-wrap gap-2" aria-label="Supported runtime interactions">
                            {["Button Control", "Read / Write Field", "Screen Select"].map((item) => (
                              <span key={item} className="border border-[#22c4c5]/20 bg-[#22c4c5]/[0.045] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.1em] text-white/50">{item}</span>
                            ))}
                          </div>
                        ) : preview === "plc-data" ? (
                          <div className="mt-8" aria-label="PLC data flow">
                            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/35">PLC → Tag → HMI Control</p>
                            <div className="mt-3 flex flex-wrap items-center gap-2 text-[9px] font-bold uppercase tracking-[0.08em] text-white/55">
                              <span className="border border-[#22c4c5]/25 bg-[#22c4c5]/[0.05] px-3 py-2">PLC</span><ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-[#22c4c5]" />
                              <span className="border border-white/[0.09] bg-white/[0.025] px-3 py-2">Registered Tag</span><ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-[#22c4c5]" />
                              <span className="border border-white/[0.09] bg-white/[0.025] px-3 py-2">Text / Gauge / Button State</span>
                            </div>
                          </div>
                        ) : (
                          <div className="mt-8" aria-label="Configured PLC action flow">
                            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/35">Operator Input → HMI Control → PLC</p>
                            <div className="mt-3 flex flex-wrap items-center gap-2 text-[9px] font-bold uppercase tracking-[0.08em] text-white/55">
                              <span className="border border-white/[0.09] bg-white/[0.025] px-3 py-2">Operator Input</span><ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-[#22c4c5]" />
                              <span className="border border-[#22c4c5]/25 bg-[#22c4c5]/[0.05] px-3 py-2">HMI Control</span><ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-[#22c4c5]" />
                              <span className="border border-white/[0.09] bg-white/[0.025] px-3 py-2">PLC</span>
                            </div>
                            <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.12em] text-white/35">Read · Write · Configured Action</p>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
