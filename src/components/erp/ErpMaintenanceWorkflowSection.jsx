import React, { useEffect, useRef, useState } from "react";
import { CalendarClock, CheckCircle2, ClipboardList, FileText } from "lucide-react";

const workflowSteps = [
  {
    icon: FileText,
    title: "Work Order Creation",
    description:
      "Work orders can be created through AI predictive model triggers, sensor threshold breaches, scheduled preventive maintenance plans, or manual supervisor entry.",
    details: ["AI & Sensor Triggers", "Scheduled & Manual Work Orders"],
  },
  {
    icon: CalendarClock,
    title: "Technician Auto-Assignment",
    description:
      "Work orders are automatically routed to available technicians based on their skills, assigned zones, and equipment criticality ratings.",
    details: ["Skill & Zone", "Criticality Rating"],
  },
  {
    icon: ClipboardList,
    title: "Field Maintenance & Verification",
    description:
      "Technicians update work order status and attach verification photos through mobile access. AI vision detects maintenance-specific physical actions, while face recognition confirms technician identity.",
    details: ["Mobile Work Order Updates", "AI Maintenance Verification"],
  },
  {
    icon: CheckCircle2,
    title: "Verified Closure & Inventory Update",
    description:
      "Work orders automatically close upon visual confirmation, while unverified tasks remain open. Closing a work order automatically deducts consumed spare parts from inventory stock, and verified tasks generate time-stamped audit records.",
    details: ["Verified Work Order Closure", "Automatic Parts Deduction"],
  },
];

const workflowImage =
  process.env.PUBLIC_URL + "/Cinematic%20Teal%20Maintenance%20Dashboard.png";

export default function ErpMaintenanceWorkflowSection() {
  const sectionRef = useRef(null);
  const isIntersectingRef = useRef(false);
  const [isActive, setIsActive] = useState(false);
  const [animationRun, setAnimationRun] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersectingRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          setAnimationRun((run) => run + 1);
          setIsActive(true);
          return;
        }

        setIsActive(false);
      },
      { rootMargin: "-12% 0px -12% 0px", threshold: 0.08 }
    );

    const replayAfterBreakpointChange = () => {
      if (!isIntersectingRef.current) return;
      setAnimationRun((run) => run + 1);
    };

    observer.observe(section);
    desktopQuery.addEventListener("change", replayAfterBreakpointChange);

    return () => {
      observer.disconnect();
      desktopQuery.removeEventListener("change", replayAfterBreakpointChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`erp-workflow relative overflow-hidden border-b border-white/[0.08] bg-[#050809] px-[5%] pb-4 pt-8 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_8%_52%,rgba(26,159,160,0.08),transparent_28%),radial-gradient(circle_at_78%_34%,rgba(26,159,160,0.045),transparent_32%)] sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12 ${isActive ? "is-active" : ""}`}
    >
      <div className="relative mx-auto grid w-full max-w-[1920px] items-stretch gap-12 lg:grid-cols-[minmax(0,1.06fr)_56px_minmax(420px,0.94fr)] lg:gap-7 xl:gap-10">
        <div className="flex flex-col">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a9fa0]">
            Maintenance Workflow
          </p>
          <h2 className="mt-4 max-w-[620px] text-[clamp(36px,4.7vw,56px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
            From Fault Detection to <span className="text-[#1a9fa0]">Verified Resolution.</span>
          </h2>
          <p className="site-section-description mt-6 max-w-[590px]">
            A computerized maintenance management system supporting AI-triggered, sensor-threshold, scheduled preventive maintenance, and manual work order creation. Work orders are assigned to available technicians, updated through mobile access, and tracked through to verified resolution.
          </p>

          <div className="relative mt-8 aspect-[4/3] w-full max-w-[680px] overflow-hidden bg-[#050809]">
            {workflowImage ? (
              <img
                src={workflowImage}
                alt="Cinematic laptop displaying the FutuDrill ERP work orders and maintenance dashboard"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_48%,rgba(26,159,160,0.12),transparent_24%),linear-gradient(to_bottom,transparent_0%,rgba(10,23,25,0.52)_38%,transparent_100%)] opacity-70" />
            )}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#050809_0%,transparent_8%,transparent_92%,#050809_100%),linear-gradient(to_bottom,#050809_0%,transparent_7%,transparent_90%,#050809_100%)]" />
          </div>
        </div>

        <div key={`timeline-${animationRun}`} className="erp-workflow__timeline hidden h-full min-h-[480px] flex-col items-center py-5 lg:flex" aria-hidden="true">
          {workflowSteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <span className="erp-workflow__node" style={{ animationDelay: `${index * 1.25}s` }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < workflowSteps.length - 1 && (
                <span className="erp-workflow__track">
                  <span className="erp-workflow__line" style={{ animationDelay: `${0.48 + index * 1.25}s` }} />
                  <span className="erp-workflow__line-head" style={{ animationDelay: `${0.48 + index * 1.25}s` }} />
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div key={`cards-${animationRun}`} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {workflowSteps.map(({ icon: Icon, title, description, details }, index) => (
            <article
              key={title}
              className="erp-workflow__card group relative flex gap-5 overflow-hidden rounded-[6px] border border-white/[0.07] bg-[linear-gradient(110deg,#0b1517_0%,#0a1214_100%)] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.16)] transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#1a9fa0]/45 hover:bg-[#0e1719] sm:p-6"
              style={{
                animationDelay: `${0.12 + index * 1.25}s`,
                "--workflow-delay": `${0.12 + index * 1.25}s`,
              }}
            >
              <div className="erp-workflow__card-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] border border-[#1a9fa0]/30 bg-[#1a9fa0]/[0.12] text-[#22c4c5] transition-colors duration-300 group-hover:border-[#1a9fa0]/55">
                <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="site-card-title">{title}</h3>
                <p className="site-card-description mt-2">{description}</p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {details.map((detail) => (
                    <li className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.08em] text-white/45" key={detail}>
                      <span className="h-1 w-1 bg-[#1a9fa0]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
