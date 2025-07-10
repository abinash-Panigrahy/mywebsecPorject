import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-500 animate-pulse">
          WebSecVerse
        </div>

        <ul className="flex space-x-6 text-white font-medium">
          <li className="hover:text-blue-400 transition duration-300">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-blue-400 transition duration-300">
            <Link to="/about">About</Link>
          </li>

          {!token && (
            <>
              <li className="hover:text-blue-400 transition duration-300">
                <Link to="/login">Login</Link>
              </li>
              <li className="hover:text-blue-400 transition duration-300">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}

          {token && (
            <>
              <li className="hover:text-blue-400 transition duration-300">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-600 transition duration-300"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
