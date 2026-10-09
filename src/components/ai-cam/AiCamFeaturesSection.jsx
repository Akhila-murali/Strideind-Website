import React from "react";
import {
  AlertTriangle,
  Car,
  ClipboardCheck,
  Gauge,
  HardHat,
  Radar,
  ScanFace,
  Thermometer,
  UserCheck,
  Warehouse,
} from "lucide-react";
import HorizontalScroll from "../common/HorizontalScroll";
import Reveal from "../common/Reveal";

const modules = [
  {
    icon: HardHat,
    title: "PPE Monitoring",
    summary: "Monitor required protective equipment and surface PPE-related compliance events across observed work areas.",
    details: "Detect helmets, gloves, coveralls, safety boots, vests, goggles, and masks. The module can assess color compliance, identify partially worn PPE, and maintain a compliance score for monitored personnel.",
    alerts: ["Missing PPE", "Improper wear", "Repeat offenders"],
  },
  {
    icon: ScanFace,
    title: "Smart Gate Control",
    summary: "Monitor personnel and vehicle access while maintaining structured entry and exit visibility.",
    details: "Combine face recognition, vehicle detection, and ANPR with entry and exit logs. Visitor workflows, blacklist and whitelist checks, boom-barrier control, QR/RFID validation, and shift-based access support controlled site entry.",
    alerts: ["Unauthorized person", "Unknown vehicle", "Driver mismatch"],
  },
  {
    icon: Car,
    title: "Driver & Vehicle Monitoring",
    summary: "Observe driver presence and safety behavior within monitored vehicle environments.",
    details: "Detect seatbelt use, mobile-phone activity, and driver presence inside the cabin. Drowsiness, smoking, identity verification, fatigue scoring, and cabin alerts provide added visibility into driver condition and behavior.",
    alerts: ["No seatbelt", "Phone use", "Drowsiness", "Absent driver"],
  },
  {
    icon: UserCheck,
    title: "Driller Behavior Monitoring",
    summary: "Support visibility into driller presence, attention, and behavior during operational activity.",
    details: "Observe seat presence, focus, distraction, and signs of drowsiness. Posture analysis, multi-person cabin detection, and idle and performance metrics provide additional context for reviewing driller activity.",
    alerts: ["Operator sleeping", "Not focused", "Unauthorized occupant"],
  },
  {
    icon: Warehouse,
    title: "Store & Inventory Monitoring",
    summary: "Observe people, stock, and object movement within monitored inventory and storage areas.",
    details: "Track people and object movement within storage areas while monitoring shelf stock and item counts. RFID and AI validation, activity heatmaps, and forklift tracking extend visibility across inventory workflows.",
    alerts: ["Unauthorized entry", "Unrecorded item removal", "Suspicious behavior"],
  },
  {
    icon: AlertTriangle,
    title: "Falling Object Detection",
    summary: "Detect sudden downward object movement and support awareness of potential falling-object hazards.",
    details: "Identify object falls and sudden downward motion within monitored areas. Impact detection, danger-zone alerts, and predictive instability analysis support the review of potential falling-object events.",
    alerts: ["Falling object", "Person under falling object"],
  },
  {
    icon: Thermometer,
    title: "Thermal Monitoring",
    summary: "Monitor heat conditions and identify abnormal thermal behavior across observed equipment and areas.",
    details: "Detect hotspots and temperature-threshold events, then review thermal trends for rapid changes or early signs of fire. Equipment-health monitoring and SCADA/PLC integration extend the available operational context.",
    alerts: ["Overheat", "Rapid temperature rise"],
  },
  {
    icon: Gauge,
    title: "Speed & Movement Monitoring",
    summary: "Track vehicle movement and speed while supporting awareness around configured operating zones.",
    details: "Track vehicles and calculate movement speed across monitored areas. Zone-based limits, near-miss and collision prediction, and pedestrian alerts help identify movement conditions that require attention.",
    alerts: ["Overspeed", "Dangerous driving"],
  },
  {
    icon: Radar,
    title: "Drill Assist System",
    summary: "Combine drilling-equipment observation with parameter monitoring and event-based visual capture.",
    details: "Track TDS activity and drilling parameters alongside a live CCTV view. Collision warnings, equipment tracking, anomaly detection, and event-based capture provide visual context around drilling events.",
    alerts: ["Proximity violation", "Drilling anomaly"],
  },
  {
    icon: ClipboardCheck,
    title: "Maintenance Verification",
    summary: "Use AI vision to support task verification and evidence-based review of scheduled maintenance activity.",
    details: "Recognize maintenance activity by task type and retain time-stamped visual proof of work. Technician identity verification, maintenance-coverage heatmaps, and an automated audit trail support objective task review and reduce false reporting.",
    alerts: ["Skipped maintenance task", "Unverified activity logged", "Technician absent during scheduled task"],
  },
];

export default function AiCamFeaturesSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-[#070b0c] pb-4 pt-14 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,196,197,0.08),transparent_42%)]" />

      <Reveal className="relative mx-auto w-full max-w-[1920px] px-[5%]">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.78fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22c4c5]">AI CAM Capabilities</p>
            <h2 className="mt-4 text-[clamp(36px,4.6vw,56px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
              Ten Integrated <span className="text-[#22c4c5]">Monitoring Modules.</span>
            </h2>
          </div>
          <p className="site-section-description max-w-[620px] lg:justify-self-end lg:border-l lg:border-white/10 lg:pl-5">
            Monitor personnel safety, site access, driver and driller behavior, inventory activity, falling objects, thermal conditions, vehicle movement, drilling activity, and maintenance verification through one AI-powered CCTV safety and intelligence system.
          </p>
        </div>
      </Reveal>

      <div className="relative mt-12">
        <HorizontalScroll scrollAmount={430}>
          {modules.map(({ icon: Icon, title, summary, details, alerts }, index) => (
            <article className="group flex min-h-[500px] w-[410px] shrink-0 flex-col border border-white/[0.09] bg-[#0d1315] p-7 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[#1a9fa0]/55 hover:bg-[#10191b] max-sm:min-h-[480px] max-sm:w-[320px] max-sm:p-6" key={title}>
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-12 w-12 items-center justify-center border border-[#1a9fa0]/30 bg-[#1a9fa0]/[0.08] text-[#22c4c5] transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(34,196,197,0.2)]">
                  <Icon aria-hidden="true" size={23} strokeWidth={1.7} />
                </div>
                <span className="text-[28px] font-light leading-none text-white/15">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="mt-7 text-[20px] font-bold leading-[1.25] text-white">{title}</h3>
              <p className="site-card-description mt-4">
                {summary} {details}
              </p>

              <div className="mt-8 border-t border-white/[0.08] pt-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#22c4c5] [text-shadow:0_0_12px_rgba(34,196,197,0.35)]">Alerts</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {alerts.map((alert) => (
                    <span className="border border-[#1a9fa0]/25 bg-[#1a9fa0]/[0.06] px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.06em] text-white/55" key={alert}>{alert}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
