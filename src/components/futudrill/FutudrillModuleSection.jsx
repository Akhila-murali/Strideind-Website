import React from "react";
import { Link } from "react-router-dom";
import { BellRing, Radar, SlidersHorizontal } from "lucide-react";
import HorizontalScroll from "../common/HorizontalScroll";
import Reveal from "../common/Reveal";

const sections = {
  core: {
    label: "Futudrill Core",
    title: <>Built for Every<br /><span className="text-[#22c4c5]">Operational Layer.</span></>,
    description: "FutuDrill Core supports critical rig functions, auxiliary monitoring, asset visibility, and site-wide operational awareness through one unified platform.",
    link: "/products/futudrill/core",
    badge: "Core Capability",
    cards: [
      { title: "Critical Operation Monitoring & Control", description: "Monitor and control critical rig activities in real time with reliable visibility, rapid response, and fault-tolerant operational continuity across core drilling systems.", image: "/bg23.jpg" },
      { title: "Non-Critical Operation Monitoring", description: "Gain full visibility into auxiliary and support operations, helping crews and management reduce workload while maintaining better situational awareness.", image: "/Industrial%20Control%20Room%20Operator.png" },
      { title: "Personnel & Asset Tracking", description: "Track site personnel and equipment assets across field and camp areas to improve coordination, visibility, and operational efficiency.", image: "/Field%20Engineer%20at%20the%20Drilling%20Rig.png" },
      { title: "Camp & Site Monitoring Systems", description: "Monitor camp, site, and environmental systems end to end for complete awareness of operational conditions across the facility.", image: "/Remote%20Desert%20Drilling%20Camp.png" },
      { title: "Data Acquisition & Integration", description: "Collect and integrate real-time data from rig systems, field instruments, and third-party sources into one unified monitoring environment.", image: "/Rig%20Control%20Room%20Monitoring%20Operations.png" },
      { title: "Trend Visualization & Reporting", description: "Visualize operational data through live dashboards, historical trends, and structured reports to support better analysis and decision-making.", image: "/bg7.png" },
    ],
  },
  insight: {
    label: "FutuDrill Insight",
    title: <>Turn Operational Data Into<br /><span className="text-[#22c4c5]">Actionable Intelligence.</span></>,
    description: "FutuDrill Insight transforms live and historical drilling data into clear KPIs, predictive intelligence, and decision-ready operational insights for teams at every level.",
    link: "/products/futudrill/insight",
    badge: "Insight Analytics",
    cards: [
      { title: "Real-Time KPI Intelligence", description: "Track drilling efficiency, well progress, equipment health, and operational performance through a unified live KPI environment.", image: "/FutuDrill%20Control%20Room%20Overlooking%20Rig.png" },
      { title: "Predictive Performance Analytics", description: "Identify emerging trends, performance loss, and abnormal operating conditions before they become costly operational events.", image: "/Industrial%20Drilling%20Control%20Room.png" },
      { title: "Advanced Trend Visualization", description: "Explore high-frequency operational data through clear trends, correlations, and comparative views built for faster technical analysis.", image: "/bg7.png" },
      { title: "Decision-Ready Reporting", description: "Convert complex field data into structured insights and reports that support confident operational and management decisions.", image: "/Drilling%20Operations%20Control%20Room.png" },
      { title: "Operational Benchmarking", description: "Compare wells, crews, shifts, and operating phases against historical performance to uncover efficiency gaps and repeatable best practices.", image: "/Drilling%20Control%20Room%20Overlooking%20Rig.png" },
      { title: "Anomaly Detection & Alerts", description: "Detect unusual patterns across live drilling data and surface early warnings that help teams investigate risks and act before performance is affected.", image: "/Drilling%20Control%20Room%20Alert%20Dashboard.png" },
    ],
  },
};

const controlCapabilities = [
  {
    icon: SlidersHorizontal,
    title: "Re-Programmable",
    description: "Adapt protection logic to different rig types and operating environments.",
  },
  {
    icon: Radar,
    title: "Configurable Detection Zones",
    description: "Define monitored movement zones around critical rig equipment.",
  },
  {
    icon: BellRing,
    title: "Instant Alerts",
    description: "Warn operators when equipment approaches a configured collision risk.",
  },
];

export default function FutudrillModuleSection({ variant }) {
  if (variant === "ai-cam") {
    return (
      <section className="border-b border-white/[0.08] bg-[#050a0c] bg-[linear-gradient(rgba(34,196,197,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.02)_1px,transparent_1px)] bg-[size:58px_58px] px-[5%] py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1728px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-[8%]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">
              FutuDrill AI CAM
            </p>

            <h2 className="mt-4 text-[clamp(38px,4.5vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-white">
              Intelligent Vision for<br />
              <span className="text-[#22c4c5]">Safer Site Operations.</span>
            </h2>

            <p className="mt-6 max-w-[650px] text-[14px] font-light leading-[1.8] text-white/55 sm:text-[16px]">
              FutuDrill AI CAM combines continuous site monitoring, AI-based
              event detection, instant alerts, and remote visibility in one
              operational view. It helps teams identify unusual activity
              sooner, maintain awareness across critical areas, and respond
              with greater confidence.
            </p>

            <Link
              to="/products/futudrill/ai-cam"
              className="group mt-7 inline-flex items-center text-[11px] font-bold uppercase tracking-[0.1em] text-[#22c4c5] no-underline transition-colors hover:text-white"
            >
              Learn More
              <span className="ml-2 transition-transform group-hover:translate-x-1.5">→</span>
            </Link>
          </div>

          <div className="aspect-[16/9] w-full overflow-hidden rounded-[8px] border border-white/[0.08] bg-[#071013]">
            <img
              src={process.env.PUBLIC_URL + "/Rainy%20Loading%20Yard%20Surveillance.png"}
              alt="Surveillance monitoring of a loading yard during rainy conditions"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    );
  }

  if (variant === "control") {

    return (
      <section className="relative overflow-hidden border-y border-white/[0.08] bg-[#071013] px-[5%] py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,196,197,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.02)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="mx-auto grid w-full max-w-[1728px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-[8%]">
          <Reveal className="relative" direction="left">
          <div>
            <div className="flex items-center gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">FutuDrill Control</p>
              <span className="h-px w-14 bg-white/25" />
            </div>
            <h2 className="mt-4 text-[clamp(38px,4.5vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-white">
              Collision Prevention<br />
              <span className="text-[#22c4c5]">Built Around the Rig.</span>
            </h2>
            <p className="mt-5 max-w-[720px] text-[14px] font-light leading-[1.75] text-white/55 sm:text-[16px]">
              FutuDrill Control supports re-programmable collision avoidance for safer operation across different rig types and field conditions, using configurable detection zones and immediate operator alerts.
            </p>
            <Link to="/products/futudrill/control" className="group mt-6 inline-flex items-center font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.1em] text-[#22c4c5] no-underline transition-colors hover:text-white">
              Learn More <span className="ml-2 transition-transform group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
          </Reveal>

          <div className="relative grid gap-4 sm:grid-cols-3">
            {controlCapabilities.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} direction="right" delay={index * 0.09}>
              <article key={title} className="rounded-[7px] border border-[#244047]/80 bg-[#09161a] p-6 transition-colors duration-300 hover:border-[#22c4c5]/55">
                <Icon aria-hidden="true" className="h-8 w-8 text-[#22c4c5]" strokeWidth={1.7} />
                <h3 className="mt-5 text-[15px] font-bold leading-tight text-white">{title}</h3>
                <p className="mt-3 text-[12px] font-light leading-[1.65] text-white/50">{description}</p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "connect") {
    return (
      <section className="bg-transparent px-[5%] pb-16 pt-4 lg:py-20">
        <div className="mx-auto w-full max-w-[1728px]">
          <div className="flex items-center gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">FutuDrill Connect</p>
            <span className="h-px w-14 bg-white/25" />
          </div>
          <h2 className="mt-4 text-[clamp(38px,4.5vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-white">
            One Well. Every Data Source. <span className="text-[#22c4c5]">Connected.</span>
          </h2>
          <p className="mt-4 max-w-[900px] text-[14px] font-light leading-[1.75] text-white/55 sm:text-[16px]">
            FutuDrill Connect links field equipment, control systems, and third-party platforms through a unified and secure communication framework, enabling real-time data flow and seamless collaboration across the drilling operation.
          </p>
          <Link to="/products/futudrill/connect" className="group mt-6 inline-flex items-center font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.1em] text-[#22c4c5] no-underline transition-colors hover:text-white">
            Learn More <span className="ml-2 transition-transform group-hover:translate-x-1.5">→</span>
          </Link>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <ConnectCard image="/Field%20Automation%20at%20Sunset.png" label="Unified I/O Compatibility" title="Unified I/O Compatibility" description="Supports a wide range of industrial communication protocols and control systems for seamless data exchange across field devices and control platforms." />
            <ConnectCard image="/Twilight%20SCADA%20Control%20Room%20Operations.png" label="Third-Party Integrations" title="Third-Party Integrations" description="Integrates with industry-standard systems and third-party solutions to enhance data visibility, operational control, and workflow efficiency." />
          </div>
        </div>
      </section>
    );
  }

  const section = sections[variant];
  if (!section) return null;

  return (
    <section className="overflow-hidden bg-transparent pb-5 pt-16 lg:py-20">
      <div className="flex items-end justify-between gap-10 px-[5%] pb-12 max-lg:flex-col max-lg:items-start max-lg:pb-10 max-[600px]:pb-8">
        <div className="max-w-[680px]">
          <div className="flex items-center gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">{section.label}</p>
            <span className="h-px w-14 bg-white/25" />
          </div>
          <h2 className="mt-4 text-[clamp(38px,4.5vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-white">{section.title}</h2>
          <p className="mt-5 text-[14px] font-light leading-[1.75] text-white/55 sm:text-[16px]">{section.description}</p>
          <Link to={section.link} className="group mt-6 inline-flex items-center font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.1em] text-[#22c4c5] no-underline transition-colors hover:text-white">
            Learn More <span className="ml-2 transition-transform group-hover:translate-x-1.5">→</span>
          </Link>
        </div>
      </div>
      <HorizontalScroll cards={section.cards} badge={section.badge} scrollAmount={355} />
    </section>
  );
}

function ConnectCard({ image, label, title, description }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[6px] border border-[#17454b]/80 bg-[linear-gradient(145deg,rgba(9,28,33,0.96),rgba(5,16,20,0.98))] shadow-[0_18px_55px_rgba(0,0,0,0.2)] transition-[border-color,box-shadow] duration-300 hover:border-[#00e5ff] hover:shadow-[0_0_24px_rgba(0,229,255,0.35)]">
      <div className="relative hidden h-[320px] overflow-hidden xl:block">
        <img src={`${process.env.PUBLIC_URL}${image}`} alt={title} className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071216] via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col px-6 py-8 sm:px-8 xl:px-9 xl:pb-9 xl:pt-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#22c4c5]">{label}</p>
        <h3 className="mt-4 text-[clamp(22px,2vw,28px)] font-bold leading-tight text-white">{title}</h3>
        <p className="mt-4 max-w-[620px] text-[14px] font-light leading-[1.55] text-white/55 sm:text-[16px]">{description}</p>
      </div>
    </article>
  );
}
