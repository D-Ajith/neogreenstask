import React from "react";

const neoLogo = (
  <img
    src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg"
    alt="neogreens"
    className="mx-auto w-24 md:w-28 h-8 md:h-10 object-contain"
  />
);

const checkIcon = (
  <svg width="24" height="24" viewBox="0 0 22 22" fill="none" className="mx-auto">
    <circle cx="11" cy="11" r="11" fill="#6BB890"/>
    <path d="M7 12.7L10 15.5L15 8.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const crossIcon = (
  <svg width="24" height="24" viewBox="0 0 22 22" fill="none" className="mx-auto">
    <circle cx="11" cy="11" r="11" fill="#E8E8E8"/>
    <path d="M8 8L14 14M8 14L14 8" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const tableData = [
  { info: "Probiotic content", neogreens: true, plant: true, animal: true, whey: false },
  { info: "Organic nutrients", neogreens: true, plant: false, animal: false, whey: false },
  { info: "Scientific backing transparency", neogreens: true, plant: true, animal: false, whey: false },
  { info: "Taste profile", neogreens: true, plant: true, animal: false, whey: true },
  { info: "Ingredient sourcing transparency", neogreens: true, plant: true, animal: false, whey: false },
  { info: "Cognitive-enhancing ingredients", neogreens: true, plant: false, animal: false, whey: false },
  { info: "Gut–Brain Axis support", neogreens: true, plant: false, animal: false, whey: false },
  { info: "Avoids questionable fillers (e.g., gums, stevia)", neogreens: true, plant: false, animal: false, whey: false },
  { info: "Sustainability", neogreens: true, plant: false, animal: false, whey: false },
  { info: "Protein quality", neogreens: true, plant: true, animal: false, whey: true },
  { info: "Allergen-free", neogreens: true, plant: false, animal: false, whey: false },
  { info: "Digestibility", neogreens: true, plant: false, animal: false, whey: false }
];

function ComparisonTable() {
  return (
    <div className="w-full bg-[#F9F9F0] py-8 md:py-12 lg:py-16 px-4 md:px-6 relative overflow-hidden">
    
   <img
  src="./Vector 6.png"
  alt=""
  className="absolute bottom-0 right-0 w-[100%] md:w-[50%] lg:w-[45%] h-auto object-contain opacity-10 pointer-events-none z-0"
/>
  <img
  src="./btn-vec.svg"
  alt=""
  className="absolute bottom-0 left-0 w-[100%] md:w-[60%] lg:w-[45%] h-auto object-contain opacity-30 pointer-events-none z-0"
/>
      
      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className="overflow-x-auto rounded-xl md:rounded-2xl shadow-xl">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr>
                <th 
                  className="px-4 md:px-6 py-4 md:py-5 text-left bg-white border-b-2 border-gray-200"
                  style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}
                >
                  <span className="text-[#2C3E3A] text-base md:text-lg lg:text-xl font-bold">
                    Information
                  </span>
                </th>
                <th 
                  className="px-3 md:px-5 py-4 md:py-5 border-b-2 border-l-2 border-gray-200 bg-[#3A4F51] text-center min-w-[100px] md:min-w-[120px]"
                >
                  {neoLogo}
                </th>
                <th 
                  className="px-3 md:px-5 py-4 md:py-5 border-b-2 border-l-2 border-gray-200 bg-white text-center min-w-[100px] md:min-w-[120px]"
                  style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}
                >
                  <span className="text-[#2C3E3A] text-sm md:text-base lg:text-lg font-bold">
                    Plant-based
                  </span>
                </th>
                <th 
                  className="px-3 md:px-5 py-4 md:py-5 border-b-2 border-l-2 border-gray-200 bg-white text-center min-w-[100px] md:min-w-[120px]"
                  style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}
                >
                  <span className="text-[#2C3E3A] text-sm md:text-base lg:text-lg font-bold">
                    Animal-based
                  </span>
                </th>
                <th 
                  className="px-3 md:px-5 py-4 md:py-5 border-b-2 border-l-2 border-gray-200 bg-white text-center min-w-[100px] md:min-w-[120px]"
                  style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}
                >
                  <span className="text-[#2C3E3A] text-sm md:text-base lg:text-lg font-bold">
                    Whey
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF7]'}
                >
                  <td 
                    className="px-4 md:px-6 py-4 md:py-5 border-b border-gray-200 text-left align-middle"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    <span className="text-[#2C3E3A] text-sm md:text-base lg:text-lg font-normal">
                      {row.info}
                    </span>
                  </td>
                  <td className="px-3 md:px-5 py-4 md:py-5 border-b border-l-2 border-gray-200 bg-[#F5F4E8] text-center align-middle">
                    {row.neogreens ? checkIcon : crossIcon}
                  </td>
                  <td className="px-3 md:px-5 py-4 md:py-5 border-b border-l-2 border-gray-200 text-center align-middle">
                    {row.plant ? checkIcon : crossIcon}
                  </td>
                  <td className="px-3 md:px-5 py-4 md:py-5 border-b border-l-2 border-gray-200 text-center align-middle">
                    {row.animal ? checkIcon : crossIcon}
                  </td>
                  <td className="px-3 md:px-5 py-4 md:py-5 border-b border-l-2 border-gray-200 text-center align-middle">
                    {row.whey ? checkIcon : crossIcon}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ComparisonTable;