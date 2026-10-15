import React, { useLayoutEffect } from "react";
import Hero from "../../components/common/Hero";
import Overview from "../../components/common/Overview";
import InsightCapabilities from "../../components/insight/InsightCapabilities";
import InsightValueSection from "../../components/insight/InsightValueSection";
import Footer from "../../components/layout/Footer";

const heroData = {
  id: "futudrill-insight",
  badge: "FUTUDRILL INSIGHT",
  statement: "TURN DATA INTO VALUE",
  image:
    process.env.PUBLIC_URL +
    "/Nighttime%20Analytics%20Control%20Room.png",
  imageAlt: "Nighttime analytics control room supporting drilling performance review",
  title: (
    <>
      Advanced Drilling Analytics
      <br />
      <span className="text-[#22c4c5]">&amp; Fleet Intelligence</span>
    </>
  ),
  descriptions: [
    "Transform real-time drilling and equipment data into actionable intelligence through advanced analytics, interactive dashboards, automated reporting, and fleet-wide performance monitoring.",
    "Monitor individual rigs and entire fleets from one platform to identify performance gaps, detect abnormal operating trends, improve equipment utilization, and support better operational decisions.",
  ],
  stats: [],
};

export default function Insight() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="product-detail min-h-screen bg-[#05090b] font-['Manrope'] text-white">
      <Hero data={heroData} />
      <Overview data={{
        eyebrow: "OVERVIEW",
        title: <>
          From Raw Data to<br />
          <span className="text-[#19aeb2]">Smarter Drilling Decisions.</span>
        </>,
        description: <>
          FutuDrill Insight brings together real-time drilling parameters, equipment performance, historical trends, and operational comparisons through customizable dashboards and KPI monitoring. With centralized monitoring of multiple drilling rigs, fleet-wide operational KPIs, and rig-to-rig performance comparisons, it provides visibility across individual rigs and entire fleets.
          <br /><br />
          Through automated reporting, equipment health analysis, and performance monitoring, it helps identify performance gaps, detect abnormal operating trends, improve equipment utilization, and support better operational decisions.
        </>,
        image: process.env.PUBLIC_URL + "/Field%20Engineer%20Monitoring%20Drilling%20Operations.png",
        imageAlt: "Daylight drilling rig worksite",
        showCapabilities: false,
      }} />
      <InsightCapabilities />
      <InsightValueSection />

      <Footer />
    </main>
  );
}



