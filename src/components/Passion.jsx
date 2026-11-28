import React, { useState } from 'react';
import { ImageData } from '../assets/assets';

const Passion = () => {
  const [activeTab, setActiveTab] = useState('description');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
            <p className="leading-relaxed text-md text-TextColor">
                Fresher with a focus on responsive web applications built with modern frontend technologies.
                Practising React.js and Redux Toolkit, with basic knowledge of Next.js and TypeScript.
                Comfortable with REST API integration, version control with Git/GitHub, and styling with Tailwind CSS and Bootstrap.
                Familiar with Node.js, Express.js, and basic SQL, with a passion for clean code and continuous learning.
            </p>
        );
       case 'projects':
        return (
          <div className="text-gray-600 space-y-4">
            <p className='text-TextColor'>Projects I built to learn and practise frontend development.</p>
            <p className='head-FocusColor'>– More Recent Projects</p>

            <ul className="mt-4 list-disc pl-5 text-sm text-TextColor space-y-5">
              <li className='hover:text-blue-700 hover:font-semibold'><a target='_blank' href="https://leespotifyboat.netlify.app/">Spotify-style Music Player (React + Tailwind)</a></li>
              <li className='hover:text-blue-700 hover:font-semibold'><a target='_blank' href="http://leefurniturekart.netlify.app">Furniture Kart E-Commerce Application</a></li>
              <li className='hover:text-blue-700 hover:font-semibold'><a target='_blank' href="http://msyoutubelee.netlify.app">YouTube Clone with Video Search & Routing</a></li>
              <li className='hover:text-blue-700 hover:font-semibold'><a target='_blank' href="http://msdileepwhatapp.netlify.app">Whatsapp Clone with ChatBar & Navigation the Components</a></li>
              <li className='hover:text-blue-700 hover:font-semibold'><a target='_blank' href="https://lee-drag-drop-project.vercel.app/">Drag & Drop Task Board (React-DnD + LocalStorage)</a></li>
              <li className='hover:text-blue-700 hover:font-semibold'><a target='_blank' href="http://leeteamschatapp.netlify.app">Real-time Chat App with Sidebar Navigation</a></li>
              <li className='hover:text-blue-700 hover:font-semibold'><a target='_blank' href="http://leedirectorshub.netlify.app">Directors Hub with Responsive Webpage with Routing</a></li>
              <li className='hover:text-blue-700 hover:font-semibold'><a target='_blank' href="https://leemocktestapp.netlify.app">Mock Test React App</a></li>
              <li className='hover:text-blue-700 hover:font-semibold'><a target='_blank' href="https://leewikipediasearchengine.netlify.app/">Wikipedia Search Engine</a></li>
              <li className='hover:text-blue-700 hover:font-semibold'><a target='_blank' href="https://leespeechsynthesis.netlify.app/">Speech Synthesis</a></li>
              <li className='hover:text-blue-700 hover:font-semibold'><a target='_blank' href="https://leecountrypopulationfinder.netlify.app">Country Population Counter</a></li>
            </ul>
          </div>
        );
      case 'details':
        return (
            <ul className="list-disc pl-5 text-TextColor space-y-2 text-base">
            <li><strong className='head-FocusColor'>HTML5</strong> – Semantic structure and SEO-friendly markup</li>
            <li><strong className='head-FocusColor'>CSS3</strong> – Flexbox, Grid, Animations, Media Queries</li>
            <li><strong className='head-FocusColor'>Tailwind CSS</strong> – Utility-first CSS for fast UI styling</li>
            <li><strong className='head-FocusColor'>JavaScript (ES6+)</strong> – Modern syntax, functions, and DOM manipulation</li>
            <li><strong className='head-FocusColor'>React.js</strong> – Component-based UI development and SPA architecture</li>
            <li><strong className='head-FocusColor'>React Router</strong> – Client-side routing for single-page apps</li>
            <li><strong className='head-FocusColor'>Redux</strong> – State management for scalable applications</li>
            <li><strong className='head-FocusColor'>React Context API</strong> – Lightweight global state sharing</li>
            <li><strong className='head-FocusColor'>Axios / Fetch API</strong> – HTTP requests and data fetching</li>
            <li><strong className='head-FocusColor'>LocalStorage</strong> – Store and persist UI state across sessions</li>
            <li><strong className='head-FocusColor'>Vite</strong> – Lightning-fast dev server and bundler</li>
            <li><strong className='head-FocusColor'>Node.js (Basics)</strong> – Backend integration and npm usage</li>
            <li><strong className='head-FocusColor'>Git & GitHub</strong> – Version control and code collaboration</li>
            <li><strong className='head-FocusColor'>Responsive Design</strong> – Mobile-first, fluid layouts</li>
            <li><strong className='head-FocusColor'>Basic Accessibility (a11y)</strong> – ARIA roles, keyboard navigation</li>
            </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section id='passion' className="text-TextColor body-font bg-BgColor py-16 overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-start">
          {/* Left Section */}
          <div className="lg:w-1/1 w-full lg:pr-12 mb-10 lg:mb-0">
            <h2 className="text-sm uppercase head-FocusColor font-semibold tracking-widest">Fresher Frontend Developer</h2>
            <h1 className="text-4xl head-HeadColor font-bold mt-2 mb-4">Passionate About Web App Design & Development</h1>

            <div className="flex border-b border-CardBorderColor mb-6">
              {['description', 'projects', 'details'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-grow text-lg px-3 py-2 border-b-2 ${
                    activeTab === tab
                      ? 'border-card-BgColor head-FocusColor font-semibold'
                      : 'border-transparent text-TextColor hover:head-FocusColor cursor-pointer'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="mb-6">
              {renderTabContent()}
            </div>

            <button onClick={()=>{
                const section = document.getElementById("contact");
                section?.scrollIntoView({behavior:"smooth"});
            }} className="text-TextColor bg-CardColor hover:bg-CardColor cursor-pointer py-2 px-6 rounded text-lg"
            >
              Connect With Me
            </button>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Passion;
