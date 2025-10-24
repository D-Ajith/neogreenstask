import React from "react";


const instagramIcon = "https://neogreens.com/wp-content/uploads/2025/08/IG.svg";
const facebookIcon = "https://neogreens.com/wp-content/uploads/2025/08/FB.svg";
const xIcon = "https://neogreens.com/wp-content/uploads/2025/08/X-2.svg";
const linkedinIcon = "https://neogreens.com/wp-content/uploads/2025/08/LN.svg";

function Footer() {
  return (

    <footer className="bg-[#2C4143] w-full py-8 md:py-10 lg:py-12 relative overflow-hidden">

      <img
        src="./footer-vec.svg"
        alt=""
        className="absolute top-0 left-0 w-auto h-full object-cover opacity-60 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-6 pb-6 md:pb-8">

          <div className="flex flex-col items-start">
            <img
              src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg"
              alt="NeoGreens Logo"
              className="h-8 md:h-10 w-auto mb-6 md:mb-8"
            />


            <div className="flex items-center gap-4 md:gap-5">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:opacity-80 transition"
              >
                <img src={instagramIcon} alt="Instagram" className="w-7 h-7 md:w-8 md:h-8" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:opacity-80 transition"
              >
                <img src={facebookIcon} alt="Facebook" className="w-7 h-7 md:w-8 md:h-8" />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="hover:opacity-80 transition"
              >
                <img src={xIcon} alt="X" className="w-7 h-7 md:w-8 md:h-8" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:opacity-80 transition"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7 md:w-8 md:h-8" />
              </a>
            </div>
          </div>


          <div className="flex flex-col md:flex-row gap-3 md:gap-8 lg:gap-12 items-start md:items-center">
            <a
              href="#about"
              className="text-[#E8EDE0] text-base md:text-lg font-normal hover:underline transition"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-[#E8EDE0] text-base md:text-lg font-normal hover:underline transition"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Contact Us
            </a>
          </div>
        </div>


        <div className="border-t border-[#5A6F71] w-full mb-6 md:mb-8" />


        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-6">


          <div className="flex flex-col gap-3 md:gap-4">
            <p
              className="text-[#E8EDE0] text-sm md:text-base"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Copyright 2025 © NeoGreen All rights Reserved
            </p>


            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 md:hidden">
              <a
                href="#privacy"
                className="text-[#E8EDE0] text-sm font-normal hover:underline transition"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-[#E8EDE0] text-sm font-normal hover:underline transition"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Terms & Conditions
              </a>
            </div>


            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 md:hidden">
              <a
                href="#return"
                className="text-[#E8EDE0] text-sm font-normal hover:underline transition"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Return Policy
              </a>
              <a
                href="#shipping"
                className="text-[#E8EDE0] text-sm font-normal hover:underline transition"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Shipping policy
              </a>
            </div>
          </div>


          <div className="hidden md:flex flex-row gap-6 lg:gap-8">
            <a
              href="#privacy"
              className="text-[#E8EDE0] text-base font-normal hover:underline transition"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-[#E8EDE0] text-base font-normal hover:underline transition"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Terms & Conditions
            </a>
            <a
              href="#return"
              className="text-[#E8EDE0] text-base font-normal hover:underline transition"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Return Policy
            </a>
            <a
              href="#shipping"
              className="text-[#E8EDE0] text-base font-normal hover:underline transition"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Shipping policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;