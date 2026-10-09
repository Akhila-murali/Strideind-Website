import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../components/common/Hero";
import FeatureHighlightSection from "../../components/home/FeatureHighlightSection";
import ShowcaseSection from "../../components/home/ShowcaseSection";
import ContactSection from "../../components/home/ContactSection";
import Footer from "../../components/layout/Footer";

const heroData = {
  id: "home",
  variant: "home",
  useSlider: true,
  images: [
    process.env.PUBLIC_URL + "/hero%20img1.jpeg",
    process.env.PUBLIC_URL + "/hero%20img2.jpeg",
    process.env.PUBLIC_URL + "/hero%20img3.jpeg",
  ],
  badge: "FutuDrill Platform",
  title: (
    <>
      AI-Powered<br />
      <span className="teal text-[#1a9fa0]">Drilling Intelligence</span><br />
      Transformation.
    </>
  ),
  descriptions: [
    "Transform your drilling operations with smart monitoring, real-time visibility, and intelligent safety systems.",
    "FutuDrill – See More. Know More. Control More.",
  ],
  stats: [
    { value: "24/7", label: "Live Monitoring" },
    { value: "AI", label: "Vision Systems" },
    { value: "0ms", label: "Alert Delay" },
  ],
};

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        const navbarHeight = 70;
        const position = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: position, behavior: "smooth" });
      }
      window.history.replaceState({}, document.title, window.location.pathname);
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Hero data={heroData} />
      <section className="about section bg-black bg-[linear-gradient(rgba(34,196,197,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(34,196,197,0.022)_1px,transparent_1px)] bg-[size:64px_64px] py-[120px] max-[900px]:pt-20" id="about">
        <div className="mx-auto w-[90%]">
          <FeatureHighlightSection variant="about" />
          <ShowcaseSection />
        </div>
      </section>
      <FeatureHighlightSection variant="product" />
      <ContactSection />
      <Footer />
    </>
  );
}
