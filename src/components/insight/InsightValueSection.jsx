import React from "react";
import { BarChart3, BellRing, Copy, FileText } from "lucide-react";

const cards = [
  {
    icon: BellRing,
    title: "Predictive Alerts",
    description:
      "Detect potential issues early with AI-powered anomaly detection and real-time notifications.",
  },
  {
    icon: BarChart3,
    title: "Custom Dashboards",
    description:
      "Visualize the metrics that matter most with role-based, configurable dashboards.",
  },
  {
    icon: Copy,
    title: "Fleet Comparison",
    description:
      "Benchmark performance across wells, rigs, and regions to uncover opportunities.",
  },
  {
    icon: FileText,
    title: "Scheduled Reports",
    description:
      "Automate report generation and delivery to keep teams aligned and informed.",
  },
];

export default function InsightValueSection() {
  return (
    <section className="bg-transparent px-[5%] py-12 font-['Manrope'] lg:py-16">
      <div className="mx-auto w-full max-w-[1728px]">
        <div className="flex items-center gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#22c4c5]">
            Why Teams Choose Insight
          </p>
        </div>

        <h2 className="mt-4 max-w-[1000px] text-[clamp(30px,3.2vw,48px)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
          Operational Intelligence,<br /><span className="text-[#22c4c5]">Delivered Clearly.</span>
        </h2>

        <p className="mt-5 max-w-[850px] text-[14px] font-light leading-[1.7] text-white/55 sm:text-[16px]">
          Turn complex operational data into clear, confident decisions.
          Insight helps drilling teams work smarter, move faster, and reduce
          risk across every stage.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ icon: Icon, title, description }) => (
            <article
              className="group flex min-h-[285px] flex-col rounded-[7px] border border-[#244047]/80 bg-[#071216]/70 px-6 py-7 transition-colors duration-300 hover:border-[#22c4c5]/55 hover:bg-[#091a1f]"
              key={title}
            >
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#22c4c5]/50 bg-[#0a252b] text-[#22c4c5] transition-transform duration-300 group-hover:-translate-y-1">
                <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.7} />
              </span>

              <h3 className="mt-6 text-[18px] font-bold leading-tight text-white">
                {title}
              </h3>

              <p className="mt-4 text-[13px] font-light leading-[1.7] text-white/50">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
