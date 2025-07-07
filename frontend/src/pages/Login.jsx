import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth'; // API function we'll define next

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert('Invalid login credentials!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-800">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-gradient-x">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button type="submit" className="py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition">
            Login
          </button>
        </form>
        <p className="text-gray-400 text-sm text-center mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
