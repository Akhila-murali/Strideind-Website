import React, { useEffect, useRef, useState } from "react";

export default function HorizontalScroll({ cards = [], badge = "", children, scrollAmount = 355 }) {
  const scrollRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return undefined;

    const checkScroll = () => {
      setShowLeftBtn(element.scrollLeft > 0);
      setShowRightBtn(element.scrollLeft + element.clientWidth < element.scrollWidth - 1);
    };
    const wheelHandler = (event) => {
      event.preventDefault();
      element.scrollLeft += event.deltaY;
    };

    element.addEventListener("wheel", wheelHandler, { passive: false });
    element.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll();

    return () => {
      element.removeEventListener("wheel", wheelHandler);
      element.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [cards.length]);

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  const content = cards.length
    ? cards.map((card, index) => (
        <article key={card.title} className="group flex min-h-[510px] w-[335px] shrink-0 flex-col overflow-hidden rounded-[4px] border border-[#294047]/80 bg-[#081114] transition-[border-color,box-shadow] duration-300 hover:border-[#00e5ff] hover:shadow-[0_0_24px_rgba(0,229,255,0.35)]">
          <div className="relative h-[220px] overflow-hidden bg-[#0a1518]">
            {card.image && (
              <img src={`${process.env.PUBLIC_URL}${card.image}`} alt={card.title} className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
            )}
            <span className="absolute right-5 top-3 text-[48px] font-light text-white/25">{String(index + 1).padStart(2, "0")}</span>
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#081114] to-transparent" />
          </div>
          <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
            <span className="w-fit border border-[#1a9fa0]/70 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#22c4c5]">{card.category || badge}</span>
            <h3 className="mt-4 text-[19px] font-bold leading-[1.18] text-white">{card.title}</h3>
            <p className="mt-4 text-[13px] font-light leading-[1.65] text-white/55">{card.description}</p>
          </div>
        </article>
      ))
    : children;

  const arrowButtonClass = "absolute top-1/2 z-10 h-11 w-11 -translate-y-1/2 cursor-pointer rounded-full border border-white/20 bg-black/60 text-white transition-all duration-200 hover:bg-[#1a9fa0] hover:text-black";

  return (
    <div className="relative overflow-hidden">
      {showLeftBtn && (
        <button type="button" className={`${arrowButtonClass} left-2.5`} aria-label="Scroll left" onClick={() => scroll(-1)}>
          ←
        </button>
      )}
      {showRightBtn && (
        <button type="button" className={`${arrowButtonClass} right-2.5`} aria-label="Scroll right" onClick={() => scroll(1)}>
          →
        </button>
      )}
      <div
        className="flex cursor-grab select-none gap-4 overflow-x-auto px-[5%] pb-8 [scrollbar-width:none] active:cursor-grabbing max-lg:pb-7 max-[900px]:pb-6 max-[600px]:gap-3 max-[600px]:pb-5 [&::-webkit-scrollbar]:hidden"
        ref={scrollRef}
      >
        {content}
      </div>
    </div>
  );
}
