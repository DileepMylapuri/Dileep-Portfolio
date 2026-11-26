import React from 'react';
import { ImageData } from '../assets/assets';

// Images for portfolio showcase (projects, skills, or logos)
const images = [
  ImageData.TeamLogo,
  ImageData.Airplain,
  ImageData.Building6,
  ImageData.SingleLogo,
  ImageData.BoyLogo,
  ImageData.Building5
];

// Width of an expanded card: 4 of 9 flex shares, after the five 1rem gaps.
// The picture and caption keep this width while the card animates, so the
// browser only reveals more of them instead of resizing them on every frame.
const EXPANDED_WIDTH = 'sm:w-[calc((100cqw-5rem)*4/9)]';

const ImageSection = () => {
  return (
    <section id="imageSec" className="relative w-full bg-BgColor px-4 sm:px-20 flex justify-center items-center">
      <div className="flex flex-col sm:flex-row w-[95%] max-w-6xl gap-4 overflow-hidden [container-type:inline-size]">
        {images.map((img) => (
          <div
            key={img}
            className="group relative flex-none sm:flex-1 sm:hover:flex-[4] overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-2xl transition-[flex-grow] duration-500 ease-out [contain:paint] h-[200px] sm:h-[300px] md:h-[400px]"
          >
            <img
              src={img}
              alt=""
              loading="lazy"
              decoding="async"
              className={`absolute top-0 left-1/2 -translate-x-1/2 h-full w-full max-w-none object-cover ${EXPANDED_WIDTH} ${
                // The portrait photo is framed higher to keep the hat in view.
                img === ImageData.BoyLogo ? 'object-[50%_15%]' : ''
              }`}
            />

            {/* Optional Overlay with Info */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className={`absolute bottom-0 left-0 w-full p-4 ${EXPANDED_WIDTH}`}>
                <h3 className="text-white text-lg md:text-xl font-bold">
                  Featured Project
                </h3>
                <p className="text-white text-sm md:text-base">
                  Click to explore more details
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSection;
