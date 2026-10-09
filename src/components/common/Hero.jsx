import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

export default function Hero({ data = {} }) {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const images = (data.images || []).map((url) => ({ url }));
  const descriptions = data.descriptions || [];
  const stats = data.stats || [];
  const sectionLayout = "pb-20 pt-[160px] max-md:pb-16 max-md:pt-[108px]";
  const mediaLayout = "absolute inset-0 z-0 h-full w-full";
  const contentLayout = "ml-[5%] max-w-[680px] px-5 max-lg:max-w-[560px] max-md:ml-0 max-md:w-full";
  const mediaOverlay = "bg-[linear-gradient(to_right,rgba(10,10,10,0.92)_0%,rgba(10,10,10,0.72)_40%,rgba(10,10,10,0.45)_100%)]";

  const primaryAction = {
    label: "Request Demo",
    target: "contact-form",
    ...data.primaryAction,
  };
  const secondaryAction = {
    label: "Contact Us",
    target: "contact",
    ...data.secondaryAction,
  };

  const goToContact = (target) => {
    if (window.location.pathname === "/") {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate("/", { state: { scrollTo: target } });
  };

  return (
    <section
      className={`hero relative flex min-h-screen items-start overflow-hidden bg-[#0a0a0a] ${sectionLayout}`}
      id={data.id}
    >
      <div className="hero-grid pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="hero-gradient pointer-events-none absolute -left-[200px] -top-[200px] h-[700px] w-[700px] bg-[radial-gradient(circle,rgba(26,159,160,0.12)_0%,transparent_70%)]" />

      <motion.div
        className={`hero-video overflow-hidden after:hidden ${mediaLayout}`}
        initial={reduceMotion ? false : { opacity: 0.4, scale: 1.07 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {data.useSlider && images.length > 0 ? (
          <SimpleImageSlider
            width="100%"
            height="100%"
            images={images}
            showBullets={images.length > 1}
            showNavs={false}
            autoPlay={images.length > 1}
            autoPlayDelay={5}
          />
        ) : data.image ? (
          <picture className="block h-full w-full">
            <img
              src={data.image}
              alt={data.imageAlt || ""}
              className={`h-full w-full object-cover ${data.imagePosition || "object-center"}`}
            />
          </picture>
        ) : null}

        <div className={`pointer-events-none absolute inset-0 z-[1] ${mediaOverlay}`} />
      </motion.div>

      <motion.div
        className={`hero-content relative z-[2] ${contentLayout}`}
        initial={reduceMotion ? false : { opacity: 0, x: -42, filter: "blur(8px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        {data.badge && (
          <div className="hero-badge mb-8 inline-flex items-center gap-2 rounded-sm border border-[#1a9fa0]/30 bg-white/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#22b8b9]">
            <span className="h-1.5 w-1.5 animate-[pulse_2s_infinite] rounded-full bg-[#1a9fa0]" />
            {data.badge}
          </div>
        )}

        {data.eyebrow && (
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white/55">
            {data.eyebrow}
          </p>
        )}

        <h1 className="hero-title mb-7 text-[clamp(38px,6vw,60px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
          {data.title}
        </h1>

        {data.subtitle && (
          <h2 className="mb-5 text-[clamp(21px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.02em] text-white/95">
            {data.subtitle}
          </h2>
        )}

        {descriptions.map((text, index) => (
          <p
            className="hero-sub mb-5 max-w-[590px] text-base font-light leading-[1.8] text-white/55"
            key={index}
          >
            {text}
          </p>
        ))}

        {data.tagline && (
          <p className="max-w-[590px] text-sm font-bold leading-[1.7] tracking-[0.04em] text-white/80">
            {data.tagline}
          </p>
        )}

        {data.showActions !== false && (
          <div className="mb-12 mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => goToContact(primaryAction.target)}
              className="inline-flex min-w-[168px] items-center justify-center rounded-[2px] border border-[#1a9fa0] bg-[#1a9fa0] px-7 py-3.5 font-['Manrope'] text-[13px] font-bold uppercase tracking-[0.08em] text-[#041012] transition-all hover:-translate-y-0.5 hover:border-[#22c4c5] hover:bg-[#22c4c5]"
            >
              {primaryAction.label}
            </button>
            <button
              type="button"
              onClick={() => goToContact(secondaryAction.target)}
              className="hero-contact-button group inline-flex min-w-[168px] appearance-none items-center justify-center rounded-[2px] border border-solid bg-transparent px-7 py-3.5 font-['Manrope'] text-[13px] font-bold uppercase tracking-[0.08em] text-white"
            >
              {secondaryAction.label}
              <span aria-hidden="true" className="arrow ml-1.5 inline-block">→</span>
            </button>
          </div>
        )}

        {stats.length > 0 && (
          <div className="hero-stats grid w-full grid-cols-4 items-start gap-0 md:flex md:w-auto md:items-center md:gap-8">
            {stats.map((stat, index) => (
              <div
                className={`group flex min-w-0 flex-col gap-1 px-2 transition-transform hover:-translate-y-1.5 md:px-0 ${
                  index > 0 ? "border-l border-white/20 md:pl-8" : ""
                }`}
                key={stat.label}
              >
                <span className="whitespace-nowrap text-[16px] font-bold leading-tight text-white group-hover:text-[#1a9fa0] sm:text-[18px] md:text-[20px]">
                  {stat.value}
                </span>
                <span className="text-[7px] font-light uppercase leading-[1.35] tracking-[0.04em] text-white/50 sm:text-[9px] md:text-[11px] md:tracking-[0.08em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      <div aria-hidden="true" className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="scroll-line" />
      </div>
    </section>
  );
}
