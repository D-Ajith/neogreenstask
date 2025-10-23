
import React, { useRef } from "react";

const quoteSymbolUrl = "https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg";

const testimonials = [
  {
    quote: 'Finally, mental clarity that sticks with just one scoop.',
    detail: "Between work and workouts, my mind used to feel fogged by midday. NeoGreens changed the game. Now I'm sharp, calm, and focused even on the toughest days.",
    profile: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-45-1.png",
    name: "Krithi Koushal"
  },
  {
    quote: "No more bloating, only a lighter, happier gut.",
    detail: "I've tried everything for digestion, but nothing helped like NeoGreens. The probiotics and enzymes are gentle but mighty—my stomach feels balanced, refreshed, and energized.",
    profile: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46.png",
    name: "Midhun Roy"
  },
  {
    quote: "Reset my routine inside and out.",
    detail: "Ditching my multitabs for NeoGreens simplified my mornings. Just one scoop gives me gut support, clean energy, and focus. I feel more grounded and ready to tackle the day.",
    profile: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46-2.png",
    name: "Jennifer"
  },
  {
    quote: "From sluggish to unstoppable.",
    detail: "I was dragged down by sluggish mornings—lack of energy, poor focus, uncomfortable digestion. NeoGreens turned that around. One daily scoop, and I'm more alert, active, and resilient.",
    profile: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46-3.png",
    name: "Rahul Harrison"
  },
  {
    quote: "One scoop, so many wins.",
    detail: "Travel, gym, work—NeoGreens travels with me. It's like a reset button: better digestion, clearer mind, and more energy. Finally, a wellness routine that fits my life.",
    profile: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46-4.png",
    name: "Emily Johnson"
  }
];

function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = 380; 
    if (dir === "left") container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    else container.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white w-full flex flex-col items-center overflow-hidden relative">
     
<img 
  src="../src/assets/Vector 6.png" 
  alt="" 
  className="absolute bottom-0 left-0 w-[40%] md:w-[35%] lg:w-[40%] opacity-10 pointer-events-none object-contain translate-x-[-50%]"
/>


    
      <div className="text-center mb-10 md:mb-12 lg:mb-14 px-4">
        <h2 className="text-[#3A4F51] text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
          What Choosing Better Looks Like
        </h2>
        <p className="text-[#7B8286] text-base md:text-lg lg:text-xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          Every Scoop, A Step Towards Better Living.
        </p>
      </div>

     
      <div className="relative w-full max-w-[1400px] mx-auto">
        
        <button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-gray-200 shadow-lg rounded-full w-14 h-14 items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all"
          type="button"
          aria-label="Scroll testimonials left"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke="#3A4F51" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

     
        <div
          ref={scrollRef}
          className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-8 lg:px-20 pb-4 scroll-smooth"
          style={{ 
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="snap-center flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[45vw] lg:w-[350px] xl:w-[380px] bg-white border-2 border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 md:p-7 lg:p-8 flex flex-col"
            >
            
              <img 
                src={quoteSymbolUrl} 
                alt="Quote" 
                className="w-10 h-10 md:w-12 md:h-12 mb-5 opacity-60" 
              />

             
              <h3 className="text-[#3A4F51] text-lg md:text-xl lg:text-[1.35rem] font-semibold mb-3 leading-snug" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                "{item.quote}"
              </h3>

            
              <p className="text-[#5A6468] text-sm md:text-base lg:text-[1.05rem] leading-relaxed mb-6 md:mb-8 flex-grow" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                {item.detail}
              </p>

           
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <img
                  src={item.profile}
                  alt={item.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-gray-200"
                />
                <span className="text-[#7B8286] text-base md:text-lg font-medium" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-gray-200 shadow-lg rounded-full w-14 h-14 items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all"
          type="button"
          aria-label="Scroll testimonials right"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" stroke="#3A4F51" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Testimonials;