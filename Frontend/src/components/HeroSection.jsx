import React from "react";

function Herosection() {
  return (
    <section className="bg-[#354B4D] w-full min-h-screen flex items-center justify-center relative overflow-hidden">
    
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            d="M-100,600 Q300,400 600,500 T1200,600"
            stroke="#4a6062"
            strokeWidth="80"
            fill="none"
          />
          <path
            d="M-100,700 Q400,500 800,650 T1400,750"
            stroke="#3f5456"
            strokeWidth="60"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
         
          <div className="text-center md:text-left">
            <h1 className="text-[#E8EDE0] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-4 md:mb-6">
              Here's to the New<br />You
            </h1>
            
            <p className="text-[#C5CFC0] text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-lg mx-auto md:mx-0">
              One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.
            </p>
            
            <button className="bg-[#8B9688] text-[#2C4143] px-10 py-3.5 rounded-full text-lg font-semibold shadow-lg transition-all hover:bg-[#9BA89E] hover:scale-105 hover:shadow-xl">
              Coming Soon
            </button>
          </div>

          
          <div className="relative flex items-center justify-center">
          
            <div className="absolute inset-0 flex items-center justify-center -right-20">
              <img 
                src="./Vector 6.png"
                alt="Decorative background" 
                className="w-full h-full max-w-2xl object-contain opacity-70"
              />
            </div>

          
            <div className="relative z-10 mt-8 md:mt-0">
              <img
                src="https://neogreens.com/wp-content/uploads/2025/09/Group-4988.png"
                alt="NeoGreens Product"
                className="w-80 sm:w-96 md:w-[32rem] lg:w-[36rem] drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>

     
      <div className="absolute bottom-12 left-8 w-12 h-1 bg-[#C5CFC0] transform rotate-45 md:hidden"></div>
    </section>
  );
}

export default Herosection;