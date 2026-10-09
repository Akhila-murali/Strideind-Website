import React, { useLayoutEffect } from "react";
import Hero from "../../components/common/Hero";
import Overview from "../../components/common/Overview";
import InsightCapabilities from "../../components/insight/InsightCapabilities";
import InsightValueSection from "../../components/insight/InsightValueSection";
import Footer from "../../components/layout/Footer";

const heroData = {
  id: "futudrill-insight",
  badge: "FutuDrill Insight",
  image:
    process.env.PUBLIC_URL +
    "/Nighttime%20Analytics%20Control%20Room.png",
  imageAlt: "Nighttime analytics control room supporting drilling performance review",
  title: (
    <>
      Turn Drilling Data Into
      <br />
      <span className="text-[#22c4c5]">Actionable Insights.</span>
    </>
  ),
  descriptions: [
    "FutuDrill Insight is an analytics and reporting solution designed to turn drilling and operational data into meaningful insights. Through performance dashboards, key performance indicators, reports, and fleet-level visibility, it aims to help teams understand operational trends, evaluate performance, and support informed decisions.",
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
          The Analytics and Reporting Layer<br />
          <span className="text-[#19aeb2]">for Drilling Operations.</span>
        </>,
        description:
          "FutuDrill Insight is designed to bring drilling and operational data into a unified analytics environment. By presenting key performance indicators, operational trends, and structured reports, it helps teams review performance, identify patterns, and make more informed operational decisions.",
        image: process.env.PUBLIC_URL + "/Field%20Engineer%20Monitoring%20Drilling%20Operations.png",
        imageAlt: "Daylight drilling rig worksite",
        showCapabilities: false,
      }} />
      <InsightCapabilities />
      {/* <InsightValueSection /> */}

      <Footer />
    </main>
  );
}



