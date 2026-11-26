import React, { useState } from 'react';

const Message = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    msg: '',
  });

const [successMessage, setSuccessMessage ] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem('contactUsers')) || [];

    existing.push(formData);

    localStorage.setItem('contactUsers', JSON.stringify(existing));
    setSuccessMessage('Message submitted successfully!');

     setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <section className="bg-BgColor border border-CardBorderColor w-full min-h-full body-font rounded-lg shadow-xl flex flex-col">
      <div className="px-6 py-8 md:px-10 md:py-4 mx-auto flex flex-col md:flex-row justify-center items-center gap-8 flex-1">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 style={{ fontFamily: 'monotype corsiva' }} className="title-font font-bold text-2xl md:text-3xl head-HeadColor">
            A Warm Welcome to My Portfolio Website!
          </h1>
          <p style={{ fontFamily: 'Monotype Corsiva' }} className="leading-relaxed text-TextColor text-base md:text-xl font-sans mt-4">
            We are very happy to see you here, I am excited to connect with you to discuss the frontend development process. For more details quickly message me and we will contact you as soon as possible.
          </p>
          <span style={{ fontFamily: 'monotype Corsiva' }} className="head-FocusColor text-lg md:text-2xl font-bold pt-6 block">
            MS.SoftDev!
          </span>
        </div>

        <form onSubmit={handleSubmit} className="w-full md:w-1/2 shadow-2xl rounded-lg p-6 md:px-8 md:py-4 mt-5 md:mt-0 flex flex-col">
          <h2 className="head-FocusColor text-base md:text-lg font-bold mb-4 text-center md:text-left">
            Connect with me, will make you better vision!
          </h2>

          <div className="relative mb-3">
            <label htmlFor="fullName" className="leading-7 text-sm font-semibold head-HeadColor">Full Name</label>
            <input 
              required 
              type="text" 
              id="fullName" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange}
              className="w-full bg-BgColor rounded border border-CardBorderColor focus:head-HeadColor text-sm md:text-base outline-none head-HeadColor py-2 md:py-1 px-3 leading-8"
            />
          </div>

          <div className="relative mb-3">
            <label htmlFor="email" className="leading-7 text-sm font-semibold head-HeadColor">Email</label>
            <input 
              required 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              className="w-full bg-BgColor rounded border border-CardBorderColor focus:border-orange-500 focus:ring-2 focus:head-HeadColor text-sm md:text-base outline-none head-HeadColor py-2 md:py-1 px-3 leading-8"
            />
          </div>

          <div className="relative mb-3">
            <label htmlFor="msg" className="leading-7 text-sm font-semibold head-HeadColor">Message</label>
            <textarea 
              required 
              id="msg" 
              name="msg" 
              value={formData.msg} 
              onChange={handleChange}
              className="w-full bg-BgColor rounded border border-CardBorderColor focus:head-HeadColor text-sm md:text-base outline-none head-HeadColor py-2 px-3 leading-6 min-h-[100px] md:min-h-[72px]"
            />
          </div>

          

          {successMessage ? 
              <p className="mt-3 text-green-700 bg-green-100 rounded p-2 font-semibold text-center">
                {successMessage}
              </p>
            : (
            <button
              type="submit"
              className="text-white bg-CardColor border-0 py-2 px-8 focus:outline-none hover:bg-amber-800 cursor-pointer rounded text-lg">
              Submit
            </button>
            )}

          <p className="text-center md:text-left text-xs text-TextColor mt-3">
            Thank you for visiting my portfolio.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Message;
