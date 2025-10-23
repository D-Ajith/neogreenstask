
import React from "react";

function NutrientsHeroSection() {
  return (
    <section className="w-full bg-[#FAF9F0] py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col items-center justify-center px-4">
      <div className="max-w-5xl w-full flex flex-col items-center text-center">
        
        <h1 
          className="text-[#2C3E3A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6 lg:mb-8 leading-tight"
          style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}
        >
          One Scoop. 60+ Nutrients. It's That Easy.
        </h1>
        
        <p 
          className="text-[#7A8086] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 lg:mb-10 max-w-4xl px-4"
          style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
        >
          NeoGreens is built to take the confusion out of wellness. you get the essentials – no synthetic ingredients, harsh formulas, or hidden additives. just smart, science-backed nutrition that respects your time and your trust.
        </p>
        
        <button
          disabled
          className="px-8 md:px-10 py-3 md:py-3.5 rounded-full border-2 border-[#C4C6B8] bg-transparent text-[#8B8D85] text-base md:text-lg font-medium shadow-sm hover:bg-[#F5F4EB] transition-all duration-300 cursor-not-allowed"
          style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
        >
          Coming Soon
        </button>
        
      </div>
    </section>
  );
}

export default NutrientsHeroSection;