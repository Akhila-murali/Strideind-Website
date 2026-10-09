import React from "react";
import { Megaphone, Network, Phone, PhoneCall, Radio, Wifi } from "lucide-react";
import ScrollSection from "../common/ScrollSection";

const capabilities = [
  {
    icon: Megaphone,
    title: "Public Address (PA) System",
    description:
      "Provides a centralized voice announcement system for broadcasting operational instructions, general announcements, and emergency alerts across the drilling site. Supports communication to designated zones or wider rig areas, helping ensure important information reaches personnel when needed.",
    features: ["Operational announcements", "Zone-based communication", "Emergency alerts"],
  },
  {
    icon: Phone,
    title: "Wired Communication",
    description:
      "Delivers stable and consistent voice connectivity through dedicated wired communication networks. Ideal for fixed workstations, control rooms, and critical rig locations where dependable communication is essential for continuous drilling operations.",
    features: ["Dedicated wired network", "Fixed workstation access", "Control-room connectivity"],
  },
  {
    icon: Radio,
    title: "Talkback Communication System",
    description:
      "Enables instant, two-way voice communication between the driller's cabin, rig floor, control rooms, and other critical operational areas. Supports clear communication during drilling activities, equipment handling, and routine operations.",
    features: ["Instant two-way voice", "Critical-area communication", "Operational coordination"],
  },
  {
    icon: Wifi,
    title: "Wireless Communication",
    description:
      "Enables flexible voice connectivity for personnel working across different rig locations without being restricted to fixed communication points. Supports mobility, team coordination, and communication between field personnel and operational control areas.",
    features: ["Mobile voice access", "Field-team coordination", "Field-to-control communication"],
  },
  {
    icon: PhoneCall,
    title: "SIP Corporate Telephony",
    description:
      "Integrates SIP-based IP desk phones, desktop softphones, and corporate telephone extensions into the rig communication infrastructure. Supports internal extension calling and, when connected to external telephone services, communication with site offices and corporate teams.",
    features: ["IP phones and softphones", "Internal extension calling", "External service connectivity"],
  },
  {
    icon: Network,
    title: "Centralized Communication Integration",
    description:
      "Brings Talkback, Public Address, wired and wireless communication, and SIP telephony together within a unified communication infrastructure. Simplifies communication management and supports coordinated voice communication across drilling operations.",
    features: ["Unified voice infrastructure", "Centralized management", "Connected communication systems"],
  },
];

export default function StridePabxCapabilitiesSection() {
  return (
    <ScrollSection
      label="FutuDrill Voice Capabilities"
      heading={<>Every Voice Channel.<br /><span className="text-[#1a9fa0]">One Integrated Infrastructure.</span></>}
      description="Support announcements, operational coordination, mobile voice access, and corporate telephony through communication systems designed for critical drilling environments."
      capabilities={capabilities}
    />
  );
}
