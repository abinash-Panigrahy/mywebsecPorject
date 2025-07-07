import React from 'react';

const webDevServices = [
  {
    title: 'Full Stack Web Applications',
    description:
      'Build fast, scalable, and secure applications using MERN stack (MongoDB, Express, React, Node.js).',
    border: 'border-purple-500',
    anim: 'animate-fade-in-up'
  },
  {
    title: 'Landing Pages & Portfolios',
    description:
      'Modern responsive landing pages with animated UI and custom designs for your brand or resume.',
    border: 'border-pink-500',
    anim: 'animate-fade-in-up delay-100'
  },
  {
    title: 'E-Commerce Platforms',
    description:
      'Custom online stores with secure payments, order management, and dashboard features.',
    border: 'border-cyan-500',
    anim: 'animate-fade-in-up delay-200'
  },
  {
    title: 'Admin Dashboards',
    description:
      'Powerful and customizable admin panels with charts, user management, and analytics.',
    border: 'border-indigo-500',
    anim: 'animate-fade-in-up delay-300'
  },
  {
    title: 'SEO-Optimized Blogs & CMS',
    description:
      'Lightweight, search-friendly blogs and CMS platforms using React, Headless CMS, or Next.js.',
    border: 'border-blue-500',
    anim: 'animate-fade-in-up delay-400'
  },
  {
    title: 'Real-time Chat & Collaboration Tools',
    description:
      'Live chat apps, collaborative editors, and notification systems using Socket.IO and WebRTC.',
    border: 'border-rose-500',
    anim: 'animate-fade-in-up delay-500'
  }
];
const WebDevCatalog = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 py-16 text-white overflow-hidden">
      {/* Aura Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-700 via-pink-600 to-red-500 opacity-20 blur-3xl animate-pulse z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Web Development Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {webDevServices.map((service, idx) => (
            <div
              key={idx}
              className={`bg-gray-900 p-6 rounded-xl border-l-4 ${service.border} shadow-lg hover:scale-[1.02] transform transition-all duration-300 ${service.anim}`}
            >
              <h2 className="text-xl font-bold mb-2 text-white">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
              {/* Optional: Add icon/image/video preview */}
              <div className="mt-4 w-full h-32 bg-gray-800 rounded shadow-inner flex items-center justify-center text-gray-500 text-sm">
                [Preview Placeholder]
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevCatalog;
