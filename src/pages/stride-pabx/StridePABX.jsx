import React, { useLayoutEffect, useState } from "react";
import Hero from "../../components/common/Hero";
import Skeleton from "../../components/common/Skeleton";
import Overview from "../../components/common/Overview";
import StridePabxCapabilitiesSection from "../../components/stride-pabx/StridePabxCapabilitiesSection";
import Footer from "../../components/layout/Footer";

const heroData = {
  id: "stride-pabx",
  badge: "FUTUDRILL VOICE",
  image:
    process.env.PUBLIC_URL + "/Moody%20Office%20Desk%20with%20Active%20VoIP%20Phone.png",
  imageAlt:
    "VoIP office workspace with an IP phone and desktop calling interface",
  imagePosition: "object-center",
  title: (
    <>
      Unified Rig Communication.
      <br />
      <span className="text-[#1a9fa0]">Built for Every Operational Area.</span>
    </>
  ),
  descriptions: [
    "FutuDrill Voice brings Public Address, wired and wireless communication, Talkback, and SIP corporate telephony into one centralized communication infrastructure for drilling sites.",
  ],
  stats: [],
};

export default function StridePABX() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const loadingTimer = setTimeout(() => {
      setIsPageLoading(false);
    }, 800);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (isPageLoading) return <Skeleton />;

  return (
    <main className="min-h-screen bg-[#0a0a0a] font-['Manrope'] text-white">
      <Hero data={heroData} />
      <Overview data={{
        eyebrow: "OVERVIEW",
        title: <>
          One Communication Infrastructure.<br />
          <span className="text-[#1a9fa0]">Every Critical Area Connected.</span>
        </>,
        description:
          "FutuDrill Voice connects Talkback, Public Address, wired and wireless communication, and SIP telephony within a unified rig communication environment. It supports operational announcements, two-way coordination, mobile personnel communication, and corporate calling across drilling sites and connected offices.",
        image:
          process.env.PUBLIC_URL + "/Modern%20Office%20Desk%20with%20IP%20Phone.png",
        imageAlt: "Modern office desk with an IP phone for business communication",
        showCapabilities: false,
      }} />
      <StridePabxCapabilitiesSection />
      <Footer />
    </main>
  );
}
