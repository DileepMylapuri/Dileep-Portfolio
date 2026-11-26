import React from 'react';
import '../styles/CompaniesList.css';
import { ImageData } from '../assets/assets';
import GradientName from './GradientName';

const Footer = () => {
  return (
    <footer id="footer" className="relative text-TextColor body-font overflow-hidden">
      
      <div className="container px-5 py-16 mx-auto flex flex-col md:flex-row md:flex-nowrap flex-wrap md:items-start items-center">
        {/* Left Section */}
        <div className="md:w-1/2 w-full text-center md:text-left mb-10 md:mb-0 px-4">
          <h2 className="text-3xl md:text-5xl font-bold head-HeadColor">Stay Connected®</h2>
          <a className="flex title-font font-medium items-center justify-center md:justify-start text-TextColor mt-4">
            <span className="underline text-lg md:text-xl">
              dileepmylapuri6@gmail.com<strong className="text-red-600">*</strong>
            </span>
          </a>
          <p className="mt-3 text-sm text-TextColor">
            Fresher Frontend Developer eager to build dynamic web applications.
          </p>
        </div>

        {/* Navigation */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <div className="px-4">
            <h2 className="title-font font-medium head-HeadColor tracking-widest text-md mb-3">CATEGORIES</h2>
            <nav className="flex flex-col items-center md:items-start list-none">
              {["home", "intro", "skills", "passion", "contact", "footer"].map((section, i) => (
                <li key={i} className="p-2">
                  <button
                    onClick={() => {
                      const sec = document.getElementById(section);
                      sec?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="head-FocusColor cursor-pointer"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </nav>
          </div>
        </div>

      </div>
      

      {/* Bottom Section */}
      <div className="relative isolate bg-BgColor">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8114cf] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8114cf] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-6 lg:gap-12 py-6 px-4">
          <GradientName />
          <video
            src="https://framerusercontent.com/assets/ZxMUyWvzXfOYftOqklzEwzhxyQ.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-[250px] md:w-[300px] lg:w-[400px] h-auto rounded-xl shadow-lg"
          />
        </div>

        <div className="container mx-auto py-6 px-5 flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <p className="text-TextColor text-sm md:text-md text-center sm:text-left font-bold">
            Copyright © MS.DEV 2026 —
            <a
              href="https://twitter.com/dileepmylapuri6"
              rel="noopener noreferrer"
              className="head-FocusColor ml-1"
              target="_blank"
            >
              @msdileep
            </a>
          </p>

          {/* Social Links */}
         {/*  <span className="inline-flex sm:ml-auto justify-center sm:justify-start gap-6">
            <a href="https://github.com/DileepLee" target="_blank" className="text-gray-500 hover:text-black">
              <svg fill="currentColor" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 ..."></path>
              </svg>
            </a>
            <a href="https://x.com/DileepMylapuri6" target="_blank" className="text-gray-500 hover:text-blue-500">
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M23 3a10.9 ..."></path>
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dileepmylapuri6@gmail.com&su=Contact%20from%20Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-600"
            >
              <svg fill="currentColor" className="h-6 w-6" viewBox="0 0 512 512">
                <path d="M48 64C21.5..."></path>
              </svg>
            </a>
          </span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
