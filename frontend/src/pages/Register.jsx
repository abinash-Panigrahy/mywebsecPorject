import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { name, email, password } = form;

      // Lowercase the email before sending to backend
      const res = await axios.post('/api/auth/register', {
        name,
        email: email.toLowerCase(),
        password,
      });

      if (res.data.token) {
        alert('Registration successful! Please log in.');
        navigate('/login');
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 shadow-xl p-8 rounded-lg w-full max-w-md border border-gray-700"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

        {error && (
          <div className="bg-red-500 text-white px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full mb-4 p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:border-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full mb-4 p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:border-blue-500"
          required
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full mb-6 p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:border-blue-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <p className="text-center mt-4 text-sm text-gray-400">
          Already have an account?{' '}
          <span
            className="text-blue-400 hover:underline cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
