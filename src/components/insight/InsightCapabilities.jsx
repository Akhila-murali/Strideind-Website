import React from "react";
import { BarChart3, CheckCircle2, FileText, LayoutDashboard } from "lucide-react";

const insightCapabilities = [
  {
    eyebrow: "ADVANCED ANALYTICS",
    title: <>Discover What<br />Drives Performance.</>,
    description:
      "Analyze drilling parameters, equipment health, and operational trends to identify opportunities and mitigate risks early.",
    icon: BarChart3,
    points: [
      "Real-time & historical data analysis",
      "Performance benchmarking",
      "Anomaly detection & alerts",
    ],
  },
  {
    eyebrow: "INTERACTIVE DASHBOARDS",
    title: <>A Clear View of<br />Your Operations.</>,
    description:
      "Get a unified, real-time view of your fleet and operations with customizable dashboards built for every role.",
    icon: LayoutDashboard,
    points: [
      "Customizable dashboard views",
      "Fleet and multi-well monitoring",
      "Role-based access and views",
    ],
  },
  {
    eyebrow: "AUTOMATED REPORTING",
    title: <>Turn Insights<br />Into Action.</>,
    description:
      "Generate detailed reports and automate data delivery to keep your teams aligned and informed.",
    icon: FileText,
    points: [
      "Standard and custom report templates",
      "Automated report generation",
      "Export and API integration",
    ],
  },
];

export default function InsightCapabilities() {
  return (
    <section className="relative overflow-hidden border border-white/[0.08] bg-[#05090b] px-[3%] transition-[border-color,box-shadow] duration-300 hover:border-[#22c4c5]/80 hover:shadow-[inset_0_0_28px_rgba(34,196,197,0.08),0_0_18px_rgba(34,196,197,0.14)] py-14 font-['Manrope'] lg:py-[72px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#19aeb2]/45 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-3/4 -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(25,174,178,0.08),transparent_68%)]" />

      <div className="relative mx-auto grid w-full max-w-[1920px] gap-0 md:grid-cols-3">
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/3 top-0 z-10 hidden w-px bg-[#1b3d43] md:block" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-2/3 top-0 z-10 hidden w-px bg-[#1b3d43] md:block" />

        {insightCapabilities.map(({ eyebrow, title, description, icon: Icon, points }, index) => (
          <article
            key={eyebrow}
            className={`relative px-0 py-9 first:pt-0 last:pb-0 md:px-8 md:py-0 lg:px-12 ${index > 0 ? "border-t border-[#1b3d43] md:border-t-0" : ""}`}
          >
            <div className="flex items-center gap-3 text-[#22c4c5]">
              <Icon aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 shrink-0" />
              <p className="m-0 text-[10px] font-bold tracking-[0.18em]">{eyebrow}</p>
            </div>

            <h2 className="mt-5 text-[clamp(26px,2.4vw,40px)] font-bold leading-[1.02] tracking-[-0.025em] text-white">
              {title}
            </h2>
            <p className="mt-5 max-w-[440px] text-base font-light leading-[1.8] text-white/55">
              {description}
            </p>

            <ul className="mt-6 space-y-2.5">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-[12px] leading-relaxed text-white/65 sm:text-[13px]">
                  <CheckCircle2 aria-hidden="true" strokeWidth={1.7} className="h-4 w-4 shrink-0 text-[#22c4c5]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

