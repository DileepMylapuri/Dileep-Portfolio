import React from 'react';
import { statusData } from '../assets/assets';

const Status = () => {
  return (
    <div>
      <section id='status' className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-start w-full mb-20">
            <h1
              style={{ fontFamily: 'Monotype Corsiva' }}
              className="text-4xl sm:text-5xl text-center font-bold title-font mb-4 head-HeadColor"
              >
              Mylapuri's Learning Journey So Far!
            </h1>
            <p className="lg:w-3/4 mx-auto text-center text-TextColor leading-relaxed text-base">
              I enjoy creating solutions that look good and work well. Every project has taught
              me something new, and I’m excited to bring that same dedication to my first
              role.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            {statusData.map((item) => (
              <div key={item.id} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-CardBorderColor text-TextColor px-4 py-6 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:text-white hover:head-FocusColor"
                >
                  <svg
                    fill="CurrentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-amber-500 w-10 h-10 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    {item.iconPath}
                  </svg>
                  <h2 className="title-font font-bold text-6xl ">{item.value}</h2>
                  <h3 className="leading-relaxed text-2xl font-bold">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Status;