import React from "react";
import Reveal from "./Reveal";

function StandardOverview({ data }) {
  const capabilities = data.capabilities || [];

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#050809] px-[5%] pb-4 pt-14 sm:py-16 lg:py-[74px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1a9fa0]/35 to-transparent" />
      <div className="mx-auto grid w-full max-w-[1920px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-[7%]">
        <Reveal className="max-w-[620px]" direction="left">
          <p className="mb-4 text-[12px] font-semibold tracking-[0.12em] text-[#19aeb2]">{data.eyebrow}</p>
          <h2 className="m-0 text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">{data.title}</h2>
          <p className="site-section-description mt-6 max-w-[590px]">{data.description}</p>
        </Reveal>
        <Reveal className="w-full max-w-[700px] justify-self-start" direction="right" delay={0.08} variant="image">
        <div className="relative aspect-video w-full overflow-hidden rounded-[12px] border border-[#1a9fa0]/25 bg-[#091216]">
          {data.image ? (
            <img src={data.image} alt={data.imageAlt || ""} className="absolute inset-0 h-full w-full object-cover object-center" />
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(145deg,#0b171a,#071013)]" role="img" aria-label={data.imageAlt || "Image placeholder"} />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-[#061014]/10" />
          {data.showCapabilities !== false && capabilities.length > 0 && (
            <div className="absolute right-[2.5%] top-[7%] hidden h-[44%] w-[35%] flex-col justify-center gap-[clamp(5px,0.7vw,10px)] rounded-[9px] border border-white/[0.08] bg-[#071217]/90 px-[clamp(9px,0.8vw,12px)] py-2 shadow-[0_10px_28px_rgba(0,0,0,0.25)] backdrop-blur-md md:flex">
              {capabilities.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-[clamp(7px,1.25vw,18px)]">
                  <Icon aria-hidden="true" strokeWidth={1.7} className="mt-0.5 h-[clamp(17px,1.6vw,24px)] w-[clamp(17px,1.6vw,24px)] shrink-0 text-[#15aeb2]" />
                  <div>
                    <h3 className="m-0 text-[clamp(11px,1vw,15px)] font-bold leading-tight text-white/90">{title}</h3>
                    <p className="mt-0.5 text-[clamp(6px,0.66vw,10px)] leading-[1.3] text-white/45 sm:mt-1 sm:whitespace-nowrap sm:leading-[1.4]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        </Reveal>
      </div>
    </section>
  );
}

function ConnectOverview({ data, variant }) {
  const capabilities = data.capabilities || [];
  const isControl = variant === "control";

  return (
    <section className="bg-transparent px-[5%] pb-8 pt-12 font-['Manrope'] lg:pb-8 lg:pt-16">
      <div className={`mx-auto grid w-full max-w-[1728px] items-center gap-10 bg-transparent lg:gap-[5%] ${isControl ? "xl:grid-cols-[0.9fr_1.1fr]" : "md:grid-cols-[0.9fr_1.1fr]"}`}>
        <Reveal className={`w-full max-w-[700px] ${isControl ? "justify-self-start xl:justify-self-end" : "justify-self-end"}`} direction="left" variant="image">
        <div className="aspect-video w-full overflow-hidden rounded-[12px] border border-white/[0.06]">
          <img
            src={data.image}
            alt={data.imageAlt || ""}
            className="h-full w-full object-cover object-center"
          />
        </div>
        </Reveal>

        <Reveal className="flex items-center py-4 md:py-8" direction="right" delay={0.08}>
          <div className="w-full max-w-[760px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">
              {data.eyebrow}
            </p>

            <h2 className="mt-4 text-[clamp(32px,3.3vw,50px)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
              {data.title}
            </h2>

            <p className="site-section-description mt-6 max-w-[680px]">
              {data.description}
            </p>

            {capabilities.length > 0 && (
              <div className={`mt-10 ${isControl ? "grid gap-3 sm:grid-cols-3 xl:gap-0 xl:divide-x xl:divide-white/10" : "hidden grid-cols-3 divide-x divide-white/10 lg:grid"}`}>
                {capabilities.map(({ icon: Icon, title, description }) => (
                  <div className={`flex gap-4 ${isControl ? "border border-white/[0.08] bg-[#071216]/70 p-5 xl:border-0 xl:bg-transparent xl:px-5 xl:py-0 xl:first:pl-0" : "px-5 first:pl-0"}`} key={title}>
                    <Icon
                      aria-hidden="true"
                      className="h-8 w-8 shrink-0 text-[#22c4c5]"
                      strokeWidth={1.8}
                    />
                    <div>
                      <h3 className="site-card-title">
                        {title}
                      </h3>
                      <p className="site-card-description mt-2">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Overview({ data, variant = "standard" }) {
  if (variant === "connect" || variant === "control") {
    return <ConnectOverview data={data} variant={variant} />;
  }

  return <StandardOverview data={data} />;
}
