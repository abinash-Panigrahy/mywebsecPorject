import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="">
      {/* Aura background */}
      <div className="" />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-300 to-pink-500 text-transparent bg-clip-text mb-6">
          Build. Secure. Launch.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          WebSecVerse provides full-stack web development and industrial-level cybersecurity services to ensure your platform is fast, scalable, and secure.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/login"
            className="bg-purple-400 hover:bg-purple-800 text-white px-6 py-3 rounded-lg text-sm font-semibold transition"
          >
            Get Started 
          </Link>
          <Link
            to="/about"
            className="border border-gray-500 hover:bg-gray-800 text-white px-6 py-3 rounded-lg text-sm font-semibold transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Web Dev Preview */}
        <div className="bg-gray-900 border border-purple-700 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-purple-400 mb-3">Web Development</h2>
          <p className="text-gray-300 mb-4">
            Responsive websites, blazing-fast apps, and custom UI/UX solutions. Built with React, Node.js, MongoDB, and more.
          </p>
          <Link
            to="/services/web-dev"
            className="text-sm text-purple-300 hover:underline"
          >
            Explore Web Services →
          </Link>
        </div>

        {/* Cybersecurity Preview */}
        <div className="bg-gray-900 border border-pink-600 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-pink-400 mb-3">Cybersecurity</h2>
          <p className="text-gray-300 mb-4">
            Penetration testing, malware protection, database auditing, and 24/7 monitoring by industry-grade security engineers.
          </p>
          <Link
            to="/services/security"
            className="text-sm text-pink-300 hover:underline"
          >
            Explore Security Services →
          </Link>
        </div>
      </section>

      {/* Optional Video Section */}
      
      <video
        className="absolute inset-0 object-cover w-full h-full opacity-60 z-0"
        src="\public\krsnna.mp4"
        autoPlay
        muted
        loop
      /> 
      
    </div>
  );
};
export default Home;
