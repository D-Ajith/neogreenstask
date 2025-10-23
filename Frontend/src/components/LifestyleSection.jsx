import React from "react";

function LifestyleSection() {
  return (
    <section className="w-full flex justify-center items-center py-8 md:py-12 lg:py-16 px-4 md:px-6 bg-[#FAFAF5]">
      <div className="max-w-6xl w-full">
        <div className="bg-[#3A4F51] rounded-xl md:rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 relative">
          
          <img 
            src="../src/assets/Vector 6.png" 
            alt="" 
            className="absolute top-0 left-0 w-auto h-full object-cover opacity-40 pointer-events-none z-0"
          />
          
          <div className="flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-12 md:py-12 lg:py-14 relative z-10">
            <h2 className="text-[#E8EDE0] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-serif font-bold mb-4 md:mb-5 lg:mb-6 leading-[1.2]">
              The Simple Solution to Modern Lifestyle Health Issues
            </h2>
            
            <p className="text-[#D5DBD0] text-sm sm:text-base md:text-base lg:text-lg mb-6 md:mb-7 lg:mb-8 leading-relaxed">
              From long hours to missed meals, we understand how wellness gets pushed aside. NeoGreens is our answer to that. Backed by science, grounded in nature, and made to meet you where you are.
            </p>
            
            <button className="bg-[#E8EDE0] text-[#3A4F51] text-base md:text-lg font-semibold rounded-full px-8 py-3 md:px-9 md:py-3.5 w-fit shadow-md hover:bg-[#DDE2D5] hover:shadow-lg transition-all">
              Our Story
            </button>
          </div>
          <div className="relative h-[300px] sm:h-[350px] md:h-auto min-h-[400px] z-10">
            <img
              src="https://neogreens.com/wp-content/uploads/2025/06/simple.png"
              alt="Modern Lifestyle Health"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default LifestyleSection;