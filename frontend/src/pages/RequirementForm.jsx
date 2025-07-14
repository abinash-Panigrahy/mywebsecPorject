// frontend/src/pages/RequirementForm.jsx

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
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/form/submit', {
        name: formData.name,
        email: formData.email,
        requirement: formData.details,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201) {
        setSuccessMsg('✅ Requirement submitted successfully!');
        setFormData({ name: '', email: '', serviceType: '', details: '' });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-16 text-white">
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-purple-700 via-pink-600 to-red-500 opacity-20 blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-2xl mx-auto bg-gray-900 p-8 rounded-xl border border-purple-700 shadow-xl">
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-8">
          Submit Your Requirement
        </h2>

        {successMsg && <p className="mb-4 text-green-400 text-sm">{successMsg}</p>}
        {error && <p className="mb-4 text-red-400 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Name" className="w-full p-3 rounded bg-gray-800 border border-gray-600" />
          <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="w-full p-3 rounded bg-gray-800 border border-gray-600" />
          <select name="serviceType" value={formData.serviceType} onChange={handleChange} required className="w-full p-3 rounded bg-gray-800 border border-gray-600">
            <option value="">Select Service</option>
            <option value="Web Development">Web Development</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Both">Both</option>
          </select>
          <textarea name="details" rows="4" value={formData.details} onChange={handleChange} required className="w-full p-3 rounded bg-gray-800 border border-gray-600" placeholder="Project details" />
          <button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 py-3 rounded text-white font-semibold transition">Submit Requirement</button>
        </form>
      </div>
    </div>
  );
};

export default RequirementForm;
