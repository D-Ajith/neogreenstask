import React from "react";

function ReadySection() {
  return (
    <section className="w-full bg-[#F0EFE0] py-16 md:py-20 lg:py-24 flex items-center relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] hidden md:block pointer-events-none">
        <svg className="w-full h-full opacity-25" viewBox="0 0 600 600">
          <circle 
            cx="300" 
            cy="300" 
            r="250" 
            stroke="#D8D7C3" 
            strokeWidth="35" 
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute left-0 top-0 text-[#E5E4D5] text-[12rem] lg:text-[16rem] font-bold leading-none opacity-40 pointer-events-none hidden md:block overflow-hidden" style={{ fontFamily: 'serif' }}>
        YOU
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-[#3A4F51] font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 md:mb-6">
              When You're Ready,<br />
              NeoGreens is Here.
            </h2>
            
            <p className="text-[#6B7378] text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-lg">
              One clean, simple habit to help you feel better every day.
            </p>
            
            <button className="bg-transparent border-2 border-[#B8BAAC] text-[#7A8082] py-3 px-10 md:py-3.5 md:px-12 rounded-full text-lg md:text-xl font-medium hover:bg-[#E8E7D8] transition-all">
              Coming Soon
            </button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full border-[25px] md:border-[30px] border-[#E0DFCD] opacity-60"></div>
            </div>

            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://neogreens.com/wp-content/uploads/2025/09/Frame-1-4.png"
                alt="NeoGreens Product"
                className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px] drop-shadow-2xl"
                draggable={false}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ReadySection;