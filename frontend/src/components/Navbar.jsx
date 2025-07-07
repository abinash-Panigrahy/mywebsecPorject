import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-950 bg-opacity-80 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
          Name has to given
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {!isLoggedIn ? (
            <>
              <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition">About</Link>
              <Link to="/login" className="text-gray-300 hover:underline">Login</Link>
              <Link to="/register" className="text-gray-300 hover:underline">Register</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="text-gray-300 hover:text-white transition">Dashboard</Link>
              <Link to="/services/web-dev" className="text-gray-300 hover:text-white transition">WebDev</Link>
              <Link to="/services/security" className="text-gray-300 hover:text-white transition">Security</Link>
              <Link to="/form" className="text-gray-300 hover:text-white transition">Request</Link>
              <button onClick={handleLogout} className="text-red-400 hover:text-red-500 transition">Logout</button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-200 md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-3 bg-gray-900 text-gray-300">
          {!isLoggedIn ? (
            <>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              <Link to="/services/web-dev" onClick={() => setMenuOpen(false)}>WebDev</Link>
              <Link to="/services/security" onClick={() => setMenuOpen(false)}>Security</Link>
              <Link to="/form" onClick={() => setMenuOpen(false)}>Request</Link>
              <button onClick={handleLogout} className="text-left text-red-400">Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
