import React, { useEffect, useRef, useState } from "react";
import { CalendarClock, CheckCircle2, ClipboardList, FileText } from "lucide-react";

const workflowSteps = [
  {
    icon: FileText,
    title: "Define Maintenance Templates",
    description:
      "Create reusable preventive-maintenance templates with defined tasks and supporting maintenance information. Standardized templates help teams prepare consistent maintenance requirements before equipment schedules are configured.",
    details: ["Task definitions", "Template master data"],
  },
  {
    icon: CalendarClock,
    title: "Configure Maintenance Schedules",
    description:
      "Connect maintenance templates to the relevant rig equipment and configure planned schedules. Dedicated filters and equipment lookups help teams review, update, and organize active maintenance plans.",
    details: ["Rig and equipment association", "Schedule filtering and updates"],
  },
  {
    icon: ClipboardList,
    title: "Generate and Assign Work Orders",
    description:
      "Generate work orders manually when required or automatically when preventive-maintenance schedules become eligible. Assigned users receive the resulting work through their dedicated work-order workflow.",
    details: ["Manual generation", "Eligible schedule automation"],
  },
  {
    icon: CheckCircle2,
    title: "Track Tasks and Complete Work",
    description:
      "Allow assigned users to review their work orders, start maintenance activities, and save progress against individual tasks. Completed activities move through a defined work-order completion workflow.",
    details: ["Task progress updates", "Work-order completion"],
  },
];

const workflowImage =
  process.env.PUBLIC_URL + "/Industrial%20Maintenance%20Control%20Room.png";

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
      className={`erp-workflow overflow-hidden border-b border-white/[0.08] bg-[#050809] px-[5%] pb-4 pt-14 sm:py-20 lg:py-24 ${isActive ? "is-active" : ""}`}
    >
      <div className="mx-auto grid w-full max-w-[1920px] items-stretch gap-12 lg:grid-cols-[minmax(0,0.92fr)_56px_minmax(420px,1.08fr)] lg:gap-8 xl:gap-12">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a9fa0]">
            Maintenance Workflow
          </p>
          <h2 className="mt-4 max-w-[620px] text-[clamp(36px,4.7vw,56px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
            From Preventive Planning to <span className="text-[#1a9fa0]">Work Completion.</span>
          </h2>
          <p className="site-section-description mt-6 max-w-[590px]">
            Manage preventive maintenance through a connected workflow, from template and schedule setup to work-order generation, assigned task execution, and completion.
          </p>

          <div className="relative mt-7 aspect-[16/9] max-w-[720px] overflow-hidden">
            {workflowImage ? (
              <img
                src={workflowImage}
                alt="Rig maintenance dashboard supporting preventive-maintenance workflows"
                className="absolute inset-0 h-full w-full object-cover [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_76%,transparent_100%)] opacity-80"
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_48%,rgba(26,159,160,0.12),transparent_24%),linear-gradient(to_bottom,transparent_0%,rgba(10,23,25,0.52)_38%,transparent_100%)] opacity-70" />
            )}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#050809_0%,transparent_18%,transparent_76%,#050809_100%)]" />
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
              className="erp-workflow__card group relative flex gap-5 overflow-hidden border border-white/[0.08] bg-[#0b1214] p-5 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#1a9fa0]/45 hover:bg-[#0e1719] sm:p-6"
              style={{
                animationDelay: `${0.12 + index * 1.25}s`,
                "--workflow-delay": `${0.12 + index * 1.25}s`,
              }}
            >
              <div className="erp-workflow__card-icon flex h-11 w-11 shrink-0 items-center justify-center border border-[#1a9fa0]/25 bg-[#1a9fa0]/[0.08] text-[#22c4c5] transition-colors duration-300 group-hover:border-[#1a9fa0]/55">
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
