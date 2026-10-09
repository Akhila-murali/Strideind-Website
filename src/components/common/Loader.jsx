import React from "react";

export default function Loader({ exiting = false }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex h-screen w-full items-center justify-center bg-[#2aa3a3] transition-opacity duration-500 ease-out ${exiting ? "pointer-events-none opacity-0" : "opacity-100"}`}
      aria-hidden={exiting}
    >
      <div className="relative h-[140px] w-[140px]">
        <img
          src={process.env.PUBLIC_URL + "/loader.png"}
          alt="logo"
          className="absolute left-1/2 top-1/2 w-[70px] -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute left-0 top-0 h-1 w-full origin-left animate-[loaderMoveTop_2s_linear_infinite] bg-white" />
        <div className="absolute right-0 top-0 h-full w-1 origin-top animate-[loaderMoveRight_2s_linear_infinite] bg-white" />
        <div className="absolute bottom-0 right-0 h-1 w-full origin-right animate-[loaderMoveBottom_2s_linear_infinite] bg-white" />
        <div className="absolute bottom-0 left-0 h-full w-1 origin-bottom animate-[loaderMoveLeft_2s_linear_infinite] bg-white" />
      </div>
    </div>
  );
}
