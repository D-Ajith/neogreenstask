import React from "react";

function Herosection() {
  return (
    <section className="bg-[#2C4143] w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="./Vector 6.png"
          alt=""
          className="hidden md:block absolute top-0 right-0 w-[60%] lg:w-[55%] h-full object-cover opacity-50"
        />
      </div>


      <div className="hidden md:block max-w-7xl w-full mx-auto px-6 lg:px-12 xl:px-20 py-8 lg:py-20 relative z-10">
        <div className="grid grid-cols-2 gap-8 lg:gap-16 items-center">

          <div className="text-left">
            <h1
              className="text-[#EFECD6] text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: "58px" }}
            >
              Here's to the New<br />You
            </h1>

            <p
              className="text-[#EFECD6] text-lg lg:text-xl mb-10 max-w-md"
              style={{ fontFamily: 'Raleway, -apple-system, sans-serif' }}
            >
              One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.
            </p>

            <button
              className="bg-[#8B9688] text-[#2C4143] px-12 py-4 rounded-full text-lg font-semibold transition-all hover:bg-[#9BA89E]"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Coming Soon
            </button>
          </div>


          <div className="relative flex items-center justify-center">

            <div className="absolute top-8 right-12 lg:right-20">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <line x1="5" y1="15" x2="20" y2="5" stroke="#E8EDE0" strokeWidth="2" />
                <line x1="25" y1="15" x2="35" y2="5" stroke="#E8EDE0" strokeWidth="2" />
              </svg>
            </div>

            <img
              src="https://neogreens.com/wp-content/uploads/2025/09/Group-4988.png"
              alt="NeoGreens Product"
              className="w-full max-w-5xl lg:max-w-6xl drop-shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              style={{ width: "calc(100% + 10px)", height: "auto" }}
            />

          </div>
        </div>
      </div>


      <div className="md:hidden w-full px-6 py-16 relative z-10 flex flex-col items-center">

        <div className="text-center mb-8">
          <h1
            className="text-[#E8EDE0] text-4xl font-bold leading-tight mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Here's to the New You
          </h1>

          <p
            className="text-[#C5CFC0] text-base mb-8"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.
          </p>

          <button
            className="bg-[#8B9688] text-[#2C4143] px-10 py-3.5 rounded-full text-base font-semibold"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Coming Soon
          </button>
        </div>


        <div className="relative w-full max-w-xs mt-8">

          <div className="absolute -top-8 right-8">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <line x1="4" y1="12" x2="16" y2="4" stroke="#E8EDE0" strokeWidth="2" />
              <line x1="20" y1="12" x2="28" y2="4" stroke="#E8EDE0" strokeWidth="2" />
            </svg>
          </div>


          <div className="absolute -bottom-20 -left-10 w-64 h-64 opacity-30">
            <img
              src="./Vector 6.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <img
            src="https://neogreens.com/wp-content/uploads/2025/09/Group-4988.png"
            alt="NeoGreens Product"
            className="w-full drop-shadow-2xl relative z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection;