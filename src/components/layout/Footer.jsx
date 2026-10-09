import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiLinkedin, FiYoutube } from "react-icons/fi";

export default function Footer({ blend = false }) {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer relative bg-[#161616] pt-20">
      {!blend && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.12]" />
      )}
      <div className="container mx-[5%] max-w-none pr-0 min-[1400px]:mx-auto min-[1400px]:max-w-[1300px] min-[1400px]:px-10">

        {/* TOP */}
        <div className="footer-top flex flex-wrap justify-between gap-[60px] pb-12">

          {/* BRAND */}
          <div className="footer-brand flex max-w-[220px] flex-col gap-3">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="Logo"
              className="footer-logo w-3/5 [filter:brightness(0)_saturate(100%)_invert(82%)_sepia(9%)_saturate(359%)_hue-rotate(141deg)_brightness(91%)_contrast(88%)]"
            />

            <p className="footer-tagline text-[13px] font-light leading-[1.7] text-[#87979d]">
              Building intelligent digital products with performance, precision,
              and purpose.
            </p>

            <div className="footer-socials mt-2 flex gap-2">
              <a href="#" className="social-btn flex h-9 w-9 items-center justify-center rounded bg-white/[0.08] text-sm text-white/50 no-underline transition-all hover:bg-[#0A66C2] hover:text-white"><FiLinkedin /></a>
              <a href="#" className="social-btn flex h-9 w-9 items-center justify-center rounded bg-white/[0.08] text-sm text-white/50 no-underline transition-all hover:bg-[#1DA1F2] hover:text-white"><FiYoutube /></a>
            </div>
          </div>

          {/* LINKS */}
          <div className="footer-links flex gap-20 max-[480px]:gap-10">

            <div className="footer-col">
              <h4 className="col-title mb-5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/80">Company</h4>
              <ul className="flex list-none flex-col gap-3">
                <li><button type="button" className="cursor-pointer border-0 bg-transparent p-0 text-[13px] font-light text-white/50 transition-colors hover:text-[#22b8b9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22b8b9]" onClick={() => goToSection("about")}>About</button></li>
                <li><span className="text-[13px] font-light text-white/35">Careers</span></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="col-title mb-5 cursor-pointer text-[11px] font-bold uppercase tracking-[0.12em] text-white/80" onClick={() => goToSection("contact")}>Contact</h4>
              <ul className="flex list-none flex-col gap-3 [&_a]:text-[13px] [&_a]:font-light [&_a]:text-white/50 [&_a]:no-underline [&_a]:transition-colors [&_a:hover]:text-[#22b8b9]">
                <li><a href="mailto:support@strideind.com">support@strideind.com</a></li>
                <li><a href="tel:+917736878515">+91 77368 78515</a></li>
                <li><a href="#contact" onClick={(event) => { event.preventDefault(); goToSection("contact"); }}>India</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
      <div className="footer-bottom relative flex items-center justify-center py-6 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/[0.12] before:content-[''] max-[900px]:flex-col max-[900px]:gap-2 max-[900px]:text-center">
  <p className="text-xs font-light text-white/30 text-center">
    © {new Date().getFullYear()} Strideind. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
}
