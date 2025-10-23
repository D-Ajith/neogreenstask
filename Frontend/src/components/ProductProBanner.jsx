import React from "react";

const items = [
  {
    img: "https://neogreens.com/wp-content/uploads/2025/06/Gluten-free.svg",
    alt: "Gluten-Free",
    label: "Gluten-Free",
  },
  {
    img: "https://neogreens.com/wp-content/uploads/2025/06/100-Vegan-1-1.svg",
    alt: "100% Vegan",
    label: "100% Vegan",
  },
  {
    img: "https://neogreens.com/wp-content/uploads/2025/06/Organic-1-1.svg",
    alt: "Organic",
    label: "Organic",
  },
  {
    img: "https://neogreens.com/wp-content/uploads/2025/06/Zero-Synthetic-Nutrients-1-1.svg",
    alt: "Zero Synthetic Nutrients",
    label: "Zero Synthetic Nutrients",
  },
];

function ProductProBanner() {
  return (
    <section className="w-full bg-[#ECECD4] py-6 md:py-8 px-4">
      <ul className="grid grid-cols-2 lg:hidden gap-6 sm:gap-8 max-w-2xl mx-auto">
        {items.map((item) => (
          <li 
            key={item.label} 
            className="flex flex-col items-center justify-center gap-3 text-center"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
            <h5 className="text-[#2C4143] text-sm sm:text-base md:text-lg font-medium leading-snug">
              {item.label}
            </h5>
          </li>
        ))}
      </ul>

      <ul className="hidden lg:flex justify-center items-center gap-6 xl:gap-8 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <React.Fragment key={item.label}>
            <li className="flex items-center gap-3 xl:gap-4">
              <img
                src={item.img}
                alt={item.alt}
                className="w-12 h-12 xl:w-14 xl:h-14 object-contain flex-shrink-0"
              />
              <h5 className="text-[#2C4143] text-base xl:text-lg font-medium whitespace-nowrap">
                {item.label}
              </h5>
            </li>
            {idx !== items.length - 1 && (
              <span className="text-[#2C4143] text-2xl font-bold select-none opacity-40">
                •
              </span>
            )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}

export default ProductProBanner;