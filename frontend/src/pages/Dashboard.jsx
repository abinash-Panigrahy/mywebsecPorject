import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
     <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 py-16 text-white">
      {/* Aura background */}
       <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-500 to-red-500 opacity-20 blur-3xl animate-pulse z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text mb-10">
          Welcome to Your Dashboard
        </h1>

        <p className="text-center text-gray-300 mb-12">
          Explore our services or submit your project requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Web Dev Card */}
          <div className="bg-gray-900 border border-purple-700 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition transform duration-300">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Web Development Services</h2>
            <p className="text-gray-300 mb-4">
              Build secure, scalable, and beautifully designed websites and applications.
            </p>
            <Link
              to="/services/web-dev"
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded transition"
            >
              View Web Dev Catalog
            </Link>
          </div>

          {/* Cybersecurity Card */}
          <div className="bg-gray-900 border border-pink-600 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition transform duration-300">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">Cybersecurity Services</h2>
            <p className="text-gray-300 mb-4">
              Protect your web apps, databases, and systems with ethical hacking and auditing.
            </p>
            <Link
              to="/services/security"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition"
            >
              View Security Catalog
            </Link>
          </div>

          {/* Requirement Form */}
          <div className="bg-gray-900 border border-indigo-600 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition transform duration-300 col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">Custom Requirements</h2>
            <p className="text-gray-300 mb-4">
              Have a custom request? Fill out our form to get started with your unique project.
            </p>
            <Link
              to="/form"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition"
            >
              Fill Requirement Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
