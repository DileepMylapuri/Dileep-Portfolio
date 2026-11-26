import React, { useState, useEffect } from 'react';
// import { useNavigate  } from 'react-router-dom';

const Navbar = ({ onGetInTouchClick }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // const navigate = useNavigate(); 
  

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY < lastScrollY);
    setIsAtTop(currentScrollY < 100);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };



  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${isAtTop ? "bg-transparent" : "bg-BgColor backdrop-blur-md shadow-md"} `}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:px-6">
        <a className="flex items-center">
          <span
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-xl sm:text-2xl md:text-[2rem] font-extrabold head-HeadColor cursor-pointer">
            MS.DEV <span className="text-red-600 font-bold text-2xl sm:text-3xl">*</span>
          </span>
        </a>

        <button
          className={`lg:hidden focus:outline-none ${isAtTop ? "text-white" : "text-TextColor"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>

        <nav
          className={`flex-col lg:flex-row lg:flex bg-violet-950 gap-6 lg:gap-8 items-center absolute lg:static top-16 left-0 w-full lg:w-auto lg:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {["home", "intro", "skills", "projects", "passion", "contact", "footer"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className=" hover:head-FocusColor group-hover:scale-x-100 hover:bg-gray-900 head-HeadColor font-bold py-2 lg:py-0 text-lg cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            )
          )}
        </nav>

        <button
          onClick={onGetInTouchClick}
          className="hidden lg:inline-flex cursor-pointer relative rounded-full overflow-hidden group items-center bg-CardColor text-black hover:text-white font-bold py-2 px-4 transition-colors duration-300"
        >
          <span className="relative z-10 flex items-center cursor-pointer">
            <svg
              className="bg-[#da220d] cursor-pointer transition-transform duration-300 w-6 h-6 text-white rounded-full"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            <span className="pl-2">Get in Touch</span>
          </span>
          {/* The arrow's red circle grows to fill the button on hover */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#da220d] transition-transform duration-700 ease-out group-hover:scale-[14] z-0"></span>
        </button>
      </div>

    </div>
  );
};

export default Navbar;
