import React from "react";
import {
  Boxes,
  CalendarClock,
  ClipboardCheck,
  Network,
  Settings,
  Users,
  Zap,
} from "lucide-react";
import ScrollSection from "../common/ScrollSection";

const capabilities = [
  {
    icon: Settings,
    label: "Equipment Management",
    title: "Organize and Manage Equipment Across Rigs",
    description:
      "Maintain structured equipment records across rigs, including classifications, associated systems, rig areas, and operational status. Update equipment information and access equipment-specific reading logs from one system.",
    features: [
      "Equipment Registration & Management",
      "Equipment Classification & Rig Association",
      "Equipment Reading History",
    ],
  },
  {
    icon: Boxes,
    label: "Component Management",
    title: "Detailed Component Records and Organization",
    description:
      "Create and maintain component records associated with equipment. Update existing records and access component details through dedicated component-management workflows.",
    features: [
      "Component Registration & Updates",
      "Equipment-Linked Component Records",
      "Component Types & Details",
    ],
  },
  {
    icon: CalendarClock,
    label: "Preventive Maintenance",
    title: "Structured Maintenance Planning and Scheduling",
    description:
      "Define preventive-maintenance templates with associated tasks and configure equipment schedules. Filter existing schedules and organize recurring maintenance through dedicated planning workflows.",
    features: [
      "Preventive Maintenance Templates",
      "Maintenance Task Definitions",
      "PM Scheduling & Management",
    ],
  },
  {
    icon: ClipboardCheck,
    label: "Work Order Management",
    title: "From Scheduled Maintenance to Task Completion",
    description:
      "Generate work orders manually or automatically from eligible PM schedules. Assigned users can view work, start activities, update tasks, and complete assigned maintenance workflows.",
    features: [
      "Manual & Automated Work Order Generation",
      "Assigned User Workflows",
      "Task Updates & Work Order Completion",
    ],
  },
  {
    icon: Zap,
    label: "Electrical Operation Logs",
    title: "Structured Electrical Records for Rig Operations",
    description:
      "Maintain daily electrical operation logs and review historical records by rig, including generator and SCR readings, shift summaries, checklists, attendance, and operational remarks.",
    features: [
      "Daily Electrical Log Management",
      "Generator & SCR Reading Records",
      "Historical Logs & Shift Information",
    ],
  },
  {
    icon: Network,
    label: "Organization & Equipment Hierarchy",
    title: "Structured Management Across Organizational Levels",
    description:
      "Organize operational information across companies, regions, countries, rigs, equipment, and components. Navigate connected levels and access associated equipment through hierarchical relationships.",
    features: [
      "Company, Region & Country Management",
      "Rig & Equipment Organization",
      "Hierarchical Component Access",
    ],
  },
  {
    icon: Users,
    label: "User & Access Management",
    title: "Organized Access for Operational Teams",
    description:
      "Manage users through registration, update, and administration workflows. Roles, departments, and positions support authenticated access and role- or department-aware navigation.",
    features: [
      "User Registration & Management",
      "Role & Department-Based Access",
      "User Position & Password Management",
    ],
  },
];

export default function ErpCapabilitiesSection() {
  return (
    <ScrollSection
      label="ERP Capabilities"
      heading={<>One Platform. <span className="text-[#1a9fa0]">Complete Operational Management.</span></>}
      description="Explore integrated modules for managing rig equipment, organizing components, scheduling preventive maintenance, coordinating work orders, and maintaining electrical operation records within one centralized ERP platform."
      capabilities={capabilities}
      sectionClassName="border-b border-white/[0.08] pb-4 pt-14 sm:py-20 lg:py-24"
      scrollAmount={390}
    />
  );
}
