// AboutMeHeader.js

import React from "react";

const AboutMeHeader = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="relative w-full">
      {isMobile ? (
        <div className="relative w-full">
          <img className="w-full rounded-3xl" src="/Mountains.jpg" alt="Mountains" />
          <div className="absolute top-0 left-0 w-full h-full bg-slate-900 bg-opacity-70 flex items-center justify-center rounded-3xl">
            <div className="text-white text-3xl font-semibold font-Rubik">
              <p className="py-[1rem]">~About Me~</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:block relative w-[80%] mx-auto z-10">
          {/* Desktop version */}
          <img className="w-full rounded-3xl" src="/Mountains.jpg" alt="Mountains" />
          <div className="absolute top-0 left-0 w-full h-full bg-slate-900 bg-opacity-70 flex items-center justify-center rounded-3xl">
            <div className="text-white text-5xl font-semibold font-Rubik">
              <p className="py-16">~About Me~</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMeHeader;
