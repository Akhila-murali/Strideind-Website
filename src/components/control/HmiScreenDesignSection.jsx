import React, { useState } from "react";
import { Activity, Database, FileText, FolderOpen, Link2, Maximize2, Monitor, MousePointer2, Play, ScreenShare, Settings2 } from "lucide-react";
import Reveal from "../common/Reveal";

const screens = [
  {
    id: "editor",
    label: "HMI Editor",
    icon: Monitor,
    title: "Design and Configure HMI Screens",
    image: "/Dark%20HMI%20Editor%20Dashboard%20Interface.png",
    imageAlt: "Dark HMI editor dashboard showing configurable drilling controls",
    features: [
      { icon: ScreenShare, title: "Visual Screen Design", description: "Create HMI screens using a visual workspace with supported controls such as buttons, labels, text fields, gauges and images." },
      { icon: FileText, title: "Reusable Screen Definitions", description: "Save configured controls, positions, dimensions, fonts, colours and control-specific settings for use in the runtime application." },
      { icon: Maximize2, title: "Resolution-Aware Layouts", description: "Design using a logical 1920 × 1080 workspace with automatic scaling across different display resolutions." },
    ],
  },
  {
    id: "runtime",
    label: "Runtime Operation",
    icon: Play,
    title: "Operate and Monitor Live HMI Screens",
    description: "Loads saved HMI screens, rebuilds their configured controls, and provides the live operator interface.",
    image: "/Teal%20Mud%20Pump%20HMI%20Control%20Screen.png",
    imageAlt: "Teal HMI control screen for live mud pump operation",
    features: [
      { icon: Activity, title: "Live Process Visualization", description: "Display PLC-connected values, machine or process states, button conditions, and numeric gauge information through the loaded HMI screen." },
      { icon: MousePointer2, title: "Operator Interaction", description: "Use configured buttons and supported read/write fields to interact with the PLC-controlled system directly from the runtime interface." },
      { icon: FolderOpen, title: "Saved Screen Loading & Navigation", description: "Load saved HMI screen definitions and automatically reconstruct their configured controls, layouts, and visual properties. Navigate between designed screens to access different machine functions and operational workflows without rebuilding each interface." },
    ],
  },
  {
    id: "plc",
    label: "PLC Integration",
    icon: Link2,
    title: "Connect HMI Controls with PLC Data",
    description: "Connect configured HMI controls with PLC tags so the interface reflects live industrial process information.",
    image: "/Teal%20Rig%20Floor%20Sensor%20HMI%20Dashboard.png",
    imageAlt: "Teal rig floor sensor HMI dashboard displaying live PLC data",
    features: [
      { icon: Database, title: "Live PLC Data", description: "Read configured PLC values and display them through text fields, gauges, button states, and visual indicators." },
      { icon: Settings2, title: "Configured PLC Actions", description: "Send supported operator commands and write configured values back to the PLC where controls are set up for interaction." },
      { icon: Link2, title: "Sensor Calibration & Value Mapping", description: "Configure sensor calibration parameters using raw minimum and maximum values, calibrated ranges, and sensor readings. Map raw input values to meaningful engineering measurements for consistent monitoring through the HMI interface." },
    ],
  },
];

export default function HmiScreenDesignSection() {
  const [activeId, setActiveId] = useState("editor");
  const activeScreen = screens.find((screen) => screen.id === activeId);

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#05090b] px-[4%] py-16 font-['Manrope'] sm:py-20 lg:px-[3%] lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,196,197,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="relative mx-auto w-full max-w-[1720px]">
        <Reveal>
          <div className="max-w-[900px]">
            <div className="flex items-center gap-3"><p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#22c4c5]">HMI Application</p></div>
            <h2 className="mt-4 text-[clamp(36px,4vw,56px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">Design Visually. <span className="text-[#22c4c5]">Operate in Real Time.</span></h2>
            <p className="site-section-description mt-4 hidden max-w-[860px] sm:block">Create and configure HMI screens in the Editor, save them as reusable screen definitions, and load them in the Operation application for live PLC monitoring and configured operator interaction.</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-9 grid overflow-hidden rounded-lg border border-[#22c4c5]/25 bg-[#071013]/90 shadow-[0_24px_70px_rgba(0,0,0,0.4)] lg:grid-cols-[265px_minmax(0,1fr)] xl:grid-cols-[265px_minmax(0,1fr)_370px]">
            <aside className="border-b border-white/[0.08] bg-[#091114] p-4 sm:p-5 lg:border-b-0 lg:border-r">
              <p className="px-3 pb-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">Screen Selection</p>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:grid-cols-1" role="tablist" aria-label="HMI application areas">
                {screens.map(({ id, label, icon: Icon }) => {
                  const isActive = id === activeId;
                  return <button type="button" role="tab" aria-selected={isActive} aria-controls="hmi-workspace-panel" onClick={() => setActiveId(id)} className={`flex min-w-0 items-center justify-center rounded-md border px-1.5 py-3 text-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22c4c5] sm:px-3 lg:justify-start lg:gap-4 lg:px-4 lg:py-4 lg:text-left ${isActive ? "border-[#22c4c5]/40 bg-[#063b41] text-white" : "border-white/[0.07] bg-[#0c171a] text-white/70 hover:border-[#22c4c5]/30 hover:text-white"}`} key={id}><Icon aria-hidden="true" className="hidden h-5 w-5 shrink-0 text-[#22c4c5] lg:block" strokeWidth={1.8} /><span className="min-w-0 text-[10px] font-bold leading-tight sm:text-[12px] lg:flex-1 lg:text-[13px]">{label}</span><span className="hidden text-xl leading-none text-[#22c4c5] lg:block">›</span></button>;
                })}
              </div>
              <div className="mt-6 hidden border-t border-white/[0.08] px-3 pt-6 sm:block"><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">Designed Around</p><p className="site-card-description mt-3">Visual screen creation, reusable HMI controls, saved screen definitions, and PLC-connected runtime operation.</p></div>
            </aside>

            <div id="hmi-workspace-panel" role="tabpanel" className="min-w-0 p-4 sm:p-6 lg:p-5" key={activeScreen.id}>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#22c4c5]">{activeScreen.label}</p>
              <h3 className="mt-2 text-[clamp(24px,2.2vw,34px)] font-extrabold leading-tight text-white">{activeScreen.title}</h3>
              {activeScreen.image ? (
                <div className="mt-5 overflow-hidden rounded-md border border-[#22c4c5]/25 bg-[#061013]"><img src={process.env.PUBLIC_URL + activeScreen.image} alt={activeScreen.imageAlt} className="h-auto w-full object-contain" /></div>
              ) : (
                <div className="mt-5 flex min-h-[320px] items-center justify-center rounded-md border border-[#22c4c5]/20 bg-[#061013] p-8 text-center sm:min-h-[420px]"><div className="max-w-[560px]"><activeScreen.icon aria-hidden="true" className="mx-auto h-14 w-14 text-[#22c4c5]" strokeWidth={1.3} /><p className="mt-6 text-[15px] font-light leading-[1.8] text-white/60">{activeScreen.description}</p></div></div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-3 border-t border-white/[0.08] p-4 sm:p-6 lg:col-span-2 xl:col-span-1 xl:border-l xl:border-t-0 xl:p-5" key={`${activeScreen.id}-features`}>
              {activeScreen.features.map(({ icon: Icon, title, description }, index) => <article className="flex gap-4 rounded-lg border border-[#22c4c5]/25 bg-[#09191d] p-4" key={title}><div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[#22c4c5]/40 text-[#22c4c5] xl:flex"><Icon aria-hidden="true" size={27} strokeWidth={1.6} /></div><div><p className="text-[12px] font-bold text-[#22c4c5]">{String(index + 1).padStart(2, "0")}</p><h4 className="site-card-title mt-1">{title}</h4><p className="site-card-description mt-2">{description}</p></div></article>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
