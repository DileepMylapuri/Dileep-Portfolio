import React, { useState } from 'react';
import { ImageData } from '../assets/assets';

const ImageSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Images for portfolio showcase (projects, skills, or logos)
  const images = [
    ImageData.TeamLogo, 
    ImageData.Airplain, 
    ImageData.Building6, 
    ImageData.SingleLogo, 
    ImageData.BoyLogo, 
    ImageData.Building5
  ];

  return (
    <section id="imageSec" className="relative w-full bg-BgColor px-4 sm:px-20 flex justify-center items-center">
      <div className="flex flex-col sm:flex-row w-[95%] max-w-6xl gap-4 overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`
              relative rounded-xl bg-center bg-cover cursor-pointer 
              transition-all duration-700 ease-in-out 
              ${hoveredIndex === index ? 'sm:flex-[4] flex-none shadow-2xl' : 'sm:flex-1 flex-none shadow-md'}
              h-[200px] sm:h-[300px] md:h-[400px]
            `}
            style={{ backgroundImage: `url(${img})` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Optional Overlay with Info */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 rounded-xl transition-opacity duration-500">
                <h3 className="text-white text-lg md:text-xl font-bold">
                  Featured Project
                </h3>
                <p className="text-white text-sm md:text-base">
                  Click to explore more details
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSection;
