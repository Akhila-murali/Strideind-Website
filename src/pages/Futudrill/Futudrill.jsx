import React, { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import Hero from "../../components/common/Hero";
import ProvenOperationsSection from "../../components/futudrill/ProvenOperationsSection";
import FutudrillModuleSection from "../../components/futudrill/FutudrillModuleSection";
import HorizontalScroll from "../../components/common/HorizontalScroll";
import Footer from "../../components/layout/Footer";

const heroData = {
  variant: "futudrill",
  useSlider: true,
  images: [
    process.env.PUBLIC_URL + "/ChatGPT%20Image%20Oct%201,%202026,%2012_09_28%20PM.png",
    process.env.PUBLIC_URL + "/ChatGPT%20Image%20Oct%201,%202026,%2012_09_43%20PM.png",
    process.env.PUBLIC_URL + "/ChatGPT%20Image%20Oct%201,%202026,%2012_10_00%20PM.png",
  ],
  badge: "OIL & GAS TECHNOLOGY",
  eyebrow: "FLAGSHIP PLATFORM",
  title: <>FUTU<span className="text-[#1a9fa0]">DRILL</span></>,
  descriptions: ["Futudrill is a unified software and hardware architecture designed for complete drilling operations. It integrates multiple control and monitoring systems into a single platform, enabling seamless operation without interruption. The system allows real-time monitoring and control of all rig activities while ensuring operational continuity even during system failures. By digitalizing every movement and process, Futudrill enhances decision-making, simplifies troubleshooting, and improves operational efficiency."],
  stats: [
    { value: "25%", label: "Cost & Downtime Reduction" },
    { value: "50%", label: "Less Manpower Dependency" },
    { value: "75%", label: "Remote Decision Improvement" },
    { value: "24/7", label: "Technical Support" },
  ],
};

export const solutions = [
  {
    num: "01", badge: "CORE SOLUTION", title: "DRILLING\nINSTRUMENTATION",
    desc: "Precision-grade sensors and downhole tools deliver accurate measurements of weight-on-bit, torque, rotary speed, and formation data. Engineered to perform in the harshest downhole environments.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600",
  },
  {
    num: "02", badge: "CORE SOLUTION", title: "FUEL & ENERGY\nMONITORING",
    desc: "Gain full visibility into fuel consumption across rigs, generators, and ancillary equipment. Our intelligent energy monitoring platform identifies inefficiencies in real time, enabling significant cost reductions and ESG compliance.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600",
  },
  {
    num: "03", badge: "CORE SOLUTION", title: "REAL-TIME REMOTE\nMONITORING",
    desc: "Monitor every parameter of your drilling operation from any device, anywhere in the world. Secure cloud platform with ultra-low latency, instant alerts, automated reporting, and historical trend analysis.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
  },
  {
    num: "04", badge: "SAFETY", title: "GAS DETECTION\nSYSTEM",
    desc: "Advanced fixed and portable gas detection with PLC integration, designed to ensure safety and compliance in drilling operations across all rig types and site configurations.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600",
  },
  {
    num: "05", badge: "PREDICTIVE", title: "CONDITION\nMONITORING",
    desc: "Real-time monitoring solutions for critical equipment, enabling predictive maintenance, performance optimization, and improved reliability. Reduce unplanned downtime before it impacts operations.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600",
  },
  {
    num: "06", badge: "STRIDEIND INNOVATIONS", title: "CCTV\nSYSTEMS",
    desc: "Explosion-proof and IP-based CCTV systems for drilling rigs, enabling real-time monitoring, recording, and remote access. Ruggedized for hazardous area classification and 24/7 operation.",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600",
  },
  {
    num: "07", badge: "SURVEILLANCE", title: "COLLISION\nAVOIDANCE SYSTEM",
    desc: "Re-programmable collision avoidance systems designed for safe operation across various rig types and operational environments. Prevent incidents with configurable detection zones and instant alerts.",
    img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=600",
  },
  {
    num: "08", badge: "COMMUNICATION", title: "INTERCOM &\nTALKBACK",
    desc: "Industrial intercom and talkback systems with satellite connectivity and comprehensive IT & networking solutions for seamless coordination across every level of rig operations.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600",
  },
];

/* ── SKELETON LOADER ── */
function FutudrillSkeleton() {
  return (
  <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">
    <nav className="relative z-10 flex items-center justify-between border-b border-white/[0.08] bg-[#0a0a0a] px-12 py-5 max-lg:px-8 max-sm:px-5">
      <div className="h-6 w-[140px] animate-skeleton-shimmer rounded-[2px] bg-[linear-gradient(90deg,#161616_25%,#2a2a2a_50%,#161616_75%)] bg-[length:200%_100%]" />
    </nav>
    <div className="relative flex min-h-[calc(100vh-61px)] w-full items-center overflow-hidden bg-[#0a0a0a]">
      <div className="relative z-[2] w-full max-w-[680px] px-16 py-20 max-md:px-5 max-md:py-12">
        <div className="mb-4 h-8 w-[180px] animate-skeleton-shimmer rounded-[2px] bg-[linear-gradient(90deg,#161616_25%,#2a2a2a_50%,#161616_75%)] bg-[length:200%_100%]" />
        <div className="mb-2.5 h-3.5 w-[140px] animate-skeleton-shimmer rounded-[2px] bg-[linear-gradient(90deg,#161616_25%,#2a2a2a_50%,#161616_75%)] bg-[length:200%_100%]" />
        <div className="mb-6 h-[70px] w-3/5 animate-skeleton-shimmer rounded-[2px] bg-[linear-gradient(90deg,#161616_25%,#2a2a2a_50%,#161616_75%)] bg-[length:200%_100%]" />
        <div className="mb-2.5 h-4 w-4/5 animate-skeleton-shimmer rounded-[2px] bg-[linear-gradient(90deg,#161616_25%,#2a2a2a_50%,#161616_75%)] bg-[length:200%_100%]" />
        <div className="mb-9 h-4 w-[70%] animate-skeleton-shimmer rounded-[2px] bg-[linear-gradient(90deg,#161616_25%,#2a2a2a_50%,#161616_75%)] bg-[length:200%_100%]" />
        <div className="flex gap-3.5">
          <div className="h-[50px] w-40 animate-skeleton-shimmer rounded-[2px] bg-[linear-gradient(90deg,#161616_25%,#2a2a2a_50%,#161616_75%)] bg-[length:200%_100%]" />
          <div className="h-[50px] w-40 animate-skeleton-shimmer rounded-[2px] bg-[linear-gradient(90deg,#161616_25%,#2a2a2a_50%,#161616_75%)] bg-[length:200%_100%]" />
        </div>
      </div>
    </div>
  </div>
  );
}

/* ── SOLUTION DETAIL PAGES ── */
export default function Futudrill() {
  const navigate = useNavigate();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [selectedSolution, setSelectedSolution] = useState(null);


  useLayoutEffect(() => {
    setIsPageLoading(true);
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);

    const loadingTimer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = '';
      setIsPageLoading(false);
    }, 800); // 800ms loader for a premium skeleton shimmer feel

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!selectedSolution) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedSolution(null);
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedSolution]);

  if (isPageLoading) return <FutudrillSkeleton />;

  return (
      <div className="product-detail">

        {/* IMAGE HERO */}
        <Hero data={heroData} />

        <ProvenOperationsSection />

        {/* CORE CAPABILITIES */}
        <FutudrillModuleSection variant="core" />
        <FutudrillModuleSection variant="connect" />
        <FutudrillModuleSection variant="insight" />
        <FutudrillModuleSection variant="control" />

        {/* ══════════════════════════════════════
            INTEGRATED SOLUTIONS — HORIZONTAL SCROLL
        ══════════════════════════════════════ */}
        <section className="overflow-hidden border-y border-white/[0.08] bg-[#111111] py-24">
          <div className="flex items-end justify-between gap-10 px-[5%] pb-12 max-lg:flex-col max-lg:items-start max-lg:pb-10">
            <div className="flex-1">
              <p className="mb-3.5 block text-left text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a9fa0]">INTEGRATED SOLUTIONS</p>
              <h2 className="mb-5 text-left text-[clamp(2.2rem,5.5vw,3.8rem)] font-extrabold uppercase leading-none tracking-[-0.02em] text-white">SOLUTIONS FOR<br /><span className="text-[#22c4c5]">EVERY LAYER.</span></h2>
              <p className="m-0 max-w-[720px] text-[15px] font-light leading-[1.8] text-white/50">
                Futudrill transforms complex drilling operations into streamlined, data-driven workflows —<br />
                from downhole instrumentation to cloud-connected dashboards accessible from<br />
                anywhere on Earth.
              </p>
            </div>
          </div>

          <HorizontalScroll>
            {solutions.map((solution) => (
              <button
                key={solution.num}
                type="button"
                className="group relative flex w-80 shrink-0 cursor-pointer appearance-none flex-col overflow-hidden border border-white/[0.08] bg-[#161616] text-left font-[inherit] transition-colors hover:border-[#1a9fa0]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22c4c5] max-[900px]:w-[290px] max-[600px]:w-[270px]"
                onClick={() => setSelectedSolution(solution)}
                aria-label={`View details about ${solution.title.replace("\n", " ")}`}
              >
                <div className="relative h-[190px] w-full shrink-0 overflow-hidden bg-[#1e1e1e] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[60px] after:bg-gradient-to-t after:from-[#161616] after:to-transparent after:content-[''] max-[900px]:h-[170px] max-[600px]:h-40">
                  {solution.img && <img className="block h-full w-full object-cover object-center opacity-75 transition-[transform,opacity] duration-500 group-hover:scale-105 group-hover:opacity-100" src={solution.img} alt={solution.title.replace("\n", " ")} draggable={false} />}
                  <div className="pointer-events-none absolute right-3.5 top-2.5 z-[2] text-[2.8rem] font-extrabold leading-none tracking-[-0.04em] text-white/[0.12] [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">{solution.num}</div>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
                  <div className="mb-3.5 w-fit border border-[#1a9fa0]/30 bg-[#1a9fa0]/[0.12] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#1a9fa0]">{solution.badge}</div>
                  <h3 className="mb-3 text-[11px] font-bold uppercase leading-[1.5] tracking-[0.14em] text-white">
                    {solution.title.split("\n").map((line, index) => (
                      <React.Fragment key={line}>{line}{index === 0 && <br />}</React.Fragment>
                    ))}
                  </h3>
                  <p className="m-0 flex-1 text-[13px] font-light leading-[1.75] text-white/50">{solution.desc}</p>
                </div>
              </button>
            ))}
          </HorizontalScroll>
        </section>

        {selectedSolution && (
          <div
            className="fixed inset-0 z-[5000] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="solution-modal-title"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedSolution(null);
            }}
          >
            <div className="relative max-h-[calc(100vh-32px)] w-full max-w-[1050px] overflow-y-auto rounded-lg border border-white/20 bg-[#0e1111] shadow-[0_28px_100px_rgba(0,0,0,0.85)] md:h-[min(560px,calc(100vh-48px))] md:overflow-hidden">
              <button
                type="button"
                className="absolute right-4 top-4 z-30 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/35 text-white/70 backdrop-blur-md transition-colors hover:border-[#22c4c5] hover:bg-[#1a9fa0]/15 hover:text-[#22c4c5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22c4c5] sm:right-5 sm:top-5"
                onClick={() => setSelectedSolution(null)}
                aria-label="Close solution details"
              >
                <X size={19} />
              </button>

              <div className="grid min-h-0 md:h-full md:grid-cols-[36%_64%]">
                <div className="order-2 flex flex-col px-6 pb-10 pt-7 md:order-1 md:border-r md:border-white/10 md:px-8 md:pb-10 md:pt-7 lg:px-9 lg:pb-12">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#22c4c5]">
                    Futudrill Solution
                  </p>

                  <div className="mt-5 text-[74px] font-light leading-none text-transparent [-webkit-text-stroke:1px_rgba(34,196,197,0.45)] md:mt-8 md:text-[92px]">
                    {selectedSolution.num}
                  </div>

                  <span className="mt-4 w-fit border border-[#1a9fa0]/50 bg-[#1a9fa0]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#22c4c5]">
                    {selectedSolution.badge}
                  </span>

                  <h2
                    id="solution-modal-title"
                    className="mt-4 text-2xl font-extrabold uppercase leading-[1.12] text-white md:text-[27px]"
                  >
                    {selectedSolution.title.split("\n").map((line) => (
                      <React.Fragment key={line}>{line}<br /></React.Fragment>
                    ))}
                  </h2>

                  <p className="mt-4 text-sm font-light leading-6 text-white/55">
                    {selectedSolution.desc}
                  </p>

                  <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5 md:mt-auto">
                    <span className="h-3 w-3 rounded-full bg-[#22c4c5] shadow-[0_0_14px_rgba(34,196,197,0.55)]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Status</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#22c4c5]">Coming Soon</span>
                  </div>
                </div>

                <div className="relative order-1 h-[250px] overflow-hidden bg-[#0e1111] md:order-2 md:h-full md:min-h-0">
                {selectedSolution.img && <img className="h-full w-full object-cover opacity-90" src={selectedSolution.img} alt={selectedSolution.title.replace("\n", " ")} />}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-[#0e1111] md:bg-[linear-gradient(to_right,#0e1111_0%,transparent_24%,transparent_100%),linear-gradient(to_top,#0e1111_0%,transparent_18%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0e1111] to-transparent md:hidden" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* I/O BOX */}

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-white/[0.08] bg-[#111111] px-12 py-[120px] text-center before:pointer-events-none before:absolute before:left-1/2 before:top-1/2 before:z-0 before:h-[600px] before:w-[600px] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[radial-gradient(circle,rgba(26,159,160,0.08)_0%,transparent_70%)] max-lg:px-8 max-sm:px-5">
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(6rem,18vw,14rem)] font-extrabold leading-none tracking-[0.04em] text-white/[0.02]">FUTUDRILL</div>
          <h2 className="relative z-[1] mb-[18px] text-[clamp(1.6rem,4vw,2.8rem)] font-extrabold uppercase tracking-[-0.02em] text-white">READY TO TRANSFORM YOUR <span className="text-[#22c4c5]">DRILLING OPERATIONS?</span></h2>
          <p className="relative z-[1] mb-10 text-[15px] font-light leading-[1.7] text-white/50">Schedule a platform walkthrough with a Futudrill specialist today.</p>
          <button
            className="relative z-[1] border-0 bg-[#1a9fa0] px-9 py-4 font-['Manrope'] text-sm font-bold uppercase tracking-[0.08em] text-[#0a0a0a] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#22c4c5]"
            onClick={() => navigate("/", { state: { scrollTo: "contact-form" } })}
          >
            Connect with Us →
          </button>
        </section>
        <Footer />

      </div>
  );
}
