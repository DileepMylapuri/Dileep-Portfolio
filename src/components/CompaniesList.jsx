import React from 'react';
import { CompanyData } from '../assets/assets';
import '../styles/CompaniesList.css';

const CompaniesList = () => {
  const firstRow = CompanyData.slice(0, 10);
  const secondRow = CompanyData.slice(10, 20);

  return (
    <div id='companiesList' className="relative w-full px-8 py-20 bg-BgColor mt-10">
      <h1 className="font-bold text-3xl head-HeadColor mb-8">My Dream Companies</h1>

      <div className="marquee-row marquee-left bg-BgCardColor border-t border-b border-CardBorderColor mb-8 mt-20">
        <div className="marquee-content marquee-down">
          {firstRow.map((item, index) => (
            <div key={index} className="marquee-item">
              <img
                src={item.img}
                alt={`Company ${index}`}
                className="h-32 w-64 object-contain cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Marquee Row */}
      <div className="marquee-row marquee-right bg-BgCardColor border-t border-b border-CardBorderColor">
        <div className="marquee-content marquee-up">
          {secondRow.map((item, index) => (
            <div key={index} className="marquee-item">
              <img
                src={item.img}
                alt={`Company ${index}`}
                className="h-32 w-64 object-contain cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesList;