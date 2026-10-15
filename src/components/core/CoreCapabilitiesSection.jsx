import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

const cards = [
  {
    category: "Live Drilling Monitoring",
    title: "Track. Monitor. Stay in Control.",
    description: "Monitor hookload, block position, drilling pressure, RPM, flow rates, and depth through configurable PLC dashboards with live values, engineering units, connection status, operating limits, and alarm indications.",
    image: "/Futuristic%20Telemetry%20Dashboard%20with%20Screen%205%20Active.png",
  },
  {
    category: "Operational Gauges",
    title: "Critical Drilling Parameters. Visualized in Real Time.",
    description: "View hookload, weight on bit, block position, top drive RPM, torque, casing pressure, pump SPM, flow rates, and depth through configurable gauges with adjustable ranges, tag assignment, and live-data status.",
    image: "/Industrial%20Drilling%20Telemetry%20Dashboard.png",
  },
  {
    category: "Drilling Trend Analysis",
    title: "Track Every Change. Understand Every Trend.",
    description: "Analyze live and historical PLC measurements through interactive trend charts with multi-channel comparison, selectable time ranges, zoom controls, configurable markers, and supported data export.",
    image: "/FutuDrill%20Trend%20Analysis%20Dashboard.png",
  },
  {
    category: "Generator Power Intelligence",
    title: "Power Performance. Clear Operational Visibility.",
    description: "Observe voltage, current, frequency, active power, apparent power, and energy readings across configured generator units through centralized, configurable monitoring panels.",
    image: "/Dark%20Generator%20Monitoring%20Dashboard.png",
  },
  {
    category: "Reports & Data Export",
    title: "Turn Drilling Data into Actionable Reports.",
    description: "Select drilling parameters and historical periods, inspect configured trend views, and export supported operational data as CSV, Excel, PDF, or chart images for review and technical reporting.",
    image: "/Drilling%20Trend%20Analysis%20PDF%20Viewer.png",
  },
  {
    category: "System Configuration",
    title: "Configure Monitoring Around Your Rig.",
    description: "Configure PLC tag assignments, parameter names, display settings, gauge ranges, channel arrangements, visibility, and multiple monitoring screens around the rig's operational requirements.",
    image: "/Industrial%20Gauge%20Dashboard%20Interface.png",
  },
  {
    category: "User Access & Permissions",
    title: "Controlled Access. Configured for Your Team.",
    description: "Use authentication, permission-based access, and license-status handling to control supported functions, protect monitoring configurations, and authorize management activities.",
    image: "/Futuristic%20Dark%20User%20Permissions%20Dashboard.png",
  },
];

export default function CoreCapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || paused || reduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [isInView, paused, reduceMotion]);

  return (
    <section ref={sectionRef} className="overflow-hidden border-y border-white/[0.08] bg-[#070b0d] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1700px] px-[5%]">
        <div className="max-w-[820px]">
          <div className="flex items-center gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">FutuDrill Capabilities</p>
          
          </div>
          <h2 className="mt-4 text-[clamp(38px,4.5vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-white">
            Complete Visibility.<br /><span className="text-[#22c4c5]">Smarter Drilling Monitoring.</span>
          </h2>
          <p className="site-section-description mt-5 max-w-[760px]">
            Explore FutuDrill Core's integrated monitoring capabilities, from live drilling dashboards and operational gauges to trend analysis, recent data recording, reporting, and system configuration. Each capability is designed to help drilling teams track critical parameters, understand operational changes, and access relevant information through one centralized platform.
          </p>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-[12px] border border-white/[0.09] bg-[#0a1013] shadow-[0_24px_65px_rgba(0,0,0,0.32)] lg:mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            className={`flex ${reduceMotion ? "" : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <article className="grid min-w-full lg:grid-cols-[1.12fr_0.88fr]" key={card.title}>
                <div className="relative min-h-[280px] overflow-hidden bg-[#071013] sm:min-h-[390px] lg:min-h-[500px]">
                  <img
                    src={`${process.env.PUBLIC_URL}${card.image}`}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a1013]/45 max-lg:bg-gradient-to-t max-lg:from-[#0a1013]/35 max-lg:to-transparent" />
                  <span className="absolute left-5 top-5 border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65 backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex min-h-[330px] flex-col justify-center p-7 sm:p-10 lg:min-h-[500px] lg:p-14 xl:p-16">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--teal-light)]">{card.category}</p>
                  <h3 className="mt-5 text-[clamp(28px,3vw,44px)] font-extrabold leading-[1.12] tracking-[-0.025em] text-white">{card.title}</h3>
                  <p className="site-section-description mt-6 max-w-[590px]">{card.description}</p>
                  <div className="mt-9 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                   
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 border-t border-white/[0.07] px-5 py-5" role="tablist" aria-label="Select a FutuDrill capability">
            {cards.map((card, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Show ${card.category}`}
                className={`h-2 cursor-pointer rounded-full border p-0 transition-[width,border-color,background-color,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--teal-light)] ${activeIndex === index ? "w-7 border-[var(--teal-light)] bg-[var(--teal-light)] shadow-[0_0_12px_var(--teal-glow)]" : "w-2 border-white/25 bg-white/[0.12] hover:border-[var(--teal-light)]"} motion-reduce:transition-none`}
                onClick={() => setActiveIndex(index)}
                key={card.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
