import React, { useLayoutEffect, useState } from "react";
import Hero from "../../components/common/Hero";
import Overview from "../../components/common/Overview";
import Skeleton from "../../components/common/Skeleton";
import ErpCapabilitiesSection from "../../components/erp/ErpCapabilitiesSection";
import ErpMaintenanceWorkflowSection from "../../components/erp/ErpMaintenanceWorkflowSection";
import ErpOrganizationalHierarchySection, { ErpPlatformArchitectureSection } from "../../components/erp/ErpOrganizationalHierarchySection";
import Footer from "../../components/layout/Footer";

const heroData = {
  id: "erp",
  badge: "FUTUDRILL ERP",
  image:
    process.env.PUBLIC_URL + "/Focused%20Workday%20Dashboard.png",
  imageAlt:
    "Focused workday dashboard for enterprise operations management",
  imagePosition: "object-center",
  title: (
    <>
      Intelligent Rig<br />
      <span className="text-[#1a9fa0]">Management Platform.</span>
    </>
  ),
  descriptions: [
    "The FutuDrill platform is built on a modular, scalable architecture deployable across drilling rigs, yards, and support facilities.",
    "It includes Asset Registry & Hierarchy, Maintenance Management, AI Predictive Maintenance, AI Maintenance Verification, Inventory & Procurement, and Inspection & Certification.",
  ],

  primaryAction: { label: "Request Demo", target: "contact-form" },
  secondaryAction: { label: "Contact Us", target: "contact" },
  stats: [
    { value: "ASSETS", label: "6-Level Asset Hierarchy" },
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
              Equipment Lifecycle &amp;<br />
              <span className="text-[#1a9fa0]">Maintenance Performance.</span>
            </>
          ),
          description: <>
            FutuDrill ERP maintains equipment lifecycle records, including installation dates, maintenance events, condition readings, and replacement history. Structured asset coding supports equipment identification across modules, while criticality ratings help determine preventive maintenance scheduling priorities and work order urgency.
            <br /><br />
            Maintenance performance is presented through key indicators such as MTBF, MTTR, preventive maintenance compliance rate, and rig availability at equipment and rig levels. Spare-part consumption and costs are tracked against the associated assets, while inspection certificates are stored against their respective asset records.
          </>,
          image:
            process.env.PUBLIC_URL + "/Dark%20Equipment%20Management%20Dashboard.png",
          imageAlt:
            "FutuDrill ERP equipment registry showing rig assignments and maintenance status",
          showCapabilities: false,
        }}
      />
      <ErpCapabilitiesSection />
      <ErpMaintenanceWorkflowSection />
      <ErpOrganizationalHierarchySection />
      <ErpPlatformArchitectureSection />
      <Footer />
    </main>
  );
}
