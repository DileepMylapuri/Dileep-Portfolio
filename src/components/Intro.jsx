import React from 'react'

const Intro = ({ onGetInTouchClick }) => {
  return (
    <section id="intro" className="bg-BgColor relative flex flex-col justify-center bg-white items-center py-20">
      <div className="container px-5 mx-auto flex flex-wrap">
        
        {/* Heading + Intro */}
        <div className="md:w-2/5 mb-10 md:mb-0">
          <h2 className="head-HeadColor sm:text-4xl text-2xl font-extrabold text-gray-800 mb-4">
            Intro...
          </h2>
          <p className="leading-relaxed text-lg text-TextColor font-medium">
            A <span className="head-HeadColor font-bold">fresher frontend developer</span> who cares
            about performance, precision, and clean design. I use React.js, JavaScript, and Tailwind CSS
            to build engaging web apps through hands-on personal projects, and I am excited to start
            my professional journey.
          </p>

          {/* CTA Button */}
          <div className="relative isolate mt-8">

          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8114cf] rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8114cf] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#ff0aa1] rounded-full filter blur-3xl animate-pulse delay-2000"></div>
          </div>

            <button
              onClick={onGetInTouchClick}
              className="relative rounded-full shadow-zinc-900 shadow-2xl overflow-hidden group inline-flex items-center cursor-pointer bg-gray-200 text-gray-800 hover:text-white font-semibold py-3 px-6 transition-colors duration-300 ease-in-out"
            >
              <span className="relative z-10 flex items-center">
                <svg
                  className="bg-CardColor w-7 text-white rounded-full mr-3 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                Get in Touch
              </span>
              <span className="absolute inset-0 bg-CardColor scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100 z-0 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="md:w-3/5 md:pl-12 grid gap-6 md:grid-cols-2">
          <div className="p-6 rounded-xl shadow-zinc-900 hover:shadow-2xl transition bg-BgCardColor border-2 border-CardBorderColor">
            <h3 className="head-HeadColor text-lg font-bold mb-2">Bring Knowledge & Ideas by Projects</h3>
            <p className="text-TextColor text-sm">
              Aspiring frontend developer creating modern and responsive web apps with React,
              Tailwind, and a passion for clean code and seamless user experiences.
            </p>
             <button onClick={()=>{
                const section = document.getElementById("projects");
                section?.scrollIntoView({behavior:"smooth"});
            }} className="relative rounded-full overflow-hidden group inline-flex items-center cursor-pointer shadow-zinc-900 shadow-2xl text-TextColor bg-BgColor border border-CardBorderColor hover:text-white font-semibold mt-10 py-2 px-6 transition-colors duration-800 ease-in-out">
              <span className="relative z-10 flex items-center">
                My Projects
              </span>
              <span className="absolute inset-0 bg-CardColor scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100 z-0 rounded-full"></span>
            </button>
          </div>
          <div className="p-6 rounded-xl bg-BgCardColor shadow-zinc-900 hover:shadow-2xl transition border-2 border-CardBorderColor">
            <h3 className="head-HeadColor text-lg font-bold mb-2">Collaborate with Me</h3>
            <p className="text-TextColor text-sm">
              Let’s create something extraordinary together! From visualizing products to building 
              interactive experiences, I help bring concepts to life.
            </p>
            <button onClick={()=>{
                const section = document.getElementById("contact");
                section?.scrollIntoView({behavior:"smooth"});
            }} className="relative rounded-full overflow-hidden group inline-flex items-center cursor-pointer shadow-zinc-900 shadow-2xl text-TextColor bg-BgColor border border-CardBorderColor hover:text-white font-semibold mt-10 py-2 px-6 transition-colors duration-800 ease-in-out"
            >
              <span className="relative z-10 flex items-center">
                Contact Me
              </span>
              <span className="absolute inset-0 bg-CardColor scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100 z-0 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
