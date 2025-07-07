import React, { useState } from 'react';
import axios from 'axios';

const RequirementForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    details: ''
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    try {
      const res = await axios.post('http://localhost:5000/api/form', formData); // Adjust backend URL
      if (res.data.success) {
        setSuccessMsg('✅ Requirement submitted successfully!');
        setFormData({ name: '', email: '', serviceType: '', details: '' });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-16 text-white">
      {/* Aura */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-purple-700 via-pink-600 to-red-500 opacity-20 blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-2xl mx-auto bg-gray-900 p-8 rounded-xl border border-purple-700 shadow-xl">
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-8">
          Submit Your Requirement
        </h2>

        {successMsg && <p className="mb-4 text-green-400 text-sm">{successMsg}</p>}
        {error && <p className="mb-4 text-red-400 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm text-gray-300">Select Service</label>
            <select
              name="serviceType"
              id="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-gray-600"
            >
              <option value="">-- Choose an Option --</option>
              <option value="Web Development">Web Development</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div>
            <label htmlFor="details" className="block text-sm text-gray-300">Project Details</label>
            <textarea
              name="details"
              id="details"
              rows="5"
              value={formData.details}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-gray-600 resize-none focus:ring-2 focus:ring-purple-600"
              placeholder="Explain your project idea, tech needs, or problem to solve..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 py-3 rounded text-white font-semibold transition"
          >
            Submit Requirement
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequirementForm;
