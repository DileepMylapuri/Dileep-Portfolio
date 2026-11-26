import React, { useEffect, useRef, useState } from 'react';
import { ImageData } from '../assets/assets';
import '../styles/CompaniesList.css';


const BackgroundImg = () => {
  const [scale, setScale] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  console.log(scale)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newScale = Math.min(1.1, 1 + scrollTop / 1000);
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div id='bgImage'
      ref={sectionRef}
      className="relative isolate w-full h-screen md:h-[200vh] bg-BgColor overflow-hidden">
      
      <div
        className="absolute z-10 opacity-95 w-full h-full transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `url(${ImageData.DileepSoftDev1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-45 z-10"></div>

        <div
          className={`relative z-10 flex h-full w-full justify-center items-center text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="relative flex flex-col justify-center items-center w-full px-4 gap-8 md:gap-12 cursor-pointer text-[clamp(1.35rem,6vw,5rem)] leading-tight text-stroke font-bold">
           <span className='hover:card-CardColor'>Frontend Developer</span> 
           <span className='hover:card-CardColor'>React JS Developer</span> 
           <span className='hover:card-CardColor'>Fresher Software Developer</span> 
           <span className='hover:card-CardColor'>Frontend Web Developer</span> 
           <span className='hover:card-CardColor'>UI/UX Developer</span> 
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImg;


