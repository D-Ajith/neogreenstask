import React, { useRef, useState, useEffect } from "react";

const cards = [
  {
    title: "Feel Foggy or Unfocused?",
    desc: "Designed to support mental clarity with B12 and adaptogens.",
    img: "https://neogreens.com/wp-content/uploads/2025/09/Image-1-3.png",
    iconUrl: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962.svg",
  },
  {
    title: "Bloating or Indigestion?",
    desc: "Aids digestion with probiotics and digestive enzymes.",
    img: "https://neogreens.com/wp-content/uploads/2025/09/Image-2.png",
    iconUrl: "https://neogreens.com/wp-content/uploads/2025/06/Group-4961.svg",
  },
  {
    title: "Constant Energy Crashes?",
    desc: "Supports sustained energy with clean, plant-based nutrients.",
    img: "https://neogreens.com/wp-content/uploads/2025/09/Image-3.png",
    iconUrl: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-1.svg",
  },
  {
    title: "Busy Routines Messing Up Nutrition?",
    desc: "One simple scoop a day keeps your essentials covered.",
    img: "https://neogreens.com/wp-content/uploads/2025/09/Image-4.png",
    iconUrl: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-2.svg",
  },
  {
    title: "Too Many Supplements to Choose From?",
    desc: "NeoGreens simplifies it all. Just one powder once a day.",
    img: "https://neogreens.com/wp-content/uploads/2025/09/Image-5.png",
    iconUrl: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-3.svg",
  },
  {
    title: "Frequent Body Pains and Aches?",
    desc: "Takes care of essential vitamin deficiencies to support recovery.",
    img: "https://neogreens.com/wp-content/uploads/2025/09/Image-6.png",
    iconUrl: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-4.svg",
  },
];

export default function BenefitsSection() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const maxScroll = scrollHeight - clientHeight;
      
      if (maxScroll > 0) {
        setScrollProgress(scrollTop / maxScroll);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const getCardStyle = (index) => {
    const totalCards = cards.length;
    const isLastCard = index === totalCards - 1;
    const cardProgress = scrollProgress * (totalCards * 1.2);
    const cardScrollProgress = cardProgress - index;
    
   
    const stackOffset = Math.max(0, -cardScrollProgress) * 8;
    const stackScale = Math.max(0.92, 1 - Math.max(0, -cardScrollProgress) * 0.02);
    
   
    if (isLastCard && cardScrollProgress >= 0) {
      const clampedProgress = Math.min(cardScrollProgress, 0.3);
      return {
        transform: `translateY(${-clampedProgress * 20}px) scale(${1 - clampedProgress * 0.02})`,
        opacity: 1,
        zIndex: totalCards,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      };
    }
    
   
    if (cardScrollProgress > 1.3) {
      const exitProgress = Math.min((cardScrollProgress - 1.3) / 0.5, 1);
      return {
        opacity: 0.4,
        transform: `translateY(-${60 + exitProgress * 10}%) scale(0.25)`,
        zIndex: index,
        pointerEvents: 'none',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      };
    }
    
    if (cardScrollProgress > 0.7) {
      const exitProgress = (cardScrollProgress - 0.7) / 0.6;
      const smoothExit = exitProgress * exitProgress;
      
      return {
        transform: `translateY(${-smoothExit * 150}px) scale(${1 - smoothExit * 0.75})`,
        opacity: Math.max(0.4, 1 - smoothExit * 0.6),
        zIndex: totalCards + index,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      };
    }
    
    
    if (cardScrollProgress < 0) {
      return {
        transform: `translateY(${stackOffset}px) scale(${stackScale})`,
        opacity: 1,
        zIndex: totalCards - index,
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      };
    }
    
    
    const viewScale = 1 - (cardScrollProgress * 0.015);
    const viewOffset = cardScrollProgress * -6;
    
    return {
      transform: `translateY(${viewOffset}px) scale(${viewScale})`,
      opacity: 1,
      zIndex: totalCards - index,
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
   <section className="relative w-full bg-[#FCFBF6] flex justify-center items-start px-4 md:px-8 py-16 md:py-24 overflow-hidden">
    
      <img 
        src="../src/assets/Vector 6.png" 
        alt="" 
        className="absolute top-0 left-0 w-full h-auto object-cover opacity-10 pointer-events-none z-0"
      />
      
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-12 relative z-10">
       
        <div className="flex flex-col items-center md:items-start max-w-lg flex-shrink-0 px-2 md:px-0 pb-8 md:pb-0 mx-auto md:mx-0">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#202523] leading-tight mb-4 sm:mb-6 text-center md:text-left">
            Backed by Nature. Built
            <br /> for Your Routine.
          </h1>
          <p className="text-[#4D5956] text-base sm:text-lg mb-6 sm:mb-8 max-w-md text-center md:text-left">
            NeoGreens goes where you go — from home to the office to the gym.
            One scoop a day will help you overcome all your wellness roadblocks with ease.
          </p>
          <button className="border-2 border-[#b7bfb5] text-[#90948b] text-lg sm:text-xl px-6 sm:px-8 py-2 rounded-full font-medium transition bg-transparent hover:bg-[#f1f3ee] mb-8 sm:mb-10">
            Coming Soon
          </button>
          <img
            src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"
            alt="NeoGreens nature"
            className="w-48 sm:w-56 md:w-64 mt-6 sm:mt-10 select-none pointer-events-none mx-auto md:mx-0"
            draggable={false}
          />
        </div>
        
        <div className="relative w-full md:max-w-lg">
          <div className="block md:hidden space-y-4">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-5 flex flex-col border border-[#e0e0e0] shadow-lg transition-all duration-300 cursor-pointer ${
                  activeCard === index ? 'scale-105 -translate-y-2 shadow-2xl' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                onTouchStart={() => setActiveCard(index)}
                onTouchEnd={() => setTimeout(() => setActiveCard(null), 200)}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`rounded-full bg-[#e5eae7] p-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    activeCard === index ? 'scale-110 bg-[#d5e0d7]' : ''
                  }`}>
                    <img src={card.iconUrl} alt={`${card.title} icon`} className="w-6 h-6" />
                  </div>
                  <h2 className="font-serif text-lg font-bold text-[#202523] leading-tight">{card.title}</h2>
                </div>
                <p className="text-[#4D5956] text-sm mb-4 leading-relaxed">{card.desc}</p>
                <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      activeCard === index ? 'scale-110' : ''
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block h-[600px]">
            <div
              ref={containerRef}
              className="absolute inset-0 overflow-y-auto overflow-x-hidden px-2"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              <div style={{ height: `${(cards.length + 1) * 550}px`, position: 'relative' }}>
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="sticky top-4 group"
                    style={getCardStyle(index)}
                  >
                    <div 
                      className="bg-white rounded-2xl p-7 flex flex-col border border-[#e0e0e0] shadow-lg mb-4 transition-all duration-300 hover:shadow-2xl hover:border-[#c0c6c0] cursor-pointer"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = (y - centerY) / 25;
                        const rotateY = (centerX - x) / 25;
                        e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="rounded-full bg-[#e5eae7] p-3 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d5e0d7] group-hover:shadow-md">
                          <img src={card.iconUrl} alt={`${card.title} icon`} className="w-9 h-9" />
                        </div>
                        <h2 className="font-serif text-2xl font-bold text-[#202523] leading-tight group-hover:text-[#1a2e30] transition-colors duration-300">{card.title}</h2>
                      </div>
                      <p className="text-[#4D5956] text-lg mb-5 leading-relaxed group-hover:text-[#3a4644] transition-colors duration-300">{card.desc}</p>
                      <div className="w-full h-56 bg-gray-100 rounded-xl overflow-hidden">
                        <img 
                          src={card.img} 
                          alt={card.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}