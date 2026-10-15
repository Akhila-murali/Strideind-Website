import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { useNavigate } from "react-router-dom";
import CoreArchitecture from "./CoreArchitecture";
import "./CoreHero.css";

export default function CoreHero() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const goToContact = (target) => navigate("/", { state: { scrollTo: target } });

  return (
    <motion.section
      className="core-hero relative flex min-h-screen items-start overflow-hidden border-b border-white/[0.08] pb-20 pt-[160px] max-md:pb-16 max-md:pt-[132px]"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(26,159,160,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(26,159,160,0.025)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(to_right,transparent,black_28%,black)]" />
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-45" viewBox="0 0 1600 820" preserveAspectRatio="none">
        <g fill="none" stroke="var(--teal-light)" strokeWidth="1">
          <path d="M505 98h118v72h76" opacity=".13" /><path d="M810 0v112h54" opacity=".18" />
          <path d="M882 0v112h-18" opacity=".09" /><path d="M1218 0v142h-58" opacity=".14" />
          <path d="M1490 62v260h42" opacity=".13" /><path d="M476 645h142v-61h72" opacity=".11" />
          <path d="M806 820V700h64" opacity=".18" /><path d="M1286 820V690h-84" opacity=".14" />
        </g>
        <g fill="var(--teal-light)">
          <circle cx="505" cy="98" r="2" opacity=".55" /><circle cx="623" cy="170" r="2" opacity=".55" />
          <circle cx="810" cy="112" r="2" opacity=".7" /><circle cx="864" cy="112" r="2" opacity=".55" />
          <circle cx="1218" cy="142" r="2" opacity=".55" /><circle cx="1490" cy="322" r="2" opacity=".55" />
          <circle cx="618" cy="584" r="2" opacity=".55" /><circle cx="806" cy="700" r="2" opacity=".65" />
          <circle cx="1286" cy="690" r="2" opacity=".55" />
        </g>
      </svg>
      <div aria-hidden="true" className="pointer-events-none absolute right-[6%] top-[7%] h-28 w-44 opacity-25 [background-image:radial-gradient(circle,var(--teal-light)_1px,transparent_1.5px)] [background-size:20px_20px] max-lg:hidden" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[31%] top-[11%] h-24 w-40 opacity-20 [background-image:radial-gradient(circle,var(--teal-light)_1px,transparent_1.5px)] [background-size:20px_20px] max-lg:hidden" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[16%] h-[420px] w-[420px] rounded-full bg-[var(--teal)]/[0.08] blur-[90px]"
        animate={reduceMotion ? undefined : { x: [0, 45, -18, 0], y: [0, -24, 28, 0], scale: [1, 1.12, 0.96, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[18%] top-[30%] h-[300px] w-[300px] rounded-full bg-[var(--teal-dark)]/[0.06] blur-[100px]"
        animate={reduceMotion ? undefined : { x: [0, -35, 24, 0], y: [0, 32, -18, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--teal-light)]/70 to-transparent shadow-[0_0_18px_var(--teal-glow)]"
        animate={reduceMotion ? undefined : { opacity: [0.25, 0.85, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#03090a] to-transparent" />
      <svg aria-hidden="true" className="core-hero-floor pointer-events-none absolute" viewBox="0 0 1100 240" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="core-floor" x1="0" x2="1"><stop offset="0" stopColor="var(--teal-light)" stopOpacity="0" /><stop offset=".25" stopColor="var(--teal-light)" stopOpacity=".22" /><stop offset=".5" stopColor="var(--teal-light)" stopOpacity=".7" /><stop offset=".8" stopColor="var(--teal-light)" stopOpacity=".3" /><stop offset="1" stopColor="var(--teal-light)" stopOpacity="0" /></linearGradient>
          <linearGradient id="core-floor-reflection" x2="0" y2="1"><stop stopColor="var(--teal-light)" stopOpacity=".55" /><stop offset="1" stopColor="var(--teal-light)" stopOpacity="0" /></linearGradient>
          <radialGradient id="core-floor-pool"><stop stopColor="var(--teal-light)" stopOpacity=".32" /><stop offset=".35" stopColor="var(--teal)" stopOpacity=".1" /><stop offset="1" stopColor="var(--teal)" stopOpacity="0" /></radialGradient>
          <filter id="core-floor-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3" /></filter>
          <linearGradient id="core-glass-surface" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#0a0a0a" stopOpacity="0" />
            <stop offset=".28" stopColor="#111416" stopOpacity=".45" />
            <stop offset=".35" stopColor="#050607" stopOpacity=".9" />
            <stop offset=".65" stopColor="#0b0e10" stopOpacity=".65" />
            <stop offset="1" stopColor="#08090a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="core-glass-sheen">
            <stop stopColor="var(--teal-light)" stopOpacity="0" />
            <stop offset=".38" stopColor="var(--teal-light)" stopOpacity=".03" />
            <stop offset=".52" stopColor="var(--teal-light)" stopOpacity=".17" />
            <stop offset=".63" stopColor="var(--teal-light)" stopOpacity=".03" />
            <stop offset="1" stopColor="var(--teal-light)" stopOpacity="0" />
          </linearGradient>
          <filter id="core-glass-blur"><feGaussianBlur stdDeviation="7 1.5" /></filter>
        </defs>
        <path d="M170 66H940L1100 240H0Z" fill="url(#core-glass-surface)" />
        <g filter="url(#core-glass-blur)">
          <path d="M320 78L260 204H322L360 78Z M736 78L782 208H844L782 78Z" fill="url(#core-floor-reflection)" opacity=".12" />
          <path d="M470 78L426 235H660L624 78Z" fill="url(#core-glass-sheen)" opacity=".65" />
          <path d="M110 119L936 107L1010 122L160 140Z" fill="url(#core-glass-sheen)" />
          <path d="M0 163L900 150L1100 172L40 189Z" fill="url(#core-glass-sheen)" opacity=".65" />
        </g>
        <ellipse cx="560" cy="94" rx="304" ry="18" fill="#01090b" fillOpacity=".75" />
        <g fill="none" stroke="url(#core-floor)" strokeWidth=".65">
          <ellipse cx="560" cy="94" rx="304" ry="18" />
          <ellipse cx="560" cy="98" rx="388" ry="26" opacity=".42" />
          <path d="M256 95Q560 133 864 95" strokeWidth="1.4" opacity=".7" />
          <path d="M256 100Q560 138 864 100" opacity=".2" />
          <path d="M0 153L365 147M705 147L1100 153M110 184L960 181" opacity=".35" />
          <path d="M170 103Q560 143 950 103" strokeWidth="3" opacity=".2" filter="url(#core-floor-glow)" />
        </g>
        <ellipse cx="560" cy="153" rx="175" ry="23" fill="url(#core-floor-pool)" />
        <motion.g animate={reduceMotion ? undefined : { opacity: [.65, 1, .65] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          {[[180, 150], [300, 119], [830, 119], [985, 151]].map(([x, y]) => (
            <g key={x}>
              <rect x={x - 5} y={y - 3} width="10" height="7" fill="var(--teal-light)" opacity=".45" filter="url(#core-floor-glow)" />
              <rect x={x - 1.5} y={y - 2} width="3" height="3" fill="var(--teal-light)" opacity=".8" />
              <path d={`M${x - 1.5} ${y + 3}h3l4 33h-11Z`} fill="url(#core-floor-reflection)" opacity=".4" filter="url(#core-glass-blur)" />
              <ellipse cx={x} cy={y + 17} rx="27" ry="9" fill="url(#core-floor-pool)" />
            </g>
          ))}
          <ellipse cx="560" cy="153" rx="100" ry="9" fill="url(#core-floor-pool)" />
        </motion.g>
      </svg>

      <div className="core-hero-layout relative mx-auto grid w-full max-w-[1920px] items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-[3%]">
        <motion.div
          className="max-w-[610px] self-start"
          initial={reduceMotion ? false : { opacity: 0, x: -38 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-sm border border-[var(--teal)]/30 bg-white/[0.05] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--teal-light)]">
            <span className="h-1.5 w-1.5 animate-[pulse_2s_infinite] rounded-full bg-[var(--teal-light)] shadow-[0_0_10px_var(--teal-glow)]" />
            FutuDrill Platform
          </div>
          <h1 className="core-hero-title text-[clamp(38px,4vw,60px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
            FutuDrill <span className="text-[var(--teal-light)]">Core</span>
          </h1>
          <h2 className="mt-5 text-[clamp(21px,2vw,30px)] font-bold leading-[1.18] tracking-[-0.02em] text-white/95">
            Real-Time Drilling Monitoring.<br />Complete Operational Visibility.
          </h2>
          <p className="site-section-description mt-6 max-w-[590px] !text-[15px] !leading-[1.75]">
            FutuDrill Core brings live PLC data, configurable dashboards, operational gauges, trend analysis, alarms, and drilling recorder views into one centralized monitoring platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button type="button" onClick={() => goToContact("contact-form")} className="inline-flex min-w-[168px] items-center justify-center rounded-[2px] border border-[var(--teal)] bg-[var(--teal)] px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[#041012] transition hover:-translate-y-0.5 hover:bg-[var(--teal-light)]">
              Request Demo
            </button>
            <button type="button" onClick={() => goToContact("contact")} className="hero-contact-button inline-flex min-w-[168px] items-center justify-center rounded-[2px] px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white">
              Contact Us <span aria-hidden="true" className="ml-2">→</span>
            </button>
          </div>

          <div className="mt-12 grid w-full max-w-[610px] grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-4">
            {["Live|PLC Data", "Custom|Dashboards", "Trend|Analysis", "Reports|Export"].map((item) => {
              const [value, label] = item.split("|");
              return (
                <div className="group flex min-w-0 flex-col gap-1.5 border border-white/[0.09] bg-white/[0.025] px-4 py-4 transition-colors hover:border-[var(--teal)]/45 hover:bg-[var(--teal)]/[0.04]" key={item}>
                  <strong className="text-[16px] font-bold leading-tight text-white transition-colors group-hover:text-[var(--teal-light)] sm:text-[18px]">{value}</strong>
                  <span className="text-[10px] font-medium uppercase leading-[1.4] tracking-[0.1em] text-white/50">{label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="core-hero-diagram relative min-w-0"
          initial={reduceMotion ? false : { opacity: 0, x: 45, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative px-1 py-8 sm:px-3 lg:py-12">
            <svg aria-hidden="true" className="core-hero-rings" viewBox="0 0 600 600">
              <g fill="none" stroke="var(--teal-light)" strokeWidth="0.8">
                <circle cx="300" cy="300" r="185" opacity=".35" />
                <circle cx="300" cy="300" r="219" opacity=".12" />
                <circle cx="300" cy="300" r="252" opacity=".18" strokeDasharray="520 180 160 724" transform="rotate(-95 300 300)" />
                <circle cx="300" cy="300" r="279" opacity=".12" strokeDasharray="670 160 300 624" transform="rotate(-100 300 300)" />
                <motion.g animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "300px 300px" }}>
                  <circle cx="300" cy="300" r="238" opacity=".22" strokeDasharray="170 1325" />
                  <circle cx="538" cy="300" r="2" fill="var(--teal-light)" stroke="none" opacity=".7" />
                </motion.g>
              </g>
            </svg>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-[var(--teal-light)]/[0.055] to-transparent blur-sm"
              animate={reduceMotion ? undefined : { x: ["-180px", "900px"] }}
              transition={{ duration: 6.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              <CoreArchitecture visualOnly />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
