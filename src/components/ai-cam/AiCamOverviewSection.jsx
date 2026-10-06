import React from "react";
export default function AiCamOverviewSection() {
  return (
    <section className="bg-transparent px-[4%] py-12 font-['Manrope'] sm:py-16 lg:px-[5%] lg:py-16">
      <div className="relative mx-auto min-h-[360px] w-full max-w-[1440px] overflow-hidden bg-transparent lg:min-h-[470px]">
        <div className="relative z-10 flex min-h-[360px] w-full flex-col justify-center px-6 py-10 sm:px-10 lg:min-h-[470px] lg:w-[56%] lg:px-14 xl:px-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">
            Overview
          </p>

          <h2 className="mt-4 text-[clamp(32px,3.2vw,48px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white">
            24/7 Intelligent<br />
            <span className="text-[#22c4c5] [text-shadow:0_0_24px_rgba(34,196,197,0.22)]">
              Site Monitoring.
            </span>
          </h2>

          <p className="mt-6 max-w-[520px] text-[14px] font-light leading-[1.85] text-white/65 sm:text-[15px]">
            FutuDrill AI CAM continuously monitors critical areas, detects
            unusual activity in real time, and sends instant alerts so your
            team can respond faster and keep every operation safer. A live
            remote view gives operators continuous visibility across the site,
            helping them identify risks early and make informed decisions
            without being physically present at every location.
          </p>

        </div>

        <div className="relative h-[280px] w-full overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[68%]">
          <img
            src={process.env.PUBLIC_URL + "/ChatGPT%20Image%20Oct%203%2C%202026%2C%2003_45_53%20PM.png"}
            alt="Industrial security camera mounted on an office wall"
            className="h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#05090b] from-[0%] via-[#05090b]/90 via-[18%] to-transparent to-[48%] lg:block" />
        </div>
      </div>
    </section>
  );
}
