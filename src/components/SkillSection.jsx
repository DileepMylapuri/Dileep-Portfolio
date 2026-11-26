import React from "react";
import { TechnicalSkills } from "../assets/assets";

// Black logos are flipped to white in the dark theme so they stay visible.
const BLACK_LOGOS = ["Express.js", "GitHub", "Next.js (Basics)"];

const SkillSection = () => {
  return (
    <div id="skills" className="bg-BgColor py-12 sm:py-16">
      <section className="text-TextColor body-font">

      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8114cf] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8114cf] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#ff0aa1] rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="sm:text-4xl text-2xl font-extrabold head-HeadColor mb-4">
              My Technical Skills
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-TextColor leading-relaxed">
              These are the technologies I have been learning and practising
              through personal projects. I enjoy crafting clean, user-focused
              web interfaces, and I keep improving how I write efficient,
              maintainable, and visually engaging components.
            </p>
          </div>

          {/* Skills Grid: three compact columns on phones, more on wider screens */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 lg:gap-8">
            {TechnicalSkills.map((item, index) => (
              <div
                key={index}
                className="relative group min-w-0 border bg-BgCardColor border-CardBorderColor rounded-2xl shadow-zinc-900 hover:shadow-2xl transition-all duration-500 px-1.5 py-4 sm:p-6 flex flex-col items-center justify-start cursor-pointer text-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-11 h-11 sm:w-16 sm:h-16 shrink-0 object-contain mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    BLACK_LOGOS.includes(item.name) ? "[.dark_&]:invert" : ""
                  }`}
                />
                <h2 className="text-xs sm:text-base lg:text-lg leading-snug font-semibold text-TextColor break-words">
                  {item.name}
                </h2>

                {/* Hover Card Overlay (cards are too small for it on phones) */}
                <div className="hidden sm:flex absolute inset-0 overflow-hidden bg-zinc-200 bg-opacity-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex-col justify-center items-center p-2 lg:p-3 text-center">
                  <h2 className="text-sm lg:text-base leading-tight font-bold text-[#ff8a04] mb-1">
                    {item.name}
                  </h2>
                  <p className="text-xs leading-snug text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillSection;
