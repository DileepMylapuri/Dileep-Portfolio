import React, { useRef } from 'react';
import { ImageData } from '../assets/assets';
import CursorEffect from './CursorEffect';
import TypingTitle from './TypingTitle';

const   HomeSection = () => {
  const homeRef = useRef(null);
  
  return (
    <div id='home'
      ref={homeRef}
      className=" relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${ImageData.DileepSoftDev})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        color: 'var(--color-TextColor)',
        backgroundColor: 'var(--color-BgColor)',
      }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>

      <div className="relative z-20 h-full">
        <CursorEffect containerRef={homeRef} />

        <main className="h-full flex flex-col justify-end p-6 pb-20 sm:pb-6 sm:pr-48 md:p-10 md:pr-52">
          <h1 className='text-3xl text-gray-300 font-bold'>Hi, I'm</h1>
          <div className="flex flex-row items-center justify-between">
            <h1
              style={{ fontFamily: 'fantasy' }}
              className="head-HeadColor text-5xl sm:text-7xl md:text-8xl font-stretch-semi-condensed leading-tight">
              Mylapuri Dileep
            </h1>
          </div>
            <strong className='text-gray-100 font-bold mt-3'>Fresher Frontend Developer — building responsive web apps with React, Redux, Node.js, and TailwindCSS.</strong>
            <strong className='text-gray-100'>Eager to learn, passionate about clean UI, and ready to start my career in software development</strong>
          <TypingTitle />

        </main>
      </div>
    </div>
  );
};

export default HomeSection;