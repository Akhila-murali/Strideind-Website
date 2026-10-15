import React from "react";
import {
  Boxes,
  CalendarClock,
  ClipboardCheck,
  Network,
  Settings,
  Zap,
} from "lucide-react";
import ScrollSection from "../common/ScrollSection";

const capabilities = [
  {
    icon: Network,
    title: "Asset Registry & Hierarchy",
    description:
      "A structured, six-level asset hierarchy forms the foundation of the platform, linking sensor readings, work orders, spare parts, and inspection records to the exact equipment node they relate to.",
    features: [
      "6-Level Hierarchy",
      "Smart Asset Coding",
      "Criticality Scoring",
      "Lifecycle Tracking",
      "Multi-Rig Support",
      "Sensor Mapping",
    ],
  },
  {
    icon: Settings,
    title: "Maintenance Management",
    description:
      "A fully computerized maintenance management system supports AI-triggered, manual, PM-scheduled, and sensor-threshold work order creation, covering the complete lifecycle from fault detection to verified resolution.",
    features: [
      "Work Order Sources",
      "Auto-Assignment",
      "PM Plan Types",
      "KPI Dashboard",
      "Parts Integration",
      "Mobile Access",
    ],
  },
  {
    icon: Zap,
    title: "AI Predictive Maintenance",
    description:
      "Machine learning models continuously analyse live sensor data from critical rig equipment, providing 48–72 hour advance warning of probable failures and enabling planned intervention rather than emergency response.",
    features: [
      "Sensor Ingestion",
      "Anomaly Detection",
      "Failure Prediction",
      "48–72 Hr Early Warning",
      "Continuous Retraining",
      "Equipment Covered",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "AI Maintenance Verification",
    description:
      "The AI Maintenance Verification System replaces subjective reporting with objective, camera-based proof of work by detecting maintenance-specific physical actions and generating time-stamped verification records.",
    features: [
      "Activity Recognition",
      "Technician Identity",
      "Time-Stamped Audit Trail",
      "CMMS Closed Loop",
      "False Report Detection",
      "Coverage Heatmap",
      "CMMS Integration",
    ],
  },
  {
    icon: Boxes,
    title: "Inventory & Procurement",
    description:
      "A fully automated inventory and procurement workflow covers the complete lifecycle from stock alert through purchase order to goods receipt, ensuring spare parts are available when maintenance is needed.",
    features: [
      "Auto-Reorder Engine",
      "PRQ → PO → GRN",
      "WO Parts Deduction",
      "Item → Asset Link",
      "Vendor Management",
      "SAP Integration",
    ],
  },
  {
    icon: CalendarClock,
    title: "Inspection & Certification",
    description:
      "A digital inspection and certificate lifecycle management system covers statutory, third-party, and internal inspection types, helping maintain compliance across the rig fleet.",
    features: [
      "Inspection Workflow",
      "Certificate Registry",
      "Renewal Workflow",
      "Third-Party Certificates",
      "Compliance Dashboard",
      "Inspection Types Covered",
    ],
  },
];

export default function ErpCapabilitiesSection() {
  return (
    <ScrollSection
      label="Key Modules"
      heading={<>A Structured Platform for <span className="text-[#1a9fa0]">Rig Operations Management.</span></>}
      description="FutuDrill ERP combines asset hierarchy, maintenance management, predictive maintenance, maintenance verification, inventory workflows, and inspection processes into one structured platform for rig operations."
      capabilities={capabilities}
      sectionClassName="border-b border-white/[0.08] pb-4 pt-14 sm:py-20 lg:py-24"
      scrollAmount={390}
      splitFeatures
    />
  );
}
