import React from "react";

const shimmer =
  "animate-skeleton-shimmer rounded-[2px] bg-[linear-gradient(90deg,#161616_25%,#2a2a2a_50%,#161616_75%)] bg-[length:200%_100%]";

export default function Skeleton() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">
      <nav className="relative z-10 border-b border-white/[0.08] px-12 py-5 max-lg:px-8 max-sm:px-5">
        <div className={`h-6 w-[140px] ${shimmer}`} />
      </nav>

      <div className="flex min-h-[calc(100vh-61px)] items-center">
        <div className="w-full max-w-[680px] px-16 py-20 max-md:px-5 max-md:py-12">
          <div className={`mb-4 h-8 w-[180px] ${shimmer}`} />
          <div className={`mb-2.5 h-3.5 w-[140px] ${shimmer}`} />
          <div className={`mb-6 h-[70px] w-3/5 ${shimmer}`} />
          <div className={`mb-2.5 h-4 w-4/5 ${shimmer}`} />
          <div className={`mb-9 h-4 w-[70%] ${shimmer}`} />
          <div className="flex gap-3.5">
            <div className={`h-[50px] w-40 ${shimmer}`} />
            <div className={`h-[50px] w-40 ${shimmer}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
