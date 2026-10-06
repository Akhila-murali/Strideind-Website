import React from "react";
import { Orbit, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ComingSoon({
  description = "We are actively building the comprehensive detail page for this product. Please check back later!",
}) {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070909] px-6 pb-16 pt-28 text-white sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,196,197,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-[#1a9fa0]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-176px)] w-full max-w-[1280px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="max-w-[700px]">
          <div className="inline-flex items-center gap-3 border border-[#22c4c5]/25 bg-[#22c4c5]/[0.06] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c4c5] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c4c5]" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#22c4c5]">
              Product In Development
            </span>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
            Something powerful is on the way
          </p>

          <h1 className="mt-4 text-[clamp(64px,10vw,132px)] font-black uppercase leading-[0.78] tracking-[-0.07em]">
            <span className="block text-white">Coming</span>
            <span className="block text-transparent [-webkit-text-stroke:1px_rgba(34,196,197,0.7)]">Soon</span>
          </h1>

          <div className="mt-9 flex max-w-[590px] gap-5 border-l-2 border-[#22c4c5]/60 pl-5">
            <p className="text-sm font-light leading-7 text-white/50 sm:text-base">
              {description}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button type="button" onClick={() => navigate("/")} className="inline-flex min-w-[168px] items-center justify-center rounded-[2px] border border-[#1a9fa0] bg-[#1a9fa0] px-7 py-3.5 font-['Manrope'] text-[13px] font-bold uppercase tracking-[0.08em] text-[#041012] transition-all hover:-translate-y-0.5 hover:border-[#22c4c5] hover:bg-[#22c4c5]">Back Home</button>
            <button type="button" onClick={() => navigate(-1)} className="inline-flex min-w-[168px] items-center justify-center rounded-[2px] border border-white/30 bg-transparent px-7 py-3.5 font-['Manrope'] text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:border-[#22c4c5] hover:text-[#22c4c5]">Go Back</button>
          </div>
        </section>

        <div className="relative mx-auto hidden aspect-square w-full max-w-[500px] place-items-center lg:grid">
          <div className="absolute inset-[4%] rounded-full border border-[#22c4c5]/10" />
          <div className="absolute inset-[16%] rounded-full border border-dashed border-[#22c4c5]/25" />
          <div className="absolute inset-[29%] rounded-full border border-[#22c4c5]/35 shadow-[0_0_60px_rgba(34,196,197,0.08)]" />

          <div className="absolute left-[15%] top-[26%] h-2 w-2 rounded-full bg-[#22c4c5] shadow-[0_0_14px_#22c4c5]" />
          <div className="absolute bottom-[19%] right-[24%] h-1.5 w-1.5 rounded-full bg-white/60" />
          <Orbit className="absolute right-[7%] top-[45%] text-[#22c4c5]/50" size={30} strokeWidth={1.2} />

          <div className="relative grid h-36 w-36 place-items-center rounded-full border border-[#22c4c5]/30 bg-[#0b1515] text-[#22c4c5] shadow-[0_0_80px_rgba(34,196,197,0.16)]">
            <div className="absolute inset-3 rounded-full border border-white/[0.06]" />
            <Rocket size={48} strokeWidth={1.25} />
          </div>

          <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/25">Launch Sequence</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="h-1 w-10 bg-[#22c4c5]" />
              <span className="h-1 w-6 bg-[#22c4c5]/45" />
              <span className="h-1 w-3 bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      <p className="absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-[0.25em] text-white/20">
        Strideind Innovations
      </p>
    </main>
  );
}
