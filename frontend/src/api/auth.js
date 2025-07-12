// frontend/src/api/auth.js

import axios from 'axios';

// ✅ Axios instance
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: false, // use true if you're handling cookies/sessions
});

// ✅ Register new user
export const registerUser = async (userData) => {
  try {
    const res = await API.post('/auth/register', userData);
    return res.data; // contains token and user
  } catch (error) {
    throw error.response?.data || { message: 'Registration failed' };
  }
};

// ✅ Login existing user
export const loginUser = async (userData) => {
  try {
    const res = await API.post('/auth/login', userData);
    return res.data; // contains token and user
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
};

// ✅ Logout (optional: only if backend has it implemented)
export const logoutUser = async () => {
  try {
    const res = await API.post('/auth/logout');
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: 'Logout failed' };
  }
};

// ✅ Get current authenticated user (if backend supports /auth/me)
export const getCurrentUser = async () => {
  try {
    const res = await API.get('/auth/me');
    return res.data;
  } catch (error) {
    return null; // fallback if not authenticated or server error
  }
};
