import React from 'react'

const ReadySection = () => {
  return (
    <>
    <div className="seven relative bg-[#EFECD6] min-h-[300px] mt-20 sm:mt-30 lg:mt-32">
        <div className='max-w-6xl flex flex-col lg:flex-row items-center justify-between mx-auto h-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
          <div className='text-center lg:text-left w-full lg:w-1/2 order-2 lg:order-1 mt-6 lg:mt-0'>
            <h1 
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }} 
              className='text-2xl sm:text-3xl lg:text-[40px] leading-[1.3] sm:leading-[1.4] lg:leading-[52px] text-[#2C4143]'
            >
              When You're Ready,<br className='hidden sm:block'/> 
              NeoGreens is Here.
            </h1>
            <p 
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 500 }} 
              className='text-base sm:text-lg lg:text-[18px] text-[#677071] leading-relaxed lg:leading-[27px] py-4 sm:py-5 lg:py-[24px] max-w-xl mx-auto lg:mx-0'
            >
              One clean, simple habit to help you feel better every day.
            </p>
            <button 
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 500 }} 
              className='text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[27px] border border-[#677071]/60 text-[#677071]/40 px-6 py-3 sm:py-4 rounded-full hover:bg-[#677071] hover:text-white transition-colors duration-200'
            >
              Coming Soon
            </button>
          </div>
          <div className='relative w-full lg:w-1/2 flex justify-center order-1 lg:order-2'>
            <div className='bg-[url("/ready-vec.svg")] bg-no-repeat bg-bottom bg-contain w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[550px] h-[200px] sm:h-[250px] lg:h-[250px]'>
              <img 
                src="https://neogreens.com/wp-content/uploads/2025/09/Frame-1-4.png" 
                alt="NeoGreens product" 
                className='ml-20 lg:absolute lg:bottom-8 sm:bottom-6 lg:bottom-8 w-[280px] sm:w-[350px] lg:w-[500px] max-w-none'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadySection