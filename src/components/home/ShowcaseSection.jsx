import React from "react";
import Reveal from "../common/Reveal";

const capabilities = [
  {
    title: "Drilling Technologies",
    desc: "Advanced solutions for drilling and workover operations,combining precision engineering with modern automation systems",
    img: "https://fatfinger.io/wp-content/uploads/2024/02/petroleum-engineer-using-laptop-in-oil-field-2023-11-27-05-09-49-utc-scaled.jpg",
  },
  {
    title: "Software Services",
    desc: "Intelligent platforms for monitoring, control, and data analysis—delivering real-time operational intelligence for crews and management.",
    img: "https://cms.etteplan.com/app/uploads/2023/12/Software-services-scaled-aspect-ratio-5-3-2048x1229.jpg",
  },
  {
    title: "Power and Control Solution",
    desc: "Reliable electrical and automation systems for rig operations with intelligent energy management and fault-tolerant design.",
    img: "https://elecsafety.co.uk/wp-content/uploads/2022/09/Safe-Electrical-Control-Panel-pnn2i56aiafwh84k2gjwpg4ccxc0yxjteubu5bi3ao.jpg",
  },
  {
    title: "IT & Communication",
    desc: "Integrated networking solutions—satellite, intercom, talkback systems, and full IT infrastructure for seamless operations.",
    img: "https://www.techquintal.com/wp-content/uploads/2021/10/Types-of-Communication-Technology.jpg",
  },
];

export default function ShowcaseSection() {
  const handleMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const rotateX = -((event.clientY - rect.top) / rect.height - 0.5) * 15;
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 15;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  return (
    <>
      <Reveal className="capabilities-header mb-10 max-w-[600px]">
        <div className="section-label mb-4 text-xs uppercase tracking-[0.12em] text-[#1a9fa0]">WHAT WE DO</div>
        <h2 className="section-title text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] text-white">Core <span className="teal text-[#1a9fa0]">Capabilities</span></h2>
      </Reveal>
      <div className="pillars grid grid-cols-4 gap-[30px] [perspective:1200px] max-[900px]:grid-cols-1">
        {capabilities.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.07}>
          <div className="pillar group relative h-[260px] cursor-pointer overflow-hidden rounded-2xl bg-cover bg-center transition-transform duration-200 [transform-style:preserve-3d] max-[900px]:h-[220px]" key={item.title} style={{ backgroundImage: `url(${item.img})` }} onMouseMove={handleMove} onMouseLeave={(event) => { event.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)"; }}>
            <div className="pillar-overlay absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.4),rgba(10,10,10,0.9))]" />
            <div className="pillar-content absolute bottom-0 z-[2] translate-y-5 p-6 transition-transform duration-[400ms] ease-in-out group-hover:translate-y-0">
              <h4 className="pillar-title text-lg font-bold text-white">{item.title}</h4>
              <p className="site-card-description pillar-desc mt-2 -translate-x-5 opacity-0 transition-all duration-[400ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100">{item.desc}</p>
            </div>
          </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

