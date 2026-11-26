import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    desc: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem('contactUsers')) || [];
    existingData.push(formData);
    localStorage.setItem('contactUsers', JSON.stringify(existingData));

    setSuccessMessage('Form submitted successfully!');

    setFormData({ fullName: '', email: '', desc: '' });

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div>
      <section id="contact" className="relative body-font mt-3">
        <h2 className="flex flex-row justify-center text-3xl md:text-4xl head-HeadColor font-bold">Contact</h2>
        <div className="container px-5 py-15 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl head-HeadColor">
              Start a Conversation with me...
            </h1>
            <p className="leading-relaxed text-TextColor mt-4">
              Have a project in mind or just want to say hello? I’m always open to discussing new opportunities, creative ideas, or potential collaborations. Drop me a message — I’ll get back to you as soon as possible!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:w-2/6 md:w-1/2 bg-BgCardColor rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
          >
            <div className="relative mb-4">
              <label htmlFor="fullName" className="leading-7 text-sm head-HeadColor">Full Name</label>
              <input
                required
                onChange={handleChange}
                value={formData.fullName}
                type="text"
                id="fullName"
                name="fullName"
                className="w-full bg-BgColor rounded border border-CardBorderColor focus:border-CardBorderColor text-base outline-none head-HeadColor font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm head-HeadColor">Email</label>
              <input
                required
                onChange={handleChange}
                value={formData.email}
                type="email"
                id="email"
                name="email"
                className="w-full bg-BgColor rounded border border-CardBorderColor focus:border-CardBorderColor text-base outline-none head-HeadColor font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="desc" className="leading-7 text-sm head-HeadColor">Description</label>
              <textarea
                required
                onChange={handleChange}
                value={formData.desc}
                id="desc"
                name="desc"
                className="h-20 w-full bg-BgColor rounded border border-CardBorderColor text-base outline-none head-HeadColor font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {successMessage ? 
              <p className="mt-3 text-green-700 bg-green-100 rounded p-2 font-semibold text-center">
                {successMessage}
              </p>
            : (
            <button
              type="submit"
              className="text-white bg-CardColor border-0 py-2 px-8 focus:outline-none cursor-pointer rounded text-lg">
              Send
            </button>
            )}

            <p className="text-xs text-gray-500 mt-3">
              We'll keep your information safe and private.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
