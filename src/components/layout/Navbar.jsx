import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const products = [
  {
    id: "futudrill",
    name: "FutuDrill",
    path: "/products/futudrill",
    children: [
      { id: "core", name: "FutuDrill Core", path: "/products/futudrill/core" },
      { id: "connect", name: "FutuDrill Connect", path: "/products/futudrill/connect" },
      { id: "insight", name: "FutuDrill Insight", path: "/products/futudrill/insight" },
      { id: "control", name: "FutuDrill Control", path: "/products/futudrill/control" },
      { id: "ai-cam", name: "FutuDrill AI CAM", path: "/products/futudrill/ai-cam" },
    ],
  },
  { id: "ERP", name: "ERP", children: [] },
   { id: "stride-pbx", name: "StridePBX", children: [] },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [futudrillOpen, setFutudrillOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  const productsActive = currentPath.startsWith("/product/") || currentPath.startsWith("/products/");
  const futudrillActive = currentPath.startsWith("/products/futudrill");

  useEffect(() => {
    const closeDropdowns = (event) => {
      if (!event.target.closest("[data-products-menu]")) {
        setDropdownOpen(false);
        setFutudrillOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdowns);
    return () => document.removeEventListener("mousedown", closeDropdowns);
  }, []);

  const goToSection = (sectionId) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const scrollPosition = section.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-1/2 z-[1000] w-full max-w-[1920px] -translate-x-1/2 border-b border-white/[0.07] bg-[#0a0a0a]/[0.92] font-['Manrope'] backdrop-blur-xl">
      <div className="flex h-[68px] items-center justify-between px-6 lg:px-12">

        {/* LOGO */}
        <div className="flex cursor-pointer items-center" onClick={() => navigate("/")}>
          <img className="h-[34px]" src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
        </div>

        {/* ===== DESKTOP ===== */}
        <ul className="m-0 hidden list-none items-center gap-1 p-0 lg:flex">

          <li>
            <button className="rounded-[3px] border-0 bg-transparent px-4 py-2 font-['Manrope'] text-[13px] font-medium tracking-[0.04em] text-white/60 transition-colors hover:bg-white/5 hover:text-white" onClick={() => goToSection("home")}>Home</button>
          </li>

          <li>
            <button className="rounded-[3px] border-0 bg-transparent px-4 py-2 font-['Manrope'] text-[13px] font-medium tracking-[0.04em] text-white/60 transition-colors hover:bg-white/5 hover:text-white" onClick={() => goToSection("about")}>About</button>
          </li>

          <li className="group relative flex items-center" data-products-menu>
            <button className={`rounded-[3px] border-0 bg-transparent px-4 py-2 font-['Manrope'] text-[13px] font-medium tracking-[0.04em] transition-colors hover:bg-white/5 hover:text-white ${productsActive ? "text-[#22c4c5]" : "text-white/60"}`} onClick={() => setDropdownOpen(!dropdownOpen)}>
              Products ▾
            </button>

            <div
              className={`${dropdownOpen ? "flex" : "hidden"} absolute right-[5px] top-[calc(100%+13px)] min-w-[200px] flex-col border border-white/[0.08] bg-[#161616] py-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.5)] before:absolute before:-left-[30px] before:-right-[30px] before:-top-5 before:h-5 before:bg-transparent before:content-[''] group-hover:flex`}
              style={{ borderTop: "2px solid #1a9fa0" }}
            >
              <div
                className="relative"
                onMouseEnter={() => setFutudrillOpen(true)}
                onMouseLeave={() => setFutudrillOpen(false)}
              >
                <button
                  type="button"
                  className={`flex w-full cursor-pointer items-center justify-between border-0 bg-transparent px-[18px] py-[11px] text-left font-['Manrope'] text-[13px] font-medium tracking-[0.03em] transition-colors hover:bg-[#1a9fa0]/10 hover:text-[#22c4c5] ${futudrillActive ? "bg-[#1a9fa0]/10 text-[#22c4c5]" : "text-white/65"}`}
                  onClick={(event) => {
                    if (event.target === event.currentTarget.lastElementChild) {
                      setFutudrillOpen(!futudrillOpen);
                      return;
                    }
                    navigate(products[0].path);
                    setFutudrillOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  <span>{products[0].name}</span>
                  <span className={`text-[18px] leading-none text-[#22c4c5] transition-transform ${futudrillOpen ? "translate-x-0.5" : ""}`}>›</span>
                </button>

                <div className={`${futudrillOpen ? "flex" : "hidden"} absolute left-[calc(100%+8px)] top-0 min-w-[205px] flex-col border border-white/[0.08] bg-[#161616] py-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.55)] before:absolute before:-left-2 before:top-0 before:h-full before:w-2 before:content-['']`} style={{ borderTop: "2px solid #1a9fa0" }}>
                  {products[0].children.map((product) => (
                    <div
                      key={product.id}
                      className={`cursor-pointer border-l-2 px-[18px] py-[9px] font-['Manrope'] text-[12px] font-medium tracking-[0.03em] transition-colors hover:bg-[#1a9fa0]/10 hover:text-[#22c4c5] ${currentPath === product.path ? "border-[#22c4c5] bg-[#1a9fa0]/10 !text-[#22c4c5]" : "border-transparent text-white/55"}`}
                      onClick={() => {
                        navigate(product.path);
                        setFutudrillOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      {product.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mx-3 border-t border-white/[0.07]" />
              {products.filter((product) => product.children.length === 0).map((product) => (
                <div
                  key={product.id}
                  className={`cursor-pointer px-[18px] py-[10px] text-[13px] font-medium tracking-[0.03em] transition-colors hover:bg-[#1a9fa0]/10 hover:text-[#22c4c5] ${currentPath === `/product/${product.id}`.toLowerCase() ? "bg-[#1a9fa0]/10 text-[#22c4c5]" : "text-white/60"}`}
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                    setDropdownOpen(false);
                  }}
                >
                  {product.name}
                </div>
              ))}
            </div>
          </li>

          <li>
            <button className="rounded-[3px] border-0 bg-transparent px-4 py-2 font-['Manrope'] text-[13px] font-medium tracking-[0.04em] text-white/60 transition-colors hover:bg-white/5 hover:text-white" onClick={() => goToSection("contact")}>Contact</button>
          </li>

          <li>
            <button className="ml-2 inline-block rounded-[3px] border-0 bg-[#1a9fa0] px-[22px] py-[9px] font-['Manrope'] text-[13px] font-semibold tracking-[0.06em] text-white" onClick={() => goToSection("contact-form")}>Get in Touch</button>
          </li>

        </ul> 

        {/* ===== MOBILE ===== */}
        <button
          className={`flex flex-col gap-[5px] border-0 bg-transparent p-2 lg:hidden [&>span]:h-0.5 [&>span]:w-6 [&>span]:rounded-sm [&>span]:bg-white [&>span]:transition-all ${menuOpen ? "[&>span:nth-child(1)]:translate-y-[7px] [&>span:nth-child(1)]:rotate-45 [&>span:nth-child(2)]:opacity-0 [&>span:nth-child(3)]:-translate-y-[7px] [&>span:nth-child(3)]:-rotate-45" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`fixed top-0 z-[999] flex h-screen w-[280px] flex-col gap-1 border-l border-white/[0.06] bg-[#0e0e0e] px-6 pb-10 pt-[90px] transition-[right] duration-300 lg:hidden ${menuOpen ? "right-0" : "-right-full"} [&_button]:rounded-[3px] [&_button]:border-0 [&_button]:bg-transparent [&_button]:px-3 [&_button]:py-[10px] [&_button]:text-left [&_button]:font-['Manrope'] [&_button]:text-sm [&_button]:font-medium [&_button]:tracking-[0.03em] [&_button]:text-white/65 hover:[&_button]:bg-white/[0.04] hover:[&_button]:text-white`}>
          
          <button className="!absolute !right-5 !top-5 !w-auto !self-end !bg-transparent !p-2 !text-[22px] !text-white/80 hover:!bg-transparent hover:!text-[#1a9fa0]" onClick={() => setMenuOpen(false)}>
            ✕
          </button>

          <button onClick={() => goToSection("home")}>Home</button>

          <button onClick={() => goToSection("about")}>About</button>

          <div className="mobile-dropdown" data-products-menu>
            <button className={productsActive ? "!text-[#22c4c5]" : ""} onClick={() => setDropdownOpen(!dropdownOpen)}>
              Products ▾
            </button>

            <div className={`overflow-hidden transition-[max-height] duration-300 ${dropdownOpen ? "max-h-[400px]" : "max-h-0"}`}>
              <button
                type="button"
                className={`!flex !w-full !items-center !justify-between ${futudrillActive ? "!text-white" : ""}`}
                onClick={(event) => {
                  if (event.target === event.currentTarget.lastElementChild) {
                    setFutudrillOpen(!futudrillOpen);
                    return;
                  }
                  navigate(products[0].path);
                  setMenuOpen(false);
                  setDropdownOpen(false);
                }}
              >
                <span>{products[0].name}</span><span className={`text-[#22c4c5] transition-transform ${futudrillOpen ? "rotate-90" : ""}`}>›</span>
              </button>
              <div className={`ml-3 overflow-hidden border-l border-[#1a9fa0]/35 transition-[max-height] duration-300 ${futudrillOpen ? "max-h-[320px]" : "max-h-0"}`}>
                {products[0].children.map((product) => (
                  <div
                    className={`relative cursor-pointer px-4 py-2 font-['Manrope'] text-[12px] font-medium transition-colors hover:text-[#22c4c5] ${currentPath === product.path ? "!text-[#22c4c5] before:absolute before:left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-[#22c4c5] before:content-['']" : "text-white/45"}`}
                    key={product.id}
                    onClick={() => {
                      navigate(product.path);
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    {product.name}
                  </div>
                ))}
              </div>
              <div className="my-1 border-t border-white/[0.07]" />
              {products.filter((product) => product.children.length === 0).map((product) => (
                <div
                  className={`cursor-pointer border-b border-white/5 px-3 py-[10px] text-[13px] transition-colors hover:text-[#22c4c5] ${currentPath === `/product/${product.id}`.toLowerCase() ? "bg-[#1a9fa0]/10 text-[#22c4c5]" : "text-white/50"}`}
                  key={product.id}
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                    setMenuOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  {product.name}
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => goToSection("contact")}>Contact</button>

          <button className="!ml-2 !inline-block !bg-[#1a9fa0] !px-[22px] !py-[9px] !text-[13px] !font-semibold !tracking-[0.06em] !text-white hover:!bg-[#1a9fa0]" onClick={() => goToSection("contact-form")}>Get in Touch</button>

        </div>

      </div>
    </nav>
  );
}
