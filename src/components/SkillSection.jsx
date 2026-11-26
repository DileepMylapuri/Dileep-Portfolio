import React from "react";
import { TechnicalSkills } from "../assets/assets";

const SkillSection = () => {
  return (
    <div id="skills" className="bg-BgColor py-16">
      <section className="text-TextColor body-font">

      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8114cf] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8114cf] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#ff0aa1] rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

        <div className="container mx-auto px-6 lg:px-20">
          {/* Heading */}
          <div className="text-center mb-16">
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

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {TechnicalSkills.map((item, index) => (
              <div
                key={index}
                className="relative group border bg-BgCardColor border-CardBorderColor rounded-2xl shadow-zinc-900 hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-center justify-center cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
                />
                <h2 className="text-lg font-semibold text-TextColor mb-2">
                  {item.name}
                </h2>

                {/* Hover Card Overlay */}
                <div className="absolute inset-0 bg-zinc-200 bg-opacity-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex flex-col justify-center items-center p-4 text-center">
                  <h2 className="text-lg font-bold text-[#ff8a04] mb-2">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
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