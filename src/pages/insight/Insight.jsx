import React, { useLayoutEffect } from "react";
import Hero from "../../components/common/Hero";
import Overview from "../../components/common/Overview";
import InsightCapabilities from "../../components/insight/InsightCapabilities";
import InsightValueSection from "../../components/insight/InsightValueSection";
import Footer from "../../components/layout/Footer";

const heroData = {
  id: "futudrill-insight",
  variant: "insight",
  badge: "FutuDrill Insight",
  image:
    process.env.PUBLIC_URL +
    "/FutuDrill%20Neon%20Analytics%20Dashboard.png",
  imageAlt: "FutuDrill analytics dashboard displaying live drilling performance and operational KPIs",
  mobileImage: process.env.PUBLIC_URL + "/FutuDrill%20Control%20Room%20Overlooking%20Rig.png",
  title: (
    <>
      Turn Drilling Data Into
      <br />
      <span className="text-[#22c4c5]">Actionable Insight.</span>
    </>
  ),
  descriptions: [
    "FutuDrill Insight transforms live and historical drilling data — including well activity, operational readings, connection events, and depth-based performance — into clear trends, KPIs, and decision-ready intelligence that helps teams improve efficiency, identify risks, and act with confidence.",
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
          The Analytics and Reporting Layer for<br />
          <span className="text-[#19aeb2]">Drilling Operations.</span>
        </>,
        description:
          "FutuDrill Insight brings together well information, live and historical drilling readings, connection activity, and depth-based performance data into one analytics environment. Through real-time dashboards, trend analysis, and automated reporting, teams gain clearer visibility into drilling performance and operational conditions.",
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



