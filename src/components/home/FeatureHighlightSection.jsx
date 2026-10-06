import React from "react";
import { Link } from "react-router-dom";

const sections = {
  about: {
    layoutClassName: "about-layout",
    contentClassName: "about-left",
    mediaClassName: "about-right",
    label: "Who We Are",
    title: <>The<span className="teal text-[#1a9fa0]"> Strideind</span></>,
    descriptions: [
      <><br />Strideind Innovations Pvt. Ltd. is a specialized engineering and technology company delivering advanced solutions for the drilling industry. We provide integrated products and services including sensors, software, equipment, and automation systems designed to enhance operational efficiency, safety, and reliability</>,
      <>Our expertise extends across resource management, workforce training, and real-time operational optimization. By combining field experience with modern technologies, we deliver scalable and practical solutions tailored to complex drilling environments. Recognized by DPIIT as a startup, Strideind is committed to driving digital transformation in drilling operations, supporting contractors with innovative solutions that improve performance, reduce downtime, and enable smarter decision-making</>,
    ],
    descriptionClassName: "about-text",
    action: { label: "Work With Us", href: "#contact", className: "btn-primary about-btn" },
    image: process.env.PUBLIC_URL + "/drilling%20rig.jpg",
    imageAlt: "Industrial facility",
    imageWrapClassName: "about-img-wrap",
    badge: { value: "15+", label: "Years of Excellence" },
  },
  product: {
    id: "products",
    sectionClassName: "products section",
    layoutClassName: "futudrill-hero",
    contentClassName: "futudrill-hero-left",
    mediaClassName: "futudrill-hero-right",
    label: "Everything You Need to Run",
    title: <>Smarter Drilling Operations <br /><span className="teal text-[#1a9fa0]">Platform</span></>,
    titleStyle: { marginBottom: "20px" },
    descriptions: [
      "Futudrill is a unified software and hardware architecture designed for complete drilling operations. It integrates multiple control and monitoring systems into a single platform, enabling seamless operation without interruption.",
    ],
    descriptionClassName: "futudrill-hero-desc",
    action: { label: "LEARN MORE", to: "/products/futudrill/core", className: "btn-primary mt-4 inline-block" },
    image: process.env.PUBLIC_URL + "/bg2.png",
    imageAlt: "Futudrill Platform",
    imageWrapClassName: "futudrill-hero-img-wrap",
  },
};

export default function FeatureHighlightSection({ variant }) {
  const data = sections[variant];
  const embedded = variant === "about";
  const isAbout = variant === "about";
  const isProduct = variant === "product";
  const layout = (
    <div className={`${data.layoutClassName} ${isAbout ? "mb-[100px] grid grid-cols-2 items-start gap-20 max-[900px]:grid-cols-1" : ""} ${isProduct ? "mb-20 flex items-center gap-[60px] max-[991px]:mb-0 max-[991px]:flex-col max-[991px]:gap-10" : ""}`}>
      
      {/* Content */}
      <div className={`${data.contentClassName} ${isAbout ? "max-w-[600px]" : ""} ${isProduct ? "flex-1" : ""}`}>
        <div className={`section-label ${(isAbout || isProduct) ? "mb-4 text-xs uppercase tracking-[0.12em] text-[#1a9fa0]" : ""}`}>
          {data.label}
        </div>

        <h2
          className={`section-title ${(isAbout || isProduct) ? "text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] text-white" : ""}`}
          style={data.titleStyle}
        >
          {data.title}
        </h2>

        {data.descriptions.map((description, index) => (
          <p
            key={index}
            className={`${data.descriptionClassName} ${isAbout ? "mb-4 text-[15px] font-light leading-[1.85] text-white/50" : ""} ${isProduct ? "mb-[30px] max-w-[90%] text-base leading-[1.8] text-white/50 max-[991px]:max-w-full" : ""}`}
          >
            {description}
          </p>
        ))}

        {data.action?.to && (
          <Link
            to={data.action.to}
            className={`${data.action.className} ${isAbout ? "mt-5 inline-block rounded-sm bg-[#1a9fa0] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-black no-underline transition-all hover:-translate-y-0.5 hover:bg-[#22b8b9]" : ""} ${isProduct ? "mt-4 inline-block rounded-sm bg-[#1a9fa0] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-black no-underline transition-all hover:-translate-y-0.5 hover:bg-[#22b8b9]" : ""}`}
          >
            {data.action.label}
          </Link>
        )}

        {data.action?.href && (
          <a
            href={data.action.href}
            className={`${data.action.className} ${isAbout ? "mt-5 inline-block rounded-sm bg-[#1a9fa0] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-black no-underline transition-all hover:-translate-y-0.5 hover:bg-[#22b8b9]" : ""}`}
          >
            {data.action.label}
          </a>
        )}
      </div>

      {/* Image */}
      <div className={`${data.mediaClassName} ${isProduct ? "relative flex-1" : ""}`}>
        <div className={`${data.imageWrapClassName} ${isAbout ? "relative overflow-hidden rounded-xl" : ""} ${isProduct ? "relative overflow-hidden rounded-xl border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.5)]" : ""}`}>
          <img
            src={data.image}
            alt={data.imageAlt}
            className={isAbout ? "block h-[500px] w-full object-cover" : isProduct ? "block w-full object-cover" : ""}
          />

          {data.badge && (
            <div className="about-img-badge absolute bottom-5 left-5 flex !min-h-[114px] !w-[108px] flex-col !items-start !justify-center rounded-lg bg-[#1a9fa0] !px-[22px] !py-4">
              <span className="badge-num text-[32px] font-extrabold text-black">
                {data.badge.value}
              </span>

              <span className="badge-txt w-[64px] !text-left text-xs font-bold !leading-[1.5] text-black/70">
                {data.badge.label}
              </span>
            </div>
          )}
        </div>
      </div>

    </div>
  );

  if (embedded) {
    return layout;
  }

  return (
    <section
      className={`${data.sectionClassName} ${isProduct ? "relative overflow-hidden bg-[#0a0a0a] py-[120px] max-[991px]:py-16" : ""}`}
      id={data.id}
    >
      <div className="mx-auto w-[90%]">
        {layout}
      </div>
    </section>
  );
}
