import React from "react";

const belowBenefits = [
  {
    id: 1,
    img: "https://neogreens.com/wp-content/uploads/2025/06/increase.svg",
    description: "Increased Energy Levels",
  },
  {
    id: 2,
    img: "https://neogreens.com/wp-content/uploads/2025/06/improved.svg",
    description: "Improved Gut Health",
  },
  {
    id: 3,
    img: "https://neogreens.com/wp-content/uploads/2025/06/boosted.svg",
    description: "Boosted Immunity",
  },
  {
    id: 4,
    img: "https://neogreens.com/wp-content/uploads/2025/06/natural-1.svg",
    description: "Natural Detox",
  },
  {
    id: 5,
    img: "https://neogreens.com/wp-content/uploads/2025/06/daily.svg",
    description: "Daily Nourishment",
  },
];

const ProductBenefitsSection = () => {
  return (
    <section className="w-full bg-[#E8E7D0] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
       
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-8 xl:gap-12">
          {belowBenefits.map(({ id, img, description }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-start text-center"
            >
              <div className="mb-3 md:mb-4">
                <img
                  src={img}
                  alt={description}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain"
                  draggable={false}
                />
              </div>
              <p
                className="text-[#3A4F51] text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-medium leading-snug max-w-[140px] sm:max-w-none"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      
        <div className="sm:hidden flex flex-col items-center gap-6">
       
          <div className="flex w-full justify-center gap-8">
            {[belowBenefits[0], belowBenefits[1]].map(({ id, img, description }) => (
              <div key={id} className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <img
                    src={img}
                    alt={description}
                    className="w-16 h-16 object-contain"
                    draggable={false}
                  />
                </div>
                <p className="text-[#3A4F51] text-sm font-medium max-w-[120px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex w-full justify-center gap-8">
            {[belowBenefits[2], belowBenefits[3]].map(({ id, img, description }) => (
              <div key={id} className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <img
                    src={img}
                    alt={description}
                    className="w-16 h-16 object-contain"
                    draggable={false}
                  />
                </div>
                <p className="text-[#3A4F51] text-sm font-medium max-w-[120px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
         
          <div className="flex w-full justify-center mt-2">
            <div className="flex flex-col items-center text-center">
              <div className="mb-2">
                <img
                  src={belowBenefits[4].img}
                  alt={belowBenefits[4].description}
                  className="w-16 h-16 object-contain"
                  draggable={false}
                />
              </div>
              <p className="text-[#3A4F51] text-sm font-medium max-w-[120px]">
                {belowBenefits[4].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefitsSection;
