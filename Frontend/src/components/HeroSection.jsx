import React from "react";

function Herosection() {
  return (
      <section className="bg-[#2C4143] w-full min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url("Vector%206.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="hidden md:block max-w-7xl w-full mx-auto px-6 lg:px-12 xl:px-20 py-8 lg:py-20 relative z-10">
        <div className="grid grid-cols-2 gap-8 lg:gap-16 items-center">

          <div className="text-left">
            <h1
              className="text-[#EFECD6] font-bold leading-tight mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '58px' }}
            >
              Here's to the New<br />You
            </h1>

            <p
              className="text-[#EFECD6] text-lg lg:text-xl mb-10 max-w-md"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.
            </p>

            <button
              className="bg-[#8E968C] text-[#2C4143] px-12 py-4 rounded-full text-lg font-semibold transition-all hover:bg-[#7A8278]"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Coming Soon
            </button>
          </div>


          <div className="relative flex items-center justify-center">
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
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            Here's to the New You
          </h1>

          <p
            className="text-[#C5CFC0] text-base mb-8"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.
          </p>

          <button
            className="bg-[#8E968C] text-[#2C4143] px-10 py-3.5 rounded-full text-base font-semibold"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Coming Soon
          </button>
        </div>


        <div className="relative w-full max-w-xs mt-8">
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