import React from "react";
import { SearchX } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070909] px-6 pb-16 pt-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,196,197,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a9fa0]/10 blur-[120px]" />

      <section className="relative z-10 mx-auto w-full max-w-[820px] text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#22c4c5]/35 bg-[#22c4c5]/10 text-[#22c4c5] shadow-[0_0_35px_rgba(34,196,197,0.12)]">
          <SearchX size={25} strokeWidth={1.7} />
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.32em] text-[#22c4c5]">
          Error · Page Not Found
        </p>

        <h1 className="mt-2 text-[clamp(110px,22vw,220px)] font-black leading-[0.9] tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(34,196,197,0.5)]">
          404
        </h1>

        <div className="mx-auto mt-3 h-px w-20 bg-[#22c4c5]/60" />

        <h2 className="mt-8 text-3xl font-extrabold uppercase tracking-[-0.02em] sm:text-5xl">
          Lost Beyond the <span className="text-[#22c4c5]">Rig</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-sm font-light leading-7 text-white/50 sm:text-base">
          The page you are looking for does not exist, has moved, or is no longer available.
          Let&apos;s get you back to familiar ground.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button type="button" onClick={() => navigate("/")} className="inline-flex min-w-[168px] items-center justify-center rounded-[2px] border border-[#1a9fa0] bg-[#1a9fa0] px-7 py-3.5 font-['Manrope'] text-[13px] font-bold uppercase tracking-[0.08em] text-[#041012] transition-all hover:-translate-y-0.5 hover:border-[#22c4c5] hover:bg-[#22c4c5]">Back Home</button>
          <button type="button" onClick={() => navigate(-1)} className="inline-flex min-w-[168px] items-center justify-center rounded-[2px] border border-white/30 bg-transparent px-7 py-3.5 font-['Manrope'] text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:border-[#22c4c5] hover:text-[#22c4c5]">Go Back</button>
        </div>
      </section>

      <p className="absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-[0.25em] text-white/20">
        Strideind Innovations
      </p>
    </main>
  );
}
