import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-700 text-gray-300 px-6 py-8 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h3 className="text-xl font-bold text-white">WebSecVerse</h3>
          <p className="text-sm text-gray-400 mt-2">
            Build. Secure. Launch. <br />
            Web & Cybersecurity Solutions.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex justify-center space-x-6">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/about" className="hover:text-purple-400 transition">About</Link>
          <Link to="/form" className="hover:text-purple-400 transition">Contact</Link>
        </div>

        {/* Right Section (Social Icons / Email) */}
        <div className="text-sm text-right md:text-left">
          <p className="mb-2">Email: <a href="mailto:info@websecverse.com" className="hover:text-pink-400 transition">info@websecverse.com</a></p>
          <div className="flex justify-end md:justify-start space-x-4 text-xl">
            {/* Placeholder Socials */}
            <a href="#" className="hover:text-blue-500 transition">🌐</a>
            <a href="#" className="hover:text-pink-500 transition">📷</a>
            <a href="#" className="hover:text-blue-300 transition">🐦</a>
          </div>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {year} WebSecVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
