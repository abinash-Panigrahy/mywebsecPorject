// frontend/src/api/auth.js

import axios from 'axios';

// ✅ Axios instance with backend base URL
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: false, // Set to true if you use cookies for auth
});

// ✅ Register new user
export const registerUser = async (userData) => {
  try {
    const response = await API.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message:'Registration failed' };
  }
};

// ✅ Login existing user
export const loginUser = async (userData) => {
  try {
    const response = await API.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
};

// ✅ Logout (optional — only if backend has it)
export const logoutUser = async () => {
  try {
    const response = await API.post('/auth/logout');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Logout failed' };
  }
};

// ✅ Get authenticated user (optional — useful for token validation)
export const getCurrentUser = async () => {
  try {
    const response = await API.get('/auth/me');
    return response.data;
  } catch (error) {
    return null;
  }
};
