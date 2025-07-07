import axios from 'axios';

// Base URL of your backend API (adjust as needed)
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Change this to match your backend port
  withCredentials: true // If using cookies (optional for JWT via header)
});

// Register User
export const registerUser = async (userData) => {
  try {
    const res = await API.post('/auth/register', userData);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: 'Registration failed' };
  }
};

// Login User
export const loginUser = async (userData) => {
  try {
    const res = await API.post('/auth/login', userData);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
};

// Logout User (if implemented in backend)
export const logoutUser = async () => {
  try {
    const res = await API.post('/auth/logout');
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: 'Logout failed' };
  }
};

// Get Authenticated User (optional for persisting user)
export const getCurrentUser = async () => {
  try {
    const res = await API.get('/auth/me');
    return res.data;
  } catch (error) {
    return null; // Token invalid or user not logged in
  }
};
