import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { X } from 'lucide-react';
import Navbar from './components/Navbar';
import Message from './components/Message';

import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import Intro from './components/Intro';
import SkillSection from './components/SkillSection';
import Projects from './components/Projects';
import ImageSection from './components/ImageSection';
import CompaniesList from './components/CompaniesList';
import BackgroundImg from './components/BackgroundImg';
import Passion from './components/Passion';
import Status from './components/Status';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GameSection from './components/GameSection';
import './input.css';

// Path of the resume PDF in the public/ folder. Both resume buttons use it,
// and they are hidden if this is left empty.
const RESUME_URL = "/Mylapuri_Dileep_Fresher_Resume.pdf";

const App = () => {
  const [signUp, setSignUp] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Theme management
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Toggle theme handler
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };

  // Auto-popup timer
  useEffect(() => {
    const timer = setTimeout(() => setSignUp(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  // Body scroll lock when popup is open
  useEffect(() => {
    document.body.style.overflow = signUp ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [signUp]);

  const handleClose = () => setSignUp(false);

  return (
    <div style={{ backgroundColor: 'var(--color-BgColor)' }}>
      {/* Floating Action Buttons - Desktop & Tablet */}
      <div className="hidden sm:flex fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex-col justify-center items-center gap-3 sm:gap-4">
        {/* Resume Download Button */}
        {RESUME_URL && (
        <a href={RESUME_URL} download>
          <button className="border-CardBorderColor cursor-pointer px-4 sm:px-5 md:px-7 py-3 sm:py-3.5 md:py-4 bg-gray-950 text-white border-transparent hover:border-2 font-bold rounded-4xl flex flex-row items-center text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <svg
              width="16"
              className="sm:w-5 md:w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
            <span className="pl-2 whitespace-nowrap">My Resume</span>
          </button>
        </a>
        )}

        {/* GitHub Button */}
        <button className="px-8 sm:px-10 md:px-14 py-2.5 sm:py-3 bg-gray-950 font-bold cursor-pointer text-white rounded-[2rem] hover:border-2 border-transparent border-CardBorderColor transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
          <a
            href="https://github.com/DileepLee"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </button>

        {/* Theme Toggle Button */}
        <div className="flex flex-col justify-end items-end">
          <button
            onClick={toggleTheme}
            className="px-5 sm:px-6 py-2 bg-gray-950 text-white font-bold cursor-pointer rounded-[2rem] hover:border-2 border-transparent border-CardBorderColor transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base capitalize"
          >
            {theme}
          </button>
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-gray-950 border-t-2 border-CardBorderColor shadow-2xl">
        <div className="flex justify-around items-center py-3 px-2">
          {/* Resume Button */}
          {RESUME_URL && (
          <a
            href={RESUME_URL}
            download
            className="flex flex-col items-center justify-center flex-1"
          >
            <button className="flex flex-col items-center gap-1 text-white hover:text-blue-400 transition-colors">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
              <span className="text-xs font-semibold">Resume</span>
            </button>
          </a>
          )}

          {/* GitHub Button */}
          <a
            href="https://github.com/DileepLee"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center flex-1"
          >
            <button className="flex flex-col items-center gap-1 text-white hover:text-blue-400 transition-colors">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                fill="currentColor"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <span className="text-xs font-semibold">GitHub</span>
            </button>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center gap-1 text-white hover:text-blue-400 transition-colors flex-1"
          >
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              {theme === 'dark' ? (
                <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
              ) : (
                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
              )}
            </svg>
            <span className="text-xs font-semibold capitalize">{theme}</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={() => setSignUp(true)}
            className="flex flex-col items-center justify-center gap-1 text-white hover:text-blue-400 transition-colors flex-1"
          >
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            <span className="text-xs font-semibold">Contact</span>
          </button>
        </div>
      </div>

      <BrowserRouter>
        <Navbar onGetInTouchClick={() => setSignUp(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Modal/Popup for Sign Up */}
                {signUp && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="relative mt-0 sm:mt-5 rounded-lg shadow-2xl w-full max-w-[95%] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[900px] h-auto max-h-[90vh] sm:h-[500px] flex flex-col overflow-hidden">
                      <button
                        onClick={handleClose}
                        className="absolute top-2 sm:top-3 right-2 sm:right-3 text-red-600 hover:text-red-800 z-10 bg-white/10 hover:bg-white/20 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all cursor-pointer"
                        aria-label="Close SignUp"
                      >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} aria-hidden="true" />
                      </button>
                      {/* Scrolls on small screens, with the scrollbar hidden */}
                      <div className="min-h-0 flex-1 overflow-y-auto rounded-lg [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <Message />
                      </div>
                    </div>
                  </div>
                )}

                {/* Page Sections */}
                <div className="pb-16 sm:pb-0">
                  {/* Add bottom padding on mobile to prevent content being hidden behind fixed navbar */}
                  <HomeSection />
                  <AboutSection />
                  <Intro onGetInTouchClick={() => setSignUp(true)} />
                  <SkillSection />
                  <Projects />
                  <ImageSection />
                  <CompaniesList />
                  <BackgroundImg />
                  <GameSection />
                  <Passion />
                  <Status />
                  <Contact />
                  <Footer />
                </div>
              </>
            }
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;