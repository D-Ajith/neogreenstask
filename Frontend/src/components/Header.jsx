import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full bg-[#2C4143] fixed top-0 left-0 z-50">
      <div className="w-full mx-auto flex items-center justify-between py-4 md:py-5 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
       
        <div className="flex items-center">
          <img 
            src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg"
            alt="NeoGreens"
            className="h-8 md:h-10 w-auto"
          />
        </div>

      
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <a
            href="#about"
            className="text-[#E8EDE0] text-base lg:text-lg font-medium hover:underline transition"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-[#E8EDE0] text-base lg:text-lg font-medium hover:underline transition"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Contact Us
          </a>
          <button
            className="ml-4 px-6 lg:px-8 py-2.5 lg:py-3 rounded-full border-2 border-[#8B9688] text-[#8B9688] text-base lg:text-lg font-medium bg-transparent hover:bg-[#8B9688]/10 transition focus:outline-none"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            disabled
          >
            Coming Soon
          </button>
        </nav>

      
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 focus:outline-none relative z-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
          
            <svg
              className="w-7 h-7 text-[#3A4F51]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 text-[#E8EDE0]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

    
      <div className="w-full h-px bg-[#5A6F71]" />

     
      <div
        className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
       
        <div className="bg-[#3A4F51] py-4 px-4 sm:px-6 flex items-center justify-between">
          <img 
            src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg"
            alt="NeoGreens"
            className="h-8 w-auto"
          />
          <button
            onClick={closeMenu}
            className="flex items-center justify-center w-10 h-10 focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-7 h-7 text-[#E8EDE0]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

       
        <nav className="flex flex-col items-start px-6 sm:px-8 pt-12 space-y-8">
          <a
            href="#about"
            onClick={closeMenu}
            className="text-[#3A4F51] text-xl sm:text-2xl font-normal hover:underline transition"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-[#3A4F51] text-xl sm:text-2xl font-normal hover:underline transition"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Contact Us
          </a>
          <button
            className="mt-6 w-full px-8 py-3.5 rounded-full border-2 border-[#C4C6B8] text-[#8B8D85] text-lg font-medium bg-[#F5F4EB] hover:bg-[#E8E7D8] transition focus:outline-none"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            disabled
          >
            Coming Soon
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;