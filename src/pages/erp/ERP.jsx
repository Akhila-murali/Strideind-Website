import React, { useLayoutEffect, useState } from "react";
import Hero from "../../components/common/Hero";
import Overview from "../../components/common/Overview";
import Skeleton from "../../components/common/Skeleton";
import ErpCapabilitiesSection from "../../components/erp/ErpCapabilitiesSection";
import ErpMaintenanceWorkflowSection from "../../components/erp/ErpMaintenanceWorkflowSection";
import ErpOrganizationalHierarchySection from "../../components/erp/ErpOrganizationalHierarchySection";
import Footer from "../../components/layout/Footer";

const heroData = {
  id: "erp",
  badge: "FUTUDRILL ERP",
  image:
    process.env.PUBLIC_URL + "/Modern%20Office%20Dashboard%20Workspace.png",
  imageAlt:
    "Team reviewing an enterprise operations dashboard in a modern office",
  imagePosition: "object-center",
  title: (
    <>
      Centralized Rig Equipment &amp;{" "}
      <span className="text-[#1a9fa0]">Maintenance Management.</span>
    </>
  ),
  descriptions: [
    "Streamline rig operations with a centralized platform for equipment and component management, preventive maintenance scheduling, automated work orders, and electrical operations logging. Improve operational visibility, coordinate maintenance activities, and manage equipment workflows across multiple rigs.",
  ],

  primaryAction: { label: "Request Demo", target: "contact-form" },
  secondaryAction: { label: "Contact Us", target: "contact" },
  stats: [
    { value: "ASSETS", label: "Equipment & Components" },
    { value: "PM", label: "Preventive Maintenance" },
    { value: "WO", label: "Work Order Management" },
  ],
};

export default function ERP() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useLayoutEffect(() => {
    setIsPageLoading(true);
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    const loadingTimer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = "";
      setIsPageLoading(false);
    }, 800);

    return () => {
      clearTimeout(loadingTimer);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  if (isPageLoading) return <Skeleton />;

  return (
    <main className="product-detail min-h-screen bg-[#0a0a0a] font-['Manrope'] text-white">
      <Hero data={heroData} />
      <Overview
        data={{
          eyebrow: "OVERVIEW",
          title: (
            <>
              A Smarter Way to<br />
              <span className="text-[#1a9fa0]">Manage Rig Operations.</span>
            </>
          ),
          description:
            "Bring equipment, components, preventive maintenance schedules, work orders, and electrical operation logs into one centralized platform. Improve visibility across rig assets, coordinate maintenance activities, and keep operational workflows organized across multiple sites.",
          image:
            process.env.PUBLIC_URL + "/Industrial%20Worker%20Using%20Maintenance%20Dashboard.png",
          imageAlt:
            "Rig maintenance professional reviewing equipment and work-order information on a tablet",
          showCapabilities: false,
        }}
      />
      <ErpCapabilitiesSection />
      <ErpMaintenanceWorkflowSection />
      <ErpOrganizationalHierarchySection />
      <Footer />
    </main>
  );
}
